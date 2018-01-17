import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  static propTypes = {
      dataToRender: PropTypes.object
  }
  constructor() {
      super();
  }
  render() {
    const { dataToRender } = this.props;

    return (
      <div className="card">

        <img className="img-full-width" src={`${dataToRender.imgPath !== null ? dataToRender.imgPath : '/static/assets/placeholder.png'}`} />
        <div className="card-container">
          <h5>{dataToRender.name !== null ? dataToRender.name : 'TitleText'}</h5>
          <Link to={`toys/${dataToRender.pathSlug}`}>
            <button className="btn btn-success">
              Go To Page
            </button>
          </Link>
        </div>

      </div>
    )
  }
}

export default Card;