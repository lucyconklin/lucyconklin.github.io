import React from 'react';
import Header1 from '../../Typography/Header1';
import Paragraph from '../../Typography/Paragraph';

const Now = () => (
  <section>
    <Header1>Now!</Header1>
    <Paragraph>Currently, I'm in Augusta, GA working as a web developer for 
    <a href="https://singleops.com" className="is-link">SingleOps</a>
    . We work in Ruby on Rails, and dabble in React.
    </Paragraph>
  </section>
)

export default Now;