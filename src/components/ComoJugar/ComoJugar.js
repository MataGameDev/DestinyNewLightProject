import React from 'react';
import Carousel from 'better-react-carousel';

function ComoJugar(props) {
    return (
        <div>
            <h1>Como Jugar</h1>
            <Carousel cols={2} rows={1} gap={10} loop>
                <Carousel.Item>
                    <img width="100%" src="https://picsum.photos/800/600?random=1" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="https://picsum.photos/800/600?random=2" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="https://picsum.photos/800/600?random=3"  alt=""/>
                </Carousel.Item>
                <Carousel.Item>
                {/* anything you want to show in the grid */}
            </Carousel.Item>
            {/* ... */}
            </Carousel>
            <Carousel cols={2} rows={1} gap={10} loop>
                <Carousel.Item>
                    <img width="100%" src="https://picsum.photos/800/600?random=1" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="https://picsum.photos/800/600?random=2" alt=""/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="https://picsum.photos/800/600?random=3"alt="" />
                </Carousel.Item>
                <Carousel.Item>
                {/* anything you want to show in the grid */}
            </Carousel.Item>
            {/* ... */}
            </Carousel>
        </div>
    );
}

export default ComoJugar;

