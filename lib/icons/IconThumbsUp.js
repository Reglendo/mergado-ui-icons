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
var IconThumbsUp = (function (_super) {
    __extends(IconThumbsUp, _super);
    function IconThumbsUp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconThumbsUp.prototype.render = function () {
        var className = this.name + " " + this.name + "--thumbs-up " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m7.7 30q0-0.6-0.4-1t-1-0.4q-0.6 0-1 0.4t-0.4 1q0 0.6 0.4 1t1 0.4q0.6 0 1-0.4t0.4-1z m3.6-11.4v14.3q0 0.5-0.4 1t-1 0.4h-6.5q-0.6 0-1-0.4t-0.4-1v-14.3q0-0.6 0.4-1t1-0.5h6.5q0.5 0 1 0.5t0.4 1z m26.4 0q0 1.9-1.2 3.3 0.3 1 0.3 1.7 0.1 1.7-0.9 3.1 0.3 1.2 0 2.6-0.4 1.2-1.2 2.1 0.2 2.5-1.1 4-1.5 1.7-4.4 1.7h-2.9q-1.5 0-3.2-0.3t-2.7-0.6-2.7-0.9q-2.8-1-3.6-1-0.5 0-1-0.4t-0.4-1v-14.3q0-0.6 0.4-1t1-0.5q0.5 0 1.7-1.3t2.2-2.7q1.5-1.9 2.3-2.7 0.4-0.4 0.7-1t0.4-1.1 0.3-1.4q0.1-0.9 0.2-1.3t0.5-1.2 0.7-1.1q0.5-0.4 1-0.4 1.1 0 1.9 0.2t1.3 0.6 0.9 0.9 0.6 1 0.2 1.1 0.1 1 0 0.9q0 0.8-0.2 1.7t-0.4 1.3-0.6 1.3q-0.1 0.1-0.2 0.4t-0.3 0.4-0.2 0.6h6.2q1.8 0 3 1.3t1.3 3z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconThumbsUp.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconThumbsUp;
}(React.Component));
exports.default = IconThumbsUp;
//# sourceMappingURL=IconThumbsUp.js.map