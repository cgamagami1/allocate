
const Article = ({ title, image, url }) => {
  return (
    <a className="pt-4 md:pt-8 pb-4 md:pb-8 flex border-b border-gray-300 hover:cursor-pointer hover:bg-gray-200 transition-colors duration-200" href={`https://seekingalpha.com${url}`} target="_blank">
      <img className="w-20 h-16 md:w-64 md:h-44" src={`${image}?io=w290`} alt="article thumbnail" />
      <h2 className=" md:text-3xl ml-8">{title}</h2>
    </a>
  );
}

export default Article;