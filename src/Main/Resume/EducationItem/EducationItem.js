import React, { Component } from 'react';
import Header3 from '../../../typography/Header3';

class EducationItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: true
    };
  }
  
  render() {
    return (
      <section>
        <p>{ this.props.year }</p>
        <Header3>{ this.props.school }</Header3>
        <p>{ this.props.description }</p>
      </section>
    )
  }
};

export default EducationItem;