/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  //外部路径,通过正则表达式检查 path 是否以 http://、https://、mailto: 或 tel: 开头
  return /^(https?:|mailto:|tel:)/.test(path)

}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  // 是否包含valid_map,包含为有效用户名
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}
