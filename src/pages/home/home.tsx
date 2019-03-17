import React from 'react';
import Layout from '../layout/layout';
import Slider from 'react-slick';
import { assetsMap } from '../../assets/assetsMap';
import ImageCard from '../../components/imageCard/imageCard';
import { homeContent } from '../../pageContents/home/homeContent';

import './home.scss';

export default class Home extends React.Component {
    private sliderSettings: {[key: string]: any};

    constructor(public props) {
        super(props);

        this.sliderSettings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 10000,
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
                            {
                                homeContent.carousel.map((data: any, index: number)=>{
                                    return (
                                        <ImageCard
                                            key={index}
                                            title={data.title || "Missing Title"}
                                            subtitle={data.subtitle || "Missing Title"}
                                            image={data.image || ""}
                                        />
                                    );
                                })
                            }
                        </Slider>
                    </div>
                    <div className="home-intro">
                        I am Shuan! Nice to meet you!
                    </div>
                    <div className="home-about">
                        {homeContent.about}
                    </div>
                </div>
            </Layout>
        );
    }
}