const Page = require('./page');
const LogInPage = require("../pageobjects/login.page");
/**
 * sub page containing specific selectors and methods for a specific page
 */
class Home extends Page {
    /**
     * define selectors using getter methods
     */
    get hamburgerMenu () { return $('.nav-menu > .sidenav-trigger') }
    get homeTitle(){ return $('.info > h3')}
    get linkPreviewMenu () { return $('ul a[href*="/preview"]') }
    get linkLearnMore () { return $('.text > a[href*="/about"]') }
    get btnRequestInstructor () { return $('.info > .btn-request-account') }
    get featuresDisplay() { return $('.feature-display > .header') }
    get btnCardDelivered () { return $('.feature-card > .delivered-via-lms') }
    get btnCardFocus () { return $('.feature-card > .knowledge-transfer') }
    get btnCardPracticing () { return $('.feature-card > .practicing-connections') }
    get btnCardStatistical () { return $('.feature-card > .statistical-modelling') }
    get btnCardComputational () { return $('.feature-card > .computational-approach') }
    get btnCardIntroductionR () { return $('.feature-card > .introduction-to-r') }
    get btnCardJupyter () { return $('.feature-card > .jupyter-integration') }
    get linkCollege () { return $('.learn-more-section > a[href*="/college"]') }
    get linkWantLearn () { return $('.want-to-learn-more') }
    get linkHighSchool () { return $('.learn-more-section > a[href*="/highschool"]') }
    get linkPreviewTheBookFooter () { return $('.footer-links a[href*="/preview/default/program"]') }
    get linkCollegeInstructorsFooter () { return $('.footer-links a[href*="/college"]') }
    get linkHighSchoolTeachersFooter () { return $('.footer-links a[href*="/highschool"]') }
    get linkAboutCourseKataFooter () { return $('.footer-links a[href*="/about"]') }
    get linkContactUsFooter () { return $('p > a:nth-child(12)') }
    get linkGetInTouchFooter () { return $('p > a:nth-child(16)') }
    get labelFirstName() {return $("div.form-row:nth-child(1) > div.form-field:nth-child(1) > label")}
    get inputFirstname () { return $('//input[@name=\'first-name\']') }
    get inputLastname () { return $('//input[@name=\'last-name\']') }
    get inputEmail () { return $('//input[@name=\'email\']') }
    get btnSignUp() { return $('.join-newsletter-btn > .mdc-button__touch') }
    get modalErrorJoinOurEmailList() {return $('div.mdc-dialog.join-newsletter-dialog.error.mdc-dialog--open > div.mdc-dialog__container > div.mdc-dialog__surface')}
    get modalSuccessJoinOurEmailList() {return $('div.mdc-dialog.join-newsletter-dialog.success.mdc-dialog--open > div.mdc-dialog__container')}
    get btnLogIn() { return $('.btn-login > .mdc-button__touch')}
    get btnLogOut () { return $('.btn-logout > .mdc-button__touch')}
    /**
     * a method to encapsule automation code to interact with the page
     */
    async goToMenu(){
        await this.waitAndClick(this.hamburgerMenu);
    }


    async goToLearnMoreAboutCK(){
        await this.waitAndClick(this.linkLearnMore);
    }

    async goToRequestAnInstructorAccount(){
        await this.waitAndClick(this.btnRequestInstructor);
    }

    async isDisplayFeaturesSection(){
        await this.waitAndDisplay(this.featuresDisplay);
    }

    async goToCardDelivered(){
        await this.waitAndClick(this.btnCardDelivered);
    }

    async goToFocusOnUnderstanding(){
        await this.waitAndClick(this.btnCardFocus);
    }

    async goToThePracticingConnectionsApproach(){
        await this.waitAndClick(this.btnCardPracticing);
    }

    async goToStatisticalModelingAtTheCore(){
        await this.waitAndClick(this.btnCardStatistical);
    }

    async goToIntegrationOfJypyter(){
        await this.waitAndClick(this.btnCardJupyter);
    }

    async goToComputationalApproach(){
        await this.waitAndClick(this.btnCardComputational);
    }

    async goToGentleIntroductionToR(){
        await this.waitAndClick(this.btnCardIntroductionR);
    }

    async isDisplayWantToLearnMoreSection(){
        await this.waitAndDisplay(this.linkWantLearn);
    }

    async goToCourseKataForCollege(){
        await this.waitAndClick(this.linkCollege);
    }

    async goToCourseKataForHighSchool(){
        await this.waitAndClick(this.linkHighSchool);
    }

    async goToLogin(){
        await this.waitAndClick(this.btnLogIn);
    }

    async goToLogOut(){
        await this.waitAndClick(this.btnLogOut);
    }

    /**
     * a methods related to footer interactions
     */
    async goToPreviewTheBook(){
        await this.waitAndClick(this.linkPreviewTheBookFooter);
    }

    async goToCollegeInstructors(){
        await this.waitAndClick(this.linkCollegeInstructorsFooter);
    }

    async goToHighSchoolTeachers(){
        await this.waitAndClick(this.linkHighSchoolTeachersFooter);
    }

    async goToAboutCourseKata(){
        await this.waitAndClick(this.linkAboutCourseKataFooter);
    }


    async goToContactUs(){
        await this.waitAndClick(this.linkContactUsFooter);
    }

    async goToGetInTouch(){
        await this.waitAndClick(this.linkGetInTouchFooter);
    }

    /**
     * a methods related to join our email list interactions
     */
    async signUpOnJoinOurEmailList(firstName, lastName, email){
        await this.waitAndTypeOnElement(this.inputFirstname, firstName);
        await this.waitAndTypeOnElement(this.inputLastname, lastName);
        await this.waitAndTypeOnElement(this.inputEmail, email);
        await this.waitAndClick(this.btnSignUp);
    }

    async generalLogin(){
        if (process.env.ROL == "PUBLIC SITE") {
            await expect(this.btnLogIn).toBeDisplayed();
        }else{
            await this.waitAndClick(this.btnLogIn);
            await LogInPage.login(process.env.ROL);
            await expect(this.btnLogOut).toBeDisplayed();
        }
    }
}

module.exports = new Home();