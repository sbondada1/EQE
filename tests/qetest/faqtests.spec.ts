// Inlcude playwright module
import { test, expect } from '@playwright/test';
import { faqPage } from '../../src/faqPage';
import { ENV } from "../../utils/env"; // Ensure the file exists at 'c:\QE_PW_Test\tests\utils\env.ts' or update the path accordingly
import { link, linkSync } from 'fs';

test.describe('Check URL and its links', async () => {

    test.beforeEach(async ({ page }) => {

        const faqPageInstance = new faqPage(page);
        await faqPageInstance.navigateURL(process.env.FAQ_URL || 'https://default-url.com');
        console.log(process.env.ENV + " >>>> Navigate - " + process.env.FAQ_URL + " with locale >>>" + process.env.LOCALE);

        await faqPageInstance.validatePageURLwithExpectedURL(process.env.FAQ_URL || 'https://default-url.com');
        await expect(page).toHaveTitle(/BODI/);
        await page.getByText('Welcome to BODi Support').isVisible();
        await faqPageInstance.verifySiteError();
        if(await page.getByRole('img', { name: 'Close this dialog' }).isVisible()){
        console.log("before Clicking on the cookie dialog");
        await page.getByRole('img', { name: 'Close this dialog' }).click();

        //await page.getByRole('button', { name: 'Close this dialog' }).click();
        await faqPageInstance.waitPagePromise(5000);
        console.log("after Clicking on the cookie dialog");
        }else{
            console.log("Cookie dialog box is not visible");
        }  
    });

    test('Link Shop', { tag: "@sanity", }, async ({ page }) => {

        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLinkAndValidate("linkShop");
        await faqPageInstance.verifySiteError();
        await faqPageInstance.navigateGoBack();

    });

    test('Link Stream', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLinkAndValidate("linkStream");
        await faqPageInstance.verifySiteError();
        await faqPageInstance.navigateGoBack();
    });
    test('Link Become an Affiliate', { tag: "@sanity", }, async ({ page }) => {

        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLinkAndValidate("becomeAnAffiliateLink");
        await faqPageInstance.verifySiteError();
        await faqPageInstance.navigateGoBack();
    });

    test('Link MyOrdersLink', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLinkAndValidate("myOrdersLink");
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();

        await expect(page).toHaveTitle(/BODi Signin/);

        await faqPageInstance.navigateGoBack();
    });


    test('Link Sign In link', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLinkAndValidate("clickSignIn");
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        await faqPageInstance.navigateGoBack();
    });

    test('Search box', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.enterSearchBox("Shakelogy");
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        await expect(page).toHaveURL(/.*faq?\.bodi.*/);
        await expect(page).toHaveTitle(/Results for/);
        await page.getByRole('heading', { name: 'Results for "Shakeology"' }).isVisible();
        await faqPageInstance.navigateGoBack();
    });

    test('Link Manage Nutrition Subscription', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLinkAndValidate("manageNutritionSubscriptionLink");
        // await faqPageInstance.clickLinkManageNutritionSubscription();
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        await faqPageInstance.navigateGoBack();
    });
    test('Link Manage Digital Membership', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLinkAndValidate("manageDigitalMembershipLink");
        //await faqPageInstance.clickLinkManageDigitalMembership();
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        await faqPageInstance.navigateGoBack();
    });
    test('Link Order Status', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLinkAndValidate("orderStatusLink");
        // await faqPageInstance.clickLinkOrderStatus();
        await faqPageInstance.verifySiteError();
        await faqPageInstance.navigateGoBack();
    });


    test('Link returnandexchangeLink', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLinkAndValidate("clickReturnAndExchangeLink");
        //await faqPageInstance.clickReturnAndExchangeLink();
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        await faqPageInstance.navigateGoBack();
    });


    test('Link UpdateaccountLink', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLinkAndValidate("updateAccountLink");
        //await faqPageInstance.clickUpdateAccountLink();
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        await faqPageInstance.navigateGoBack();
    });


    test('Link UpdatepaymentmethodLink', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLinkAndValidate("updatePaymentMethodLink");
        //await faqPageInstance.clickUpdatePaymentMethodLink();
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        await faqPageInstance.navigateGoBack();
    });


    test('Link PartnerformsLink', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLinkAndValidate("partnerFormsLink");
        //await faqPageInstance.clickpartnerformsLink();
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        await faqPageInstance.navigateGoBack();
    });


    test('Link MyShakeology', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLinkAndValidate("myShakeologyLink");
        //await faqPageInstance.clickmyshakeologylink();
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();

        // await expect(page).toHaveTitle(/BODi Signin/);

        await faqPageInstance.navigateGoBack();
    });

    test('Link Clickbodilink', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLinkAndValidate("bodiLink");
        //await faqPageInstance.clickbodilink();
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        // await expect(page).toHaveTitle(/BODi Signin/);

        await faqPageInstance.navigateGoBack();
    });
    test('Link Clickbikelink', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLinkAndValidate("bikeLink");
        //await faqPageInstance.clickbikelink();
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();

        // await expect(page).toHaveTitle(/BODi Signin/);

        await faqPageInstance.navigateGoBack();
    });
    test('Link Clickallorderslink', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLinkAndValidate("allOrdersLink");
        //await faqPageInstance.clickallorderslink();
        await faqPageInstance.waitPagePromise(5000);

        // await expect(page).toHaveTitle(/BODi Signin/);
        await faqPageInstance.verifySiteError();

        await faqPageInstance.navigateGoBack();
    });
    test('Link Clickmyaccountlink', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLinkAndValidate("myAccountLink");
        //await faqPageInstance.clickmyaccountlink();
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        // await expect(page).toHaveTitle(/BODi Signin/);

        await faqPageInstance.navigateGoBack();
    });
    test('Link Clicktechnicalsupportlink', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLinkAndValidate("technicalSupportLink");
        //    await faqPageInstance.clicktechnicalsupportlink();
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();

        // await expect(page).toHaveTitle(/BODi Signin/);

        await faqPageInstance.navigateGoBack();
    });
    test('Link Clickaffiliatelink', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLinkAndValidate("affiliateLink");
        //    await faqPageInstance.clickaffiliatelink();
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();

        // await expect(page).toHaveTitle(/BODi Signin/);

        await faqPageInstance.navigateGoBack();
    });
    test('Link Clickproductinfolink', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLinkAndValidate("productInfoLink");
        //await faqPageInstance.clickproductinfolink();
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        // await expect(page).toHaveTitle(/BODi Signin/);

        await faqPageInstance.navigateGoBack();
    });


    test('Link Clickchatwithbodi', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLinkAndValidate("chatWithBodi");
        //await faqPageInstance.clickchatwithbodi();
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        // await expect(page).toHaveTitle(/BODi Signin/);
        await faqPageInstance.navigateGoBack();
    });

    test('Link Clicksignintotext', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        // await faqPageInstance.waitPagePromise(5000);
        // await page.getByRole('button', { name: 'Close this dialog' }).click();
        await faqPageInstance.clickLinkAndValidate("signInToText");
        //await faqPageInstance.clicksignintotext();
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        // await expect(page).toHaveTitle(/BODi Signin/);

        await faqPageInstance.navigateGoBack();
    });

    test('Link Clicktermsandconditions', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        // await faqPageInstance.waitPagePromise(5000);
        // await page.getByRole('button', { name: 'Close this dialog' }).click();
        await faqPageInstance.clickLinkAndValidate("termsAndConditions");
        //await faqPageInstance.clicktermsandconditions();
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        // await expect(page).toHaveTitle(/BODi Signin/);

        await faqPageInstance.navigateGoBack();
    });

    test('Link Clickprivacypolicy', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        // await faqPageInstance.waitPagePromise(5000);
        // console.log("before Clicking on the cookie dialog");
        // await page.getByRole('img', { name: 'Close this dialog' }).click();

        // //await page.getByRole('button', { name: 'Close this dialog' }).click();
        // await faqPageInstance.waitPagePromise(5000);
        // console.log("after Clicking on the cookie dialog");
        // await page.pause();
        // await faqPageInstance.clickprivacypolicy();
        await faqPageInstance.clickLinkAndValidate("privacyPolicy");
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        // await expect(page).toHaveTitle(/BODi Signin/);

        await faqPageInstance.navigateGoBack();
    });

    test('Link Clickdonotsellmyinfo', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        // await faqPageInstance.waitPagePromise(5000);
        // await page.getByRole('button', { name: 'Close this dialog' }).click();
        await faqPageInstance.clickLinkAndValidate("doNotSellMyInfo");
        //await faqPageInstance.clickdonotsellmyinfo();
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        // await expect(page).toHaveTitle(/BODi Signin/);

        await faqPageInstance.navigateGoBack();
    });

    test('Link Clickaccessibilitystatement', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        // await faqPageInstance.waitPagePromise(5000);
        // await page.getByRole('button', { name: 'Close this dialog' }).click();
        await faqPageInstance.clickLinkAndValidate("accessibilityStatement");
        //await faqPageInstance.clickaccessibilitystatement();
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        // await expect(page).toHaveTitle(/BODi Signin/);

        await faqPageInstance.navigateGoBack();
    });

    test('Link Clickcaliforniasupplychain', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        // await faqPageInstance.waitPagePromise(5000);
        // await page.getByRole('img', { name: 'Close this dialog' }).click();
        // await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.clickLinkAndValidate("californiaSupplyChain");
        //await faqPageInstance.clickcaliforniasupplychain();
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        // await expect(page).toHaveTitle(/BODi Signin/);

        await faqPageInstance.navigateGoBack();
    });

    test('Link Clickconsumerhealthdatapolicy', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        // await faqPageInstance.waitPagePromise(5000);
        // await page.getByRole('button', { name: 'Close this dialog' }).click();
        await faqPageInstance.clickLinkAndValidate("consumerHealthDataPolicy");
        //await faqPageInstance.clickconsumerhealthdatapolicy();
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        // await expect(page).toHaveTitle(/BODi Signin/);
        await faqPageInstance.navigateGoBack();
    });
});