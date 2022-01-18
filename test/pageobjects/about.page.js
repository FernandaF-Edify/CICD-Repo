const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class About extends Page {
    /**
     * define selectors using getter methods
     */
    get aboutPageTitle(){ return $('div.info:nth-child(1) > h3')}
    get linkBetterBook () { return $('.text > a[href$="https://uclatall.com/pdfs/The%20%E2%80%9CBetter%20Book%E2%80%9D%20Approach%20for%20Education.pdf"]') }
    get btnPlayVideo () { return $('section:nth-child(2) > section.video > div.card-container.video-card-container')}
    get linkPolicesS () { return $('a[href^="https://docs.google.com/document/d/1mfFE82uaKXDTIBWWaKsxUfRkCfpvbXtBUtpVi45nT9s/edit"]') }
    get linkPolicesI () { return $('a[href^="https://docs.google.com/document/d/1A12kl76O_ZGso5hCX_TyQDWFCqE7WbtRevlUPe1JI5I/edit"]') }
    get linkPolicesR () { return $('a[href^="https://docs.google.com/document/d/1dnhMe-r0ttPtMQivzJB2nlUXGxbOfMihAr2TAXMPRnA/edit"]') }
    get btnContact () { return $('.contact-us>a[href*="/contact-us"]') }
    get linkLearn () { return $('.card-action> a') }

    /**
     * a method to encapsule automation code to interact with the page
     */
    async goToBetterBook (){
        await  this.waitAndClick(this.linkBetterBook)
    }
    async isDisplayTheBetterBookProjectVideo (){
        await  this.waitAndDisplay(this.btnPlayVideo)
    }
    async goToLearnMore (){
        await  this.waitAndClick(this.linkLearn)
    }
    async goToContact (){
        await  this.waitAndClick(this.btnContact)
    }
    async goToStudentPolice (){
        await  this.waitAndClick(this.linkPolicesS)
    }
    async goToInstructorPolice (){
        await  this.waitAndClick(this.linkPolicesI)
    }
    async goToResearchPolice (){
        await  this.waitAndClick(this.linkPolicesR)
    }
}

module.exports = new About();