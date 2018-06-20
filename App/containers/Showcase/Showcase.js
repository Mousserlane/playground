import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import { Analytics, D3Graph, SnapSvg, ReactBootstrap } from '../../components';

class Showcase extends Component {
    constructor() {
        super();
        this.state = {
            testLifeCycle: []
        }
    }

    componentDidMount() {
        this.setState({testLifeCycle: [0, 1, 2, 3, 4]})
    }

    _renderD3() {
      return ( <D3Graph /> )
    }
    _renderAnalytics() {
      return ( <Analytics /> )
    }
    _renderReactBootstrap() {
        return ( <ReactBootstrap /> )
    }
    _renderSnapSvg() {
        return ( <SnapSvg /> )
    }
    
    render() {
      const { match } = this.props;
      const { testLifeCycle } = this.state;
      console.log('match props', match);
      return (
        <div id="main-container" class="container">
          <div id="header" class="row row-header">
            <Link to={`${match.path}/analytics`}>Analytics</Link>
            <Link to={`${match.path}/d3-js`}>D3 Js</Link>
            <Link to={`${match.path}/react-bootstrap`}>React Bootstrap</Link>
            <Link to={`${match.path}/snapsvg`}>Snap Svg</Link>
          </div>

          <Route path={`${match.path}/analytics`} component={Analytics} />
          <Route path={`${match.path}/d3-js`} component={D3Graph} />
          <Route path={`${match.path}/react-bootstrap`} component={ReactBootstrap} />
          <Route path={`${match.path}/snapsvg`} component={SnapSvg} />
        </div>
      )
    //   switch(match) {
    //       case match.params.pathSlug === 'analytics':
    //       return this.renderAnalytics()

    //       case match.params.pathSlug === 'd3-js':
    //       return this.renderD3()
    //   }
      // if(match.params.pathSlug === 'analytics') {
      //   return this.renderAnalytics();
      // }
      // else if(match.params.pathSlug === 'd3-js') { 
      //   return this.renderD3();
      // }
      // else if(match.params.pathSlug === 'react-bootstrap') {
      //   return this.renderReactBootstrap();
      // }
      // else if(match.params.pathSlug === 'snapsvg') {
      //   return this.renderSnapSvg();
      // }
      // else {
      //   return ( <NotFound /> )
      // }
        
    }
}

export default Showcase;