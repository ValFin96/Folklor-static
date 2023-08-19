import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]
const Gallery = () => {
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  function handleClick() {
    window.open("https://www.instagram.com/limanikkei_sydney/")
  }

  return (
    <div className='app__gallery flex__center'>
      <div className="app__gallery-content">
        <SubHeading title='Instagram' />
        <h2 className='headtext__matter'>Photo Gallery</h2>
        <p className="p__heebo" style={{ color: '#AAA', marginTop: '2rem' }}>
          Check out our mouthwatering food photography and get a taste of what you can expect from our fusion-inspired dishes.
        </p>
        <button type='button' className='custom__button_desktop' onClick={handleClick}> View More </button>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
              <img src={image} alt='gallery' onClick={handleClick} draggable="false"/>
              <BsInstagram className='gallery__image-icon' onClick={handleClick} />
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>
    </div>

  )
}

export default Gallery;

