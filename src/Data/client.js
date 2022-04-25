import axios from 'axios';

// const DUMMY_DATA = {
//   items: [
//     {
//       crew: 'David Attenborough, Gordon Buchanan',
//       fullTitle: 'Planet Earth II (2016)',
//       id: 'tt5491994',
//       imDbRating: '9.4',
//       imDbRatingCount: '126419',
//       image:
//         'https://m.media-amazon.com/images/M/MV5BZWYxODViMGYtMGE2ZC00ZGQ3LThhMWUtYTVkNGE3OWU4NWRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX128_CR0,3,128,176_AL_.jpg',
//       rank: '1',
//       title: 'Planet Earth II',
//       year: '2016',
//     },
//     {
//       crew: 'Bryan Cranston, Aaron Paul',
//       fullTitle: 'Breaking Bad (2008)',
//       id: 'tt0903747',
//       imDbRating: '9.4',
//       imDbRatingCount: '1715208',
//       image:
//         'https://m.media-amazon.com/images/M/MV5BNGVlZDhiYmItOTYyNi00YjU3LTllYWEtZjgwOTY3NDcwOWJmXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UX128_CR0,3,128,176_AL_.jpg',
//       rank: '2',
//       title: 'Breaking Bad',
//       year: '2008',
//     },
//     {
//       crew: 'Sigourney Weaver, David Attenborough',
//       fullTitle: 'Planet Earth (2006)',
//       id: 'tt0795176',
//       imDbRating: '9.4',
//       imDbRatingCount: '193396',
//       image:
//         'https://m.media-amazon.com/images/M/MV5BNmZlYzIzMTItY2EzYS00YTEyLTg0ZjEtMDMzZjM3ODdhN2UzXkEyXkFqcGdeQXVyNjI0MDg2NzE@._V1_UX128_CR0,3,128,176_AL_.jpg',
//       rank: '3',
//       title: 'Planet Earth',
//       year: '2006',
//     },
//     {
//       crew: 'Scott Grimes, Damian Lewis',
//       fullTitle: 'Band of Brothers (2001)',
//       id: 'tt0185906',
//       imDbRating: '9.4',
//       imDbRatingCount: '436647',
//       image:
//         'https://m.media-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_UX128_CR0,3,128,176_AL_.jpg',
//       rank: '4',
//       title: 'Band of Brothers',
//       year: '2001',
//     },
//     {
//       crew: 'Jessie Buckley, Jared Harris',
//       fullTitle: 'Chernobyl (2019)',
//       id: 'tt7366338',
//       imDbRating: '9.3',
//       imDbRatingCount: '687390',
//       image:
//         'https://m.media-amazon.com/images/M/MV5BZGQ2YmMxZmEtYjI5OS00NzlkLTlkNTEtYWMyMzkyMzc2MDU5XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX128_CR0,3,128,176_AL_.jpg',
//       rank: '5',
//       title: 'Chernobyl',
//       year: '2019',
//     },
//     {
//       crew: 'Dominic West, Lance Reddick',
//       fullTitle: 'The Wire (2002)',
//       id: 'tt0306414',
//       imDbRating: '9.3',
//       imDbRatingCount: '323917',
//       image:
//         'https://m.media-amazon.com/images/M/MV5BNTllYzFhMjAtZjExNS00MjM4LWE5YmMtOGFiZGRlOTU5YzJiXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX128_CR0,3,128,176_AL_.jpg',
//       rank: '6',
//       title: 'The Wire',
//       year: '2002',
//     },
//     {
//       crew: 'David Attenborough, Peter Drost',
//       fullTitle: 'Blue Planet II (2017)',
//       id: 'tt6769208',
//       imDbRating: '9.2',
//       imDbRatingCount: '39356',
//       image:
//         'https://m.media-amazon.com/images/M/MV5BYjg2ODk0MjUtNmMzZS00MjY0LWI1YWMtN2JhMjRmZGUwY2I3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,1,128,176_AL_.jpg',
//       rank: '7',
//       title: 'Blue Planet II',
//       year: '2017',
//     },
//     {
//       crew: 'Kevin Conroy, Loren Lester',
//       fullTitle: 'Batman: The Animated Series (1992)',
//       id: 'tt0103359',
//       imDbRating: '9.0',
//       imDbRatingCount: '99309',
//       image:
//         'https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_UX128_CR0,3,128,176_AL_.jpg',
//       rank: '22',
//       title: 'Batman: The Animated Series',
//       year: '1992',
//     },
//   ],
// };

const API_KEY = 'k_3b8go6zt';

class Client {
  constructor() {
    this.client = axios.create({
      baseURL: this.baseURL,
      transformRequest: [
        (data) =>
          JSON.stringify(data, (name, val) =>
            val === (undefined || '') ? null : val,
          ),
      ],
    });
  }

  getMovieById(id) {
    const url = `https://imdb-api.com/en/API/Trailer/${API_KEY}/${id}`;
    return this.makeRequest(url, 'get')
  }

  getMovies() {
    const url = `https://imdb-api.com/en/API/Top250TVs/${API_KEY}`;
    return this.makeRequest(url, 'get', {});
    // return DUMMY_DATA;
  }

  getRequestHeaders() {
    const headers = {
      'Content-Type': 'application/json',
    };

    return headers;
  }

  async makeRequest(url, method, incomingOptions = {}) {
    const { withoutRoot, ...options } = incomingOptions;
    const params = options?.params ?? {};
    const { query, relations, ...otherParams } = params;

    const mergedParams = {
      ...otherParams,
    };

    const mergedHeaders = {
      ...this.getRequestHeaders(),
      ...options.headers,
    };
    const mergedOptions = Object.assign({}, options, {
      headers: mergedHeaders,
      params: mergedParams,
    });

    try {
      const response = await this.client({
        url: url,
        method,
        ...mergedOptions,
      });

      if (response.status === 200 || response.status === 201) {
        return response.data;
      }

      return {};
    } catch (error) {
      if (this.log) {
        console.log(url, method, mergedOptions, error); // eslint-disable-line
      }

      throw error;
    }
  }
}

export default new Client();
