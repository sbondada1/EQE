// Inlcude playwright module
import { test, expect } from '@playwright/test';
//const { test, expect } = require('@playwright/test');
//const fs = require('fs');
import { faqPage } from '../../src/faqPage';

import { ENV } from "../../utils/env"; // Ensure the file exists at 'c:\QE_PW_Test\tests\utils\env.ts' or update the path accordingly
test.describe('Check URL and its links', async () => {

  test.beforeEach(async({page})=>
  {
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.navigateURL(process.env.FAQ_URL || 'https://default-url.com');
    await expect(page).toHaveURL(/faq\.bodi\.com/);
    
    await expect(page).toHaveTitle(/BODI/);
    await page.getByText('Welcome to BODi Support').isVisible(); 

  })

  test('Link Shop', async ({ page }) => {
    // console.log(process.env.ENV + " >>>> Navigate - " + process.env.FAQ_URL + " with locale >>>" + process.env.locale);
    const faqPageInstance = new faqPage(page);
    // await faqPageInstance.navigateURL(process.env.FAQ_URL || 'https://default-url.com');
    //  faqPageInstance.getAllLinks();
    await faqPageInstance.clickLinkShop();
    await faqPageInstance.navigateGoBack();
  });

  test('Link Stream', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    // console.log(process.env.ENV + " >>>> Navigate - " + process.env.FAQ_URL + " with locale >>>" + process.env.locale);
    // await faqPageInstance.navigateURL(process.env.FAQ_URL || 'https://default-url.com');
    await faqPageInstance.clickLinkStream();
    await faqPageInstance.navigateGoBack();
  });
  test('Link Become an Affiliate', async ({ page }) => {

    const faqPageInstance = new faqPage(page);
    // await faqPageInstance.navigateURL(process.env.FAQ_URL || 'https://default-url.com');
    await faqPageInstance.clickLinkBecomeAnAffiliate();
    await faqPageInstance.navigateGoBack();
  });

  test('Link My Orders',async({page})=>{

    const faqPageInstance = new faqPage(page);
    // await faqPageInstance.navigateURL(process.env.FAQ_URL || 'https://default-url.com');




  })
  test('Link Manage Nutrition Subscription', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    // await faqPageInstance.navigateURL(process.env.FAQ_URL || 'https://default-url.com');
    await faqPageInstance.clickLinkManageNutritionSubscription();
    await faqPageInstance.waitPagePromise(5000);
    if(await page.getByText('This site can’t be reached').isVisible()){
      console.log('This site can’t be reached is visible');
      await page.getByText('This site can’t be reached').focus();
    }
    else{
      console.log('This site can’t be reached is NOT visible');
    }
    await faqPageInstance.navigateGoBack();
  });
  test('Link Manage Digital Membership', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    // await faqPageInstance.navigateURL(process.env.FAQ_URL || 'https://default-url.com');
    await faqPageInstance.clickLinkManageDigitalMembership();
    await faqPageInstance.waitPagePromise(5000);
    if(await page.getByText('This site can’t be reached').isVisible()){
      console.log('This site can’t be reached is visible');
      await page.getByText('This site can’t be reached').focus();
    }
    else{
      console.log('This site can’t be reached is NOT visible');
    }
    await faqPageInstance.navigateGoBack();
});
  test('Order Status', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    // await faqPageInstance.navigateURL(process.env.FAQ_URL || 'https://default-url.com');
    await faqPageInstance.clickLinkOrderStatus();
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
    // await faqPageInstance.navigateURL(process.env.FAQ_URL || 'https://default-url.com');
    
   
    
    await faqPageInstance.clickmyordersLink();
    await faqPageInstance.waitPagePromise(5000);
    if(await page.getByText('This site can’t be reached').isVisible() ||
    await page.getByText('This page isn’t working') ){
      console.log('This site is not expected ');
      // await page.getByText('This site can’t be reached').focus();
      // test.fail();
    }
    else{
      console.log('This site can’t be reached is NOT visible');
    }

    await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });

  
  test('Link returnandexchangeLink', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    // await faqPageInstance.navigateURL(process.env.FAQ_URL || 'https://default-url.com');
    await faqPageInstance.clickreturnandexchangeLink();
    await faqPageInstance.waitPagePromise(5000);
    if(await page.getByText('This site can’t be reached').isVisible()){
      console.log('This site can’t be reached is visible');
      await page.getByText('This site can’t be reached').focus();
    }
    else{
      console.log('This site can’t be reached is NOT visible');
    }
    await faqPageInstance.navigateGoBack();
  });

  
  test('Link updateaccountLink', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    // await faqPageInstance.navigateURL(process.env.FAQ_URL || 'https://default-url.com');
    await faqPageInstance.clickupdateaccountLink();
    await faqPageInstance.waitPagePromise(5000);
    if(await page.getByText('This site can’t be reached').isVisible()){
      console.log('This site can’t be reached is visible');
      await page.getByText('This site can’t be reached').focus();
    }
    else{
      console.log('This site can’t be reached is NOT visible');
    }
    await faqPageInstance.navigateGoBack();
  });

  
  test('Link updatepaymentmethodLink', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    // await faqPageInstance.navigateURL(process.env.FAQ_URL || 'https://default-url.com');
    await faqPageInstance.clickupdatepaymentmethodLink();
    await faqPageInstance.waitPagePromise(5000);
    if(await page.getByText('This site can’t be reached').isVisible()){
      console.log('This site can’t be reached is visible');
      await page.getByText('This site can’t be reached').focus();
    }
    else{
      console.log('This site can’t be reached is NOT visible');
    }
    await faqPageInstance.navigateGoBack();
  });

  
  test('Link partnerformsLink', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    // await faqPageInstance.navigateURL(process.env.FAQ_URL || 'https://default-url.com');
    await faqPageInstance.clickpartnerformsLink();
    await faqPageInstance.waitPagePromise(5000);
    if(await page.getByText('This site can’t be reached').isVisible()){
      console.log('This site can’t be reached is visible');
      await page.getByText('This site can’t be reached').focus();
    }
    else{
      console.log('This site can’t be reached is NOT visible');
    }
    await faqPageInstance.navigateGoBack();
  });


  test('Link MyShakeology', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    // await faqPageInstance.navigateURL(process.env.FAQ_URL || 'https://default-url.com');
    
   
    
    await faqPageInstance.clickmyshakeologylink();
    await faqPageInstance.waitPagePromise(5000);
    if(await page.getByText('This site can’t be reached').isVisible() ||
    await page.getByText('This page isn’t working') ){
      console.log('This site is not expected ');
      // await page.getByText('This site can’t be reached').focus();
      // test.fail();
    }
    else{
      console.log('This site can’t be reached is NOT visible');
    }

    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });

  test('Link clickbodilink', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    // await faqPageInstance.navigateURL(process.env.FAQ_URL || 'https://default-url.com');
    
    
    
    await faqPageInstance.clickbodilink();
    await faqPageInstance.waitPagePromise(5000);
    if(await page.getByText('This site can’t be reached').isVisible() ||
    await page.getByText('This page isn’t working') ){
      console.log('This site is not expected ');
      // await page.getByText('This site can’t be reached').focus();
      // test.fail();
    }
    else{
      console.log('This site can’t be reached is NOT visible');
    }

    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });
  test('Link clickbikelink', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    // await faqPageInstance.navigateURL(process.env.FAQ_URL || 'https://default-url.com');
    
    
    
    await faqPageInstance.clickbikelink();
    await faqPageInstance.waitPagePromise(5000);
    if(await page.getByText('This site can’t be reached').isVisible() ||
    await page.getByText('This page isn’t working') ){
      console.log('This site is not expected ');
      // await page.getByText('This site can’t be reached').focus();
      // test.fail();
    }
    else{
      console.log('This site can’t be reached is NOT visible');
    }

    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });
  test('Link clickallorderslink', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    // await faqPageInstance.navigateURL(process.env.FAQ_URL || 'https://default-url.com');
   
    
    await faqPageInstance.clickallorderslink();
    await faqPageInstance.waitPagePromise(5000);
    if(await page.getByText('This site can’t be reached').isVisible() ||
    await page.getByText('This page isn’t working') ){
      console.log('This site is not expected ');
      // await page.getByText('This site can’t be reached').focus();
      // test.fail();
    }
    else{
      console.log('This site can’t be reached is NOT visible');
    }

    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });
  test('Link clickmyaccountlink', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    // await faqPageInstance.navigateURL(process.env.FAQ_URL || 'https://default-url.com');
    
   
    
    await faqPageInstance.clickmyaccountlink();
    await faqPageInstance.waitPagePromise(5000);
    if(await page.getByText('This site can’t be reached').isVisible() ||
    await page.getByText('This page isn’t working') ){
      console.log('This site is not expected ');
      // await page.getByText('This site can’t be reached').focus();
      // test.fail();
    }
    else{
      console.log('This site can’t be reached is NOT visible');
    }

    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });
  test('Link clicktechnicalsupportlink', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    // await faqPageInstance.navigateURL(process.env.FAQ_URL || 'https://default-url.com');
    
    
    
    await faqPageInstance.clicktechnicalsupportlink();
    await faqPageInstance.waitPagePromise(5000);
    if(await page.getByText('This site can’t be reached').isVisible() ||
    await page.getByText('This page isn’t working') ){
      console.log('This site is not expected ');
      // await page.getByText('This site can’t be reached').focus();
      // test.fail();
    }
    else{
      console.log('This site can’t be reached is NOT visible');
    }

    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });
  test('Link clickaffiliatelink', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    // await faqPageInstance.navigateURL(process.env.FAQ_URL || 'https://default-url.com');
    
    
    await faqPageInstance.clickaffiliatelink();
    await faqPageInstance.waitPagePromise(5000);
    if(await page.getByText('This site can’t be reached').isVisible() ||
    await page.getByText('This page isn’t working') ){
      console.log('This site is not expected ');
      // await page.getByText('This site can’t be reached').focus();
      // test.fail();
    }
    else{
      console.log('This site can’t be reached is NOT visible');
    }

    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });
  test('Link clickproductinfolink', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    // await faqPageInstance.navigateURL(process.env.FAQ_URL || 'https://default-url.com');
    
    await faqPageInstance.clickproductinfolink();
    await faqPageInstance.waitPagePromise(5000);
    if(await page.getByText('This site can’t be reached').isVisible() ||
    await page.getByText('This page isn’t working') ){
      console.log('This site is not expected ');
      // await page.getByText('This site can’t be reached').focus();
      // test.fail();
    }
    else{
      console.log('This site can’t be reached is NOT visible');
    }

    // await expect(page).toHaveTitle(/BODi Signin/);

    await faqPageInstance.navigateGoBack();
  });



});