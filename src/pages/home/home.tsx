import React from 'react';
import Layout from '../layout/layout';
import Slider from 'react-slick';
import ImageCard from '../../components/imageCard/imageCard';
import { homeContent } from '../../pageContents/home/homeContent';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import ProjectCard from './projectCard/projectCard';

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
                                            link={data.link || "/"}
                                        />
                                    );
                                })
                            }
                        </Slider>
                    </div>
                    <div className="content">
                        <div className="home-container container-even">
                            <div className="home-intro">
                                {homeContent.intro}
                            </div>
                            <div className="home-subintro">
                                <i>{homeContent.subintro}</i>
                            </div>
                        </div>
                        <div className="home-container container-odd">
                            <div className="home-title">
                                {homeContent.about.title}
                            </div>
                            {
                                homeContent.about.content.map((data: any, index: number)=>{
                                    return (
                                        <div key={index} className="home-about-info">
                                            {data}
                                        </div>
                                    );
                                })
                            }
                            <div className="home-about-link">
                                <Link className="link-button" to={homeContent.about.link.path}>{homeContent.about.link.text}</Link>
                            </div>
                        </div>
                        <div className="home-container container-even">
                            <div className="home-title">
                                {homeContent.portfolio.title}
                            </div>
                            <div className="home-portfolio-info">
                                <Grid container alignItems="center" justify="flex-start">
                                    {
                                        homeContent.portfolio.projects.map((data: any, index: number)=>{
                                            return (
                                                <ProjectCard 
                                                    key={index}
                                                    path={data.path}
                                                    title={data.title}
                                                    image={data.image}
                                                />
                                            );
                                        })   
                                    }
                                </Grid>
                            </div>
                            <div className="home-portfolio-link">
                                <Link className="link-button" to={homeContent.portfolio.link.path}>{homeContent.portfolio.link.text}</Link>
                            </div>
                        </div>
                        <div className="home-container container-odd">
                            <div className="home-title">
                                {homeContent.resume.title}
                            </div>
                            {
                                homeContent.resume.content.map((data: any, index: number)=>{
                                    return (
                                        <div key={index} className="home-resume-info">
                                            {data}
                                        </div>
                                    );
                                })
                            }
                            <div className="home-resume-link">
                                <Link className="link-button" to={homeContent.resume.link.path}>{homeContent.resume.link.text}</Link>
                            </div>
                        </div>
                        <div className="home-container container-even">
                            <div className="home-title">
                                {homeContent.contact.title}
                            </div>
                            {
                                homeContent.contact.content.map((data: any, index: number)=>{
                                    return (
                                        <div key={index} className="home-contact-info">
                                            {data}
                                        </div>
                                    );
                                })
                            }
                            <div className="home-contact-link">
                                <Link className="link-button" to={homeContent.contact.link.path}>{homeContent.contact.link.text}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}