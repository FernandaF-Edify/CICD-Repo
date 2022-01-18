const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class MyClasses extends Page {
    /**
     * define selectors using getter methods
     */
    get inputSearch () { return $ ('//input[@name=\'search-input\']')}
    get myClassesLink(){ return $('ul a[href*="/teaching/classes"]')}
    get myClassesTitle () { return $('.subheadline') }
    get actualClass () { return $('body > div.main-wrapper > div > div.data-table.class-list > table > tbody > tr:nth-child(1) > td:nth-child(1)') }
    get btnSearch () { return $ ('.search-btn')}
    get btnFilter () { return $ ('.btn-show-filters')}
    get classType () { return $ ('body > div.main-wrapper > div > div.mdc-dialog.classes-filter-dialog.mdc-dialog--open > div.mdc-dialog__container > div.mdc-dialog__surface > div.mdc-dialog__content > div > div.filters > div > div.class-filter.real-class > div > div:nth-child(2) > input[type=radio]')}
    get btnApply () { return $ ('body > div.main-wrapper > div > div.mdc-dialog.classes-filter-dialog.mdc-dialog--open > div.mdc-dialog__container > div.mdc-dialog__surface > div.mdc-dialog__actions > button:nth-child(2)')}
    get sort () { return $ ('body > div.main-wrapper > div > div.data-table.class-list > table > thead > tr > th:nth-child(1)')}
    get btnNewClass () { return $ ('.btn-new-class')}
    get inputName () { return $ ('//input[@name=\'name\']')}
    get inputDepartment () { return $ ('//input[@name=\'department\']')}
    get thisRealClass () { return $ ('.real-class')}
    get approxStart () { return $ ('.date-picker-start-date')}
    get approxEnd () { return $ ('.date-picker-end-date')}
    get goStartClass () { return $ ('.flatpickr-days')}
    get goEndClass () { return $ ('div.flatpickr-calendar.animate.arrowLeft.arrowBottom.open > div.flatpickr-innerContainer > div > div.flatpickr-days')}
    get inputDescription () { return $ ('div:nth-child(14) > div > label > textarea')}
    get btnCreateClass() { return $ ('.btn-create')}
    get thisTestClass () { return $ ('.test-class')}
    get thisStudyGroupClass () { return $ ('.study-group-class')}
    get btnEdit () { return $ ('.btn-edit')}
    get btnSave () { return $ ('.btn-save')}
    get linkGoBack () { return $ ('.go-back-link')}
    get btnDelete () { return $ ('.btn-delete')}
    get deleteConfirm () { return $ ('#delete-class > div > div.actions > a')}
    get btnCompleteClass () { return $ ('.btn-complete')}
    get btnConfirmComplete () { return $ ('body > div.main-wrapper > div > div.mdc-dialog.mark-as-complete-dialog.yellow-accent.mdc-dialog--open > div.mdc-dialog__container > div.mdc-dialog__surface > div.mdc-dialog__actions > button:nth-child(2)')}
    get statusClasses () { return $ ('.status')}
    get btnActiveClass () { return $ ('.btn-active')}
    get btnConfirmActive () { return $ ('body > div.main-wrapper > div > div.mdc-dialog.mark-as-active-dialog.yellow-accent.mdc-dialog--open > div.mdc-dialog__container > div.mdc-dialog__surface > div.mdc-dialog__actions > button:nth-child(2)')}
    get classDetails () { return $ ('.details')}
    get btnResponses () { return $ ('.btn-response-data')}
    get responsesTitle () { return $ ('.title')}
    get pagination () { return $ ('.pagination')}
    get canvasWizard () { return $ ('div.wizard-step.default.active > div > a:nth-child(2)')}
    get lms () { return $ ('div:nth-child(10) > div > div > div.mdc-select__anchor')}
    get moodleLms () { return $ (' div.mdc-select__menu.mdc-menu.mdc-menu-surface.mdc-menu-surface--fullwidth.mdc-menu-surface--open.mdc-menu-surface--is-open-below > ul > li:nth-child(2)')}
    get moodleWizard () { return $ ('div.wizard-step.default.active > a:nth-child(3)')}
    get blackBoardLms () { return $ ('div.mdc-select__menu.mdc-menu.mdc-menu-surface.mdc-menu-surface--fullwidth.mdc-menu-surface--open.mdc-menu-surface--is-open-below > ul > li:nth-child(3)')}
    get blackBoardWizard () { return $ ('div.wizard-step.default.active > a:nth-child(3)')}
    get canvasLms () { return $ ('div.mdc-select__menu.mdc-menu.mdc-menu-surface.mdc-menu-surface--fullwidth.mdc-menu-surface--open.mdc-menu-surface--is-open-below > ul > li:nth-child(1)')}

    /**
     * a method to encapsule automation code to interact with the page
     */
    async Search(text) {
        await this.waitAndClick(this.inputSearch);
        await this.waitAndTypeOnElement(this.inputSearch,text);
        await this.waitAndClick(this.btnSearch);
    }
    async goToMyClasses() {
        await  this.waitAndClick(this.myClassesLink);
    }
    async goToFilter(){
        await this.waitAndClick(this.btnFilter);
    }
    async classesFilter(){
        await this.waitAndClick(this.classType);
        await this.waitAndClick(this.btnApply);
    }
    async gotoSort(){
        await this.waitAndClick(this.sort);
    }
    async gotoNewClass(){
        await this.waitAndClick(this.btnNewClass);
    }
    async createRealClass(text){
        await this.waitAndClick(this.inputName);
        await this.waitAndTypeOnElement(this.inputName,text);
        await this.waitAndClick(this.inputDepartment);
        await this.waitAndTypeOnElement(this.inputDepartment,text);
        await this.waitAndClick(this.thisRealClass);
        await this.waitAndClick(this.approxStart);
        await this.waitAndClick(this.goStartClass);
        await this.waitAndClick(this.approxEnd);
        await this.waitAndClick(this.goEndClass);
        await this.waitAndClick(this.inputDescription);
        await this.waitAndTypeOnElement(this.inputDescription,text);
        await this.waitAndClick(this.btnCreateClass);
    }
    async createTestClass(textarea,text){
        await this.waitAndTypeOnElement(this.inputDescription,textarea);
        await this.waitAndClick(this.inputDepartment);
        await this.waitAndClick(this.inputName);
        await this.waitAndTypeOnElement(this.inputName,text);
        await this.waitAndClick(this.inputDescription);
        await this.waitAndTypeOnElement(this.inputDepartment,text);
        await this.waitAndClick(this.thisTestClass);
        await this.waitAndClick(this.btnCreateClass);
    }
    async createStudyClass(textarea,text){
        await this.waitAndTypeOnElement(this.inputDescription,textarea);
        await this.waitAndClick(this.inputDepartment);
        await this.waitAndClick(this.inputName);
        await this.waitAndTypeOnElement(this.inputName,text);
        await this.waitAndClick(this.inputDescription);
        await this.waitAndTypeOnElement(this.inputDepartment,text);
        await this.waitAndClick(this.thisStudyGroupClass);
        await this.waitAndClick(this.btnCreateClass);
    }
    async goToEdit(text){
        await this.waitAndClick(this.actualClass);
        await this.waitAndClick(this.btnEdit);
        await this.waitAndClick(this.inputName)
        await this.waitAndTypeOnElement(this.inputName,text)
        await this.waitAndClick(this.btnSave)
    }
    async goToClass(){
        await this.waitAndClick(this.actualClass);
    }
    async goBackToMyClasses(){
        await this.waitAndClick(this.linkGoBack);
    }
    async goToDeleteClass(){
        await this.waitAndClick(this.actualClass);
        await this.waitAndClick(this.btnEdit);
        await this.waitAndClick(this.btnDelete);
        await this.waitAndClick(this.deleteConfirm);
    }
    async gotoClass(){
        await this.waitAndClick(this.actualClass);
    }
    async goToCanvasLms(){
        await this.waitAndClick(this.btnEdit);
        await this.waitAndClick(this.lms);
        await this.waitAndClick(this.canvasLms);
        await this.waitAndClick(this.btnSave);
    }
    async gotoMoodleWizard(){
        await this.waitAndClick(this.actualClass);
        await this.waitAndClick(this.btnEdit);
        await this.waitAndClick(this.lms);
        await this.waitAndClick(this.moodleLms);
        await this.waitAndClick(this.btnSave);
    }
    async gotoBlackboardWizard(){
        await this.waitAndClick(this.actualClass);
        await this.waitAndClick(this.btnEdit);
        await this.waitAndClick(this.lms);
        await this.waitAndClick(this.blackBoardLms);
        await this.waitAndClick(this.btnSave);
    }
    async gotoCompleteClass(){
        await this.waitAndClick(this.btnCompleteClass);
        await this.waitAndClick(this.btnConfirmComplete);
    }
    async gotoActiveClass(){
        await this.waitAndClick(this.btnActiveClass);
        await this.waitAndClick(this.btnConfirmActive);
    }
    async goToResponses(){
        await this.waitAndClick(this.btnResponses);
    }
}

module.exports = new MyClasses();