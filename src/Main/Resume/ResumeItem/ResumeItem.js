import React, { Component } from 'react';

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
        <h3>{this.props.title}</h3><p>{this.props.year}</p>
        <p>{this.props.description}</p>
      </section>
    )
  }
};

export default ResumeItem;