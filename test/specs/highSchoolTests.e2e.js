const HighSchoolPage = require('../pageobjects/highSchool.page');
const ContactUsPage = require('../pageobjects/contactUs.page')

describe('High School Page Test Cases - Public Site', () => {
    it('CK-164:High school page has a course learning outcomes', async () => {
        await HighSchoolPage.open("HighSchoolUrl");
        await expect(browser).toHaveUrlContaining('highschool');
        await HighSchoolPage.goToOutcomesObjectives();
        await HighSchoolPage.windowsHandle(1);
        await expect(browser).toHaveUrl('https://coursecraft-assets.s3-us-west-1.amazonaws.com/Learning-Goals_Assessment-Objectives-6.0.pdf');
        await HighSchoolPage.windowsHandle(0);
        await HighSchoolPage.goToOutcomesTopics();
        await HighSchoolPage.windowsHandle(2);
        await expect(browser).toHaveUrl('https://coursecraft-assets.s3.us-west-1.amazonaws.com/CourseKata+Topics+Covered.pdf');
        await HighSchoolPage.windowsHandle(0);
    });
    it('CK-165:High school page has FAQ', async () => {
        await HighSchoolPage.open("HighSchoolUrl");
        await HighSchoolPage.goToFaq();
        await HighSchoolPage.windowsHandle(3);
        await expect(browser).toHaveUrl('https://docs.google.com/document/d/1oetJUTin03CeUpA_bcRDXzgiaz0oOr0Vt5RA4AWOFq0/edit');
        await HighSchoolPage.windowsHandle(0);
    });
    it('CK-166:High school page has a questions', async () => {
        await HighSchoolPage.open("HighSchoolUrl");
        await HighSchoolPage.goToHaveQuestions();
        await expect(ContactUsPage.contactTitle).toHaveTitle( 'CourseKata - Contact Us');
    });
    it('CK-167:High school page has a coursekata in action', async () => {
        await HighSchoolPage.open("HighSchoolUrl");
        await HighSchoolPage.isDisplayCourseKataInAction();
        await expect(HighSchoolPage.courseKataAction).toHaveText('COURSEKATA IN ACTION');
        await HighSchoolPage.NextCkAction;
        await expect(HighSchoolPage.NextCkAction).toBeDisplayed();
        await HighSchoolPage.PrevCkAction;
        await expect(HighSchoolPage.PrevCkAction).toBeDisplayed();
    });
    it('CK-168:High school page has information according study groups', async () => {
        await HighSchoolPage.goToStudyGroup();
        await expect(HighSchoolPage.linkHere).toBeDisplayed();
        await HighSchoolPage.goToCKProfessionalPage();
        await expect(HighSchoolPage.cKProfessionalTitle).toHaveAttribute("alt","Course-Kata-logo.png");
    });
    it('CK-169:High school page has a calendar events', async () => {
        await HighSchoolPage.open("HighSchoolUrl");
        await HighSchoolPage.goToCalendar();
        await expect(HighSchoolPage.btnToday).toHaveText("today");
        await HighSchoolPage.goToCalendarNext();
        await expect(HighSchoolPage.btnPrevCalendar).toBeDisplayed();
        await HighSchoolPage.goToCalendarPrev();
        await expect(HighSchoolPage.btnNextCalendar).toBeDisplayed();
    });
    it('CK-170:High school page has a logos', async () => {
        await HighSchoolPage.isDisplaySanDiegoSchool();
        await expect(HighSchoolPage.logoSanDiegoSchool).toHaveAttribute("alt","San Diego Union High logo");
        await HighSchoolPage.isDisplaySanMateoSchool();
        await expect(HighSchoolPage.logoSanMateoSchool.toHaveText('San Mateo Union High logo'));
        await HighSchoolPage.isDisplaySaddleBackSchool();
        await expect(HighSchoolPage.logoSaddleBackSchool).toHaveAttribute("alt","Saddleback Valley USD logo");
    });
    it('CK-637:High school page has a video', async () => {
        await HighSchoolPage.open("HighSchoolUrl");
        await HighSchoolPage.isDisplaySectionHearTheStoryOfSanDiego();
        await expect(HighSchoolPage.video).toBeExisting();
    });
    it('CK-649:High school page has a Data Science 4 Everyone link', async () => {
        await HighSchoolPage.open("HighSchoolUrl");
        await HighSchoolPage.goToDataScience();
        await expect(HighSchoolPage.linkDataScience).toBeDisplayed();
    });
});