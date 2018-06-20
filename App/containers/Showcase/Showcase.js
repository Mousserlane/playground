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
    
    render() {
      const { match } = this.props;
      const { testLifeCycle } = this.state;
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
      );
    }
}

export default Showcase;