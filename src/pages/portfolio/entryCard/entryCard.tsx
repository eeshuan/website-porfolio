import React from 'react';
import { Grid, Button, Fade } from '@material-ui/core';

import './entryCard.scss';
import { Link } from 'react-router-dom';

export default class EntryCard extends React.Component {
    private defaultTitle: string = "Title Here";
    private defaultPath: string = "/";
    private defaultImage: string = "";

    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <Grid item xs={12} sm={6}>
                <div className="entry-card">
                    <img src={this.props.image || this.defaultImage} className="entry-image"></img>
                    <div className="entry-content">
                        <div className="entry-title">
                            <div className="entry-title-text">
                                {this.props.title || this.defaultTitle}
                            </div>
                            <Link className="entry-button" to={this.props.path || this.defaultPath}>View</Link>
                        </div>
                    </div>
                </div>
            </Grid>
        );
    }
}