import React from 'react';
import Header from './header/header';
import Body from './body/body';
import Footer from './footer/footer';

import './layout.scss';

export default class Layout extends React.Component {
    constructor(public props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="layout">
                <Header />
                <Body>
                    {this.props.children}
                </Body>
                <Footer />
            </div>
        );
    }
}