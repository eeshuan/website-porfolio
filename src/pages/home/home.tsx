import React from 'react';
import Layout from '../layout/layout';
import Slider from 'react-slick';
import { assetsMap } from '../../assets/assetsMap';
import ImageCard from '../../components/imageCard/imageCard';
import { homeContent } from '../../pageContents/home/homeContent';

import './home.scss';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import ProjectCard from './projectCard/projectCard';

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
                    <div className="content">
                        <div className="home-container container-even">
                            <div className="home-intro">
                                I am Shuan!
                            </div>
                            <div className="home-subintro">
                                <i>I am an aspiring web and games developer!</i>
                            </div>
                        </div>
                        <div className="home-container container-odd">
                            <div className="home-title">
                                About me
                            </div>
                            <div className="home-about-info">
                                I am a game-loving software developer with a passion in web development and games.
                            </div>
                            <div className="home-about-info">
                                Get to know me more!
                            </div>
                            <div className="home-about-link">
                                <Link className="link-button" to="/about">Learn more</Link>
                            </div>
                        </div>
                        <div className="home-container container-even">
                            <div className="home-title">
                                My personal works
                            </div>
                            <div className="home-portfolio-info">
                                <Grid container alignItems="center" justify="flex-start">
                                    <ProjectCard 
                                        path="/adventale"
                                        title="Adventale"
                                        image={assetsMap.adventale.background}
                                    />
                                    <ProjectCard 
                                        path="/purgastory"
                                        title="Purgastory"
                                        image={assetsMap.purgastory.background}
                                    />
                                    <ProjectCard 
                                        path="/angrypig"
                                        title="Angry Pig"
                                        image={assetsMap.angryPig.background}
                                    />
                                </Grid>
                            </div>
                            <div className="home-portfolio-link">
                                <Link className="link-button" to="/portfolio">More projects</Link>
                            </div>
                        </div>
                        <div className="home-container container-odd">
                            <div className="home-title">
                                What I can do
                            </div>
                            <div className="home-resume-info">
                                Take a look deeper to know what I can do
                            </div>
                            <div className="home-resume-link">
                                <Link className="link-button" to="/resume">Resume</Link>
                            </div>
                        </div>
                        <div className="home-container container-even">
                            <div className="home-title">
                                Contact me today!
                            </div>
                            <div className="home-contact-info">
                                I am always interested to learn more.
                            </div>
                            <div className="home-contact-link">
                                <Link className="link-button" to="/contact">Contact me</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Layout>
        );
    }
}