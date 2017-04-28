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
var IconPaintBrush = (function (_super) {
    __extends(IconPaintBrush, _super);
    function IconPaintBrush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IconPaintBrush.prototype.render = function () {
        return React.createElement("g", null,
            React.createElement("path", { d: "m36 0q1.6 0 2.8 1t1.2 2.6q0 1.4-1 3.4-7.5 14-10.4 16.8-2.2 2-4.9 2-2.8 0-4.8-2t-2-4.9q0-2.9 2-4.8l14.2-12.9q1.4-1.2 2.9-1.2z m-20.2 23.1q0.8 1.7 2.3 2.9t3.4 1.7l0 1.6q0.1 4.7-2.9 7.7t-7.8 3q-2.7 0-4.8-1t-3.4-2.9-2-4.1-0.6-4.9q0.2 0.1 0.9 0.7t1.4 1 1.3 0.8 1 0.4q1 0 1.3-0.8 0.5-1.5 1.3-2.6t1.5-1.7 2-1 2.3-0.6 2.8-0.2z" }));
    };
    return IconPaintBrush;
}(React.Component));
exports.default = IconPaintBrush;
//# sourceMappingURL=paint-brush.js.map