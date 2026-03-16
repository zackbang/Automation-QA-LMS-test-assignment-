import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from 'expect-webdriverio';

Given('the user opens the login page', async () => {
  await browser.url('https://staging.kobieducation.com/login');
  // await browser.setWindowSize(550, 691);
});

When(
   /^the user logs in with email "([^"]+)" and password "([^"]+)"$/,
  async (email: string, password: string) => {
    const emailField = await $('[name="email"]');
    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(email);

    const passwordField = await $('[name="password"]');
    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue(password);

    const loginButton = await $('button[type="submit"]');
    await loginButton.waitForClickable({ timeout: 5000 });
    await loginButton.click();
    await browser.pause(3000);
  }
);

Then('the user navigates to the writing practice', async () => {
  await browser.pause(3000)
  const classModal = await browser.$("//body[@id='root']/div[2]/div[2]/div[2]/div/a/div/div")
  await classModal.click();
  const writingCard = await browser.$('/html/body/div[2]/div[2]/div[2]/div/div[2]/section/div[2]/div[3]/div[2]/div[2]/button');
  await writingCard.click();

 // const practiceOption = await $('#writing_practice-1');
 // await practiceOption.click();
});

Then('the user selects multiple subjects', async () => {
  const selectInput = await $('//div[@id="Subject_filter"]/div/div/div[2]');

  // Select first subject
  await selectInput.click();
  await $('//div[@id="react-select-2-option-1"]').click();

  // Select second subject
  await selectInput.click();
  await $('//div[@id="react-select-2-option-2"]').click();

  // Toggle selections again (deselect/reselect as needed)
  await selectInput.click();
  await $('//div[@id="react-select-2-option-1"]').click();

  await selectInput.click();
  await $('//div[@id="react-select-2-option-2"]').click();

 const practiceOption = await $('//button[@id="writing_practice-1"]');
  await practiceOption.click();
const understandBtn = await $('//input[@id=":r1s:"]')
 await understandBtn.click()
 const startTest = await $('//button[@type="button"])[10]');
 await startTest.click()
});

Then('the user edits the writing content', async () => {
  const editor1 = await $('.false > .h-\\[300px\\]');
  await editor1.click();
  await browser.execute((el) => {
    el.innerHTML = 'oke deh';
  }, await editor1);

  const saveButton = await $('.border-blue-500');
  await saveButton.click();

  const editor2 = await $('.false > .h-\\[300px\\]');
  await editor2.click();
  await browser.execute((el) => {
    el.innerHTML = 'oke deh';
  }, await editor2);
});

Then('the user submits the writing test', async () => {
  const submitButton = await $('.gap-1');
  await submitButton.click();
});
