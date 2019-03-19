import React from 'react';
import ProjectTemplate from '../projectTemplate';
import { purgastoryContent } from '../../../pageContents/projects/purgastory/purgastoryContent';

import '../projectTemplate.scss';

export default class Purgastory extends React.Component {
    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <ProjectTemplate>
                <div className="project">
                    <div className="title">
                        {purgastoryContent.title}
                    </div>
                    <div className="link">
                        Link: <a href={purgastoryContent.link}>{purgastoryContent.link}</a>
                    </div>
                    {
                        purgastoryContent.content.map((data: any, index: number)=>{
                            switch (data.type) {
                                case "paragraph": {
                                    return (
                                        <div key={index} className="paragraph">
                                            {data.data}
                                        </div>
                                    );
                                }

                                case "image": {
                                    return (
                                        <div key={index}>
                                            <img src={data.src} className="image"></img>
                                            <div className="image-caption">
                                                <i>{data.caption}</i>
                                            </div>
                                        </div>
                                    );
                                }
                            }
                        })
                    }
                </div>
            </ProjectTemplate>
        );
    }
}