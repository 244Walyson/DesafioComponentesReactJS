import './styles.css'
import carImg from '../../assets/car-card 1.png'

const Card = () => {
  return (
    <>
    <div className="card-catalog">
        <img src={carImg} alt="" />
        <h3>Lorem ipsum dolor</h3>
    </div>
    </>
  )
}

export default Card