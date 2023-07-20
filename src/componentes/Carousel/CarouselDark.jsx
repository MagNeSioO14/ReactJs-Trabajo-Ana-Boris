import Carousel from 'react-bootstrap/Carousel'
import './CarouselDark.scss';

export const CarouselDark = () => {

    return (
        <Carousel data-bs-theme="dark" className='carouselEstilos'>
            <Carousel.Item>
                <img src="../../carousel/1.png" alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="../../carousel/23.png" alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="../../carousel/remeras 2.jpg" alt="" />
            </Carousel.Item>

        </Carousel>
    )
}