export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.didAutoLogOut = true;
  },
  setAutoLogOut(state) {
    state.didAutoLogOut = true;
  },
};
