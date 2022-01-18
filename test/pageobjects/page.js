const fs = require("fs");
const randomEmail = require("random-email");
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(dataSetUrl) {
        browser.maximizeWindow();
        const obj = fs.readFileSync("test/resources/pagesDataSet.json");
        const parse = JSON.parse(obj);
        return browser.url(parse[dataSetUrl]);
    }

    async waitAndTypeOnElement(selector, value){
        await selector.waitForDisplayed();
        await selector.setValue(value);
    }

    async waitAndClick(selector){
        await selector.waitForClickable();
        await selector.click();
    }

    async waitAndDisplay(selector){
        await selector.waitForDisplayed();
        await selector.isDisplayed();
    }

    async windowsHandle(positionPage) {
        const [windowsHandle] = await Promise.all([browser.getWindowHandles()])
        await browser.switchToWindow(windowsHandle[positionPage]);
    }

    async randomEmail(){
        const email = randomEmail({domain:'edify.cr'});
        return email;
    }
}