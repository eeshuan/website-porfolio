import React from 'react';
import Layout from '../layout/layout';
import { Button, Icon } from '@material-ui/core';

import './projectTemplate.scss';
import { Link } from 'react-router-dom';

export default class ProjectTemplate extends React.Component {
    constructor(public props) {
        super(props);
    }

    onBackToTopClicked() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <Layout>
                <div className="back-to-portfolio-container">
                    <Link className="back-to-portfolio-button" to="/portfolio"><Icon className="fas fa-arrow-left"></Icon>Back to Portfolio</Link>
                </div>
                <div className="project-content">
                    {this.props.children}
                </div>
                <div className="back-to-top-container">
                    <Button onClick={this.onBackToTopClicked.bind(this)} className="back-to-top-button">
                        <div className="back-to-top-text">
                            Back to top
                        </div>
                    </Button>
                </div>
            </Layout>
        );
    }
}