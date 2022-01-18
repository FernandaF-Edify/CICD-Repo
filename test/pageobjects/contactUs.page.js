const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ContactUs extends Page {
    /**
     * define selectors using getter methods
     */
    get contactTitle() { return $ ('.contact-us> h4')}
    get inputFirstnameContact() {return $('//input[@name=\'firstName\']')}
    get inputLastnameContact() {return $('//input[@name=\'lastName\']')}
    get inputEmailContact() {return $('//input[@name=\'email\']')}
    get textareaHelperText() {return $('//textarea[@name=\'message\']')}
    get btnSendContact() {return $('.mdc-touch-target-wrapper> .btn-send')}

    /**
     * define methods for this page
     */
    async doContactUs(email){
        await this.waitAndTypeOnElement(this.inputFirstnameContact, "QA Testing Edify");
        await this.waitAndTypeOnElement(this.inputLastnameContact, "QA Testing Edify");
        await this.waitAndTypeOnElement(this.inputEmailContact, email);
        await this.waitAndTypeOnElement(this.textareaHelperText, "QA Testing Edify");
    }

}
module.exports = new ContactUs();