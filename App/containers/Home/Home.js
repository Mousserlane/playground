import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(){
      super();
      const promotedMenus = [
          {name: 'Analytics', pathSlug: 'analytics'},
          {name: 'D3 JS', pathSlug: 'd3-js'},
          {name: 'React Bootstrap', pathSlug: 'react-bootstrap'},
          {name: 'SnapSvg', pathSlug: 'snapsvg'}
      ]
      this.state = {
          promotedmenus: promotedMenus
      }
  }

  render(){
    const { children } = this.props;
    const { promotedmenus } = this.state;
    return(
      <div className="container">
        <div className="iframe-home">
          <iframe width="500" height="500" src="https://lottiefiles.com/iframe/410-lego-loader" frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className="row">
          <div className="col-xs-12 text-center paddtop-120">
            <h1 className="medium-font">Welcome To The Playground</h1>
            <hr />
          </div>
        </div>
        <div className="row text-center">
          <ul className="col-xs-12">
           {promotedmenus && promotedmenus.length > 0 && promotedmenus.map((menu, index) => {
              return(
                  <Link to={`toys/${menu.pathSlug}`} key={index}>
                    <li className="col-xs-3">{menu.name}</li>
                  </Link>
              )
            })
           }
          </ul>
        </div>
      </div>
    )
  }
}

export default Home;