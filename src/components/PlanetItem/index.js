// Write your code here

import './index.css'

const PlanetItem = props => {
  const {planetItemData} = props
  const {name, imageUrl, description} = planetItemData


  return (
    <div className="each-planet-container">
      <img src={imageUrl} alt={`planet ${name}`} className="image" />

      <h1 className="name-heading">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}
export default PlanetItem
