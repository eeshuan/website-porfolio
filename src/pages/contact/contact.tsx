import React from 'react';
import Layout from '../layout/layout';
import ImageCard from '../../components/imageCard/imageCard';
import { assetsMap } from '../../assets/assetsMap';

import './contact.scss';
import { Icon } from '@material-ui/core';

export default class Contact extends React.Component {
    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <div className="contact">
                    <ImageCard 
                        title="Contact"
                        subtitle="Lets work together!"
                        image={assetsMap.pages.contact.image}
                    />
                    <div className="contact-content">
                        <div className="contact-intro">
                            I am always looking for more opportunities to learn more and go further
                        </div>
                        <div className="contact-details">
                            <div>
                                You can contact me at:
                            </div>
                            <div className="contact-entry">
                                <Icon className="fas fa-phone"></Icon>
                                <div style={{marginLeft: "20px"}}>
                                    (+65) 9677 1627
                                </div>
                            </div>
                            <div className="contact-entry">
                                <Icon className="fas fa-envelope"></Icon>
                                <div style={{marginLeft: "20px"}}>
                                    <a href="mailto:ngeeshuan@hotmail.com">ngeeshuan@hotmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}