import Carousel from 'react-bootstrap/Carousel'

export const CarouselDark = () => {

    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img src="../../public/carousel/1.png" alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="../../public/carousel/23.png" alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="../../public/carousel/remeras 2.jpg" alt="" />
            </Carousel.Item>

        </Carousel>
    )
}