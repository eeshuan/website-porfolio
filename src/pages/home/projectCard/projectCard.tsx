import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './projectCard.scss';


export default class ProjectCard extends React.Component {
    private defaultTitle: string = "Title Here";
    private defaultPath: string = "/";
    private defaultImage: string = "";

    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <Grid item xs={12} sm={4}>
                <div className="home-project-card">
                    <img src={this.props.image || this.defaultImage} className="home-project-image"></img>
                    <div className="home-project-content">
                        <div className="home-project-title">
                            <div className="home-project-title-text">
                                {this.props.title || this.defaultTitle}
                            </div>
                            <Link className="home-project-button" to={this.props.path || this.defaultPath}>View</Link>
                        </div>
                    </div>
                </div>
            </Grid>
        );
    }
}