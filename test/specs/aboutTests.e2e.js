const ContactPage = require('../pageobjects/contactUs.page');
const AboutPage = require('../pageobjects/about.page');

describe('About Page Test Cases - Public Site', () => {
    it('CK-171:About page has a better book link', async () => {
        await AboutPage.open("AboutPageUrl");
        await expect(browser).toHaveUrlContaining('about');
        await AboutPage.goToBetterBook();
        await AboutPage.windowsHandle(1);
        await expect(browser).toHaveUrl('https://uclatall.com/pdfs/The%20%E2%80%9CBetter%20Book%E2%80%9D%20Approach%20for%20Education.pdf')
        await AboutPage.windowsHandle(0);
    });
    it('CK-172:About page has a video', async () => {
        await AboutPage.open("AboutPageUrl");
        await AboutPage.isDisplayTheBetterBookProjectVideo();
        await expect(AboutPage.btnPlayVideo).toBeExisting();
    });
    it('CK-173:About page has a coursekata spotlight', async () => {
        await AboutPage.open("AboutPageUrl");
        await AboutPage.goToLearnMore();
        await AboutPage.windowsHandle(2);
        await expect(browser).toHaveUrl('https://uclatall.com/pdfs/Modeling%20First%20Applying%20Learning%20Science%20to%20the%20Teaching%20of%20Introductory%20Statistics.pdf');
        await AboutPage.windowsHandle(0);
    });
    it('CK-174:About coursekata has a contact us button', async () => {
        await AboutPage.open("AboutPageUrl");
        await AboutPage.goToContact();
        await expect(ContactPage.contactTitle).toHaveTitle('CourseKata - Contact Us');
    });
    it('CK-648:About page has a privacy police section', async () => {
        await AboutPage.open("AboutPageUrl");
        await AboutPage.goToStudentPolice();
        await AboutPage.windowsHandle(3);
        await expect(browser).toHaveUrl("https://docs.google.com/document/d/1mfFE82uaKXDTIBWWaKsxUfRkCfpvbXtBUtpVi45nT9s/edit");
        await AboutPage.windowsHandle(0);
        await AboutPage.goToInstructorPolice();
        await AboutPage.windowsHandle(4);
        await expect(browser).toHaveUrl('https://docs.google.com/document/d/1A12kl76O_ZGso5hCX_TyQDWFCqE7WbtRevlUPe1JI5I/edit');
        await AboutPage.windowsHandle(0);
        await AboutPage.goToResearchPolice();
        await AboutPage.windowsHandle(5);
        await expect(browser).toHaveUrl('https://docs.google.com/document/d/1dnhMe-r0ttPtMQivzJB2nlUXGxbOfMihAr2TAXMPRnA/edit')
    });
});