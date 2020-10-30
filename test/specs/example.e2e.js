describe('My Login application', () => {
    it('should login with valid credentials', () => {
        browser.url(`http://localhost:3000`);

        expect(1).toBe(2);

        browser.takeScreenshot()
        browser.saveScreenshot('test.png');
    });

    it('should check layout', () => {
        expect(1).toBe(1);
    });

    it('should check layout again', () => {
        browser.url(`https://www.google.com`);
        expect(1).toBe(2);
    });
});

