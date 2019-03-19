import React from 'react';
import Layout from '../layout/layout';
import ImageCard from '../../components/imageCard/imageCard';
import { assetsMap } from '../../assets/assetsMap';
import { Grid } from '@material-ui/core';
import { resumeContent } from '../../pageContents/resume/resumeContent';

import './resume.scss';

export default class Resume extends React.Component {
    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <div className="resume">
                    <ImageCard 
                        title="My resume"
                        subtitle="Reume here!"
                        image={assetsMap.pages.portfolio}
                    />
                    <div className="resume-container container-even">
                        <div className="resume-title">
                            Skills
                        </div>
                        <div className="resume-content">
                            <Grid container alignItems="flex-start" justify="flex-start">
                                <Grid xs={12} sm={6} item>
                                    <div className="skills-title">
                                        Programming
                                    </div>
                                    <div className="skills-info">
                                        <ul>
                                            {
                                                resumeContent.skills.programming.map((data: any, index: number)=>{
                                                    return (
                                                        <li key={index}>{data}</li>
                                                    );
                                                })
                                            }
                                        </ul>
                                    </div>
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <div className="skills-title">
                                        Game Development
                                    </div>
                                    <div className="skills-info">
                                        <ul>
                                            {
                                                resumeContent.skills.gameDev.map((data: any, index: number)=>{
                                                    return (
                                                        <li key={index}>{data}</li>
                                                    );
                                                })
                                            }
                                        </ul>
                                    </div>
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <div className="skills-title">
                                        Others
                                    </div>
                                    <div className="skills-info">
                                        <ul>
                                            {
                                                resumeContent.skills.others.map((data: any, index: number)=>{
                                                    return (
                                                        <li key={index}>{data}</li>
                                                    );
                                                })
                                            }
                                        </ul>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <div className="resume-container container-odd">
                        <div className="resume-title">
                            Work Experiences
                        </div>
                        <div className="resume-content">
                            {
                                resumeContent.work.map((data: any, index: number)=>{
                                    return (
                                        <Grid container alignItems="flex-start" justify="flex-start" key={index} className="experience-container">
                                            <Grid xs={12} sm={6} item>
                                                <div className="experience-company">
                                                    {data.company}
                                                </div>
                                                <div className="experience-position">
                                                    <i>{data.position}</i>
                                                </div>
                                                <div className="experience-year">
                                                    <i>{data.duration}</i>
                                                </div>
                                            </Grid>
                                            <Grid xs={12} sm={6} item>
                                                <div>
                                                    <ul>
                                                        {
                                                            data.details.map((listData: any, listIndex: number)=>{
                                                                return (
                                                                    <li key={listIndex}>{listData}</li>
                                                                );
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    );
                                })   
                            }
                        </div>
                    </div>
                    <div className="resume-container container-even">
                        <div className="resume-title">
                            Education
                        </div>
                        <div className="resume-content">
                            {
                                resumeContent.education.map((data: any, index: number)=>{
                                    return (
                                        <Grid container alignItems="flex-start" justify="flex-start" key={index} className="education-container">
                                            <Grid xs={12} sm={6} item>
                                                <div className="education-school">
                                                    {data.school}
                                                </div>
                                                <div className="education-cert">
                                                    <i>{data.cert}</i>
                                                </div>
                                                <div className="education-year">
                                                    <i>{data.duration}</i>
                                                </div>
                                            </Grid>
                                            <Grid xs={12} sm={6} item>
                                                <div>
                                                    <ul>
                                                        {
                                                            data.details.map((listData: any, listIndex: number)=>{
                                                                return (
                                                                    <li key={listIndex}>{listData}</li>
                                                                );
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    );
                                })   
                            }
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}