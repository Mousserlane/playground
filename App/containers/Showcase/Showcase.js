import React, { Component } from 'react';
import { Analytics, D3Graph, SnapSvg, ReactBootstrap, NotFound, MomentJs, Threejs } from '../../components';

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

    _renderD3 = () => {
      return ( <D3Graph /> );
    }
    _renderAnalytics = () => {
      return ( <Analytics /> );
    }
    _renderReactBootstrap = () => {
      return ( <ReactBootstrap /> )
    }
    _renderSnapSvg = () => {
      return ( <SnapSvg /> );
    }
    _renderMomentJs = () => {
      return ( <MomentJs /> );
    }
    _renderThreeJS = () => {
      return ( <Threejs /> );
    }
    render() {
      const { match } = this.props;
      const { testLifeCycle } = this.state;

    //   switch(match) {
    //       case match.params.pathSlug === 'analytics':
    //       return this.renderAnalytics()

    //       case match.params.pathSlug === 'd3-js':
    //       return this.renderD3()
    //   }
    switch(match.params.pathSlug) {
      case 'analytics':
        return this._renderAnalytics();

      case 'd3-js':
        return this._renderD3();

      case 'react-bootstrap':
        return this._renderReactBootstrap();

      case 'snapsvg':
        return this._renderSnapSvg();

      case 'moment-js':
        return this._renderMomentJs();

      case 'three-js':
        return this._renderThreeJS();

      default:
        return <NotFound />
    }
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
      // else if(match.params.pathSlug === 'moment-js') {
      //   return this.renderMomentJs();
      // }

      // else {
      //   return ( <NotFound /> )
      // }
        
    }
}

export default Showcase;