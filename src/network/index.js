import mokeRequsts from "./mokeAjax";
import requests from "./request";

// 三级联动接口
export const reqCategoryList = () => {
  return requests({ url: '/product/getBaseCategoryList', method: 'get' })
}

// 获取banner图片资源
export const reqGetBannerList = () => mokeRequsts({ url: '/banner', method: 'get' })

// 获取floor图片资源
export const reqGetFloorList = () => mokeRequsts({ url: '/floor', method: 'get' })

// 获取search图片资源
export const reqGetSearchInfo = (params) => {
  return requests({ url: '/list', method: 'POST', data: params })
};

// 获取Detail数据资源
export const reqGoodInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'GET' })

// 将产品添加到购物车中（获取更新某一个产品的个数）

export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'POST' })

// 获取cart数据资源
export const reqShopCart = () => requests({ url: '/cart/cartList', method: 'GET' })

// 请求删除购物车商品数据
export const reqDeleteCart = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })

// 切换商品选中数据
export const reqUpdateChecked = (skuID, isChecked) => requests({ url: `/cart/checkCart/${skuID}/${isChecked}`, method: 'get' })

// 获取验证码
export const reqGetCode = (phone) => requests({ url: `user/passport/sendCode/${phone}`, method: 'get' })

// 注册
export const reqRegister = (data) => requests({ url: '/user/passport/register', data, method: 'post' })

// 登录
export const reqUserLogin = (data) => requests({ url: '/user/passport/login', data, method: 'post' })

// 获取用户信息【需要带着用户信息的token向服务器要数据】
export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'GET' })

// 退出登录
export const reqLogout = () => requests({ url: '/user/passport/logout', method: 'get' })

// 获取用户地址信息
export const reqAddressInfo = () => mokeRequsts({ url: '/address', method: 'get' })

// 获取商品清单
export const reqOrderInfo = () => requests({ url: '/order/auth/trade', method: 'get' })

// 提交商品订单信息
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'post' })

// 获取支付消息
export const reqPayInfo = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' })

// 获取订单支付状态
export const reqPayStatus = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get' })
// 获取我的订单信息
export const reqMyOrder = (page, limit) => requests({ url: `/order/auth/${page}/${limit}`, method: 'get' })