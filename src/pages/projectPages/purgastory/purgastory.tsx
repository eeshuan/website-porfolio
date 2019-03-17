import React from 'react';
import ProjectTemplate from '../projectTemplate';

import './purgastory.scss';

export default class Purgastory extends React.Component {
    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <ProjectTemplate>
                <div className="purgastory">
                    <div className="title">
                        Purgastory
                    </div>
                </div>
            </ProjectTemplate>
        );
    }
}