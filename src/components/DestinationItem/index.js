// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationItems} = props
  const {name, imgUrl} = destinationItems

  return (
    <li className="card-container">
      <img src={imgUrl} className="card-img" alt={name} />
      <p className="place-name"> {name} </p>
    </li>
  )
}

export default DestinationItem
