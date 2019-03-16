import React from 'react';
import Layout from '../layout/layout';
import Slider from 'react-slick';
import { assetsMap } from '../../assets/assetsMap';
import CarouselCard from './carouselCard/carouselCard';

import './home.scss';

export default class Home extends React.Component {
    private sliderSettings: {[key: string]: any};

    constructor(public props) {
        super(props);

        this.sliderSettings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 10000,
            infinite: true,
            arrows: false
        }
    }

    render() {
        return (
            <Layout>
                <div className="home">
                    <div className="carousel">
                        <Slider {...this.sliderSettings}>
                            <CarouselCard
                                title="Adventale"
                                subtitle="An idle web game project"
                                image={assetsMap.carousel.adventale}
                            />
                            <CarouselCard
                                title="Purgastory"
                                subtitle="A project in UE4"
                                image={assetsMap.carousel.purgastory}
                            />
                            <CarouselCard
                                title="Game Off 2018"
                                subtitle="#gameoff2018 by Github"
                                image={assetsMap.carousel.angryPig}
                            />
                        </Slider>
                    </div>
                </div>
            </Layout>
        );
    }
}