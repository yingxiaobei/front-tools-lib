
/** 日志类型 */
enum LoggerType {
  Debug = 1 << 0,    /** Debug */
  Warn = 1 << 1,     /** Warn */
  Info = 1 << 2,     /** Info */
  Error = 1 << 3,    /** Error */
}

/** 日期样式 */
const DataStyle: string = `
  background-image: linear-gradient(#567, #345); 
  border-radius: 5px 0 0 5px;
`

/** Icon样式 */
const IconStyle: string = `
  background-image: linear-gradient(#567, #345);
  color: #9ac !important;
  text-shadow: 2px 2px black;
`

/** 标签样式 */
const LabelStyle: string = `
  background-image: linear-gradient(#567, #345);
  border-right: 4px solid #666;
`

/** 信息主体样式 */
const MessageStyle: string = `
  background-image: linear-gradient(#567, #345); 
  border-radius: 0 5px 5px 0;
`

/** 公共样式 */
const CommomStyle: string = `
  padding: 6px;
  font-size: 12px; 
  color: #fff; 
  text-shadow: 0 1px black;
`

/**
 * @description 日志打印类
 */
export class Logger {
  private _label: string    /** 标签 */

  /**
   * @constructor
   * @param {string} label 日志标签
   */
  constructor( label: string ) {
    this._label = label
  }

  /**
   * @description 写入调试日志
   * @param {string} msg 日志主体字符串
   * @param {unknown} messageObject 日志消息对象（可选）
   */
  public debug(msg: string, messageObject: unknown) {
    this._print(msg, LoggerType.Debug, messageObject)
  }

  /**
   * @description 写入警告日志
   * @param {string} msg 日志主体字符串
   * @param {unknown} messageObject 日志消息对象（可选）
   */
  public warn(msg: string, messageObject: unknown) {
    this._print(msg, LoggerType.Warn, messageObject)
  }

  /**
   * @description 写入一般日志
   * @param {string} msg 日志主体字符串
   * @param {unknown} messageObject 日志消息对象（可选）
   */
  public info(msg: string, messageObject: unknown) {
    this._print(msg, LoggerType.Info, messageObject)
  }

  /**
   * @description 写入错误日志
   * @param {string} msg 日志主体字符串
   * @param {unknown} messageObject 日志消息对象（可选）
   */
  public error(msg: string, messageObject: unknown) {
    this._print(msg, LoggerType.Error, messageObject)
  }

  /**
   * @description 内部打印方法，做了一些特殊处理
   * @param {string} msg 打印消息主体
   * @param {LoggerType} loggerType 日志类型 
   * @param {unknown} messageObject 消息对象 (可选参数)
   */
  private _print(msg: string, loggerType: LoggerType, messageObject?: unknown) {
    const now = new Date()

    let TypeStyle, 
    TypeIcon = ''

    switch(loggerType) {
      case LoggerType.Debug: { 
        TypeStyle = `background-image: linear-gradient(#59e, #26b);`
        break
      }
      case LoggerType.Warn: {
        TypeStyle = `
          background-image: linear-gradient(#ec5, #c92); 
          text-shadow: 1px 2px red;
        `
        break
      }
      case LoggerType.Error: {
        TypeStyle = `
          background-image: linear-gradient(#f33, #b00); 
          text-shadow: 1px 2px black;
        `
        break
      }
    }

    let print
    switch (loggerType) {
      case LoggerType.Warn: print = console.warn; break
      case LoggerType.Error:  print = console.error; break
      default: print = console.log
    }

    print(
      '%c%s%c%s%c%s%c%s',
      DataStyle + CommomStyle,
      now.toLocaleString(),
      IconStyle + CommomStyle,
      '',
      LabelStyle + CommomStyle,
      this._label,
      MessageStyle + CommomStyle + TypeStyle,
      msg + (messageObject ? ('\n' + JSON.stringify(messageObject, null, 2)) : '')
    )

  }
}