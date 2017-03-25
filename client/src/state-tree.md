room: {
  authorization: boolean, //to determine if owner or not
  editorLocked: boolean,
  chatLocked: boolean,
  editorValue: string,
  terminalValue: string,
  usersOnline: {
    userID: number,
    name: string,
    avatarURL: string
  },
  messages: {
    messageID: number,
    content: string,
    name: string,
    timestamp: number,
    isScrolled: boolean //to autoscroll to bottom
  },
  language: string,
  userSettings: {
    theme: string,
    mode: string, //from language
    tabSize: number,
    defaultValue: string, //from editorValue,
    readOnly: boolean //from editorLocked
  }
}
