import Mock from 'mockjs'

import address from './address.json'
import banner from './banner.json'
import floor from './floor.json'

Mock.mock("/mock/banner", { code: 200, data: banner })
Mock.mock("/mock/floor", { code: 200, data: floor })
Mock.mock("/mock/address", 'get', () => {
  if (sessionStorage.getItem('TOKEN')) {
    return { code: 200, data: address, message: '成功' }
  } else {
    return { code: 208, data: null, message: '失败' }
  }
})