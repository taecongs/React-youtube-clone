class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet, statistics',
        chart: 'mostPopular',
        regionCode: 'KR',
        maxResults: '36',
      },
    });
    return {
      page: response.data.nextPageToken,
      items: response.data.items.map((item) => ({
        id: item.id,
        channelId: item.snippet.channelId,
        thumbnailURL: item.snippet.thumbnails.medium.url,
        title: item.snippet.title,
        channelTitle: item.snippet.channelTitle,
        description: item.snippet.description,
        date: item.snippet.publishedAt,
        viewCount: item.statistics.viewCount,
        subscriberCount: item.statistics.subscriberCount,
        likeCount: item.statistics.likeCount,
        dislikeCount: item.statistics.dislikeCount,
        categoryId: item.snippet.categoryId,
        tags: item.snippet.tags
      })),
    };
  }



  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: '36',
        q: query,
        type: 'video',
      },
    });
    return {
      page: response.data.nextPageToken,
      items: response.data.items.map((item) => ({
        id: item.id.videoId,
        channelId: item.snippet.channelId,
        thumbnailURL: item.snippet.thumbnails.medium.url,
        title: item.snippet.title,
        channelTitle: item.snippet.channelTitle,
        description: item.snippet.description,
      })),
    };
  }





  channel(videos, promises) {
    for (let i = 0; i < videos.items.length; i++) {
      const response = this.youtube
        .get('channels', {
          params: {
            part: 'snippet, statistics',
            maxResults: '36',
            id: videos.items[i].channelId,
          },
        })
        .then((result) => {
          videos.items[i].subscriberCount = result.data.items[0].statistics.subscriberCount;
          videos.items[i].channelThumbnails = result.data.items[0].snippet.thumbnails.default.url;
        });
      promises.push(response);
    }
    return promises;
  }
}

export default Youtube;
