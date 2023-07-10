import { colors } from "../../AppStyles";
import { SuccessIcon, WarningIcon, ErrorIcon } from "../../assets/SVG/Icons";


export class Success {
    constructor () {
        this.icon = SuccessIcon;
        this.title = 'Done!';
        this.backgroundColor = colors.NavyGreen;
    }
}

export class Error {
    constructor () {
        this.icon = ErrorIcon;
        this.title = 'Oops!';
        this.backgroundColor = colors.NavyRed;
    }
}

export class Warning {
    constructor () {
        this.icon = WarningIcon;
        this.title = 'Hmmm!';
        this.backgroundColor = colors.NavyYellow;
    }
}