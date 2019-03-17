import React from 'react';
import Layout from '../layout/layout';
import { assetsMap } from '../../assets/assetsMap';
import ImageCard from '../../components/imageCard/imageCard';
import EntryCard from './entryCard/entryCard';
import { Grid } from '@material-ui/core';

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
                        title="Portfolio"
                        subtitle="My awesome works"
                        image={assetsMap.pages.portfolio}
                    />
                    <div className="portfolio-title">
                        Works
                    </div>
                    <Grid container alignItems="center" justify="flex-start">
                        <EntryCard 
                            path="/adventale"
                            title="Adventale"
                            image={assetsMap.adventale.background}
                        />
                        <EntryCard 
                            path="/purgastory"
                            title="Purgastory"
                            image={assetsMap.purgastory.background}
                        />
                        <EntryCard 
                            path="/angrypig"
                            title="Angry Pig"
                            image={assetsMap.angryPig.background}
                        />
                    </Grid>
                </div>
            </Layout>
        );
    }
}