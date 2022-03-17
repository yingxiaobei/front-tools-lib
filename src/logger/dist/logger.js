// index.ts
var DataStyle = `
  background-image: linear-gradient(#567, #345); 
  border-radius: 5px 0 0 5px;
`;
var IconStyle = `
  background-image: linear-gradient(#567, #345);
  color: #9ac !important;
  text-shadow: 2px 2px black;
`;
var LabelStyle = `
  background-image: linear-gradient(#567, #345);
  border-right: 4px solid #666;
`;
var MessageStyle = `
  background-image: linear-gradient(#567, #345); 
  border-radius: 0 5px 5px 0;
`;
var CommomStyle = `
  padding: 6px;
  font-size: 12px; 
  color: #fff; 
  text-shadow: 0 1px black;
`;
var Logger = class {
  constructor(label) {
    this._label = label;
  }
  debug(msg, messageObject) {
    this._print(msg, 1 /* Debug */, messageObject);
  }
  warn(msg, messageObject) {
    this._print(msg, 2 /* Warn */, messageObject);
  }
  info(msg, messageObject) {
    this._print(msg, 4 /* Info */, messageObject);
  }
  error(msg, messageObject) {
    this._print(msg, 8 /* Error */, messageObject);
  }
  _print(msg, loggerType, messageObject) {
    const now = new Date();
    let TypeStyle, TypeIcon = "";
    switch (loggerType) {
      case 1 /* Debug */: {
        TypeStyle = `background-image: linear-gradient(#59e, #26b);`;
        break;
      }
      case 2 /* Warn */: {
        TypeStyle = `
          background-image: linear-gradient(#ec5, #c92); 
          text-shadow: 1px 2px red;
        `;
        break;
      }
      case 8 /* Error */: {
        TypeStyle = `
          background-image: linear-gradient(#f33, #b00); 
          text-shadow: 1px 2px black;
        `;
        break;
      }
    }
    let print;
    switch (loggerType) {
      case 2 /* Warn */:
        print = console.warn;
        break;
      case 8 /* Error */:
        print = console.error;
        break;
      default:
        print = console.log;
    }
    print("%c%s%c%s%c%s%c%s", DataStyle + CommomStyle, now.toLocaleString(), IconStyle + CommomStyle, "\uF8FF", LabelStyle + CommomStyle, this._label, MessageStyle + CommomStyle + TypeStyle, msg + (messageObject ? "\n" + JSON.stringify(messageObject, null, 2) : ""));
  }
};
export {
  Logger
};
