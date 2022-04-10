/**
 * @description 日志打印函数
 */


/** 允许选择的颜色 */
export const colorTable = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray', 'black']
// 绑定自定义颜色
for(let i = 0; i <= 0xfff ; i++) {
  let nStr = i.toString(16)
  while(nStr.length < 3) nStr = '0' + nStr
  nStr = '#' + nStr
  colorTable.push(nStr)
}

/** 样式表 */
const styleTable = {}
/** 绑定可选颜色到样式表 */
for(const color of colorTable) styleTable[color] = `color: ${color};`
/** 绑定背景颜色样式 */
for(const color of colorTable) styleTable['bg'+color] = `background-color: ${color};`
/** 绑定边框样式 */
for(const color of colorTable) styleTable['border'+color] = `border: 1px solid ${color};`
for(let i = 0; i <= 12; i++) {
  for(const color of colorTable) styleTable['border'+color+i] = `border: ${i}px solid ${color};`
}
for(let i = 1; i < 100; i++) styleTable['radius'+i] = `border-radius: ${i}px;`
/** 绑定字体样式 */
for(let i = 8; i <= 120 ; i++) styleTable['fs'+i] = `font-size: ${i}px;`
/** 绑定text-decoration */
styleTable['underline'] = `text-decoration: underline;`
styleTable['overline'] = `text-decoration: overline;`
styleTable['line-through'] = `text-decoration: line-through;`

/** 本次打印的样式表集合（每次打印完赋为null） */
let styleObject = null

/**
 * 打印实际对象，每次调用其属性会初始化styleObject
 */
export const log = {
  out(message) {
    _out(message)
    styleObject = null
  }
}

/** 调用相应的键盘，绑定相应的样式到样式表 */
for(let style in styleTable) {
  Object.defineProperty(log, style, {
    get() {
      if(styleObject === null) styleObject = {}
  
      if(styleTable[style]) styleObject[style] = styleTable[style]
      return this
    }
  })
}

/**
 * @description 根据样式表打印字符串
 * @param {string} message 打印的字符串 
 */
function _out( message ) {

  let styleString = `
    padding-top: 4px; 
    padding-left: 6px; 
    padding-right: 6px; 
    padding-bottom: 4px;
    
    background-color: #000;
    border-radius: none;

    color: #fff; 
    font-size: 12px; 
  `

  for(const style in styleObject) styleString += styleObject[style]

  console.log("%c%s", styleString, message)
}

export default {
  log
}