import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card } from '../../components';

class HomeExplore extends Component {
  static propTypes = {
    data: PropTypes.array
  }
  static defaultProps = {
      data: [
        {name: 'MomentJs', pathSlug: 'moment-js', imgPath: '/static/assets/moment.png'},
        {name: 'deck.gl', pathSlug: 'deck-gl', imgPath: '/static/assets/deckgl.jpg'},
        {name: 'mapbox', pathSlug: 'mapbox', imgPath: '/static/assets/mapbox-logo-256.png'},
        //{name: 'lodash', pathSlug: 'lodash', imgPath: '/static/assets/lodash.png'},
        {name: 'redux', pathSlug: 'redux', imgPath: '/static/assets/logo-redux.png'}
      ]
  }
  render() {
    const { data } = this.props;
    return (
      <div className="card-rows">
        {data && data.length > 0 && data.map((data, key) => 
          <div key={key} className="col-xs-3">
            <Card dataToRender={data} />
          </div>
          )
        }
      </div>
    )
  }   
}

export default HomeExplore;