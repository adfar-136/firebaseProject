import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

export default function Newsapp() {
  const [news, setNews] = useState([]);
  const [searchNews, setSearchNews] = useState("");
  const getNews = async () => {
    let data = await fetch(
      `https://newsapi.org/v2/everything?q=${searchNews}&from=2023-08-11&sortBy=publishedAt&apiKey=28a2c6b3aa1945c2afd8012e42fdac9e&pageSize=10`
    );
    const jsonData = await data.json();
    console.log(jsonData);
    setNews(jsonData.articles);
  };
  useEffect(() => {
    getNews();
  }, [searchNews]);
  const handleSearch = (e) => {
    e.preventDefault();
    getNews();
  };
  return (
    <>
      <div className="top-section">
        <h1>Type to search News Artcles</h1>
        <form onSubmit={handleSearch}>
          <input
            type="search"
            value={searchNews}
            onChange={(e) => {
              setSearchNews(e.target.value);
            }}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
      <div>
        {news && (
          <div>
            {news.map((item, index) => (
              <div>
                <Newsitem
                  title={item.title}
                  description={item.description}
                  urlToImage={item.urlToImage}
                  url={item.url}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
