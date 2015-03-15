keymirror = require("keymirror")

module.exports = {
  PayloadSources: keymirror({
    VIEW_ACTION: null,
    SERVER_ACTION: null,
  }),

  ActionTypes: keymirror({
    CREATE_USER_SUCCESS: null,
    SET_USERNAME: null,
  }),

  EventTypes: keymirror({
    CHANGE: null,
  })
};