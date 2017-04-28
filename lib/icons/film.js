"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var IconFilm = (function (_super) {
    __extends(IconFilm, _super);
    function IconFilm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconFilm.prototype.render = function () {
        var className = this.name + " " + this.name + "--film";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m8 34.6v-2.6q0-0.6-0.4-1t-1-0.4h-2.6q-0.6 0-0.9 0.4t-0.4 1v2.6q0 0.6 0.4 1t0.9 0.3h2.6q0.6 0 1-0.3t0.4-1z m0-8v-2.6q0-0.6-0.4-0.9t-1-0.4h-2.6q-0.6 0-0.9 0.4t-0.4 0.9v2.6q0 0.6 0.4 1t0.9 0.4h2.6q0.6 0 1-0.4t0.4-1z m0-7.9v-2.7q0-0.5-0.4-0.9t-1-0.4h-2.6q-0.6 0-0.9 0.4t-0.4 0.9v2.7q0 0.5 0.4 0.9t0.9 0.4h2.6q0.6 0 1-0.4t0.4-0.9z m21.2 15.9v-10.6q0-0.6-0.4-0.9t-0.9-0.4h-15.9q-0.6 0-1 0.4t-0.4 0.9v10.6q0 0.6 0.4 1t1 0.3h15.9q0.5 0 0.9-0.3t0.4-1z m-21.2-23.9v-2.7q0-0.5-0.4-0.9t-1-0.4h-2.6q-0.6 0-0.9 0.4t-0.4 0.9v2.7q0 0.5 0.4 0.9t0.9 0.4h2.6q0.6 0 1-0.4t0.4-0.9z m29.2 23.9v-2.6q0-0.6-0.4-1t-0.9-0.4h-2.7q-0.5 0-0.9 0.4t-0.4 1v2.6q0 0.6 0.4 1t0.9 0.3h2.7q0.5 0 0.9-0.3t0.4-1z m-8-15.9v-10.7q0-0.5-0.4-0.9t-0.9-0.4h-15.9q-0.6 0-1 0.4t-0.4 0.9v10.7q0 0.5 0.4 0.9t1 0.4h15.9q0.5 0 0.9-0.4t0.4-0.9z m8 7.9v-2.6q0-0.6-0.4-0.9t-0.9-0.4h-2.7q-0.5 0-0.9 0.4t-0.4 0.9v2.6q0 0.6 0.4 1t0.9 0.4h2.7q0.5 0 0.9-0.4t0.4-1z m0-7.9v-2.7q0-0.5-0.4-0.9t-0.9-0.4h-2.7q-0.5 0-0.9 0.4t-0.4 0.9v2.7q0 0.5 0.4 0.9t0.9 0.4h2.7q0.5 0 0.9-0.4t0.4-0.9z m0-8v-2.7q0-0.5-0.4-0.9t-0.9-0.4h-2.7q-0.5 0-0.9 0.4t-0.4 0.9v2.7q0 0.5 0.4 0.9t0.9 0.4h2.7q0.5 0 0.9-0.4t0.4-0.9z m2.7-3.3v27.9q0 1.4-1 2.3t-2.4 1h-33.2q-1.3 0-2.3-1t-1-2.3v-27.9q0-1.4 1-2.4t2.3-0.9h33.2q1.4 0 2.4 0.9t1 2.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconFilm;
}(React.Component));
IconFilm.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconFilm;
//# sourceMappingURL=film.js.map