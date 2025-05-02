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

  test('Link MyordersLink', { tag: "@sanity", },async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickmyordersLink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();

    await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });


  test('Link Sign In link', { tag: "@sanity", },async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    
    await faqPageInstance.clicksignin();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    await faqPageInstance.navigateGoBack();
  });

  test('Search box', { tag: "@sanity", },async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    
    await faqPageInstance.entersearchbox("Shakelogy");
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    await expect(page).toHaveURL(/.*faq?\.bodi.*/);
    await expect(page).toHaveTitle(/Results for/);
    await page.getByRole('heading', { name: 'Results for "Shakeology"' }).isVisible();
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
  test('Link Order Status', { tag: "@sanity", },async ({ page }) => {
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


  test('Link UpdateaccountLink', { tag: "@sanity", },async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    
    await faqPageInstance.clickupdateaccountLink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    await faqPageInstance.navigateGoBack();
  });


  test('Link UpdatepaymentmethodLink',{ tag: "@sanity", }, async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    
    await faqPageInstance.clickupdatepaymentmethodLink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    await faqPageInstance.navigateGoBack();
  });


  test('Link PartnerformsLink', { tag: "@sanity", },async ({ page }) => {
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

  test('Link Clickbodilink', { tag: "@sanity", },async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickbodilink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });
  test('Link Clickbikelink',{ tag: "@sanity", }, async ({ page }) => {
    const faqPageInstance = new faqPage(page);
   
    await faqPageInstance.clickbikelink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();

    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });
  test('Link Clickallorderslink', { tag: "@sanity", },async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickallorderslink();
    await faqPageInstance.waitPagePromise(5000);
    
    // await expect(page).toHaveTitle(/BODi Signin/);
    await faqPageInstance.verifysiteerror();

    await faqPageInstance.navigateGoBack();
  });
  test('Link Clickmyaccountlink', { tag: "@sanity", },async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickmyaccountlink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });
  test('Link Clicktechnicalsupportlink', { tag: "@sanity", },async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clicktechnicalsupportlink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();

    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });
  test('Link Clickaffiliatelink', { tag: "@sanity", },async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickaffiliatelink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();

    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });
  test('Link Clickproductinfolink',{ tag: "@sanity", }, async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickproductinfolink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });


  test('Link Clickchatwithbodi',{ tag: "@sanity", }, async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.waitPagePromise(5000);
    await page.getByRole('button', { name: 'Close this dialog' }).click();
    await faqPageInstance.clickchatwithbodi();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });

  test('Link Clicksignintotext',{ tag: "@sanity", }, async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.waitPagePromise(5000);
    await page.getByRole('button', { name: 'Close this dialog' }).click();
    await faqPageInstance.clicksignintotext();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });

  test('Link Clicktermsandconditions',{ tag: "@sanity", }, async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.waitPagePromise(5000);
    await page.getByRole('button', { name: 'Close this dialog' }).click();
    await faqPageInstance.clicktermsandconditions();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });

  test('Link Clickprivacypolicy',{ tag: "@sanity", }, async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.waitPagePromise(10000);
    await page.getByRole('button', { name: 'Close this dialog' }).click();
    await faqPageInstance.waitPagePromise(10000);
    // await page.pause();
    // await faqPageInstance.clickprivacypolicy();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });

  test('Link Clickdonotsellmyinfo',{ tag: "@sanity", }, async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.waitPagePromise(5000);
    await page.getByRole('button', { name: 'Close this dialog' }).click();
    await faqPageInstance.clickdonotsellmyinfo();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });

  test('Link Clickaccessibilitystatement',{ tag: "@sanity", }, async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.waitPagePromise(5000);
    await page.getByRole('button', { name: 'Close this dialog' }).click();
    await faqPageInstance.clickaccessibilitystatement();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });

  test('Link Clickcaliforniasupplychain',{ tag: "@sanity", }, async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.waitPagePromise(5000);
    await page.getByRole('button', { name: 'Close this dialog' }).click();
    await faqPageInstance.clickcaliforniasupplychain();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });

  test('Link Clickconsumerhealthdatapolicy',{ tag: "@sanity", }, async ({ page }) => {
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