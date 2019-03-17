import React from 'react';
import ProjectTemplate from '../projectTemplate';

import './angryPig.scss';

export default class AngryPig extends React.Component {
    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <ProjectTemplate>
                <div className="angryPig">
                    <div className="title">
                        Angry Angry Pig
                    </div>
                </div>
            </ProjectTemplate>
        );
    }
}