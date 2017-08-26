import React from 'react';
import './Welcome.css';

class Welcome extends React.Component {
  render() {
    return (
      <section className="col-9">
        <h2>Welcome</h2>
        <p>Please choose a post from the left.</p>
      </section>
    );
  }
}

export default Welcome;
