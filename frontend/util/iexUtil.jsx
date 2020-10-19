export const getPrice = (ticker) => {
  return $.ajax({
    method: "GET",
    url: `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=${window.iexAPIKey}`,
  });
};

export const getNews = (ticker) => {
  return $.ajax({
    method: "GET",
    url: `https://cloud.iexapis.com/stable/stock/${ticker}/news/last/3?token=${window.iexAPIKey}`,
  });
};
