const HighSchoolPage = require('../pageobjects/highSchool.page');
const ContactPage = require('../pageobjects/contactUs.page');
const CollegePage = require('../pageobjects/college.page');
const PreviewPage = require('../pageobjects/preview.page');
const SignUpPage = require('../pageobjects/singUp.page');
const AboutPage = require('../pageobjects/about.page');
const LogInPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');

describe('Home Page Test Cases - Public Site', () => {
    it('CK-138:Home page has a hamburger menu', async () => {
        await HomePage.open("HomePageUrl");
        if (process.env.ROL == "PUBLIC SITE") {
            await expect(HomePage.btnLogIn).toBeDisplayed();
        }else{
            await HomePage.goToLogin();
            await LogInPage.login(process.env.ROL);
            await expect(HomePage.btnLogOut).toBeDisplayed();
        }
        await expect(HomePage.homeTitle).toHaveText("CourseKata Statistics & Data Science");
        await HomePage.goToMenu();
        await expect(HomePage.linkPreviewMenu).toBeDisplayed();
    });
    it('CK-139:Home page has a Learn more about CourseKata link', async () => {
        await HomePage.open("HomePageUrl");
        if (process.env.ROL == "PUBLIC SITE") {
            await HomePage.goToLearnMoreAboutCK();
            await expect(AboutPage.aboutPageTitle).toHaveText("About CourseKata");
        }else{
            await HomePage.goToLogin();
            await LogInPage.login(process.env.ROL);
            await HomePage.goToLearnMoreAboutCK();
            await expect(AboutPage.aboutPageTitle).toHaveText("About CourseKata");
        }
    });
    it('CK-140:Home page has a Request an instructor account Button', async () => {
        await HomePage.open("HomePageUrl");
        if (process.env.ROL == "PUBLIC SITE") {
            await HomePage.goToRequestAnInstructorAccount();
            await expect(SignUpPage.signUpTitle).toHaveTitle("CourseKata - Request an Instructor Login");
        }
        else{
            console.log("This test doesn't apply to a private site")
        }
    });
    it('CK-141:Home page displayed the features cards', async () => {
        await HomePage.open("HomePageUrl")
        if (process.env.ROL == "PUBLIC SITE") {
            await HomePage.isDisplayFeaturesSection();
            await expect(HomePage.featuresDisplay).toHaveText('A Modern Approach to Statistics and Data Science')
        }else{
            await HomePage.goToLogin();
            await LogInPage.login(process.env.ROL);
            await expect(HomePage.btnLogOut).toBeDisplayed();
        }
        await HomePage.goToCardDelivered();
        await expect(HomePage.btnCardDelivered).toHaveElementClassContaining("selected"); //Default: selected class
        await HomePage.goToFocusOnUnderstanding();
        await expect(HomePage.btnCardFocus).toHaveElementClassContaining("selected");
        await HomePage.goToThePracticingConnectionsApproach();
        await expect(HomePage.btnCardPracticing).toHaveElementClassContaining("selected");
        await HomePage.goToStatisticalModelingAtTheCore();
        await expect(HomePage.btnCardStatistical).toHaveElementClassContaining("selected");
        await HomePage.goToComputationalApproach();
        await expect(HomePage.btnCardComputational).toHaveElementClassContaining("selected");
        await HomePage.goToGentleIntroductionToR();
        await expect(HomePage.btnCardIntroductionR).toHaveElementClassContaining("selected");
        await HomePage.goToIntegrationOfJypyter();
        await expect(HomePage.btnCardJupyter).toHaveElementClassContaining("selected");
    });
    it('CK-142:Home page redirect to college page', async () => {
        await HomePage.open("HomePageUrl");
        if (process.env.ROL == "PUBLIC SITE") {
            await expect(HomePage.linkWantLearn).toBeDisplayed();
        }else{
            await HomePage.goToLogin();
            await LogInPage.login(process.env.ROL);
            await expect(HomePage.linkWantLearn).toBeDisplayed();
        }
        await HomePage.goToCourseKataForCollege();
        await expect(browser).toHaveUrlContaining("college");
    });
    it('CK-143:Home page redirect to high school page', async () => {
        await HomePage.open("HomePageUrl");
        if (process.env.ROL == "PUBLIC SITE") {
            await HomePage.goToCourseKataForHighSchool();
            await expect(browser).toHaveUrlContaining('highschool');
        }else{
            await HomePage.goToLogin();
            await LogInPage.login(process.env.ROL);
            await HomePage.goToCourseKataForHighSchool();
            await expect(browser).toHaveUrlContaining('highschool');
        }
    });
    it('CK-144:Home page has a footer', async () => {
        if (process.env.ROL == "PUBLIC SITE") {
            await HomePage.open("HomePageUrl");
            await HomePage.goToPreviewTheBook();
            await expect(PreviewPage.previewTitle).toHaveText("Course Preview");
        }else {
            await HomePage.open("HomePageUrl");
            await HomePage.goToLogin();
            await LogInPage.login(process.env.ROL);
        }
        await HomePage.open("HomePageUrl");
        await HomePage.goToCollegeInstructors();
        await expect(CollegePage.collegeTitle).toHaveText("CourseKata for College Students");
        await HomePage.open("HomePageUrl");
        await HomePage.goToHighSchoolTeachers();
        await expect(HighSchoolPage.highSchoolTitle).toHaveText("CourseKata Statistics and Data Science for High School Students");
        await HomePage.open("HomePageUrl");
        await HomePage.goToAboutCourseKata();
        await expect(AboutPage.aboutPageTitle).toHaveText("About CourseKata");
        await HomePage.open("HomePageUrl");
        await HomePage.goToRequestAnInstructorAccount();
        await expect(SignUpPage.signUpTitle).toHaveText("Request an Instructor Login");
        await HomePage.open("HomePageUrl");
        await HomePage.goToContactUs();
        await expect(ContactPage.contactTitle).toHaveText("Contact Us");
        await HomePage.open("HomePageUrl");
        await HomePage.goToGetInTouch();
        await expect(ContactPage.contactTitle).toHaveText("Contact Us");
    });
    it('CK-145:Home page has a join our email list', async () => {
        await HomePage.open("HomePageUrl");
        if (process.env.ROL == "PUBLIC SITE") {
            await HomePage.signUpOnJoinOurEmailList("", "QA Edify Testing", HomePage.randomEmail());
            await expect(HomePage.labelFirstName).toHaveElementClassContaining("--invalid");
        }else {
            await HomePage.goToLogin();
            await LogInPage.login(process.env.ROL);
            await HomePage.signUpOnJoinOurEmailList("", "QA Edify Testing", HomePage.randomEmail());
            await expect(HomePage.labelFirstName).toHaveElementClassContaining("--invalid");
        }
        await HomePage.open("HomePageUrl");
        await HomePage.signUpOnJoinOurEmailList("QA Edify Testing", "QA Edify Testing", "fernanda.fernandez@edify.cr");
        await expect(HomePage.modalErrorJoinOurEmailList).toBeDisplayed();
        await HomePage.open("HomePageUrl");
        await HomePage.signUpOnJoinOurEmailList("QA Edify Testing", "QA Edify Testing", HomePage.randomEmail());
        await expect(HomePage.modalSuccessJoinOurEmailList).toBeDisplayed();
    });
});