import { v4 as uuid } from 'uuid';

const NEWS_API_KEY = 'YOUR_API_KEY';

const apiGetRemoteArticles = async () => {
  const response = await fetch(`https://newsapi.org/v2/everything?q=watches&from=2021-03-14&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`);
  const json = await response.json();
  const { articles } = json;

  return articles.map((article) => ({
    id: uuid(),
    title: article.title,
    subtitle: article.description,
    body: article.content,
    image_url: article.urlToImage,
    created_at: article.publishedAt,
    url: article.url,
  }));
};

const apiGetLocalArticles = async () => {
  const response = await fetch('/api/v1/articles/index');

  return response.json();
};

export const apiGetArticles = async () => {
  const localArticles = await apiGetLocalArticles();
  const remoteArticles = await apiGetRemoteArticles();

  return [
    ...localArticles,
    ...remoteArticles,
  ];
};

export const apiGetArticle = async (id) => {
  const response = await fetch(`/api/v1/articles/${id}`);

  return response.json();
};
