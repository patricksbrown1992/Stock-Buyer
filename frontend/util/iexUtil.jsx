export const getQuotes = tickers => {
    return $.ajax({
        method: "GET",
        url: `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${tickers.join(",")}&types=quote&token=${window.iexAPIKey}`
    })
}

export const getNews = ticker => {
    debugger
    return $.ajax({
        method: "GET",
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/news/last/5?token=${window.iexAPIKey}`
    })
}