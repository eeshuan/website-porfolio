import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from '../home/home';
import About from '../about/about';
import Portfolio from '../portfolio/portfolio';
import Resume from '../resume/resume';
import Contact from '../contact/contact';
import Adventale from '../projectPages/adventale/adventale';
import Purgastory from '../projectPages/purgastory/purgastory';
import AngryPig from '../projectPages/angryPig/angryPig';

export default class Routes extends React.Component {
    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    {/** Main Pages */}
                    <Route path="/" exact component={()=>{return(<Home data={this.props.data}/>)}} />
                    <Route path="/about" exact component={()=>{return(<About data={this.props.data}/>)}} />
                    <Route path="/portfolio" exact component={()=>{return(<Portfolio data={this.props.data}/>)}} />
                    <Route path="/resume" exact component={()=>{return(<Resume data={this.props.data}/>)}} />
                    <Route path="/contact" exact component={()=>{return(<Contact data={this.props.data}/>)}} />

                    {/** Project Pages */}
                    <Route path="/adventale" exact component={()=>{return(<Adventale data={this.props.data}/>)}} />
                    <Route path="/purgastory" exact component={()=>{return(<Purgastory data={this.props.data}/>)}} />
                    <Route path="/angrypig" exact component={()=>{return(<AngryPig data={this.props.data}/>)}} />
                </Switch>
            </HashRouter>
        );
    }
}