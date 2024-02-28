import axios from "axios";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export const fetchArticles = async (query, page) => {
  const response = await axios.get(`/search`, {
    params: {
      query,
      hitsPerPage: 10,
      page,
    },
  });

  return response.data.hits;
};
