const NewsLinks = ({ results, index }) => {

  const limitedTitle = results.title.length > 65
    ? `${results.title.slice(0, 65)}...`
    : results.title

  return (
    <div>
      <a href={results.url}>
        <img src={results.multimedia[0].url}/>  
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