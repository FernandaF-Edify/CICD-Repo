const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class Publications extends Page {
    /**
    * define selectors using getter methods
    */
    get linkDownloadPublication () { return $('.publication > .download-link') }

    /**
     * a method to encapsule automation code to interact with the page
     */
    async goToDownloadPublications(){
        await this.waitAndClick(this.linkDownloadPublication)
    }
}

module.exports = new Publications();