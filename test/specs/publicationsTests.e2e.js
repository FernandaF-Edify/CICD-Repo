const PublicationPage = require('../pageobjects/publications.page');
const CollegePage = require("../pageobjects/college.page");

describe('Publications Page Test Cases - Public Site', () => {
    it('CK-171:Publications page has a better book link', async () => {
        await PublicationPage.open("PublicationUrl");
        await expect(browser).toHaveUrlContaining('publications');
        await PublicationPage.goToDownloadPublications();
        await PublicationPage.windowsHandle(1)
        await expect(browser).toHaveUrl('https://uclatall.com/pdfs/The%20%E2%80%9CBetter%20Book%E2%80%9D%20Approach%20for%20Education.pdf');
    });
});