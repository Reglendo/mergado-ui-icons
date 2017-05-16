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
var IconThList = (function (_super) {
    __extends(IconThList, _super);
    function IconThList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconThList.prototype.render = function () {
        var className = this.name + " " + this.name + "--th-list";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m11.4 27.9v4.2q0 0.9-0.6 1.6t-1.5 0.6h-7.2q-0.9 0-1.5-0.6t-0.6-1.6v-4.2q0-0.9 0.6-1.6t1.5-0.6h7.2q0.9 0 1.5 0.6t0.6 1.6z m0-11.5v4.3q0 0.9-0.6 1.5t-1.5 0.7h-7.2q-0.9 0-1.5-0.7t-0.6-1.5v-4.3q0-0.9 0.6-1.5t1.5-0.6h7.2q0.9 0 1.5 0.6t0.6 1.5z m28.6 11.5v4.2q0 0.9-0.6 1.6t-1.5 0.6h-21.5q-0.9 0-1.5-0.6t-0.6-1.6v-4.2q0-0.9 0.6-1.6t1.5-0.6h21.5q0.9 0 1.5 0.6t0.6 1.6z m-28.6-22.9v4.3q0 0.9-0.6 1.5t-1.5 0.6h-7.2q-0.9 0-1.5-0.6t-0.6-1.5v-4.3q0-0.9 0.6-1.5t1.5-0.6h7.2q0.9 0 1.5 0.6t0.6 1.5z m28.6 11.4v4.3q0 0.9-0.6 1.5t-1.5 0.7h-21.5q-0.9 0-1.5-0.7t-0.6-1.5v-4.3q0-0.9 0.6-1.5t1.5-0.6h21.5q0.9 0 1.5 0.6t0.6 1.5z m0-11.4v4.3q0 0.9-0.6 1.5t-1.5 0.6h-21.5q-0.9 0-1.5-0.6t-0.6-1.5v-4.3q0-0.9 0.6-1.5t1.5-0.6h21.5q0.9 0 1.5 0.6t0.6 1.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconThList;
}(React.Component));
IconThList.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconThList;
//# sourceMappingURL=IconThList.js.map