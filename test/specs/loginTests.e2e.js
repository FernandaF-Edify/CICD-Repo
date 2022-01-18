const SignUpPage = require("../pageobjects/singUp.page");
const LogInPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');

describe('Log In Test Cases - Public Site', () => {
    it('CK-182:Log in page access to home page', async () => {
        await HomePage.open("HomePageUrl");
        await HomePage.goToLogin();
        await expect(LogInPage.loginTitle).toHaveText("Log in")
        await LogInPage.login("instructorDataSet");
        await expect(HomePage.homeTitle).toHaveText("CourseKata Statistics & Data Science");
        await HomePage.goToLogOut();
    });
    it('CK-184:Log in page has access to Request an Instructor login', async () => {
        await LogInPage.open("LoginPageUrl");
        await expect(browser).toHaveUrl("https://staging.coursekata.org/login");
        await LogInPage.goToLinkRequestAnInstructor();
        await expect(SignUpPage.signUpTitle).toHaveText("Request an Instructor Login");
    });
});