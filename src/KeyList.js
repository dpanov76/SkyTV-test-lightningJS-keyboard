import { Lightning } from "@lightningjs/sdk/index";
import { KeyItem } from "./KeyItem";

export class KeyList extends Lightning.Component {
    set items(items) {
        let keyWidth = 100;
        this.children = items.map((item) => {
            if (item.label === ' ') {
                keyWidth = 210;
            } else {
                keyWidth = 100;
            }
            return {
                type: KeyItem,
                action: item.label,
                x: item.x * 110,
                y: item.y * 70,
                w: keyWidth,
                item
            }
        })
    }
    _init() {
        this.index = 0;
    }
    _handleDown() {
        if (this.index <  25 ) {
            this.index +=10;
            console.log('Down', this.index, this.index < 20);
        } else if (this.index >= 25 && this.index <= 29) {
            this.index +=9;
            console.log('Down1', this.index, this.index >= 20 && this.index < 29);
        }
    }
    _handleUp() {
        if (this.index >= 35 ) {
            this.index -=9;
            console.log('Up', this.index);
        } else if (this.index > 10) {
            this.index -=10;
            console.log('Up1', this.index);
        }
    }
    _handleRight() {
        if (this.index < 38 ) {
            this.index ++;
            console.log('Right', this.index);
        }
    }
    _handleLeft() {
        if (this.index > 0 ){
            this.index --;
            console.log('Left', this.index);
        } else {
            this.index = 0;
        }
    }
    _getFocused() {
        return this.children[this.index]
    }
}