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
var IconViacoin = (function (_super) {
    __extends(IconViacoin, _super);
    function IconViacoin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconViacoin.prototype.render = function () {
        var className = this.name + " " + this.name + "--viacoin";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m37.3 0l-4.3 10h4.3v4.3h-6.1l-1.3 2.8h7.4v4.3h-9.2l-8 18.6-7.9-18.6h-9.2v-4.3h7.3l-1.2-2.8h-6.1v-4.3h4.3l-4.3-10h5.7l7.2 17.1h8.5l7.2-17.1h5.7z m-17.2 27.1l2.5-5.7h-4.9z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconViacoin;
}(React.Component));
IconViacoin.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconViacoin;
//# sourceMappingURL=IconViacoin.js.map