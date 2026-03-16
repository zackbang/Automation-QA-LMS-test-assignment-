import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, browser } from '@wdio/globals';

import LoginPage from '../pageobjects/login.page.js';
import DashboardPage from '../pageobjects/dashboard.page.js';

type PageName = 'login';

const pages: Record<PageName, typeof LoginPage> = {
    login: LoginPage,
};

// --- LOGIN STEPS ---

Given(/^I am on the (\w+) page$/, async (page: PageName) => {
    await pages[page].open();
});

When(/^I login with (.+) and (.+)$/, async (email, password) => {
    await LoginPage.login(email, password);
});

Then(/^I should see a dashboard page saying (.*)$/, async (message) => {
    await expect(DashboardPage.flashAlert).toBeExisting();
    await expect(DashboardPage.flashAlert).toHaveText(expect.stringContaining(message));
});

// --- LISTENING TEST STEPS ---

When('I click listening pre test IELTS', async function () {
    await DashboardPage.buttonIELTS.click();
    await expect(DashboardPage.listeningIELTS).toBeExisting();
    await DashboardPage.listeningIELTS.click();
});

Then('I see pre test instructions', async function() {
    await expect(DashboardPage.titleInstructions).toBeExisting();
    
    // Interaksi Audio & Checkbox
    await DashboardPage.audioInstrustions.click();
    await browser.pause(8000); 
    await DashboardPage.audioInstrustions.click();
    await DashboardPage.checkBox.click();
    await browser.pause(2000);
});

Then('I start take listening test IELTS', async function () {
    await DashboardPage.startButton.click();
    await expect(DashboardPage.tittlePreTest).toBeExisting();
    
    // Play Audio Soal
    await DashboardPage.audioListening.click();
    await browser.pause(7000);
});

// HAPUS parameter (int, int2) karena tidak dipakai di logic bawahnya
Then('I fill the question from {int} to {int}', async () => {
  await DashboardPage.question1.setValue('Animal Park');
  await expect(DashboardPage.question1).toHaveValue('Animal Park');
  
  await DashboardPage.question2.setValue('Cold and cloudy');
  await expect(DashboardPage.question2).toHaveValue('Cold and cloudy');
  
  await DashboardPage.question3.setValue('10.15 am');
  await expect(DashboardPage.question3).toHaveValue('10.15 am');
  
  await DashboardPage.question4.setValue('Birds of prey');
  await expect(DashboardPage.question4).toHaveValue('Birds of prey');
  
  await DashboardPage.question5.setValue('reptile display');
  await expect(DashboardPage.question5).toHaveValue('reptile display');
  
  await DashboardPage.question6.setValue('6.30 pm');
  await expect(DashboardPage.question6).toHaveValue('6.30 pm');
  
  await DashboardPage.question7.setValue('Chinese');
  await expect(DashboardPage.question7).toHaveValue('Chinese');
  
  await DashboardPage.question8.setValue('Japanese');
  await expect(DashboardPage.question8).toHaveValue('Japanese');
  
  await DashboardPage.question9.setValue('Korean');
  await expect(DashboardPage.question9).toHaveValue('Korean');
  
  await DashboardPage.question10.setValue('Thai');
  await expect(DashboardPage.question10).toHaveValue('Thai');
});

Then('I Answer question from {int} to {int}', async () => {
  await DashboardPage.question11.click();
  await DashboardPage.question12.click();
  await DashboardPage.question13.click();
  await DashboardPage.question14.click();
  await DashboardPage.question15.click();
  
  await DashboardPage.question16.setValue('D');
  await expect(DashboardPage.question16).toHaveValue('D');
  
  await DashboardPage.question17.setValue('F');
  await expect(DashboardPage.question17).toHaveValue('F');
  
  await DashboardPage.question18.setValue('B');
  await expect(DashboardPage.question18).toHaveValue('B');
  
  await DashboardPage.question19.setValue('C');
  await expect(DashboardPage.question19).toHaveValue('C');
  
  await DashboardPage.question20.setValue('A');
  await expect(DashboardPage.question20).toHaveValue('A');
});

Then('I Answered question from {int} to {int}', async () => {
  await DashboardPage.question21.setValue('G');
  await expect(DashboardPage.question21).toHaveValue('G');
  
  await DashboardPage.question22.setValue('E');
  await expect(DashboardPage.question22).toHaveValue('E');
  
  await DashboardPage.question23.setValue('C');
  await expect(DashboardPage.question23).toHaveValue('C');
  
  await DashboardPage.question24.setValue('A');
  await expect(DashboardPage.question24).toHaveValue('A');
  
  await DashboardPage.question25.setValue('Header');
  await expect(DashboardPage.question25).toHaveValue('Header');
  
  await DashboardPage.question26.setValue('16');
  await expect(DashboardPage.question26).toHaveValue('16');
  
  await DashboardPage.question27.setValue('12');
  await expect(DashboardPage.question27).toHaveValue('12');
  
  await DashboardPage.question28.setValue('Single');
  await expect(DashboardPage.question28).toHaveValue('Single');
  
  await DashboardPage.question29.setValue('Work');
  await expect(DashboardPage.question29).toHaveValue('Work');
  
  await DashboardPage.question30.setValue('Teacher');
  await expect(DashboardPage.question30).toHaveValue('Teacher');
  
  await DashboardPage.question31.setValue('Regulations');
  await expect(DashboardPage.question31).toHaveValue('Regulations');
  
  await DashboardPage.question32.setValue('Short grass');
  await expect(DashboardPage.question32).toHaveValue('Short grass');
  
  await DashboardPage.question33.setValue('Development');
  await expect(DashboardPage.question33).toHaveValue('Development');
  
  await DashboardPage.question34.setValue('Passive recreation');
  await expect(DashboardPage.question34).toHaveValue('Passive recreation');
  
  await DashboardPage.question35.setValue('Get lost');
  await expect(DashboardPage.question35).toHaveValue('Get lost');
  
  await DashboardPage.question36.setValue('Industrial Revolution');
  await expect(DashboardPage.question36).toHaveValue('Industrial Revolution');
  
  await DashboardPage.question37.setValue('50,000');
  await expect(DashboardPage.question37).toHaveValue('50,000');
  
  await DashboardPage.question38.setValue('central lake');
  await expect(DashboardPage.question38).toHaveValue('central lake');
  
  await DashboardPage.question39.setValue('Refuge');
  await expect(DashboardPage.question39).toHaveValue('Refuge');
  
  await DashboardPage.question40.setValue('Melbourne');
  await expect(DashboardPage.question40).toHaveValue('Melbourne');
});

Then('I submit test and see report', async () => {
  await DashboardPage.submitListening.click();
  await browser.pause(3000);
  
  await DashboardPage.submitBtn.click();
  await browser.pause(3000);
  
  await DashboardPage.reportBtn.click();
  await browser.pause(3000);
  
  await DashboardPage.subjectList.click();
  await browser.pause(3000);
  
  await DashboardPage.preTestSubject.click();
  await browser.pause(3000);
});
When('the user open the math  test', () => {
  // Write code here that turns the phrase above into concrete actions
})
