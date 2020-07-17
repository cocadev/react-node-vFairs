import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Booths extends Component {
  render() {
    return (
      <div>
        <Link className="university booth1" to="/fair/booths"><img src="assets/images/fair/booths/1/1.png" alt="Booth" /></Link>
      </div>
    );
  }
}

export default Booths;
