import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID aNqrtNJ2t5hvfWydnGEik5joP7RcSudRyi6gHWQ0UXk',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
