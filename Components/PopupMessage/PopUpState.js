import { colors } from "../../AppStyles";


export class Success { 
    constructor() {
        this.icon = require('../../assets/PopupMessage/Accept.png');
        this.title = 'Done!';
        this.backgroundColor = colors.NavyGreen;
    }
}

export class Error {
    constructor() {
        this.icon = require('../../assets/PopupMessage/Error.png');
        this.title = 'Oops!';
        this.backgroundColor = colors.NavyRed;
    }
}

export class Warning {
    constructor() {
        this.icon = require('../../assets/PopupMessage/Warning.png');
        this.title = 'Hmmm!';
        this.backgroundColor = colors.NavyYellow;
    }
}