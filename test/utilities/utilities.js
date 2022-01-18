const fs = require("fs");

class Utilities {

    //region Actions
    switchTabByTabNumber(tabNumber) {
        const handle = browser.getWindowHandles();
        browser.switchToWindow(handle[tabNumber - 1]);
    }

    isAlphabeticallySorted(list) {
        const resultList = [];
        for (let i = 0; i < list.length; i++) {
            resultList.push(list[i].getText());
        }
        const resultListSorted = resultList.sort();

        return resultList === resultListSorted;
    }

    logout() {
        browser.deleteAllCookies();
    }

    //endregion


}

module.exports = new Utilities();