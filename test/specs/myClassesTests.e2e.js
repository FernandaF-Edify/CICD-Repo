const MyAccountUpPage = require("../pageobjects/myAccount.page");
const MyClassesPage = require('../pageobjects/myClasses.page');
const LogInPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');

describe('Classes Test Cases - Private Site', () => {
    it('CK-277:Instructor can search the classes', async () => {
        await MyClassesPage.open("HomePageUrl");
        await HomePage.goToLogin();
        await expect(LogInPage.loginTitle).toHaveText("Log in");
        await LogInPage.login("instructorDataSet");
        await expect(HomePage.homeTitle).toHaveText("CourseKata Statistics & Data Science");
        await MyAccountUpPage.goToMenu();
        await expect(MyClassesPage.myClassesLink).toBeDisplayed();
        await MyClassesPage.goToMyClasses();
        await expect(MyClassesPage.myClassesTitle).toHaveText("My Classes");
        await MyClassesPage.Search("Test active/complete automation");
        await expect(MyClassesPage.actualClass).toBeDisplayed();
    });
    it('CK-278:Instructor can filters the classes', async () => {
        await MyClassesPage.open("MyClassesUrl");
        await MyClassesPage.goToFilter();
        await MyClassesPage.classesFilter();
        await expect(MyClassesPage.actualClass).toBeDisplayed();
    });
    it('CK-279:Instructor can short the columns on class table', async () => {
        await MyClassesPage.open("MyClassesUrl");
        await MyClassesPage.gotoSort();
        await expect(MyClassesPage.sort).toHaveAttribute("direction","asc");
        await MyClassesPage.gotoSort();
        await expect(MyClassesPage.sort).toHaveAttribute("direction","desc");
    });
    it('CK-280:Instructor can create a real class', async () => {
        await MyClassesPage.open("MyClassesUrl");
        await MyClassesPage.gotoNewClass();
        await MyClassesPage.createRealClass('Automation test real class','Edify','QA test')
        await MyClassesPage.goBackToMyClasses();
        await expect(MyClassesPage.actualClass).toHaveText('Automation test real class')
        await MyClassesPage.goToDeleteClass();
        await expect(MyClassesPage.actualClass).toHaveText('Test active/complete automation')
    });
    it('CK-636:Instructor can Create a Study Group class', async () => {
        await MyClassesPage.open("MyClassesUrl");
        await MyClassesPage.gotoNewClass();
        await MyClassesPage.createStudyClass('QA test','Automation study class','Edify');
        await MyClassesPage.goBackToMyClasses();
        await expect(MyClassesPage.actualClass).toHaveText('Automation study class')
        await MyClassesPage.goToDeleteClass();
        await expect(MyClassesPage.actualClass).toHaveText('Test active/complete automation')
    });
    it('CK-281:Instructor can create a test class', async () => {
        await MyClassesPage.open("MyClassesUrl");
        await MyClassesPage.gotoNewClass();
        await MyClassesPage.createTestClass('QA test','Automation test class','Edify');
        await MyClassesPage.goBackToMyClasses();
        await expect(MyClassesPage.actualClass).toHaveText('Automation test class')
    });
    it('CK-288:Instructor can edit the class', async () => {
        await MyClassesPage.open("MyClassesUrl");
        await MyClassesPage.goToEdit('Test Edit');
        await MyClassesPage.goBackToMyClasses();
        await expect(MyClassesPage.actualClass).toHaveText('Test Edit')
        await MyClassesPage.goToEdit('Automation test class');
    });
    it('CK-282:Instructor can look the canvas wizard', async () => {
        await MyClassesPage.open("MyClassesUrl");
        await MyClassesPage.goToClass();
        await expect(MyClassesPage.canvasWizard).toBeDisplayed();
    });
    it('CK-282:Instructor can look the moodle wizard', async () => {
        await MyClassesPage.open("MyClassesUrl");
        await MyClassesPage.gotoMoodleWizard();
        await expect(MyClassesPage.moodleWizard).toBeDisplayed();
    });
    it('CK-282:Instructor can look the blackboard wizard', async () => {
        await MyClassesPage.open("MyClassesUrl");
        await MyClassesPage.gotoBlackboardWizard();
        await expect(MyClassesPage.blackBoardWizard).toBeDisplayed();
        await MyClassesPage.goToCanvasLms();
    });
    it('CK-290:Instructor can delete his own course', async () => {
        await MyClassesPage.open("MyClassesUrl");
        await MyClassesPage.goToDeleteClass();
        await expect(MyClassesPage.actualClass).toHaveText('Test active/complete automation')
    });
    it('CK-290:Instructor can mark own course complete', async () => {
        await MyClassesPage.open("MyClassesUrl");
        await MyClassesPage.gotoClass();
        await MyClassesPage.gotoCompleteClass();
        await expect(MyClassesPage.statusClasses).toHaveText("Complete")
    });
    it('CK-291:Instructor can mark own course as Active again', async () => {
        await MyClassesPage.open("MyClassesUrl");
        await MyClassesPage.gotoClass();
        await MyClassesPage.gotoActiveClass();
        await expect(MyClassesPage.statusClasses).toHaveText("Active")
    });
    it('CK-292:Instructor can view own class details', async () => {
        await MyClassesPage.open("MyClassesUrl");
        await MyClassesPage.gotoClass();
        await expect(MyClassesPage.classDetails).toBeDisplayed();
    });
    it('CK-293:Instructor can view the students reponses', async () => {
        await MyClassesPage.open("MyClassesUrl");
        await MyClassesPage.gotoClass();
        await MyClassesPage.goToResponses();
        await expect(MyClassesPage.responsesTitle).toHaveTextContaining('Introduction to Statistics')
    });
    it('CK-294:Instructor can back to My Classes', async () => {
        await MyClassesPage.open("MyClassesUrl");
        await MyClassesPage.gotoClass();
        await MyClassesPage.goBackToMyClasses();
        await expect(MyClassesPage.myClassesTitle).toHaveText('My Classes');
    });
    it('CK-295:Instructor can look the pagination', async () => {
        await MyClassesPage.open("MyClassesUrl");
        await expect(MyClassesPage.pagination).toBeDisplayed();
    });
});