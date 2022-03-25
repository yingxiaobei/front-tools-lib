/**
 * @param {Object} obj 当前的对象
 * @param {Object} json 当前元素对象的属性
 * @param {function} cb 回调函数，链式调用
 * @param {Number} speed 加速度
 */
function attrAnimation (obj, json, cb, speed = 20) {
  var speedDeta = 0 //动画的加速度
  clearInterval(obj.timer)
  obj.timer = setInterval(() => {
    //获取元素属性
    var curStyle = 0
    var flag = false //判断所有属性是否都到达终点值
    for (var attr in json) {
      if (attr === 'opacity') {
        curStyle = Math.round(parseFloat(getStyle(obj, attr)) * 100)
      } else {
        curStyle = parseInt(getStyle(obj, attr))
      }
      //速度控制
      speedDeta = (json[attr] - curStyle) / speed
      speedDeta = json[attr] > curStyle ? Math.ceil(speedDeta) : Math.floor(speedDeta)

      //临界值控制
      if (json[attr] !== curStyle) {
        flag = false
      }

      //设置位子/状态
      if (attr === 'opacity') {
        obj.style[attr] = (curStyle + speedDeta) / 100
      } else {
        obj.style[attr] = curStyle + speedDeta + 'px'
      }
    }
    //属性到达终点值
    if (flag) {
      clearInterval(obj.timer)
      //链式调用
      if (cb) {
        cb()
      }
      return;
    }
  }, 30)
}

/**
 * 获取元素属性的函数;防止offsetWidth不包含外联样式以及内敛样式
 * @param {Object} obj 当前元素
 * @param {String} attr 当前元素属性名
 */
function getStyle (obj, attr) {
  if (obj.currentStyle) {
    //IE
    return obj.currentStyle[attr]
  }
  //Firefox
  return window.getComputedStyle(obj, null)[attr];
}

// export default attrAnimation
module.exports = { attrAnimation }