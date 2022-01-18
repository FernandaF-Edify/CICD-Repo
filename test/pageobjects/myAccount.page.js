const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class MyAccount extends Page {
    /**
     * define selectors using getter methods
     */
    get myAccountLink(){ return $('ul a[href*="/my-account"]')}
    get hamburgerMenu () { return $('.nav-menu > .sidenav-trigger') }
    get myAccountTitle () { return $('.form-container > .headline') }
    get accountType () { return $('div.main-wrapper > div > div > p:nth-child(4)') }
    get btnLogout () { return $('.btn-logout') }
    get inputFirstName () { return $('//input[@name=\'firstName\']')}
    get btnUpdate () { return $('div.main-wrapper > div > div > form > div.form-actions > button') }
    get btnChangePassword() { return $('#change-password-btn') }
    get inputPassword () { return $('//input[@name=\'password\']')}
    get btnSetPassword () { return $('.reset-pwd-btn')}

    /**
     * a method to encapsule automation code to interact with the page
     */
    async goToMenu (){
        await  this.waitAndClick(this.hamburgerMenu);
    }
    async goToMyAccount() {
        await  this.waitAndClick(this.myAccountLink);
    }
    async updateInfo(text) {
        await this.waitAndClick(this.inputFirstName);
        await this.waitAndTypeOnElement(this.inputFirstName,text);
        await this.waitAndClick(this.btnUpdate);
    }
    async changePassword(password) {
        await this.waitAndClick(this.btnChangePassword)
        await this.waitAndClick(this.inputPassword);
        await this.waitAndTypeOnElement(this.inputPassword,password);
        await this.waitAndClick(this.btnSetPassword);
    }
    async isDisplayAccountType() {
        await  this.waitAndDisplay(this.accountType);
    }
    async goToLogOut() {
        await  this.waitAndClick(this.btnLogout);
    }
}

module.exports = new MyAccount();