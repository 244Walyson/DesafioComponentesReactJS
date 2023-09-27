import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './styles.css'
import Card from '../../components/Card'

const LandingPage = () => {
  return (
    <>
    <Header></Header>
    <main>
        <section className='sec-catalog'>
          <div className="cards-catalog">
            <h2>venha nos visitar</h2>
            <Card></Card>
            <Card></Card>
          </div>
        </section>
    </main>
    <Footer></Footer>
    </>
  )
}

export default LandingPage