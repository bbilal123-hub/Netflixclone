const API_KEY = '4070d67a427af1839e91c6c5cef412f4';



const requests = {
   fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchPopular: `/discover/movie?sort_by=popularity.desc&page=1&api_key=${API_KEY}`,
  fetchAction: `/discover/movie?with_genres=28&api_key=${API_KEY}`,
  fetchComedy: `/discover/movie?with_genres=35&api_key=${API_KEY}`,
  fetchHorror: `/discover/movie?with_genres=27&api_key=${API_KEY}`,
  fetchRomance: `/discover/movie?with_genres=10749&api_key=${API_KEY}`,
  fetchTrailers: `/movie/popular?api_key=${API_KEY}&append_to_response=videos`,
  fetchLive: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
