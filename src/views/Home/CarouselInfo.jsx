import { Carousel } from 'react-bootstrap'
import { images } from './data'

const CarouselInfo = () => {
    return (
        <Carousel fade>
            {images.map((i, k) => (
                <Carousel.Item key={k}>
                    <img
                        className='d-block w-100'
                        src={i}
                        alt={`image ${k}`}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default CarouselInfo
