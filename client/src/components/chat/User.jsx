import React, { Component } from 'react';

class User extends Component {
  render () {
    return (
      <div>
        {this.props.content}
      </div>
    )
  }
}

export default User;
