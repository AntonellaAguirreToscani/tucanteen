"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@stencil/core/testing");
describe('app-profile', () => {
    it('renders', async () => {
        const page = await testing_1.newE2EPage();
        await page.setContent('<app-profile></app-profile>');
        const element = await page.find('app-profile');
        expect(element).toHaveClass('hydrated');
    });
    it('displays the specified name', async () => {
        const page = await testing_1.newE2EPage({ url: '/profile/joseph' });
        const profileElement = await page.find('app-root >>> app-profile');
        const element = profileElement.shadowRoot.querySelector('div');
        expect(element.textContent).toContain('Hello! My name is Joseph.');
    });
});
//# sourceMappingURL=app-profile.e2e.js.map