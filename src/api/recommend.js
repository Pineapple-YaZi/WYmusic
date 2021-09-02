// 封装接口
import axios from 'axios'

/**
 * 获取新歌接口
 * @param {Object} params {limit: 获取歌单的条数}
 * @returns promise
 */
export function getNewList (params) {
  return axios({
    url: '/personalized/newsong',
    params
  })
}

/**
 * 获取搜索tags
 * @returns promise
 */
export function getTags () {
  return axios({
    url: '/search/hot'
  })
}

/**
 * 获取歌单详情
 * @param {*} params { keywords, limit, offset }
 * @returns promise
 */
export function musicList (params) {
  return axios({
    url: '/cloudsearch',
    params
  })
}
