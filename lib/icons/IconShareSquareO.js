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
var IconShareSquareO = (function (_super) {
    __extends(IconShareSquareO, _super);
    function IconShareSquareO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconShareSquareO.prototype.render = function () {
        var className = this.name + " " + this.name + "--share-square-o";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m32.9 22.1v5.8q0 2.6-1.9 4.5t-4.5 1.9h-18.6q-2.6 0-4.5-1.9t-1.9-4.5v-18.6q0-2.7 1.9-4.6t4.5-1.8h5.7q0.3 0 0.5 0.2t0.2 0.5q0 0.6-0.5 0.7-1.8 0.6-3 1.3-0.2 0.1-0.4 0.1h-2.5q-1.4 0-2.5 1.1t-1 2.5v18.6q0 1.4 1 2.5t2.5 1h18.6q1.5 0 2.5-1t1.1-2.5v-4.8q0-0.4 0.4-0.7 0.6-0.3 1.2-0.8 0.3-0.4 0.8-0.2 0.4 0.2 0.4 0.7z m5.3-11.1l-8.6 8.6q-0.4 0.4-1 0.4-0.2 0-0.5-0.1-0.9-0.4-0.9-1.3v-4.3h-3.6q-7.2 0-9.7 2.9-2.7 3.1-1.7 10.6 0.1 0.5-0.4 0.7-0.2 0.1-0.3 0.1-0.4 0-0.6-0.3-0.2-0.3-0.4-0.7t-0.9-1.5-1.1-2.3-0.9-2.5-0.4-2.7q0-1.1 0.1-2.1t0.3-2 0.6-1.9 1.1-1.9 1.5-1.6 2.1-1.4 2.8-1.1 3.6-0.6 4.3-0.3h3.6v-4.3q0-0.9 0.9-1.3 0.3-0.1 0.5-0.1 0.6 0 1 0.4l8.6 8.6q0.4 0.4 0.4 1t-0.4 1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconShareSquareO;
}(React.Component));
IconShareSquareO.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconShareSquareO;
//# sourceMappingURL=IconShareSquareO.js.map