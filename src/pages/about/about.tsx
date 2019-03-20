import React from 'react';
import Layout from '../layout/layout';
import ImageCard from '../../components/imageCard/imageCard';
import { aboutContent } from '../../pageContents/about/aboutContent';

import './about.scss';
import { Link } from 'react-router-dom';
import { assetsMap } from '../../assets/assetsMap';
import { Grid } from '@material-ui/core';


export default class About extends React.Component {
    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <div className="about">
                    <ImageCard 
                        title={aboutContent.banner.title}
                        subtitle={aboutContent.banner.subtitle}
                        image={aboutContent.banner.image}
                    />
                    <div className="content">
                        <div className="about-container container-even">
                            <div className="about-title favourites-title">
                                {aboutContent.content.about.title}
                            </div>
                            {
                                aboutContent.content.about.info.map((data: any, index: number)=>{
                                    return (
                                        <div key={index} className="favourites-info">
                                            {data}
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className="about-container container-odd">
                            <div className="about-title">
                                {aboutContent.content.who.title}
                            </div>
                            {
                                aboutContent.content.who.info.map((data: any, index: number)=>{
                                    return (
                                        <div key={index} className="who-info">
                                            {data}
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className="about-container container-even">
                            <div className="about-title">
                                {aboutContent.content.projects.title}
                            </div>
                            {
                                aboutContent.content.projects.info.map((data: any, index: number)=>{
                                    return (
                                        <div key={index} className="projects-info">
                                            {data}
                                        </div>
                                    );
                                })
                            }
                            <div className="projects-pictures">
                                <Grid container alignItems="flex-start" justify="flex-start">
                                {
                                    aboutContent.content.projects.pictures.map((data: any, index: number)=>{
                                        return (
                                            <Grid xs={12} sm={4} item>
                                                <img src={data} className="pictures"></img>
                                            </Grid>
                                        );
                                    })
                                }
                                </Grid>
                            </div>
                            {
                                aboutContent.content.projects.info2.map((data: any, index: number)=>{
                                    return (
                                        <div key={index} className="projects-info">
                                            {data}
                                        </div>
                                    );
                                })
                            }
                            <div className="projects-link">
                                <Link className="link-button" to="/portfolio">View Portfolio</Link>
                            </div>
                        </div>
                        <div className="about-container container-odd">
                            <div className="about-title">
                                {aboutContent.content.resume.title}
                            </div>
                            {
                                aboutContent.content.resume.info.map((data: any, index: number)=>{
                                    return (
                                        <div key={index} className="resume-info">
                                            {data}
                                        </div>
                                    );
                                })
                            }
                            <div className="resume-link">
                                <Link className="link-button" to="/resume">View Resume</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}