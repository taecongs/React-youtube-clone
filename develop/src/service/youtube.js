class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
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
            part: 'snippet',
            maxResults: '36',
            id: videos.items[i].channelId,
          },
        })
        .then(
          (result) => result.data.items[0].snippet.thumbnails.default.url
        )
        .then((url) => (videos.items[i].channelThumbnails = url));
      promises.push(response);
    }
    return promises;
  }
}

export default Youtube;
