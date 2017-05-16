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
var IconFolderOpenO = (function (_super) {
    __extends(IconFolderOpenO, _super);
    function IconFolderOpenO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconFolderOpenO.prototype.render = function () {
        var className = this.name + " " + this.name + "--folder-open-o";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m37 20.7q0-0.7-1.1-0.7h-22.6q-0.8 0-1.8 0.4t-1.5 1.1l-6.1 7.6q-0.3 0.5-0.3 0.8 0 0.7 1.1 0.7h22.5q0.9 0 1.8-0.4t1.5-1.1l6.1-7.6q0.4-0.4 0.4-0.8z m-23.7-3.4h15.9v-3.3q0-0.8-0.5-1.4t-1.5-0.6h-11.9q-0.8 0-1.4-0.6t-0.6-1.4v-1.3q0-0.8-0.6-1.4t-1.4-0.6h-6.6q-0.9 0-1.5 0.6t-0.5 1.4v17.7l5.3-6.5q0.9-1.1 2.4-1.8t2.9-0.8z m26.3 3.4q0 1.3-0.9 2.5l-6.1 7.6q-0.9 1.1-2.5 1.8t-2.9 0.7h-22.5q-2 0-3.3-1.4t-1.4-3.3v-19.9q0-1.9 1.4-3.3t3.3-1.3h6.6q1.9 0 3.3 1.3t1.3 3.3v0.7h11.3q2 0 3.3 1.3t1.4 3.3v3.3h4q1.1 0 2 0.6t1.4 1.4q0.3 0.7 0.3 1.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconFolderOpenO;
}(React.Component));
IconFolderOpenO.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconFolderOpenO;
//# sourceMappingURL=IconFolderOpenO.js.map