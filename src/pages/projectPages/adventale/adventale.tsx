import React from 'react';
import ProjectTemplate from '../projectTemplate';

import './adventale.scss';

export default class Adventale extends React.Component {
    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <ProjectTemplate>
                <div className="adventale">
                    <div className="title">
                        Adventale
                    </div>
                </div>
            </ProjectTemplate>
        );
    }
}