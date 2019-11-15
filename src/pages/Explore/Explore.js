import React, { Component } from 'react';


import { ExploreCondition, ExploreResult } from '../../component';

export class Explore extends Component {
  render() {
    return (
      <div>
        <ExploreCondition />
        <ExploreResult />
      </div>
    )
  }
}

export default Explore
