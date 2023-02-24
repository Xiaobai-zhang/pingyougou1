import { v4 as uuidv4 } from 'uuid'
// 游客模式，查看浏览器是否有uuid，没有就储存，有就获取
export const getUUID = () => {
  let uuid_token = localStorage.getItem('UUIDTOKEN')
  if (!uuid_token) {
    uuid_token = uuidv4()
    localStorage.setItem('UUIDTOKEN', uuid_token)
  }
  return uuid_token
}