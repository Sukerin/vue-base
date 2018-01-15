/**
 * Created by Albert on 2018/1/15.
 */

// initial state
// shape: [{ id, quantity }]
const state = {
  fps: 60,
  isStart: false,
  gameWidth: 400,
  gameHeight: 200,
}

// getters
const getters = {

}

// actions
const actions = {


}

// mutations
const mutations = {
  startToggle(state){
    state.isStart=!state.isStart;
  }
}

export default {
  state,
  // getters,
  actions,
  mutations
}
