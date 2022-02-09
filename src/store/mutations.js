const mutations = {
  setMediaPoint: state => {
    state.isMobile = window.innerWidth <= 768;
  }
}

export default mutations;