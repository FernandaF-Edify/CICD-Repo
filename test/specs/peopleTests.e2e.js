const PeoplePage = require('../pageobjects/people.page');

describe('People Page Test Cases - Public Site', () => {
    it('CK-175:People page has a coursekata team', async () => {
        await PeoplePage.open("PeopleUrl");
        await expect(browser).toHaveUrlContaining('people');
        await PeoplePage.peopleValidation(1,'mailto:jstigler@gmail.com','James Stigler')
        await PeoplePage.peopleValidation(2,'mailto:jiyunson@gmail.com','Ji Yun Son')
        await PeoplePage.peopleValidation(3,'mailto:karen.givvin@gmail.com','Karen Givvin')
        await PeoplePage.peopleValidation(4,'mailto:tchertea@piercecollege.edu','Eddie Tchertchian')
        await PeoplePage.peopleValidation(5,'mailto:adamblake@ucla.edu','Adam Blake')
        await PeoplePage.peopleValidation(6,'mailto:lauracfries@gmail.com','Laura Fries')
        await PeoplePage.peopleValidation(7,'mailto:maryctucker@ucla.edu','Mary Tucker')
        await PeoplePage.peopleValidation(8,'mailto:crdavis25@ucla.edu','Caylor Davis')
        await PeoplePage.peopleValidation(9,'mailto:bwinjum@ucla.edu','Ben Winjum')
        await PeoplePage.peopleValidation(10,'mailto:zhang_yunyi@outlook.com','Icy (Yunyi) Zhang')
        await PeoplePage.peopleValidation(11,'mailto:ccs3z@virginia.edu','Claudia Sutter')
        await PeoplePage.peopleValidation(12,'mailto:ken.sorey@nlet.org','Ken Sorey')
        await PeoplePage.peopleValidation(13,'mailto:phil.daro@gmail.com','Phil Daro')
        await PeoplePage.peopleValidation(14,'mailto:Jhwang@smuhsd.org','Jinna Hwang')
    });
});