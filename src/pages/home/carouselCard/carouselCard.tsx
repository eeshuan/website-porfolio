import React from 'react';

import './carouselCard.scss';

export default class CarouselCard extends React.Component {
    private defaultTitle: string = "Title Here";
    private defaultSubtitle: string = "Subtitle Here";
    private defaultImage: string = "";

    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <div className="carousel-card">
                <img src={this.props.image || this.defaultImage} className="carousel-image"></img>
                <div className="carousel-content">
                    <div className="carousel-title">
                        <div className="carousel-title-text">
                            {this.props.title || this.defaultTitle}
                        </div>
                    </div>
                    <div className="carousel-subtitle">
                        <div className="carousel-subtitle-text">
                            {this.props.subtitle || this.defaultSubtitle}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}