import CardComment from '../CardComment'
import './styles.css'

const CommentsSection = () => {
  return (
    <>
    <div className="comments-section">
        <div className="ct-container-botton">
            <div className="comments">
            <h3>O que estão dizendo</h3>

            <CardComment></CardComment>
            <CardComment></CardComment>
            <CardComment></CardComment>
            <CardComment></CardComment>
            <CardComment></CardComment>
            <CardComment></CardComment>
            </div>
        </div>
    </div>
    </>
  )
}

export default CommentsSection