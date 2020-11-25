"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@stencil/core/testing");
describe('app-home', () => {
    it('renders', async () => {
        const page = await testing_1.newE2EPage();
        await page.setContent('<app-home></app-home>');
        const element = await page.find('app-home');
        expect(element).toHaveClass('hydrated');
    });
    it('contains a "Profile Page" button', async () => {
        const page = await testing_1.newE2EPage();
        await page.setContent('<app-home></app-home>');
        const element = await page.find('app-home >>> button');
        expect(element.textContent).toEqual('Profile page');
    });
});
//# sourceMappingURL=app-home.e2e.js.map