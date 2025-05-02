import { test, expect, Page } from '@playwright/test';

export class faqPage {

    public cookieButton;
    public searchInput;
    public openSourceButton;
    public uxUiButton;
    public golangLink;
    public valesLink;
    public uxAppLink;
    public streamLink;
    public shopLink;
    public becomeAnAffiliateLink;
    public manageNutritionSubscriptionLink;
    public manageDigitalMembershipLink;
    public orderStatusLink;
    public myordersLink;
    public returnandexchangeLink;
    public updateaccountLink;
    public updatepaymentmethodLink;
    public partnerformsLink;
    public myshakeologylink;
    public bodilink;
    public bikelink;
    public allorderslink;
    public myaccountlink;
    public technicalsupportlink;
    public affiliatelink;
    public productinfolink;
    public chatwithbodi;
    public signintotext;
    public termsandconditions;
    public privacypolicy;
    public donotsellmyinfo;
    public accessibilitystatement;
    public californiasupplychain;
    public consumerhealthdatapolicy;
    public signin;
    public searchbox;
    public searchicon;

    constructor(private page: Page) {
        this.cookieButton = this.page.getByRole('button', { name: 'Accept All Cookies' });
        this.searchInput = this.page.locator('input[id="resources-input"]');
        this.streamLink = this.page.getByRole('link', { name: 'Stream' });
        this.shopLink = this.page.getByRole('link', { name: 'Shop' });
        this.becomeAnAffiliateLink = this.page.getByRole('link', { name: 'Become an Affiliate' });
        this.manageNutritionSubscriptionLink = this.page.getByRole('link', { name: 'Manage Nutrition Subscription' });
        this.manageDigitalMembershipLink = this.page.getByRole('link', { name: 'Manage Digital Membership' });
        this.orderStatusLink = this.page.getByRole('link', { name: 'Order Status' });
        this.openSourceButton = this.page.getByRole('button', { name: 'Open source' });
        this.uxUiButton = this.page.getByRole('button', { name: 'UX & UI' });
        this.golangLink = this.page.locator('a[href="https://resources.codilime.com/golang-checklist/"]');
        this.valesLink = this.page.locator('a[href="https://codisec.com/veles/"]');
        this.uxAppLink = this.page.locator('a[href="https://events.codilime.com/ux-in-network-applications"]');
        this.myordersLink = this.page.getByRole('link', { name: 'My Orders' });
        this.returnandexchangeLink = this.page.getByRole('link', { name: 'Return or Exchange' });
        this.updateaccountLink = this.page.getByRole('link', { name: 'Update Account' });
        this.updatepaymentmethodLink = this.page.getByRole('link', { name: 'Update Payment Method' });
        this.partnerformsLink = this.page.getByRole('link', { name: 'Partner Forms' });
        this.myshakeologylink = this.page.getByRole('link', { name: 'My Shakeology' });
        this.bodilink = this.page.getByRole('link', { name: 'BODi' });
        this.bikelink = this.page.getByRole('link', { name: 'Bike' });
        this.allorderslink = this.page.getByRole('link', { name: 'All Orders' });
        this.myaccountlink = this.page.getByRole('link', { name: 'My Account' });
        this.technicalsupportlink = this.page.getByRole('link', { name: 'Technical Support /' });
        this.affiliatelink = this.page.getByRole('link', { name: 'Affiliate Partner Support' });
        this.productinfolink = this.page.getByRole('link', { name: 'Product Info, Offers, and' });
        this.chatwithbodi = this.page.getByText('Chat with BODi');
        this.signintotext = this.page.getByText('Sign in to Text with BODi');
        this.termsandconditions = this.page.getByText('Terms and Conditions');
        this.privacypolicy = this.page.getByText('Privacy Policy');
        this.donotsellmyinfo = this.page.getByText('Do Not Sell My Info');
        this.accessibilitystatement = this.page.getByText('Accessibility Statement');
        this.californiasupplychain = this.page.getByText('California Supply Chain');
        this.consumerhealthdatapolicy = this.page.getByText('Consumer Health Data Policy');
        this.signin = this.page.getByRole('link', { name: 'Sign In' });
        this.searchbox = this.page.getByRole('searchbox', { name: 'Enter a Question or FAQ #' });
        this.searchicon = this.page.locator('#searchfaq');
        



    }

    async navigateURL(url: string) {
        await this.page.goto(url);
    }

    async acceptCookies() {
        await this.cookieButton.click();
    }
    async navigateGoBack() {
        await this.page.goBack();
    }
    async clickLinkStream() {
        await this.streamLink.click();
    }
    async clickLinkShop() {
        await this.shopLink.click();
    }
    async clickLinkBecomeAnAffiliate() {
        await this.becomeAnAffiliateLink.click();
    }
    async clickLinkManageDigitalMembership() {
        await this.manageDigitalMembershipLink.click();
    }
    async clickLinkManageNutritionSubscription() {
        await this.manageNutritionSubscriptionLink.click();
    }
    async clickLinkOrderStatus() {
        await this.orderStatusLink.click();
    }

    async entersearchbox(text: string) {
        await this.searchbox.fill(text);
        await this.searchicon.click();

    }

    async verifyBodiUrl() {
        console.log("page.url >>>> " + (this.page.url()));
        await expect.soft(this.page).toHaveURL(/.*faq?\.bodi.*/);
    }
    async fillSearchInput(text: string) {
        await this.searchInput.fill(text);
    }
    async getAllLinks() {
        const linksRef = await this.page.locator('a').evaluateAll(evalHref => evalHref.map(eh => eh.getAttribute('href')));
        console.log("Links hrefs are >>> " + linksRef.length);
        for (let i = 0; i < linksRef.length; i++) {
            console.log(i + " > Links hrefs are >>> " + linksRef[i]);
        }
    }

    async clickGolangLink() {
        await this.golangLink.click();
    }

    async clickVelesLink() {
        await this.valesLink.click();
    }

    async clickUxAppLink() {
        await this.uxAppLink.click();
    }

    async clickOpenSourceButton() {
        await this.openSourceButton.click();
    }

    async clickUxuiButton() {
        await this.uxUiButton.click();
    }

    async waitPagePromise(int = 1000) {
        await this.page.waitForTimeout(int);
    }

    async clickmyordersLink() {
        await this.myordersLink.click();
    }

    async clicksignin() {
        await this.signin.click();

    }

    async clickreturnandexchangeLink() {
        await this.returnandexchangeLink.click();
    }
    async clickupdateaccountLink() {
        await this.updateaccountLink.click();
    }
    async clickupdatepaymentmethodLink() {
        await this.updatepaymentmethodLink.click();
    }
    async clickpartnerformsLink() {
        await this.partnerformsLink.click();
    }

    async clickmyshakeologylink() {
        await this.myshakeologylink.click();
    }
    async clickbodilink() {
        await this.bodilink.click();
    }
    async clickbikelink() {
        await this.bikelink.click();
    }
    async clickallorderslink() {
        await this.allorderslink.click();
    }
    async clickmyaccountlink() {
        await this.myaccountlink.click();
    }
    async clicktechnicalsupportlink() {
        await this.technicalsupportlink.click();
    }
    async clickaffiliatelink() {
        await this.affiliatelink.click();
    }
    async clickproductinfolink() {
        await this.productinfolink.click();
    }
    async clickchatwithbodi() {
        await this.chatwithbodi.click();
    }
    async clicksignintotext() {
        await this.signintotext.click();

    }
    async clicktermsandconditions() {
        await this.termsandconditions.click();
    }

    async clickprivacypolicy() {
        
        await this.privacypolicy.click();
    }

    async clickdonotsellmyinfo() {
        await this.donotsellmyinfo.click();
    }
    async clickaccessibilitystatement() {
        await this.accessibilitystatement.click();
    }
    async clickcaliforniasupplychain() {
        await this.californiasupplychain.click();
    }
    async clickconsumerhealthdatapolicy() {
        await this.consumerhealthdatapolicy.click();


    }
    async verifysiteerror() {
        if (await this.page.getByText('This site can’t be reached').isVisible()
            ||
            await this.page.getByText('This page isn’t working').isVisible()) {
            console.log('This page is not as expected ');
            test.fail();
        }
        else {
            console.log('This site content is displaying without any error');
        }
    }
}