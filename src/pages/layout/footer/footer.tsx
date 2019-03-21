import React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';
import { Grid } from '@material-ui/core';

export default class Footer extends React.Component {
    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <div className="footer-links">
                    <Link className="footer-link-button" to="/">Home</Link>
                    <Link className="footer-link-button" to="/about">About</Link>
                    <Link className="footer-link-button" to="/portfolio">Portfolio</Link>
                    <Link className="footer-link-button" to="/resume">Resume</Link>
                    <Link className="footer-link-button" to="/contact">Contact</Link>
                </div>
                <div className="footer-text">
                    2019 | Designed by Shuan
                </div>
            </div>
        );
    }
}