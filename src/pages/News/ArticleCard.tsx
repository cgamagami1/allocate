import { FC } from "react";
import { DateTime } from "luxon";

export type Article = {
  id: number;
  attributes: {
    publishOn: string;
    gettyImageUrl: string;
    title: string;
  }
  links: {
    self: string;
  }
}

type ArticleCardProps = {
  article: Article;
}

const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
  return (
    <a className="pt-4 md:pt-8 pb-4 md:pb-8 flex border-b border-gray-300 hover:cursor-pointer hover:bg-gray-200 transition-colors duration-200" href={`https://seekingalpha.com${article.links.self}`} target="_blank">
      <img className="w-20 h-16 md:w-64 md:h-44" src={`${article.attributes.gettyImageUrl}?io=w290`} alt="article thumbnail" />
      <div className="ml-8 flex flex-col justify-between">
        <h2 className="md:text-3xl">{article.attributes.title}</h2>
        <span className="text-gray-600">{DateTime.fromISO(article.attributes.publishOn).toLocaleString({ year: "numeric", month: "short", day: "numeric" })}</span>
      </div>
    </a>
  );
}

export default ArticleCard;