const Page = require('./page');
const fs = require("fs");
/**
 * sub page containing specific selectors and methods for a specific page
 */
class Login extends Page {
    /**
     * define selectors using getter methods
     */
    get loginTitle() { return $('div.login-container > h2')}
    get inputEmail () { return $('//input[@name=\'username\']')}
    get inputPassword () { return $('//input[@name=\'password\']')}
    get btnLogIn () { return $('.login-btn > span')}
    get linkRequestAnInstructor () { return $('p.text > a[href*="/signup"]')}

    /**
     * a method to encapsule automation code to interact with the page
     */
    async login(dataSetName){
        const obj = fs.readFileSync("test/resources/userDataSet.json");
        const parse = JSON.parse(obj);
        const dataSetRows = parse[dataSetName]
        const emailValue = dataSetRows["email"];
        const passwordValue = dataSetRows["password"];
        await this.waitAndClick(this.inputEmail);
        await this.waitAndTypeOnElement(this.inputEmail,emailValue);
        await this.waitAndClick(this.inputPassword)
        await this.waitAndTypeOnElement(this.inputPassword, passwordValue);
        await this.waitAndClick(this.btnLogIn);
    }

    async goToLinkRequestAnInstructor(){
        await this.waitAndClick(this.linkRequestAnInstructor);
    }
}

module.exports = new Login();