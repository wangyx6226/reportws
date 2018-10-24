import routers from '../router/menu-map'

const permission = {
  state: {
    accessRouters: routers || []
  }
}

export default permission