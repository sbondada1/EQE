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
    public myOrdersLink;
    public returnAndExchangeLink;
    public updateAccountLink;
    public updatePaymentMethodLink;
    public partnerFormsLink;
    public myShakeologyLink;
    public bodiLink;
    public bikeLink;
    public allOrdersLink;
    public myAccountLink;
    public technicalSupportLink;
    public affiliateLink;
    public productInfoLink;
    public chatWithBodi;
    public signIntoText;
    public termsAndConditions;
    public privacyPolicy;
    public doNotSellMyInfo;
    public accessibilityStatement;
    public californiaSupplyChain;
    public consumerHealthDataPolicy;
    public signIn;
    public searchBox;
    public searchIcon;

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
        this.myOrdersLink = this.page.getByRole('link', { name: 'My Orders' });
        this.returnAndExchangeLink = this.page.getByRole('link', { name: 'Return or Exchange' });
        this.updateAccountLink = this.page.getByRole('link', { name: 'Update Account' });
        this.updatePaymentMethodLink = this.page.getByRole('link', { name: 'Update Payment Method' });
        this.partnerFormsLink = this.page.getByRole('link', { name: 'Partner Forms' });
        this.myShakeologyLink = this.page.getByRole('link', { name: 'My Shakeology' });
        this.bodiLink = this.page.getByRole('link', { name: 'BODi' });
        this.bikeLink = this.page.getByRole('link', { name: 'Bike' });
        this.allOrdersLink = this.page.getByRole('link', { name: 'All Orders' });
        this.myAccountLink = this.page.getByRole('link', { name: 'My Account' });
        this.technicalSupportLink = this.page.getByRole('link', { name: 'Technical Support /' });
        this.affiliateLink = this.page.getByRole('link', { name: 'Affiliate Partner Support' });
        this.productInfoLink = this.page.getByRole('link', { name: 'Product Info, Offers, and' });
        this.chatWithBodi = this.page.getByText('Chat with BODi');
       //this.chatWithBodi = this.page.getByRole('generic', { name: 'Chat with BODi' });
        this.signIntoText = this.page.getByText('Sign in to Text with BODi');
        //this.termsAndConditions = this.page.getByText('Terms and Conditions');
        this.termsAndConditions = this.page.getByRole('link', {name :'Terms and Conditions'});
        //this.privacyPolicy = this.page.getByText('Privacy Policy');
        this.privacyPolicy = this.page.getByRole('link', {name :'Privacy Policy'});
        this.doNotSellMyInfo = this.page.getByText('Do Not Sell My Info');
        //this.doNotSellMyInfo = this.page.getByRole('link', {name :'Do Not Sell My Info'});
        //this.accessibilityStatement = this.page.getByText('Accessibility Statement');
        this.accessibilityStatement = this.page.getByRole('link', {name :'Accessibility Statement'});
        //this.californiaSupplyChain = this.page.getByText('California Supply Chain');
        this.californiaSupplyChain = this.page.getByRole('link', {name :'California Supply Chain'});
        //this.consumerHealthDataPolicy = this.page.getByText('Consumer Health Data Policy');
        this.consumerHealthDataPolicy = this.page.getByRole('link', {name :'Consumer Health Data Policy'});
        this.signIn = this.page.getByRole('link', { name: 'Sign In' });
        this.searchBox = this.page.getByRole('searchbox', { name: 'Enter a Question or FAQ #' });
        this.searchIcon = this.page.locator('#searchfaq');
    }

    async navigateURL(url: string) {
        await this.page.goto(url);
    }
    async validatePageURLwithExpectedURL(expectedURL: string) {
        const currentURL = this.page.url();
        console.log("Current URL: " + currentURL);
        console.log("Expected URL: " + expectedURL);
        expect.soft(currentURL).toContain(expectedURL);
        // Get the current URL
        // console.log("URL Navigated > " + process.env.FAQ_URL + " and after navigation page url >>>" + currentUrl);
        // expect.soft(currentURL).toBe(process.env.FAQ_URL);
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

    async enterSearchBox(text: string) {
        await this.searchBox.fill(text);
        await this.searchIcon.click();

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

    async clickMyOrdersLink() {
        await this.myOrdersLink.click();
    }

    async clickSignIn() {
        await this.signIn.click();
    }

    async clickReturnAndExchangeLink() {
        await this.returnAndExchangeLink.click();
    }
    async clickUpdateAccountLink() {
        await this.updateAccountLink.click();
    }
    async clickUpdatePaymentMethodLink() {
        await this.updatePaymentMethodLink.click();
    }
    async clickpartnerformsLink() {
        await this.partnerFormsLink.click();
    }

    async clickmyshakeologylink() {
        await this.myShakeologyLink.click();
    }
    async clickbodilink() {
        await this.bodiLink.click();
    }
    async clickbikelink() {
        await this.bikeLink.click();
    }
    async clickallorderslink() {
        await this.allOrdersLink.click();
    }
    async clickmyaccountlink() {
        await this.myAccountLink.click();
    }
    async clicktechnicalsupportlink() {
        await this.technicalSupportLink.click();
    }
    async clickaffiliatelink() {
        await this.affiliateLink.click();
    }
    async clickproductinfolink() {
        await this.productInfoLink.click();
    }
    async clickchatwithbodi() {
        await this.chatWithBodi.click();
    }
    async clicksignintotext() {
        await this.signIntoText.click();

    }
    async clicktermsandconditions() {
        await this.termsAndConditions.click();
    }

    async clickprivacypolicy() {

        await this.privacyPolicy.click();
    }

    async clickdonotsellmyinfo() {
        await this.doNotSellMyInfo.click();
    }
    async clickaccessibilitystatement() {
        await this.accessibilityStatement.click();
    }
    async clickcaliforniasupplychain() {
        await this.californiaSupplyChain.click();
    }
    async clickconsumerhealthdatapolicy() {
        await this.consumerHealthDataPolicy.click();
    }
    async verifySiteError() {
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
    async clickLinkAndValidate(linkName: string) {
        let href = "";
        switch (linkName) {
            case 'streamLink':
                console.log("streamLink >>>> " + this.streamLink);
                href = await this.streamLink.getAttribute('href');
                console.log("streamLink href >>>> " + href);
                await this.streamLink.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'shopLink':
                console.log("shopLink >>>> " + this.shopLink);
                href = await this.shopLink.getAttribute('href');
                console.log("shopLink href >>>> " + href);
                await this.shopLink.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'becomeAnAffiliateLink':
                console.log("becomeAnAffiliateLink >>>> " + this.clickLinkBecomeAnAffiliate);
                href = await this.becomeAnAffiliateLink.getAttribute('href');
                console.log("becomeAnAffiliateLink href >>>> " + href);
                await this.becomeAnAffiliateLink.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'manageNutritionSubscriptionLink':
                console.log("manageNutritionSubscriptionLink >>>> " + this.manageNutritionSubscriptionLink);
                href = await this.manageNutritionSubscriptionLink.getAttribute('href');
                console.log("manageNutritionSubscriptionLink href >>>> " + href);
                await this.manageNutritionSubscriptionLink.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'manageDigitalMembershipLink':
                console.log("manageDigitalMembershipLink >>>> " + this.manageDigitalMembershipLink);
                href = await this.manageDigitalMembershipLink.getAttribute('href');
                console.log("manageDigitalMembershipLink href >>>> " + href);
                await this.manageDigitalMembershipLink.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'orderStatusLink':
                console.log("orderStatusLink >>>> " + this.orderStatusLink);
                href = await this.orderStatusLink.getAttribute('href');
                console.log("orderStatusLink href >>>> " + href);
                await this.orderStatusLink.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'myOrdersLink':
                console.log("clickMyOrdersLink >>>> " + this.myOrdersLink);
                href = await this.myOrdersLink.getAttribute('href');
                console.log("myOrdersLink href >>>> " + href);
                await this.myOrdersLink.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'clickSignIn':
                console.log("clickSignIn >>>> " + this.signIn);
                href = await this.signIn.getAttribute('href');
                console.log("clickSignIn href >>>> " + href);
                await this.signIn.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'clickReturnAndExchangeLink':
                console.log("returnandexchangeLink >>>> " + this.returnAndExchangeLink);
                href = await this.returnAndExchangeLink.getAttribute('href');
                console.log("returnandexchangeLink href >>>> " + href);
                await this.returnAndExchangeLink.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'updateAccountLink':
                console.log("updateAccountLink >>>> " + this.updateAccountLink);
                href = await this.updateAccountLink.getAttribute('href');
                console.log("updateAccountLink href >>>> " + href);
                await this.updateAccountLink.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'updatePaymentMethodLink':
                console.log("updatePaymentMethodLink >>>> " + this.updatePaymentMethodLink);
                href = await this.updatePaymentMethodLink.getAttribute('href');
                console.log("updatePaymentMethodLink href >>>> " + href);
                await this.updatePaymentMethodLink.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'partnerFormsLink':
                console.log("partnerFormsLink >>>> " + this.partnerFormsLink);
                href = await this.partnerFormsLink.getAttribute('href');
                console.log("partnerFormsLink href >>>> " + href);
                await this.partnerFormsLink.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'myShakeologyLink':
                console.log("myShakeologyLink >>>> " + this.myShakeologyLink);
                href = await this.myShakeologyLink.getAttribute('href');
                console.log("myShakeologyLink href >>>> " + href);
                await this.myShakeologyLink.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'bodiLink':
                console.log("bodiLink >>>> " + this.bodiLink);
                href = await this.bodiLink.getAttribute('href');
                console.log("bodiLink href >>>> " + href);
                await this.bodiLink.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'bikeLink':
                console.log("bikeLink >>>> " + this.bikeLink);
                href = await this.bikeLink.getAttribute('href');
                console.log("bikeLink href >>>> " + href);
                await this.bikeLink.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'allOrdersLink':
                console.log("allOrdersLink >>>> " + this.allOrdersLink);
                href = await this.allOrdersLink.getAttribute('href');
                console.log("allOrdersLink href >>>> " + href);
                await this.allOrdersLink.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'myAccountLink':
                console.log("myAccountLink >>>> " + this.myAccountLink);
                href = await this.myAccountLink.getAttribute('href');
                console.log("myAccountLink href >>>> " + href);
                await this.myAccountLink.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'technicalSupportLink':
                console.log("technicalSupportLink >>>> " + this.technicalSupportLink);
                href = await this.technicalSupportLink.getAttribute('href');
                console.log("technicalSupportLink href >>>> " + href);
                await this.technicalSupportLink.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'affiliateLink':
                console.log("affiliateLink >>>> " + this.affiliateLink);
                href = await this.affiliateLink.getAttribute('href');
                console.log("affiliateLink href >>>> " + href);
                await this.affiliateLink.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'productInfoLink':
                console.log("productInfoLink >>>> " + this.productInfoLink);
                href = await this.productInfoLink.getAttribute('href');
                console.log("productInfoLink href >>>> " + href);
                await this.productInfoLink.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'chatWithBodi':
                console.log("chatWithBodi >>>> " + this.chatWithBodi);
                // href = await this.chatWithBodi.getAttribute('href');
                // console.log("chatWithBodi href >>>> " + href);
                await this.chatWithBodi.click();
                // console.log("validate link href with after clicked navigated url");
                // this.validatePageURLwithExpectedURL(href);
                break;
            case 'signIntoText':
                console.log("signIntoText >>>> " + this.signIntoText);
                // href = await this.signIntoText.getAttribute('href');
                // console.log("signIntoText href >>>> " + href);
                await this.signIntoText.click();
                // console.log("validate link href with after clicked navigated url");
                // this.validatePageURLwithExpectedURL(href);
                break;
            case 'termsAndConditions':
                console.log("termsAndConditions >>>> " + this.termsAndConditions);
                href = await this.termsAndConditions.getAttribute('href');
                console.log("termsAndConditions href >>>> " + href);
                await this.termsAndConditions.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'privacyPolicy':
                console.log("privacyPolicy >>>> " + this.privacyPolicy);
                href = await this.privacyPolicy.getAttribute('href');
                console.log("privacyPolicy href >>>> " + href);
                await this.privacyPolicy.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'doNotSellMyInfo':
                console.log("doNotSellMyInfo >>>> " + this.doNotSellMyInfo);
                // href = await this.doNotSellMyInfo.getAttribute('href');
                // console.log("doNotSellMyInfo href >>>> " + href);
                await this.doNotSellMyInfo.click();
                // console.log("validate link href with after clicked navigated url");
                // this.validatePageURLwithExpectedURL(href);
                break;
            case 'accessibilityStatement':
                console.log("accessibilityStatement >>>> " + this.accessibilityStatement);
                href = await this.accessibilityStatement.getAttribute('href');
                console.log("accessibilityStatement href >>>> " + href);
                await this.accessibilityStatement.click();

                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'californiaSupplyChain':
                console.log("californiaSupplyChain >>>> " + this.californiaSupplyChain);
                href = await this.californiaSupplyChain.getAttribute('href');
                console.log("californiaSupplyChain href >>>> " + href);
                await this.californiaSupplyChain.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'consumerHealthDataPolicy':
                console.log("consumerHealthDataPolicy >>>> " + this.consumerHealthDataPolicy);
                href = await this.consumerHealthDataPolicy.getAttribute('href');
                console.log("consumerHealthDataPolicy href >>>> " + href);
                await this.consumerHealthDataPolicy.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'searchBox':
                console.log("searchBox >>>> " + this.searchBox);
                href = await this.searchBox.getAttribute('href');
                console.log("searchBox href >>>> " + href);
                await this.searchBox.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'searchIcon':
                console.log("searchIcon >>>> " + this.searchIcon);
                href = await this.searchIcon.getAttribute('href');
                console.log("searchIcon href >>>> " + href);
                await this.searchIcon.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'searchInput':
                console.log("searchInput >>>> " + this.searchInput);
                href = await this.searchInput.getAttribute('href');
                console.log("searchInput href >>>> " + href);
                await this.searchInput.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            case 'openSourceButton':
                console.log("openSourceButton >>>> " + this.openSourceButton);
                href = await this.openSourceButton.getAttribute('href');
                console.log("openSourceButton href >>>> " + href);
                await this.openSourceButton.click();
                console.log("validate link href with after clicked navigated url");
                this.validatePageURLwithExpectedURL(href);
                break;
            default:
                console.log('Invalid link name');
        }
    }
}