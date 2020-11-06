"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    globalStyle: 'src/global/app.css',
    globalScript: 'src/global/app.ts',
    taskQueue: 'async',
    outputTargets: [
        {
            type: 'www',
            serviceWorker: null,
            baseUrl: 'https://myapp.local/',
        },
    ],
};
//# sourceMappingURL=stencil.config.js.map