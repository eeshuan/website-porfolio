import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Drawer, Icon } from '@material-ui/core';

import './header.scss';

export default class Header extends React.Component {
    state = {
        sidePanelOpen: false
    }
    constructor(public props) {
        super(props);
    }

    openSidePanel() {
        this.setState({sidePanelOpen: true});
    }

    closeSidePanel() {
        this.setState({sidePanelOpen: false});
    }

    render() {
        return (
            <div className="header">
                <div className="desktop-header">
                    <Link className="header-link-button" to="/">Home</Link>
                    <Link className="header-link-button" to="/about">About</Link>
                    <Link className="header-link-button" to="/portfolio">Portfolio</Link>
                    <Link className="header-link-button" to="/resume">Resume</Link>
                    <Link className="header-link-button" to="/contact">Contact</Link>
                </div>
                <div className="mobile-header">
                    <Button onClick={this.openSidePanel.bind(this)}>
                        <Icon className="fas fa-bars hamburger-icon"></Icon>
                    </Button>
                    <Drawer
                        anchor="top"
                        open={this.state.sidePanelOpen}
                        onClose={this.closeSidePanel.bind(this)}
                    >
                        <div
                            tabIndex={0}
                            role="button"
                        >
                            <Link className="header-link-button" to="/">Home</Link>
                        </div>
                        <div
                            tabIndex={1}
                            role="button"
                        >
                            <Link className="header-link-button" to="/about">About</Link>
                        </div>
                        <div
                            tabIndex={0}
                            role="button"
                        >
                            <Link className="header-link-button" to="/portfolio">Portfolio</Link>
                        </div>
                        <div
                            tabIndex={0}
                            role="button"
                        >
                            <Link className="header-link-button" to="/resume">Resume</Link>
                        </div>
                        <div
                            tabIndex={0}
                            role="button"
                        >
                            <Link className="header-link-button" to="/contact">Contact</Link>
                        </div>
                    </Drawer>
                </div>
            </div>
        );
    }
}