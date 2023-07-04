const NewsLinks = ({ article, index }) => {

  const limitedTitle = article.title.length > 65
    ? `${article.title.slice(0, 65)}...`
    : article.title

  return (
    <div>
      <a href={article.url}>
        <img src={article.urlToImage}/>  
        <li key={index}>
          <p>
            {limitedTitle}
          </p>
        </li>
      </a>
    </div>
  )
}

export default NewsLinks