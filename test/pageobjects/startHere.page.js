const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class StartHere extends Page {
    /**
     * define selectors using getter methods
     */
    get startHereTitle() { return $ ('.info > .headline')}
    get startHereLink(){ return $('ul a[href*="/teaching/start-here"]')}
    get classLink() { return $ ('.cta-text')}
    /**
     * define methods for this page
     */
    async goToStartHere(){
        await this.waitAndClick(this.startHereLink);
    }
    async goToLinkClass(){
        await this.waitAndClick(this.classLink);
    }

}
module.exports = new StartHere();