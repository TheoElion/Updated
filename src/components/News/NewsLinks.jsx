const NewsLinks = ({ results, index }) => {

  const limitedTitle = results.title.length > 65
    ? `${results.title.slice(0, 65)}...`
    : results.title

  return (
    <div>
      <a href={results.url}>
        <img src={results.multimedia[0].url} alt="noticias"/>  
        <ul>
          <li key={index}>
            <p>
              {limitedTitle}
            </p>
          </li>
        </ul>
      </a>
    </div>
  )
}

export default NewsLinks