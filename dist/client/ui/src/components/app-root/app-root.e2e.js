"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@stencil/core/testing");
describe('app-root', () => {
    it('renders', async () => {
        const page = await testing_1.newE2EPage({ url: '/' });
        const element = await page.find('app-root');
        expect(element).toHaveClass('hydrated');
    });
    it('renders the title', async () => {
        const page = await testing_1.newE2EPage({ url: '/' });
        const element = await page.find('app-root >>> h1');
        expect(element.textContent).toEqual('Stencil App Starter');
    });
});
//# sourceMappingURL=app-root.e2e.js.map