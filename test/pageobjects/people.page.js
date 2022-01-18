const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class People extends Page {

    /**
     * a method to encapsule automation code to interact with the page
     */
    photos(position) { return $ (`div.team-member:nth-child(${position}) > img.photo`)}
    emails(position) { return $ (`div.team-member:nth-child(${position}) > div > a`)}
    names (position) { return $ (`div.team-member:nth-child(${position}) > div > h5`)}

    async peopleValidation(position,reference,name) {
        await this.waitAndDisplay(this.photos(position))
        await expect(this.photos(position)).toHaveAttribute("alt", name);
        await this.waitAndDisplay(this.emails(position))
        await expect(this.emails(position)).toHaveHref(reference);
        await this.waitAndDisplay(this.names(position))
        await expect(this.names(position)).toHaveText(name);
    }
}

module.exports = new People();