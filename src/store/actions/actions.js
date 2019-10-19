import model from '../../model/model'

const handleError = (err) => {
  // handle error
  if (err.code === 401) {
    console.log('999999999999')
  }
}

export default {
  fetchUserInfo ({ commit }) {
    return model.getUserInfo()
      .then(data => {
        console.log('userInfo: ' + data)
        commit('userInfo', data)
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  }
}
