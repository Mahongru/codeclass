export function sendMessage(content){
  return dispatch => {
    dispatch({
      type: 'SEND_OUTGOING_MESSAGE',
      meta: {remote: true},
      payload: {
        // user_id will be passed from req.session.user.id
        // user_id: 1,
        // classroom_id will be passed down from iniitial state.
        // classroom_id: 2,
        id: Date.now(),
        content
      }
    })
  }
}

// TODO LOCK MESSEAGES

// TODO USERS LOGGED IN


// STRETCH TODOS
// USER IS TYPING...
// EMOTICONS
