const MyAccountUpPage = require("../pageobjects/myAccount.page");
const LogInPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');

describe('MyAccount Test Cases - Instructor', () => {
    it('CK-321:Instructor can look your account', async () => {
        await HomePage.open("HomePageUrl");
        await HomePage.goToLogin();
        await expect(LogInPage.loginTitle).toHaveText("Log in")
        await LogInPage.login("instructorDataSet");
        await expect(HomePage.homeTitle).toHaveText("CourseKata Statistics & Data Science");
        await MyAccountUpPage.goToMenu();//deberia ser metodo global//
        await expect(MyAccountUpPage.myAccountLink).toBeDisplayed();
        await MyAccountUpPage.goToMyAccount();
        await expect(MyAccountUpPage.myAccountTitle).toHaveText("My Account");
    });
    it('CK-322:Instructor can updated the account information', async () => {
        await MyAccountUpPage.open("MyAccountUrl");
        await MyAccountUpPage.updateInfo("Test Automation")
        await expect(MyAccountUpPage.inputFirstName).toHaveAttribute('value','Test Automation')
        await MyAccountUpPage.updateInfo("Automation")
        await expect(MyAccountUpPage.inputFirstName).toHaveAttribute('value','Automation')
    });
    it('CK-323:Instructor can change the password', async () => {
        await MyAccountUpPage.open("MyAccountUrl");
        await MyAccountUpPage.changePassword('123Queso.')
        await MyAccountUpPage.goToLogOut();
        await LogInPage.login("instructorDataSetUpdated");
        await MyAccountUpPage.open('MyAccountUrl');
        await MyAccountUpPage.changePassword('123Queso$');
    });
    it('CK-324:Instructor can look the account type', async () => {
        await MyAccountUpPage.open("MyAccountUrl");
        await MyAccountUpPage.isDisplayAccountType();
        await expect(MyAccountUpPage.accountType).toHaveText("Your account type is: Instructor")
    });
    it('CK-325:Instructor can log out', async () => {
        await MyAccountUpPage.goToLogOut();
        await expect(LogInPage.loginTitle).toHaveText("Log in")
    });
});