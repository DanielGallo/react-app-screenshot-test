describe('My Login application', () => {
    it('should login with valid credentials', () => {
        browser.url(`http://localhost:3000`);

        expect(1).toBe(2);

        browser.takeScreenshot()
        browser.saveScreenshot('test.png');

        /*$('#username').setValue(username);
        $('#password').setValue(password);
        $('button[type="submit"]').click();*/

/*        expect($('#flash')).toBeExisting();
        expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!');*/
    });
});

