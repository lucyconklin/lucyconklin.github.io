import React, { Component } from 'react';
import Header3 from '../../../typography/Header3';

class ResumeItem extends Component {
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
        <Header3>{ this.props.company }</Header3>
        <h3>{ this.props.position }</h3>
        <p>{ this.props.description }</p>
      </section>
    )
  }
};

export default ResumeItem;