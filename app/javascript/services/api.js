export const apiGetArticles = async () => {
  const response = await fetch('/api/v1/articles/index');

  return response.json();
};

export default {
  apiGetArticles,
};
