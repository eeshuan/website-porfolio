import React from 'react';
import Layout from '../layout/layout';

export default class ProjectTemplate extends React.Component {
    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <div style={{paddingTop: "100px"}}>
                    {this.props.children}
                </div>
            </Layout>
        );
    }
}