import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

class MomentJs extends Component {
  static propTypes = {
    data: PropTypes.array
  }
  static defaultProps = {
    data: [
      {date: "2017-07-01T00:00:00.000Z", total: 1},
      {date: "2017-07-02T00:00:00.000Z", total: 1},
      {date: "2017-07-03T00:00:00.000Z", total: 1},
      {date: "2017-07-04T00:00:00.000Z", total: 1},
      {date: "2017-07-05T00:00:00.000Z", total: 1},
      {date: "2017-07-06T00:00:00.000Z", total: 1},
      {date: "2017-07-07T00:00:00.000Z", total: 1},
      {date: "2017-07-08T00:00:00.000Z", total: 1},
      {date: "2017-07-09T00:00:00.000Z", total: 1},
      {date: "2017-07-10T00:00:00.000Z", total: 1},
      {date: "2017-07-11T00:00:00.000Z", total: 1},
      {date: "2017-07-12T00:00:00.000Z", total: 1},
      {date: "2017-07-13T00:00:00.000Z", total: 1},
      {date: "2017-07-14T00:00:00.000Z", total: 1},
      {date: "2017-07-15T00:00:00.000Z", total: 1},
      {date: "2017-07-16T00:00:00.000Z", total: 1},
      {date: "2017-07-17T00:00:00.000Z", total: 1},
      {date: "2017-07-18T00:00:00.000Z", total: 1},
      {date: "2017-07-19T00:00:00.000Z", total: 1},
      {date: "2017-07-20T00:00:00.000Z", total: 1},
      {date: "2017-07-21T00:00:00.000Z", total: 1},
      {date: "2017-07-22T00:00:00.000Z", total: 1},
      {date: "2017-07-23T00:00:00.000Z", total: 1},
      {date: "2017-07-24T00:00:00.000Z", total: 1},
      {date: "2017-07-25T00:00:00.000Z", total: 1},
      {date: "2017-07-26T00:00:00.000Z", total: 1},
      {date: "2017-07-27T00:00:00.000Z", total: 1},
      {date: "2017-07-28T00:00:00.000Z", total: 1},
      {date: "2017-07-29T00:00:00.000Z", total: 1},
      {date: "2017-07-30T00:00:00.000Z", total: 1},
      {date: "2017-07-31T00:00:00.000Z", total: 1},
      {date: "2017-08-01T00:00:00.000Z", total: 1},
      {date: "2017-08-02T00:00:00.000Z", total: 1},
      {date: "2017-08-03T00:00:00.000Z", total: 1},
      {date: "2017-08-04T00:00:00.000Z", total: 1},
      {date: "2017-08-05T00:00:00.000Z", total: 1},
      {date: "2017-08-06T00:00:00.000Z", total: 1},
      {date: "2017-08-07T00:00:00.000Z", total: 1},
      {date: "2017-08-08T00:00:00.000Z", total: 1},
      {date: "2017-08-09T00:00:00.000Z", total: 1},
      {date: "2017-08-10T00:00:00.000Z", total: 1},
      {date: "2017-08-11T00:00:00.000Z", total: 1},
      {date: "2017-08-12T00:00:00.000Z", total: 1},
      {date: "2017-08-13T00:00:00.000Z", total: 1},
      {date: "2017-08-14T00:00:00.000Z", total: 1},
      {date: "2017-08-15T00:00:00.000Z", total: 1},
      {date: "2017-08-16T00:00:00.000Z", total: 1},
      {date: "2017-08-17T00:00:00.000Z", total: 1},
      {date: "2017-08-18T00:00:00.000Z", total: 1},
      {date: "2017-08-19T00:00:00.000Z", total: 1},
      {date: "2017-08-20T00:00:00.000Z", total: 1},
      {date: "2017-08-21T00:00:00.000Z", total: 1},
      {date: "2017-08-22T00:00:00.000Z", total: 1},
      {date: "2017-08-23T00:00:00.000Z", total: 1},
      {date: "2017-08-24T00:00:00.000Z", total: 1},
      {date: "2017-08-25T00:00:00.000Z", total: 1},
      {date: "2017-08-26T00:00:00.000Z", total: 1},
      {date: "2017-08-27T00:00:00.000Z", total: 1},
      {date: "2017-08-28T00:00:00.000Z", total: 1},
      {date: "2017-08-29T00:00:00.000Z", total: 1},
      {date: "2017-08-30T00:00:00.000Z", total: 1},
      {date: "2017-08-31T00:00:00.000Z", total: 1},
      {date: "2017-09-01T00:00:00.000Z", total: 1},
      {date: "2017-09-02T00:00:00.000Z", total: 1},
      {date: "2017-09-03T00:00:00.000Z", total: 1},
      {date: "2017-09-04T00:00:00.000Z", total: 1},
      {date: "2017-09-05T00:00:00.000Z", total: 1},
      {date: "2017-09-06T00:00:00.000Z", total: 1},
      {date: "2017-09-07T00:00:00.000Z", total: 1},
      {date: "2017-09-08T00:00:00.000Z", total: 1},
      {date: "2017-09-09T00:00:00.000Z", total: 1},
      {date: "2017-09-10T00:00:00.000Z", total: 1},
      {date: "2017-09-11T00:00:00.000Z", total: 1},
      {date: "2017-09-12T00:00:00.000Z", total: 1},
      {date: "2017-09-13T00:00:00.000Z", total: 1},
      {date: "2017-09-14T00:00:00.000Z", total: 1},
      {date: "2017-09-15T00:00:00.000Z", total: 1},
      {date: "2017-09-16T00:00:00.000Z", total: 1},
      {date: "2017-09-17T00:00:00.000Z", total: 1},
      {date: "2017-09-18T00:00:00.000Z", total: 1},
      {date: "2017-09-19T00:00:00.000Z", total: 1},
      {date: "2017-09-20T00:00:00.000Z", total: 1},
      {date: "2017-09-21T00:00:00.000Z", total: 1},
      {date: "2017-09-22T00:00:00.000Z", total: 1},
    ]
  }
  constructor(props) {
    super(props);
    this.state = {
      slicedDate: [],
    }
    this.sliceDate = this._sliceDate.bind(this);
  }
  
  componentDidMount() {
    const { data } = this.props;
    this.sliceDate(data, 30)
  }
  _sliceDate(dataToSlice, size) {
    const { slicedDate } = this.state;
    // for(let x = 0; x <= dataToSlice.length; x++) {
    //   console.log('month:', moment(dataToSlice[x].date).month() == moment(dataToSlice[x].date).month());
    // }
    var arrays = [];
    while (dataToSlice.length > 0) {
      arrays.push(dataToSlice.splice(0, size))
      this.setState({
        slicedDate: arrays
      });
    }
    console.log(moment().subtract(30, 'day'));
    //const filteredArray = dataToSlice.filter(date => moment(date.date).isBetween(moment().subtract(30, 'day'), moment()));
    //console.log(filteredArray);
    //return moment(dataToSlice).format('MMMM Do YYYY, h:mm:ss a')
  }
  
  render() {
    const { data } = this.props;
    const { slicedDate } = this.state;
    console.log('slice date', slicedDate);
    return (
      <div className="container">
        <div className="row">
          <hr />
          <h5>Current Time</h5>
          <h6>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h6>
          <hr />
          {slicedDate && slicedDate.length > 0 && slicedDate.map((dat, key) => 
            <div key={key}>
              Hore
              <hr />
            </div>
          )}
        </div>
        <button onClick={() => this.sliceDate(data, 7)} className="btn btn-success">Slice Date!</button>
      </div>
    )
  }
}

export default MomentJs;