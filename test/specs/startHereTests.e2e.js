const StartHerePage = require('../pageobjects/startHere.page');
const LogInPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');


describe('Start Here Test Cases - Instructor', () => {
    it('CK-296:Instructor can open the class link', async () => {
        await HomePage.open("HomePageUrl");
        await HomePage.goToLogin();
        await LogInPage.login("instructorDataSet");
        await HomePage.goToMenu();
        await expect(StartHerePage.startHereLink).toBeDisplayed();
        await StartHerePage.goToStartHere();
        await expect(StartHerePage.startHereTitle).toHaveText("CourseKata Teaching Dashboard");
        await StartHerePage.goToLinkClass();
        await StartHerePage.windowsHandle(1)
        await expect(browser).toHaveUrl('https://uclatall.github.io/nbteach/');
    });
});