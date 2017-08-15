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
var IconStreetView = (function (_super) {
    __extends(IconStreetView, _super);
    function IconStreetView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconStreetView.prototype.render = function () {
        var className = this.name + " " + this.name + "--street-view " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35.9 34.3q0 1.4-1.3 2.5t-3.7 1.8-5 1.1-5.7 0.3-5.6-0.3-5.1-1.1-3.6-1.8-1.4-2.5q0-1.1 0.7-2t2.1-1.5 2.6-1 2.9-0.6q0.6-0.1 1.1 0.2t0.6 0.9q0.1 0.6-0.3 1.1t-0.9 0.6q-1.3 0.2-2.3 0.5t-1.8 0.6-1 0.5-0.7 0.4-0.1 0.3q0 0.3 0.6 0.6t1.6 0.7 2.5 0.8 3.6 0.5 4.5 0.2 4.5-0.2 3.6-0.5 2.5-0.8 1.7-0.7 0.6-0.6q0-0.1-0.2-0.3t-0.6-0.4-1.1-0.5-1.7-0.6-2.4-0.5q-0.6-0.1-0.9-0.6t-0.2-1.1q0-0.5 0.5-0.9t1.1-0.2q1.6 0.2 2.9 0.6t2.7 1 2 1.5 0.7 2z m-8.5-20v8.6q0 0.5-0.5 1t-1 0.4h-1.4v8.6q0 0.5-0.4 1t-1 0.4h-5.7q-0.6 0-1-0.4t-0.5-1v-8.6h-1.4q-0.6 0-1-0.4t-0.4-1v-8.6q0-1.2 0.8-2t2-0.9h8.6q1.2 0 2 0.9t0.9 2z m-2.2-8.6q0 2.1-1.4 3.6t-3.6 1.4-3.5-1.4-1.5-3.6 1.5-3.5 3.5-1.5 3.6 1.5 1.4 3.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconStreetView.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconStreetView;
}(React.Component));
exports.default = IconStreetView;
//# sourceMappingURL=IconStreetView.js.map