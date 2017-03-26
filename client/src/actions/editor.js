export function updateEditorValues(val) {
  return dispatch => {
    dispatch({
      type: 'UPDATE_EDITOR_VALUES',
      meta: {remote: true},
      payload: {
        value: val
      }
    })
  }
}

export function toggleEditorLock(isEditorLocked) {
  return dispatch => {
    dispatch({
      type: 'TOGGLE_EDITOR_LOCK',
      meta: {remote: true},
      payload: {
        isEditorLocked: isEditorLocked ? false : true
      }
    })
  }
}

export function toggleChatLock(isChatLocked) {
  return dispatch => {
    dispatch({
      type: 'TOGGLE_CHAT_LOCK',
      meta: {remote: true},
      payload: {
        isChatLocked: isChatLocked ? false : true
      }
    })
  }
}

export function changeEditorTheme(theme) {
  return dispatch => {
    dispatch({
      type: 'CHANGE_EDITOR_THEME',
      meta: {remote: true},
      payload: {
        userSettings: {
          theme
        }
      }
    })
  }
}
