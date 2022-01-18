const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class College extends Page {
    /**
     * define selectors using getter methods
     */
    get collegeTitle() { return $('section:nth-child(1) > section.school-header > div > h3') }
    get btnRequestAccount() { return $('.info > .btn-request-account') }
    get linkDownloadObjectives() { return $('.text > a[href$="https://coursecraft-assets.s3-us-west-1.amazonaws.com/Learning-Goals_Assessment-Objectives-6.0.pdf"]') }
    get linkDownloadTopics() { return $('a[href$="https://coursecraft-assets.s3.us-west-1.amazonaws.com/CourseKata+Topics+Covered.pdf"]') }
    get courseKataInAction () { return $('.course-in-action > .title')}
    get aNextImage() { return $('.slideshow-viewer > .next') }
    get aPrevImage() { return $('.slideshow-viewer > .prev') }
    get linkHere() { return $('.text > a[href$="https://app.simplenote.com/p/y1V0P3"]') }
    get cKProfessionalTitle() { return $('img[src="https://i.postimg.cc/tXcF0nzD/Course-Kata-logo.png"]')}
    get Calendar() { return $('.fc-media-screen') }
    get btnToday() { return $('.fc-today-button') }
    get btnPrevCalendar() { return $('.fc-button > .fc-icon-chevron-left') }
    get btnNextCalendar() { return $('.fc-button > .fc-icon-chevron-right') }
    get btnContact() { return $('.have-questions >a[href*="/contact-us"]') }
    get logosUcla() { return $( 'img[src="img/college/logos/ucla.svg"]')}
    get logoPierceCollege() { return $( 'img[src="img/college/logos/la-pierce-college.svg"]')}
    get logoCalStateLA() { return $( 'img[src="img/college/logos/cal-state-la.svg"]')}
    get logoNationalUniversity() { return $('img[src="img/college/logos/national-university.svg"]' )}
    get logoEasternUniversity() { return $( 'img[src="img/college/logos/eastern-michigan-university.png"]')}
    get logoForLewisCollege() { return $('img[src="img/college/logos/fort-lewis-college.png"]' )}
    get londonSchool() { return $('img[src="img/college/logos/london-school-economics.png"]' )}
    get logoCSUSB() { return $( 'img[src="img/college/logos/csusb.png"]')}
    get logoIrvineCollege() { return $( 'img[src="img/college/logos/irvine-valley-college.svg"]')}
    get logoUCSanDiego() { return $( 'img[src="img/college/logos/uc-san-diego.png"]')}
    get logoWorcesterInstitute() { return $( 'img[src="img/college/logos/worcester-polytechnic-institute.png"]')}
    get logoTuftsUniversity() { return $( 'img[src="img/college/logos/tufts.png"]')}
    get logoBrighamUniversity() { return $( 'img[src="img/college/logos/byu.png"]')}
    get logoSanJoseUniversity() { return $( 'img[src="img/college/logos/san-jose-state-university.png"]')}
    get logoAuburnUniversity() { return $( 'img[src="img/college/logos/auburn-university.png"]')}
    get logoCityUniversityNewYork() { return $( 'img[src="img/college/logos/cuny.png"]')}
    get logoIowaUniversity() { return $( 'img[src="img/college/logos/iowa-state-university.png"]')}

    /**
     * a method to encapsule automation code to interact with the page
     */
    async goToRequestAnInstructorAccount() {
        await this.waitAndClick(this.btnRequestAccount);
    }

    async goToCKProfessionalPage() {
        this.pageUrl = 'https://app.simplenote.com/p/y1V0P3'
        return browser.url(this.pageUrl);
    }
    async goToObjectives() {
        await this.waitAndClick(this.linkDownloadObjectives);
    }
    async goToTopics() {
        await this.waitAndClick(this.linkDownloadTopics);
    }
    async isDisplayCourseKataInAction() {
        await this.waitAndDisplay(this.courseKataInAction);
    }
    async goToNextImage(){
        await this.waitAndClick(this.aNextImage);
    }
    async goToPrevImage(){
        await this.waitAndClick(this.aPrevImage);
    }
    async goToStudyGroup() {
        await this.waitAndClick(this.linkHere);
    }
    async goToHaveQuestions() {
        await this.waitAndClick(this.btnContact);
    }
    async isDisplayCalendarEvents(){
        await this.waitAndDisplay(this.Calendar);
    }
    async goToCalendarEventsNext(){
        await this.waitAndClick(this.btnNextCalendar);
    }
    async goToCalendarEventsPrev(){
        await this.waitAndClick(this.btnPrevCalendar);
    }
    async isDisplayLogosUcla() {
        await this.waitAndDisplay(this.logosUcla);
    }
    async isDisplayLogoPierceCollege() {
        await this.waitAndDisplay(this.logoPierceCollege);
    }
    async isDisplayLogoCalStateLA() {
        await this.waitAndDisplay(this.logoCalStateLA);
    }
    async isDisplayLogoNationalUniversity() {
        await this.waitAndDisplay(this.logoNationalUniversity);
    }
    async isDisplayLogoEasternUniversity() {
        await this.waitAndDisplay(this.logoEasternUniversity);
    }
    async isDisplayLogoForLewisCollege() {
        await this.waitAndDisplay(this.logoForLewisCollege);
    }
    async isDisplayLogoLondonSchool() {
        await this.waitAndDisplay(this.londonSchool);
    }
    async isDisplayLogoCSUSB() {
        await this.waitAndDisplay(this.logoCSUSB);
    }
    async isDisplayLogoIrvineCollege() {
        await this.waitAndDisplay(this.logoIrvineCollege);
    }
    async isDisplayLogoUCSanDiego() {
        await this.waitAndDisplay(this.logoUCSanDiego);
    }
    async isDisplayLogoWorcesterInstitute() {
        await this.waitAndDisplay(this.logoWorcesterInstitute);
    }
    async isDisplayLogoTuftsUniversity() {
        await this.waitAndDisplay(this.logoTuftsUniversity);
    }
    async isDisplayLogoBrighamUniversity() {
        await this.waitAndDisplay(this.logoBrighamUniversity);
    }
    async IsDisplayLogoSanJoseUniversity() {
        await this.waitAndDisplay(this.logoSanJoseUniversity);
    }
    async isDisplayLogoAuburnUniversity() {
        await this.waitAndDisplay(this.logoAuburnUniversity);
    }
    async isDisplayLogoCityUniversityNewYork() {
        await this.waitAndDisplay(this.logoCityUniversityNewYork);
    }
    async IsDisplayLogoIowaUniversity() {
        await this.waitAndDisplay(this.logoIowaUniversity);
    }
}
module.exports = new College();