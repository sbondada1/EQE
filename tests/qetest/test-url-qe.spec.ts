// Inlcude playwright module
import { test, expect } from '@playwright/test';
import { faqPage } from '../../src/faqPage';
import { ENV } from "../../utils/env"; // Ensure the file exists at 'c:\QE_PW_Test\tests\utils\env.ts' or update the path accordingly

test.describe('Check URL and its links', async () => {

  test.beforeEach(async ({ page }) => {

    const faqPageInstance = new faqPage(page);
    await faqPageInstance.navigateURL(process.env.FAQ_URL || 'https://default-url.com');
    console.log(process.env.ENV + " >>>> Navigate - " + process.env.FAQ_URL + " with locale >>>" + process.env.LOCALE);
    await expect(page).toHaveURL(/.*faq?\.bodi.*/);
    await expect(page).toHaveTitle(/BODI/);
    await page.getByText('Welcome to BODi Support').isVisible();
    await faqPageInstance.verifysiteerror();
    

  })

 
  test('Link Shop', { tag: "@sanity", },async ({ page }) => {
    
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickLinkShop();
    await faqPageInstance.verifysiteerror();
    await faqPageInstance.navigateGoBack();
    
  });

  test('Link Stream',{ tag: "@sanity", }, async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickLinkStream();
    await faqPageInstance.verifysiteerror();
    await faqPageInstance.navigateGoBack();
  });
  test('Link Become an Affiliate',{ tag: "@sanity", }, async ({ page }) => {

    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickLinkBecomeAnAffiliate();
    await faqPageInstance.verifysiteerror();
    await faqPageInstance.navigateGoBack();
  });

  test('Link myordersLink', { tag: "@sanity", },async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickmyordersLink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();

    await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });

  
  test('Link Manage Nutrition Subscription', { tag: "@sanity", },async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    
    await faqPageInstance.clickLinkManageNutritionSubscription();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    await faqPageInstance.navigateGoBack();
  });
  test('Link Manage Digital Membership', { tag: "@sanity", },async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickLinkManageDigitalMembership();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    await faqPageInstance.navigateGoBack();
  });
  test('Order Status', { tag: "@sanity", },async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    
    await faqPageInstance.clickLinkOrderStatus();
    await faqPageInstance.verifysiteerror();
    await faqPageInstance.navigateGoBack();
    });


  test('Link returnandexchangeLink', { tag: "@sanity", },async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickreturnandexchangeLink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    await faqPageInstance.navigateGoBack();
  });


  test('Link updateaccountLink', { tag: "@sanity", },async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    
    await faqPageInstance.clickupdateaccountLink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    await faqPageInstance.navigateGoBack();
  });


  test('Link updatepaymentmethodLink',{ tag: "@sanity", }, async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    
    await faqPageInstance.clickupdatepaymentmethodLink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    await faqPageInstance.navigateGoBack();
  });


  test('Link partnerformsLink', { tag: "@sanity", },async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    
    await faqPageInstance.clickpartnerformsLink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    await faqPageInstance.navigateGoBack();
  });


  test('Link MyShakeology', { tag: "@sanity", },async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickmyshakeologylink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();

    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });

  test('Link clickbodilink', { tag: "@sanity", },async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickbodilink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });
  test('Link clickbikelink',{ tag: "@sanity", }, async ({ page }) => {
    const faqPageInstance = new faqPage(page);
   
    await faqPageInstance.clickbikelink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();

    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });
  test('Link clickallorderslink', { tag: "@sanity", },async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickallorderslink();
    await faqPageInstance.waitPagePromise(5000);
    
    // await expect(page).toHaveTitle(/BODi Signin/);
    await faqPageInstance.verifysiteerror();

    await faqPageInstance.navigateGoBack();
  });
  test('Link clickmyaccountlink', { tag: "@sanity", },async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickmyaccountlink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });
  test('Link clicktechnicalsupportlink', { tag: "@sanity", },async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clicktechnicalsupportlink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();

    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });
  test('Link clickaffiliatelink', { tag: "@sanity", },async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickaffiliatelink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();

    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });
  test('Link clickproductinfolink',{ tag: "@sanity", }, async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickproductinfolink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });


  test('Link clickchatwithbodi',{ tag: "@sanity", }, async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.waitPagePromise(5000);
    await page.getByRole('button', { name: 'Close this dialog' }).click();
    await faqPageInstance.clickchatwithbodi();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });

  test('Link clicksignintotext',{ tag: "@sanity", }, async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.waitPagePromise(5000);
    await page.getByRole('button', { name: 'Close this dialog' }).click();
    await faqPageInstance.clicksignintotext();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });

  test('Link clicktermsandconditions',{ tag: "@sanity", }, async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.waitPagePromise(5000);
    await page.getByRole('button', { name: 'Close this dialog' }).click();
    await faqPageInstance.clicktermsandconditions();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });

  test('Link clickprivacypolicy',{ tag: "@sanity", }, async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.waitPagePromise(10000);
    await page.getByRole('button', { name: 'Close this dialog' }).click();
    await faqPageInstance.waitPagePromise(10000);
    // await faqPageInstance.clickprivacypolicy();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });

  test('Link clickdonotsellmyinfo',{ tag: "@sanity", }, async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.waitPagePromise(5000);
    await page.getByRole('button', { name: 'Close this dialog' }).click();
    await faqPageInstance.clickdonotsellmyinfo();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });

  test('Link clickaccessibilitystatement',{ tag: "@sanity", }, async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.waitPagePromise(5000);
    await page.getByRole('button', { name: 'Close this dialog' }).click();
    await faqPageInstance.clickaccessibilitystatement();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });

  test('Link clickcaliforniasupplychain',{ tag: "@sanity", }, async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.waitPagePromise(5000);
    await page.getByRole('button', { name: 'Close this dialog' }).click();
    await faqPageInstance.clickcaliforniasupplychain();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });

  test('Link clickconsumerhealthdatapolicy',{ tag: "@sanity", }, async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.waitPagePromise(5000);
    await page.getByRole('button', { name: 'Close this dialog' }).click();
    await faqPageInstance.clickconsumerhealthdatapolicy();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });



});