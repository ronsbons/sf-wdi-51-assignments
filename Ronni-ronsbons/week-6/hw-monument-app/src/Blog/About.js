import React, { Component } from 'react';
import RecentIssues from './RecentIssues';


class About extends Component {
  render() {
    return (
      <aside>
        <h3>About Us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum fugiat illo sunt quasi incidunt veniam cumque minus totam rem ea vel ut eius, accusamus, doloribus dolore at ipsum quaerat molestias.</p>
        <p>Explicabo consectetur tempora perferendis voluptas itaque, corporis at ipsum quisquam eveniet, facilis perspiciatis. Eum ad adipisci, earum fugit perspiciatis deserunt veniam eos? Impedit expedita assumenda, saepe excepturi ad voluptatibus. Eveniet.</p>
        <img src="images/about.jpg" alt=""></img>
        <RecentIssues />
      </aside>
    );
  };
};

export default About;