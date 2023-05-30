import './ImageSlider.scss'
import PropTypes from 'prop-types'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'
import { useState } from 'react'
 
const ImageSlider = props => {

const [activeThumb, setActiveThumb] = useState()

  return <>
    <Swiper
      onClick={setActiveThumb}
      loop= {true}
      spaceBetween={10}
      slidesPerView={4}
      modules={[Navigation, Thumbs]}
      className='ImageSlider-thumbs'
    >
      {
        props.images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='ImageSlider-thumbs-wrapper'>
              <img src={item} alt="Random images" />
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
    <Swiper
      loop= {true}
      spaceBetween={10}
      navigation={true}
      modules={[Navigation, Thumbs]}
      grabCursor={true}
      thumbs={{swiper : activeThumb}}
      className='ImageSlider'
    >
      {
        props.images.map((item, index) => (
          <SwiperSlide key={index}>
              <img src={item} alt="Random images" />
          </SwiperSlide>
        ))
      }
    </Swiper>
    
  </>
}

ImageSlider.propTypes = {
  images: PropTypes.array.isRequired
}

export default ImageSlider