"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Editor = void 0;
require("../MonacoEnvironment");
var React = require("react");
var monaco = require("monaco-editor");
var SAMPLE = "\nfunction x() {\n  console.log('Hello world!');\n};\n".substring(1);
var Editor = /** @class */ (function (_super) {
    __extends(Editor, _super);
    function Editor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.divRef = function (ref) { return (_this.div = ref); };
        return _this;
    }
    Editor.prototype.componentDidMount = function () {
        monaco.editor.create(this.div, {
            value: SAMPLE,
            language: 'typescript',
        });
    };
    Editor.prototype.render = function () {
        var style = { width: 800, height: 600, border: "solid 1px " };
        return <div ref={this.divRef} style={style}/>;
    };
    return Editor;
}(React.PureComponent));
exports.Editor = Editor;
//# sourceMappingURL=Editor.jsx.map