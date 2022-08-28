// Write your code here

import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <div className="slider-container" testid="planets">
      <h1 className="main-heading">PLANETS</h1>
      <Slider>
        {planetsList.map(eachItem => (
          <PlanetItem key={eachItem.id} planetItemData={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider

/**
 *   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
 <div className="buttons-container">
          <button className="arrow1" type="button">
            <AiOutlineArrowLeft />
          </button>
          <div>
       </div>

          <button className="arrow1" type="button">
            <AiOutlineArrowRight />
          </button>
        


 */
