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
var IconFilePowerpointO = (function (_super) {
    __extends(IconFilePowerpointO, _super);
    function IconFilePowerpointO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconFilePowerpointO.prototype.render = function () {
        var className = this.name + " " + this.name + "--file-powerpoint-o " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35.8 8.5q0.6 0.6 1 1.7t0.5 1.9v25.8q0 0.8-0.6 1.5t-1.6 0.6h-30q-0.9 0-1.5-0.6t-0.6-1.5v-35.8q0-0.8 0.6-1.5t1.5-0.6h20q0.9 0 2 0.4t1.7 1.1z m-9.9-5.5v8.4h8.4q-0.3-0.6-0.5-0.9l-7-7q-0.3-0.2-0.9-0.5z m8.5 34.1v-22.8h-9.3q-0.9 0-1.5-0.6t-0.6-1.6v-9.2h-17.1v34.2h28.5z m-22.1-5.2v2.4h7.3v-2.4h-2.1v-3.7h3.1q1.7 0 2.6-0.3 1.5-0.6 2.4-2t0.9-3.2q0-1.9-0.9-3.2t-2.2-1.9q-1.1-0.5-2.9-0.5h-8.2v2.4h2v12.4h-2z m7.9-6.2h-2.7v-6h2.7q1.1 0 1.8 0.4 1.3 0.7 1.3 2.6 0 1.9-1.4 2.6-0.7 0.4-1.7 0.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconFilePowerpointO.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconFilePowerpointO;
}(React.Component));
exports.default = IconFilePowerpointO;
//# sourceMappingURL=IconFilePowerpointO.js.map