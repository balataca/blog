export const apiGetArticles = async () => {
  const response = await fetch('/api/v1/articles/index');

  return response.json();
};

export const apiGetArticle = async (id) => {
  const response = await fetch(`/api/v1/articles/${id}`);

  return response.json();
};
