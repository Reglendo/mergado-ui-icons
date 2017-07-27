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
var IconYoutubePlay = (function (_super) {
    __extends(IconYoutubePlay, _super);
    function IconYoutubePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconYoutubePlay.prototype.render = function () {
        var className = this.name + " " + this.name + "--youtube-play " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m28.6 20q0-0.8-0.7-1.2l-11.4-7.1q-0.7-0.5-1.5-0.1-0.7 0.4-0.7 1.3v14.2q0 0.9 0.7 1.3 0.4 0.2 0.7 0.2 0.5 0 0.8-0.3l11.4-7.1q0.7-0.4 0.7-1.2z m11.4 0q0 2.1 0 3.3t-0.2 3.1-0.5 3.3q-0.4 1.6-1.6 2.7t-2.7 1.3q-5 0.6-15 0.6t-15-0.6q-1.6-0.2-2.8-1.3t-1.5-2.7q-0.3-1.5-0.5-3.3t-0.2-3.1 0-3.3 0-3.3 0.2-3.1 0.5-3.3q0.4-1.6 1.6-2.7t2.7-1.3q5-0.6 15-0.6t15 0.6q1.6 0.2 2.8 1.3t1.5 2.7q0.3 1.5 0.5 3.3t0.2 3.1 0 3.3z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconYoutubePlay;
}(React.Component));
IconYoutubePlay.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconYoutubePlay;
//# sourceMappingURL=IconYoutubePlay.js.map