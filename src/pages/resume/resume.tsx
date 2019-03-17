import React from 'react';
import Layout from '../layout/layout';
import ImageCard from '../../components/imageCard/imageCard';
import { assetsMap } from '../../assets/assetsMap';

import './resume.scss';

export default class Resume extends React.Component {
    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <div className="resume">
                    <ImageCard 
                        title="My resume"
                        subtitle="Reume here!"
                        image={assetsMap.pages.portfolio}
                    />
                    <div>
                        I am a programmer
                    </div>
                </div>
            </Layout>
        );
    }
}