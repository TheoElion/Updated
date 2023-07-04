import './Home.css'

// components
import Weather from '../components/Weather/Weather'
import Currency from '../components/Currency/Currency'
import News from '../components/News/News'
import Notes from '../components/Notes/Notes'
import Youtube from '../components/Youtube/Youtube'
import Movies from '../components/Movies/Movies'

const Home = () => {
  return (
    <main className='principal'>
      <section className='news'>
        <div className='media'>
          <News />
        </div>
        <div className='secao'>
          <div>
            <Movies />
          </div>
          <div>
            <Youtube />
          </div>
          <div>
            <Notes />
          </div>
        </div>
      </section>

      <aside className='weather'>
        <Weather />
      </aside>

      <aside className='currency'>
        <Currency />
      </aside>
    </main>
  )
}

export default Home