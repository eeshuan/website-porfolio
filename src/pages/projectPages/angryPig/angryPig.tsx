import React from 'react';
import ProjectTemplate from '../projectTemplate';
import { angryPigContent } from '../../../pageContents/projects/angryPig/angryPigContent';

import '../projectTemplate.scss';

export default class AngryPig extends React.Component {
    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <ProjectTemplate>
                <div className="project">
                    <div className="title">
                        {angryPigContent.title}
                    </div>
                    <div className="link">
                        Link: <a href={angryPigContent.link}>{angryPigContent.link}</a>
                    </div>
                    {
                        angryPigContent.content.map((data: any, index: number)=>{
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