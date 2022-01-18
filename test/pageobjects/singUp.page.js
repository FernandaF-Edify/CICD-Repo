const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class SingUp extends Page {

    /**
     * define selectors using getter methods
     */
    get signUpTitle() {
        return $('div.signup-container > h2')
    }
}

module.exports = new SingUp();