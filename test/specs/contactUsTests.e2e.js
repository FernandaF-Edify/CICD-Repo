const ContactUsPage = require('../pageobjects/contactUs.page');

describe('Contact Us Test Cases - Public Site', () => {
    it('CK-177:Contact us page has a form', async () => {
        await ContactUsPage.open("ContactusUrl");
        await expect(ContactUsPage.contactTitle.toHaveTitle("CourseKata - Contact Us"))
        await ContactUsPage.doContactUs(ContactUsPage.randomEmail());
        await expect(ContactUsPage.btnSendContact.toBeEnabled());
    });
});