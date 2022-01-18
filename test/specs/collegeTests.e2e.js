const ContactPage = require("../pageobjects/contactUs.page");
const CollegePage = require("../pageobjects/college.page");
const SignUpPage = require("../pageobjects/singUp.page");

describe('College Page Test Cases - Public Site', () => {
    it('CK-157:College page has a Request an instructor account Button', async () => {
        await CollegePage.open("CollegePageUrl");
        await expect(CollegePage.collegeTitle).toHaveText("CourseKata for College Students");
        await CollegePage.goToRequestAnInstructorAccount();
        await expect(SignUpPage.signUpTitle).toHaveTitle('CourseKata - Request an Instructor Login');
    });
    it('CK-158:College page has a course learning outcomes', async () => {
        await CollegePage.open("CollegePageUrl");
        await CollegePage.goToObjectives();
        await CollegePage.windowsHandle(1)
        await expect(browser).toHaveUrl('https://coursecraft-assets.s3-us-west-1.amazonaws.com/Learning-Goals_Assessment-Objectives-6.0.pdf');
        await CollegePage.windowsHandle(0)
        await CollegePage.goToTopics();
        await CollegePage.windowsHandle(2)
        await expect(browser).toHaveUrl('https://coursecraft-assets.s3.us-west-1.amazonaws.com/CourseKata+Topics+Covered.pdf');
    });
    it('CK-159:College page has a coursekata in action', async () => {
        await CollegePage.open("CollegePageUrl");
        await CollegePage.isDisplayCourseKataInAction();
        await expect(CollegePage.courseKataInAction).toHaveText('COURSEKATA IN ACTION');
        await CollegePage.goToNextImage();
        await expect(CollegePage.aNextImage).toBeDisplayed();
        await CollegePage.goToPrevImage();
        await expect(CollegePage.aPrevImage).toBeDisplayed();
    });
    it('CK-160:College page has information according study groups', async () => {
        await CollegePage.open("CollegePageUrl");
        await CollegePage.goToStudyGroup();
        await expect(CollegePage.linkHere).toBeDisplayed();
        await CollegePage.goToCKProfessionalPage();
        await expect(CollegePage.cKProfessionalTitle).toHaveAttribute("alt","Course-Kata-logo.png");
    });
    it('CK-161:College page has a calendar events', async () => {
        await CollegePage.open("CollegePageUrl");
        await CollegePage.isDisplayCalendarEvents();
        await expect(CollegePage.btnToday).toHaveText("today");
        await CollegePage.goToCalendarEventsPrev();
        await expect(CollegePage.btnPrevCalendar).toBeDisplayed();
        await CollegePage.goToCalendarEventsNext();
        await expect(CollegePage.btnNextCalendar).toBeDisplayed();
    });
    it('CK-162:College page has a questions', async () => {
        await CollegePage.goToHaveQuestions();
        await expect(ContactPage.contactTitle).toHaveTitle('CourseKata - Contact Us');
    });
    it('CK-163:College page has a logos', async () => {
        await CollegePage.open("CollegePageUrl");
        await CollegePage.isDisplayLogosUcla();
        await expect(CollegePage.logosUcla).toHaveAttribute("alt","UCLA logo");
        await CollegePage.isDisplayLogoPierceCollege();
        await expect(CollegePage.logoPierceCollege).toHaveAttribute("alt","Los Angeles Pierec College logo");
        await CollegePage.isDisplayLogoCalStateLA();
        await expect(CollegePage.logoCalStateLA).toHaveAttribute("alt","Cal State LA logo");
        await CollegePage.isDisplayLogoNationalUniversity();
        await expect(CollegePage.logoNationalUniversity).toHaveAttribute("alt","National University logo");
        await CollegePage.isDisplayLogoEasternUniversity();
        await expect(CollegePage.logoEasternUniversity).toHaveAttribute("alt","Eastern Michigan University logo");
        await CollegePage.isDisplayLogoForLewisCollege();
        await expect(CollegePage.logoForLewisCollege).toHaveAttribute("alt","Fort Lewis College logo");
        await CollegePage.isDisplayLogoLondonSchool();
        await expect(CollegePage.londonSchool).toHaveAttribute("alt","London School of Economics and Political Science logo");
        await CollegePage.isDisplayLogoCSUSB();
        await expect(CollegePage.logoCSUSB).toHaveAttribute("alt","Cal State San Bernardino logo");
        await CollegePage.isDisplayLogoIrvineCollege();
        await expect(CollegePage.logoIrvineCollege).toHaveAttribute("alt","Irvine Valley College logo");
        await CollegePage.isDisplayLogoUCSanDiego();
        await expect(CollegePage.logoUCSanDiego).toHaveAttribute("alt","UC San Diego logo");
        await CollegePage.isDisplayLogoWorcesterInstitute();
        await expect(CollegePage.logoWorcesterInstitute).toHaveAttribute("alt","Worcester Polytechnic Institute logo");
        await CollegePage.isDisplayLogoTuftsUniversity();
        await expect(CollegePage.logoTuftsUniversity).toHaveAttribute("alt","Tufts University logo");
        await CollegePage.isDisplayLogoBrighamUniversity();
        await expect(CollegePage.logoBrighamUniversity).toHaveAttribute("alt","Brigham Young University logo");
        await CollegePage.IsDisplayLogoSanJoseUniversity();
        await expect(CollegePage.logoSanJoseUniversity).toHaveAttribute("alt","San José State University' logo");
        await CollegePage.isDisplayLogoAuburnUniversity();
        await expect(CollegePage.logoAuburnUniversity).toHaveAttribute("alt","Auburn University logo");
        await CollegePage.isDisplayLogoCityUniversityNewYork();
        await expect(CollegePage.logoCityUniversityNewYork).toHaveAttribute("alt","The City University of New York logo");
        await CollegePage.IsDisplayLogoIowaUniversity();
        await expect(CollegePage.logoIowaUniversity).toHaveAttribute("alt","Iowa State University logo");
    });
});