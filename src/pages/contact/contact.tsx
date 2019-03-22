import React from 'react';
import Layout from '../layout/layout';
import ImageCard from '../../components/imageCard/imageCard';
import { Icon } from '@material-ui/core';
import { contactContent } from '../../pageContents/contact/contactContent';

import './contact.scss';

export default class Contact extends React.Component {
    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <div className="contact">
                    <ImageCard 
                        title={contactContent.banner.title}
                        subtitle={contactContent.banner.subtitle}
                        image={contactContent.banner.image}
                    />
                    <div className="contact-content">
                        <div className="contact-intro">
                            {contactContent.intro}
                        </div>
                        <div className="contact-details">
                            <div>
                                You can contact me at:
                            </div>
                            <div className="contact-entry">
                                <Icon className="fas fa-phone"></Icon>
                                <div style={{marginLeft: "20px"}}>
                                    {contactContent.contacts.phone}
                                </div>
                            </div>
                            <div className="contact-entry">
                                <Icon className="fas fa-envelope"></Icon>
                                <div style={{marginLeft: "20px"}}>
                                    <a href={`mailto:${contactContent.contacts.email}`}>{contactContent.contacts.email}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}