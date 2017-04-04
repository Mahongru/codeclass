import React, { Component, PropTypes } from 'react';

class MessageComposeContainer extends Component {

  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  render() {
    const { isChatLocked } = this.props;
    return (
      <div className='message-compose-container'>
        {!isChatLocked &&
          <textarea
            className="chatbar-message"
            placeholder="Chat Bar"
            onKeyUp={this._onKeyUp.bind(this)}
            value={this.state.input}
            onChange={this._handleChange.bind(this)}
            maxLength="500"
            required
            ref='textAreaInput'
            />
        }
        {!isChatLocked &&
          <button onClick={this._handleSubmit.bind(this)} className="btn btn-default btn-sm chatbar-button">Send</button>
        }
        {isChatLocked &&
          <span className="btn btn-warning btn-large chat-locked-warning">Chat Locked</span>
        }
      </div>
    )
  }

  _handleChange(e) {
    this.setState({input: e.target.value})
  }

  _onKeyUp(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      if(e.target.value.match(/^\s+$/)){
        e.target.placeholder = 'Try writing something first!';
        this.setState({input: ''});
      } else {
      this.props.actions.sendMessage(this.refs.textAreaInput.value, this.props.roomID);
      e.target.placeholder = 'Enter a message';
      this.setState({input: ''});
      }
    }
  }

  _handleSubmit(e) {
    e.preventDefault();
    let textAreaInput = this.refs.textAreaInput.value;
    console.log(typeof this.refs.textAreaInput.value);
    if(this.refs.textAreaInput.value === '' || this.refs.textAreaInput.value.match(/^\s+$/)){
      this.refs.textAreaInput.placeholder = 'Try writing something first!';
      this.setState({input: ''})
    } else {
      this.props.actions.sendMessage(this.state.input, this.props.roomID);
      this.setState({input: ''})
    }
  }
}

MessageComposeContainer.propTypes = {
  actions: PropTypes.shape({
    sendMessage: PropTypes.func.isRequired
  }),
  isChatLocked: PropTypes.bool.isRequired,
  roomID: PropTypes.number.isRequired
}

export default MessageComposeContainer;
