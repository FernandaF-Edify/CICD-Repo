const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class HighSchool extends Page {
    /**
     * define selectors using getter methods
     */
    get highSchoolTitle () { return $('.school.highschool > .school-header > .info > h3') }
    get linkDownloadObjectives () { return $('.text > a[href$="https://coursecraft-assets.s3-us-west-1.amazonaws.com/Learning-Goals_Assessment-Objectives-6.0.pdf"]') }
    get linkDownloadTopics () { return $('.text > a[href$="https://coursecraft-assets.s3.us-west-1.amazonaws.com/CourseKata+Topics+Covered.pdf"]') }
    get linkFaq () { return $('.text > a[href$="https://docs.google.com/document/d/1oetJUTin03CeUpA_bcRDXzgiaz0oOr0Vt5RA4AWOFq0/edit"]') }
    get btnContact () { return $('.contact-container >a[href*="/contact-us"]') }
    get courseKataAction() { return $ ('.course-in-action > .title')}
    get NextCkAction () { return $('.slideshow-viewer > .next') }
    get PrevCkAction () { return $('.slideshow-viewer > .prev') }
    get cKProfessionalTitle() { return $('img[src="https://i.postimg.cc/tXcF0nzD/Course-Kata-logo.png"]')}
    get Calendar() { return $('.fc-media-screen') }
    get btnToday() { return $('.fc-today-button') }
    get logoSanDiegoSchool() { return $('img[src="img/highschool/logos/san-diego-union-high.png"]') }
    get logoSanMateoSchool() { return $('img[src="img/highschool/logos/san-mateo-union-high.png"]') }
    get logoSaddleBackSchool() { return $('img[src="img/highschool/logos/saddleback-valley-usd.png"]') }
    get linkDataScience () { return $('.text > a[href$="https://www.datascience4everyone.org/"]') }
    get sectionHearTheStoryOfSanDiego () { return $('div.coursekata-card.video-card') }
    get video () { return $('.video-container') }
    get linkHere () { return $('.text > a[href^="https://app.simplenote.com/p/y1V0P3"]') }
    get btnPrevCalendar () { return $('.fc-button > .fc-icon-chevron-left') }
    get btnNextCalendar () { return $('.fc-button > .fc-icon-chevron-right') }

    /**
     * a method to encapsule automation code to interact with the page
     */
    async goToCKProfessionalPage() {
        this.pageUrl = 'https://app.simplenote.com/p/y1V0P3'
        return browser.url(this.pageUrl);
    }
    async goToOutcomesObjectives() {
        await this.waitAndClick(this.linkDownloadObjectives);
    }
    async goToOutcomesTopics() {
        await this.waitAndClick(this.linkDownloadTopics);
    }
    async goToFaq() {
        await this.waitAndClick(this.linkFaq);
    }
    async goToHaveQuestions () {
        await this.waitAndClick(this.btnContact);
    }
    async isDisplayCourseKataInAction() {
        await this.waitAndDisplay(this.courseKataAction);
    }
    async goToStudyGroup() {
        await this.waitAndClick(this.linkHere);
    }
    async goToCalendar(){
        await this.waitAndDisplay(this.Calendar);
    }
    async goToCalendarNext(){
        await this.waitAndClick(this.btnNextCalendar);
    }
    async goToCalendarPrev(){
        await this.waitAndClick(this.btnPrevCalendar);
    }
    async isDisplaySanDiegoSchool() {
        await this.waitAndDisplay(this.logoSanDiegoSchool);
    }
    async isDisplaySanMateoSchool() {
        await this.waitAndDisplay(this.logoSanMateoSchool);
    }
    async isDisplaySaddleBackSchool() {
        await this.waitAndDisplay(this.logoSaddleBackSchool);
    }
    async isDisplaySectionHearTheStoryOfSanDiego() {
        await this.waitAndDisplay(this.sectionHearTheStoryOfSanDiego);
    }
    async goToDataScience() {
        await this.waitAndClick(this.linkDataScience);
    }
}

module.exports = new HighSchool();