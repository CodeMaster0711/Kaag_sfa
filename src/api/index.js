import * as axios from 'axios'
import { versions, apiUrl } from '../utils/constants'

const API_URL = 'http://dev.aioindi-sfa.jp/adsfa2tablet/tabletindex.php'
const API_MULTI_URL = 'http://dev.aioindi-sfa.jp/adsfa2tablet/tabletindexMulti.php'

export function login ({ username, password, tabletPassword }) {
  return axios.post(apiUrl, {
    flid: '',
    md: '0',
    ss: '',
    uid: username,
    obj: {
      ...versions,
      revision: '0',
      userId: username,
      passWd: password
    }
  })
  .then(response => {
    // 第一段階ログイン成功時
    if (response.data.value.sessionId) {
      return axios.post(apiUrl, {
        flid: '',
        md: '200100',
        ss: response.data.value.sessionId,
        uid: username,
        obj: {
          ...versions,
          revision: '0',
          userId: username,
          passWd: tabletPassword
        }
      })
    } else {
      return Promise.resolve(response)
    }
  })
  .then(response => {
    return Promise.resolve(getLoginResponse(response.data))
  })
  .catch(error => {
    console.log(error)
  })
}

function getLoginResponse (data) {
  return {
    sessionId: data.value.sessionId,
    message: data.value.mess
  }
}

function fetchMasterData (data) {
  return axios.post(API_MULTI_URL, {
    'sendObjList': [
      {
        'md': '1',
        'ss': data.sessionId,
        'uid': data.username,
        'flid': '',
        'obj': {}
      },
      {
        'md': '300065',
        'ss': data.sessionId,
        'uid': data.username,
        'flid': '',
        'obj': {}
      },
      {
        'md': '200001',
        'ss': data.sessionId,
        'uid': data.username,
        'flid': '',
        'obj': {}
      },
      {
        'md': '300001',
        'ss': data.sessionId,
        'uid': data.username,
        'flid': '',
        'obj': {}
      },
      {
        'md': '300400',
        'ss': data.sessionId,
        'uid': data.username,
        'flid': '',
        'obj': {}
      },
      {
        'md': '300415',
        'ss': data.sessionId,
        'uid': data.username,
        'flid': '',
        'obj': {}
      }
    ]
  })
  .then(response => {
    // Processing API
  })
  .catch(error => {
    console.log(error)
  })
}
