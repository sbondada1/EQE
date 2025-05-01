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

  })

  test('Link Shop', async ({ page }) => {
    
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickLinkShop();
    await faqPageInstance.verifysiteerror();
    await faqPageInstance.navigateGoBack();
    
  });

  test('Link Stream', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickLinkStream();
    await faqPageInstance.verifysiteerror();
    await faqPageInstance.navigateGoBack();
  });
  test('Link Become an Affiliate', async ({ page }) => {

    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickLinkBecomeAnAffiliate();
    await faqPageInstance.verifysiteerror();
    await faqPageInstance.navigateGoBack();
  });

  test('Link My Orders', async ({ page }) => {

    const faqPageInstance = new faqPage(page);
    
  })
  test('Link Manage Nutrition Subscription', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    
    await faqPageInstance.clickLinkManageNutritionSubscription();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    await faqPageInstance.navigateGoBack();
  });
  test('Link Manage Digital Membership', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickLinkManageDigitalMembership();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    await faqPageInstance.navigateGoBack();
  });
  test('Order Status', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    
    await faqPageInstance.clickLinkOrderStatus();
    await faqPageInstance.verifysiteerror();
    await faqPageInstance.navigateGoBack();
    //  await page.goto('chrome-error://chromewebdata/');
    //   await page.getByText('This page isn’t working').click();
    //   await page.getByRole('link', { name: 'Return or Exchange' }).click();
    //   await page.goto('https://stage.faq.bodi.com/');
    //   await page.getByRole('link', { name: 'Update Account' }).click();
    //   await page.getByText('This site can’t be reached').click();
    //   await page.getByRole('link', { name: 'Update Payment Method' }).click();
    //   await page.getByRole('link', { name: 'Partner Forms' }).click();
    //   await page.getByRole('link', { name: 'Partner Forms' }).click();
  });


  test('Link myordersLink', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickmyordersLink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();

    await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });


  test('Link returnandexchangeLink', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickreturnandexchangeLink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    await faqPageInstance.navigateGoBack();
  });


  test('Link updateaccountLink', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    
    await faqPageInstance.clickupdateaccountLink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    await faqPageInstance.navigateGoBack();
  });


  test('Link updatepaymentmethodLink', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    
    await faqPageInstance.clickupdatepaymentmethodLink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    await faqPageInstance.navigateGoBack();
  });


  test('Link partnerformsLink', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    
    await faqPageInstance.clickpartnerformsLink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    await faqPageInstance.navigateGoBack();
  });


  test('Link MyShakeology', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickmyshakeologylink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();

    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });

  test('Link clickbodilink', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickbodilink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });
  test('Link clickbikelink', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
   
    await faqPageInstance.clickbikelink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();

    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });
  test('Link clickallorderslink', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickallorderslink();
    await faqPageInstance.waitPagePromise(5000);
    
    // await expect(page).toHaveTitle(/BODi Signin/);
    await faqPageInstance.verifysiteerror();

    await faqPageInstance.navigateGoBack();
  });
  test('Link clickmyaccountlink', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickmyaccountlink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });
  test('Link clicktechnicalsupportlink', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clicktechnicalsupportlink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();

    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });
  test('Link clickaffiliatelink', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickaffiliatelink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();

    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });
  test('Link clickproductinfolink', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.clickproductinfolink();
    await faqPageInstance.waitPagePromise(5000);
    await faqPageInstance.verifysiteerror();
    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });



});