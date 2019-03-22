import React from 'react';
import Layout from '../layout/layout';
import ImageCard from '../../components/imageCard/imageCard';
import EntryCard from './entryCard/entryCard';
import { Grid } from '@material-ui/core';
import { portfolioContent } from '../../pageContents/portfolio/portfolioContent';

import './portfolio.scss';

export default class Portfolio extends React.Component {
    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <div className="portfolio">
                    <ImageCard 
                        title={portfolioContent.banner.title}
                        subtitle={portfolioContent.banner.subtitle}
                        image={portfolioContent.banner.image}
                    />
                    <div className="portfolio-title">
                        My Projects
                    </div>
                    <div className="portfolio-intro">
                        {portfolioContent.intro}
                    </div>
                    <Grid container alignItems="center" justify="flex-start">
                        {
                            portfolioContent.projects.map((data: any, index: number)=>{
                                return (
                                    <EntryCard
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
            </Layout>
        );
    }
}