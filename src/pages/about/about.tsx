import React from 'react';
import Layout from '../layout/layout';
import ImageCard from '../../components/imageCard/imageCard';
import { assetsMap } from '../../assets/assetsMap';

import './about.scss';
import { aboutContent } from '../../pageContents/about/aboutContent';
import { List, ListItem, ListItemText } from '@material-ui/core';

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
                    <div className="intro-message">
                        {aboutContent.introMessage}
                    </div>
                    <div className="content">
                        <List>
                            <ListItem>
                                <ListItemText primary="Inbox" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Drafts" />
                            </ListItem>
                        </List>
                        <div>
                            Who am i
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}