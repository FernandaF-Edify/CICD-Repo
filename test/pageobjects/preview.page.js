const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class Preview extends Page {
    /**
     * define selectors using getter methods
     */
    get previewTitle(){ return $('div.preview-content > div.preview-title > h3')}
    get courseOutlineTitle(){ return $('div.mdc-dialog.course-outline.public.mdc-dialog--open.mdc-dialog--scrollable > div.mdc-dialog__container > div.mdc-dialog__surface > h2')}
    get coursePreview() {return $('div.disclaimer > div.content > p.text')}
    get coursePreviewClickHere () { return $('.text > a[href*="/signup"]')}
    get gettingStartedStudentSurveyLesson () { return $('div.course-content > div:nth-child(1) > ul > li:nth-child(1) > a')}
    get openOutlineIcon () { return $('.open-outline-icon')}
    get btnLessonMenuOk() {return $('.mdc-ripple-upgraded--foreground-activation > .mdc-button__ripple')}
    get lessonTitle() {return $('div.course-content > div > h2')}
    get learnosityQuestion() {return $('span.item-id')}
    get linkToLesson_1_6 () { return $('a[href^="/preview/version/0ea12f05-dce8-4b7c-a6ad-5950ec4a57bb/lesson/3/6"]')}
    get linkToLesson_2_2 () { return $('a[href^="/preview/version/0ea12f05-dce8-4b7c-a6ad-5950ec4a57bb/lesson/4/2"]')}
    get linkToLesson_2_3 () { return $('a[href^="/preview/version/0ea12f05-dce8-4b7c-a6ad-5950ec4a57bb/lesson/4/3"]')}
    get linkToLesson_2_4 () { return $('a[href^="/preview/version/0ea12f05-dce8-4b7c-a6ad-5950ec4a57bb/lesson/4/4"]')}
    get linkToLesson_2_6 () { return $('a[href^="/preview/version/0ea12f05-dce8-4b7c-a6ad-5950ec4a57bb/lesson/4/6"]')}
    get linkToLesson_2_10 () { return $('a[href^="/preview/version/0ea12f05-dce8-4b7c-a6ad-5950ec4a57bb/lesson/4/10"]')}
    get linkToLesson_3_0 () { return $('a[href^="/preview/version/0ea12f05-dce8-4b7c-a6ad-5950ec4a57bb/lesson/5/0"]')}
    get linkToLesson_4_2 () { return $('a[href^="/preview/version/0ea12f05-dce8-4b7c-a6ad-5950ec4a57bb/lesson/6/2"]')}
    get dataCampQuestion() {return $('#ch2-15-container')}
    get vimeoVideo() {return $('body.vimeo')}
    get btnNextLesson() {return $('.button.next')}
    get btnPreviewLesson() {return $('body > div.main-wrapper > div > div.lesson-nav > a.button.previous')}

    /**
     * a method to encapsule automation code to interact with the page
     */
    goToQuestionFrame(frameName) {
        return $(`//iframe[@id="${frameName}"]`)
    }

    async goToCoursePreviewClickHere(){
        await this.waitAndClick(this.coursePreviewClickHere)
    }

    async goToGettingStartedStudentSurveyLesson(){
        await this.waitAndClick(this.gettingStartedStudentSurveyLesson)
    }

    async goToLessonMenu(){
        await this.waitAndClick(this.openOutlineIcon)
    }

    async goToLesson(lessonNumber){
        await this.waitAndClick(lessonNumber)
    }

    async goToNextLesson(){
        await this.waitAndClick(this.btnNextLesson)
    }

    async goToPreviousLesson(){
        await this.waitAndClick(this.btnPreviewLesson)
    }
}

module.exports = new Preview();