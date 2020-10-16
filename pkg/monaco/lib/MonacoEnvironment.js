self.MonacoEnvironment = {
    getWorkerUrl: function (_moduleId, label) {
        var toFilename = function (label) {
            if (label === 'json') {
                return 'json.worker.js';
            }
            if (label === 'css') {
                return 'css.worker.js';
            }
            if (label === 'html') {
                return 'html.worker.js';
            }
            if (label === 'typescript' || label === 'javascript') {
                return 'ts.worker.js';
            }
            return 'editor.worker.js';
        };
        var base = '.';
        var url = base + "/" + toFilename(label);
        console.log('MonacoEnvironment.getWorkerUrl: ', url);
        return url;
    },
};
//# sourceMappingURL=MonacoEnvironment.js.map