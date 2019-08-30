import axios from '@/store/axios.js'
import router from '@/route'

const state = {
  username: '',
  authCode: '',
  mode: -1,
  code: null,
  simulation: {
    socket: null,
    active: false,
    result: false,
    score: -1,
    elapsedTime: -1
  }
}

const getters = {
  getUsername: state => state.username,
  getAuthCode: state => state.authCode,
  getMode: state => state.mode,
  getCode: state => state.code,
  getSimulationSocket: state => state.simulation.socket,
  getSimulationActive: state => state.simulation.active,
  getSimulationResult: state => state.simulation.result,
  getSimulationScore: state => state.simulation.score,
  getSimulationElapsedTime: state => state.simulation.elapsedTime
}

const mutations = {
  'SET_USERNAME': function (state, data) {
    if (data.length > 50) {
      return
    }
    state.username = data
  },
  'SET_AUTHCODE': function (state, data) {
    if (data.length > 50) {
      return
    }
    state.authCode = data
  },
  'SET_MODE': function (state, data) {
    if (![0, 1].includes(data)) {
      return
    }
    state.mode = data
  },
  'SET_CODE': function (state, data) {
    state.code = data
  },
  'SET_SIMULATION_SOCKET': function (state, data) {
    state.simulation.socket = data
  },
  'SET_SIMULATION_ACTIVE': function (state, data) {
    state.simulation.active = data
  },
  'SET_SIMULATION_RESULT': function (state, data) {
    state.simulation.result = data
  },
  'SET_SIMULATION_SCORE': function (state, data) {
    state.simulation.score = data
  },
  'SET_SIMULATION_ELAPSED_TIME': function (state, data) {
    state.simulation.elapsedTime = data
  },
  'REGISTER_MESSAGE_CALLBACK': function (state, data) {
    if (state.simulation.socket === null) {
      return
    }
    state.simulation.socket.onmessage = data
  },
  'CLOSE_SOCKET': function (state) {
    state.simulation.socket.close()
  }
}

const actions = {
  register: async function (context) {
    // check the username exist
    if (context.state.username.length === 0) {
      throw new Error('The username can not be empty!')
    }
    // check the authCode exist
    if (context.state.authCode.length === 0) {
      throw new Error('The authCode can not be empty!')
    }
    await axios.post('/api/register', {
      username: context.state.username,
      authCode: context.state.authCode
    })
  },
  uploadCode: async function (context) {
    // check the username exist
    if (context.state.username.length === 0) {
      throw new Error('The username can not be empty!')
    }
    const formData = new FormData()
    formData.append('code', context.state.code)
    formData.append('username', context.state.username)
    await axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  compileCode: async function (context) {
    // check the username exist
    if (context.state.username.length === 0) {
      throw new Error('The username can not be empty!')
    }
    await axios.get(`/api/compile?username=${context.state.username}`)
  },
  establishSimulationConnection: async function (context) {
    const socket = new WebSocket('ws://localhost:3000/api/simulation')
    socket.onopen = function () {
      context.commit('SET_SIMULATION_SOCKET', socket)
      context.commit('SET_SIMULATION_ACTIVE', true)
      // send the user information to the server
      context.state.simulation.socket.send(JSON.stringify({
        username: context.state.username,
        authCode: context.state.authCode
      }))
      // transfer to simulation page
      router.push('/simulation')
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}