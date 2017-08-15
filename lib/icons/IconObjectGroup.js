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
var IconObjectGroup = (function (_super) {
    __extends(IconObjectGroup, _super);
    function IconObjectGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconObjectGroup.prototype.render = function () {
        var className = this.name + " " + this.name + "--object-group " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m39.8 10.1h-2.5v19.8h2.5v7.5h-7.5v-2.5h-24.8v2.5h-7.5v-7.5h2.5v-19.8h-2.5v-7.5h7.5v2.5h24.8v-2.5h7.5v7.5z m-5-5v2.5h2.5v-2.5h-2.5z m-32.3 0v2.5h2.5v-2.5h-2.5z m2.5 29.8v-2.5h-2.5v2.5h2.5z m27.3-2.5v-2.5h2.5v-19.8h-2.5v-2.5h-24.8v2.5h-2.5v19.8h2.5v2.5h24.8z m5 2.5v-2.5h-2.5v2.5h2.5z m-12.5-19.9h7.5v14.9h-17.4v-4.9h-7.4v-14.9h17.3v4.9z m-14.9 7.5h12.5v-10h-12.5v10z m19.9 5v-10h-5v7.5h-7.4v2.5h12.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconObjectGroup.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconObjectGroup;
}(React.Component));
exports.default = IconObjectGroup;
//# sourceMappingURL=IconObjectGroup.js.map