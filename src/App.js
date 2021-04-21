import { Lightning, Utils } from '@lightningjs/sdk'
import { KeyList } from "./KeyList";


export default class App extends Lightning.Component {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    return {
      Keyboard: {
        rect: true, x:400, y:680, w:1130, h:320, color: 0xff005500,
        Keys: { type: KeyList, y: 20, x:20, mount: 0.5},
      },
      InputField: {
        rect: true, x:400, y:380, w:1130, h:75, color: 0xFF1C27bC,
      },
      Text: {
        mount: .5 ,
        x: 960,
        y: 420,
        text: {
          text: "Enter your text please",
          fontFace: 'Regular',
          fontSize: 44,
          textColor: 0xffffffff,
        },
      },
    }
  }

  _init() {
      this.tag('Keys').items = [
          { label:'1', x:0,  y:0 },
          { label:'2', x:1,  y:0 },
          { label:'3', x:2,  y:0 },
          { label:'4', x:3,  y:0 },
          { label:'5', x:4,  y:0 },
          { label:'6', x:5,  y:0 },
          { label:'7', x:6,  y:0 },
          { label:'8', x:7,  y:0 },
          { label:'9', x:8,  y:0 },
          { label:'0', x:9,  y:0 },
          { label:'Q', x:0,  y:1 },
          { label:'W', x:1,  y:1 },
          { label:'E', x:2,  y:1 },
          { label:'R', x:3,  y:1 },
          { label:'T', x:4,  y:1 },
          { label:'Y', x:5,  y:1 },
          { label:'U', x:6,  y:1 },
          { label:'I', x:7,  y:1 },
          { label:'O', x:8,  y:1 },
          { label:'P', x:9,  y:1 },
          { label:'A', x:0,  y:2 },
          { label:'S', x:1,  y:2 },
          { label:'D', x:2,  y:2 },
          { label:'F', x:3,  y:2 },
          { label:'G', x:4,  y:2 },
          { label:'H', x:5,  y:2 },
          { label:'J', x:6,  y:2 },
          { label:'K', x:7,  y:2 },
          { label:'L', x:8,  y:2 },
          { label:'ENTER', x:9,  y:2 },
          { label:'Z', x:0,  y:3 },
          { label:'X', x:1,  y:3 },
          { label:'C', x:2,  y:3 },
          { label:'V', x:3,  y:3 },
          { label:' ', x:4,  y:3 },
          { label:'B', x:6,  y:3 },
          { label:'N', x:7,  y:3 },
          { label:'M', x:8,  y:3 },
          { label:'DEL', x:9,  y:3 },
      ];
  }

  $changeMessage(message) {
    this.tag('Text').patch({
        text: { text: message }
    })
  }

  _getFocused() {
      return this.tag('Keys')
  }
}
