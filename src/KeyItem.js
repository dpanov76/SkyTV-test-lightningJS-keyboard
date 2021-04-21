import {Lightning} from "@lightningjs/sdk/index";

var message = [];

export class KeyItem extends Lightning.Component {
    static _template() {
        return {
            rect: true, w: 100, h: 60, color: 0xff1f1f1f, alpha: 1,
            Label: {
                x: 50, y: 30, mount: .5
            }
        }
    }
    _init() {
        this.patch({
            Label: {
                text: {
                    text: this.item.label,
                    fontSize: 24,
                }
            }
        })
    }
    _focus() {
        this.color = 0xffffffff
        this.tag('Label').color = 0xff1f1f1f
    }
    _unfocus() {
        this.color = 0xff1f1f1f
        this.tag('Label').color = 0xffffffff
    }
    // $changeMessage(message) {
    //     this.tag('Message').patch({
    //         text: { text: message }
    //     });
    // }
    _getFocused() {
        return this.tag('Keys')
    }
    _handleEnter() {
        switch(this.item.label) {
            case 'DEL':
                message.pop();
                break;
            case 'ENTER':
                // TODO store entered data here
                console.log("Saved");
                break;
            default:
            message.push(this.item.label);
        }
        console.log(message);
        this.fireAncestors('$changeMessage', message.join().replace(/,/g, ''));
    }
}