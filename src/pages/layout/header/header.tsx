import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Icon, SwipeableDrawer } from '@material-ui/core';

import './header.scss';

export default class Header extends React.Component {
    state = {
        sidePanelOpen: false,
        home: "drawer-link-button",
        about: "drawer-link-button",
        portfolio: "drawer-link-button",
        resume: "drawer-link-button",
        contact: "drawer-link-button"
    }
    constructor(public props) {
        super(props);
    }

    openSidePanel() {
        let pages = ["", "about", "portfolio", "resume", "contact"];
        let currentPage: string = window.location.hash.split("/")[1];
        let newState = {
            sidePanelOpen: true
        }

        for (let i=0; i<pages.length; i++) {
            if (currentPage === pages[i]) {
                newState[pages[i]] = "drawer-link-button active";
            }
            else {
                newState[pages[i]] = "drawer-link-button";
            }
        }
        this.setState(newState);
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
                    <SwipeableDrawer
                        anchor="top"
                        open={this.state.sidePanelOpen}
                        onOpen={this.openSidePanel.bind(this)}
                        onClose={this.closeSidePanel.bind(this)}
                        classes={{paperAnchorTop: "drawer-container"}}
                    >
                        <div
                            tabIndex={0}
                            role="button"
                            className={this.state[""]}
                        >
                            <Link className="drawer-link-text" to="/">Home</Link>
                        </div>
                        <div
                            tabIndex={1}
                            role="button"
                            className={this.state.about}
                        >
                            <Link className="drawer-link-text" to="/about">About</Link>
                        </div>
                        <div
                            tabIndex={2}
                            role="button"
                            className={this.state.portfolio}
                        >
                            <Link className="drawer-link-text" to="/portfolio">Portfolio</Link>
                        </div>
                        <div
                            tabIndex={3}
                            role="button"
                            className={this.state.resume}
                        >
                            <Link className="drawer-link-text" to="/resume">Resume</Link>
                        </div>
                        <div
                            tabIndex={4}
                            role="button"
                            className={this.state.contact}
                        >
                            <Link className="drawer-link-text" to="/contact">Contact</Link>
                        </div>
                    </SwipeableDrawer>
                </div>
            </div>
        );
    }
}