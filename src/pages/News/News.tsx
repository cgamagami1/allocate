import { useEffect, useState, FC } from "react";
import HeaderBar from "../../components/HeaderBar";
import LoadingScreen from "../../components/LoadingScreen";
import Page from "../../components/Page";
import ArticleCard, { Article } from "./ArticleCard";

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "",
		"X-RapidAPI-Host": "seeking-alpha.p.rapidapi.com"
	}
};

const News: FC = () => {
  const [trendingArticles, setTrendingArticles] = useState<Article[] | null>(null);

  useEffect(() => {
    const getTrendingArticles = async () => {
      const response = await fetch("https://seeking-alpha.p.rapidapi.com/articles/v2/list-trending?size=20", options);
      const articleResponse = await response.json();

      setTrendingArticles(articleResponse.data as Article[]);
    }

    if (trendingArticles === null) getTrendingArticles();
  }, []);

  if (!trendingArticles) {
    return <LoadingScreen />
  }

  return (
    <Page isGrid={false}>
      <HeaderBar title="Trending Articles" />
      <div className="overflow-y-scroll px-8">
        {trendingArticles && trendingArticles.map(article => (
          <ArticleCard key={article.id} article={article}  />
        ))}
      </div>
    </Page>
  );
}

export default News;

