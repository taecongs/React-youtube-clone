/*====================================================================================================================================
  ★★★ class ★★★
  -class 는 내부에서 생성자를 통해 객체가 만들어지고 해당 메서드나 프로퍼티에 객체를 통해 접근해서 사용하는 방식으로 사용된다.
  -클래스내에 정의한 메서드는 해당 클래스의 프로토타입으로 저장된다.

====================================================================================================================================*/

// Yotube{} 객체 
class Youtube {
  // constructor(){}를 통해 객체의 초기 값을 설정해준다.
  constructor(httpClient) {
    console.log(httpClient);
    this.youtube = httpClient;
  }

  // 비동기 처리를 위해 함수 앞에 async를 정의해줬다.
  async mostPopular() {
    // await ~~~~을 넣어주면 끝날때까지 기다렸다가 다음 작업을 수행 한다.
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
