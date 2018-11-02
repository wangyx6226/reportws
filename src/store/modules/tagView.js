const tagView = {
  state: {
    visitedViews: [],
    cachedViews: []
  },
  //改变state的唯一方法
  mutations: {
    ADD_VISITED_VIEW: (state, view) => {
      //已经存在
      if (state.visitedViews.some( v => v.path === view.path)) return
      state.visitedViews.push(
        Object.assign({}, view, {
          title: view.name ||'no-name'
        })
      )
    },
    DEL_VISITED_VIEW: (state, view) => {
      for (const [i,v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews.splice(i,1)
          break
        }
      }
    }
  },
  //供用户调用的方法
  actions: {
    addView({dispatch}, view) {
      dispatch('addVisitedView', view)
    },
    addVisitedView({commit}, view) {
      commit('ADD_VISITED_VIEW', view)
    },
    delView({commit, state}, view) {
      return new Promise( resolve => {
        commit('DEL_VISITED_VIEW', view)
        resolve({
          visitedViews: [...state.visitedViews]
        })
      })
    }
  }
}

export default tagView