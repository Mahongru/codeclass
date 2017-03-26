import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/chat';

import ChatHeader from './ChatHeader.jsx';
import UserCountContainer from './UserCountContainer.jsx';
import MessageListContainer from './MessageListContainer.jsx';
import MessageComposeContainer from './MessageComposeContainer.jsx';

class ChatContainer extends Component {

  render() {
    return (
      <div className='chat-container'>
        <ChatHeader />
        <UserCountContainer />
        <MessageListContainer />
        <MessageComposeContainer actions={this.props.actions}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    roomControls: state.roomControls
   }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(Actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);

// export default ChatContainer;

// This container is supposed to be pretty smart. Its children are supposed to be dumb :P
// The control and messagecompose containers are a bit smarter than the others
