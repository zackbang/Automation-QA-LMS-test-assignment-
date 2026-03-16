import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, browser } from '@wdio/globals';

import LoginPage from '../pageobjects/login.page';
import VerbalPage from '../pageobjects/verbal.page';
import verbalPage from '../pageobjects/verbal.page';


type PageName = 'login';

const pages: Record<PageName, typeof LoginPage> = {
    login: LoginPage,
};

// --- LOGIN STEPS ---

Given(/^the user is on the (\w+) page$/, async (page: PageName) => {
    await pages[page].open();
    await browser.pause(2000);
});

When(/^the user login with (.+) and (.+)$/, async (email: string, password: string) => {
    await LoginPage.login(email, password);
    await browser.pause(2000);
});


Then('the user click SAT', async () => {
    await browser.pause(2000);
    const satBtn = await verbalPage.verbalSubject;
    await satBtn.waitForDisplayed({ timeout: 1000 });
    await satBtn.waitForClickable({ timeout: 1000 });
    await satBtn.click();
    await browser.pause(10000);
});

Then('the user open the verbal test', async () => {
    const preBtn = await VerbalPage.verbalPreTestBtn;
    await preBtn.waitForDisplayed({ timeout: 10000 });
    await preBtn.click();
    await browser.pause(2000);

    const cb = await VerbalPage.checkboxintructions;
    await cb.waitForDisplayed({ timeout: 5000 });
    await cb.click();
    await browser.pause(500);

    const startBtn = await VerbalPage.startTestButton;
    await startBtn.waitForDisplayed({ timeout: 5000 });
    await startBtn.click();
    await browser.pause(2000);

    let closeBtn = await VerbalPage.closebutton;
    await closeBtn.waitForDisplayed({ timeout: 5000 });
    await closeBtn.click();
    await browser.pause(1000);
});



// When('the user open the verbal test', async () => {
//     const preBtn = await VerbalPage.continueButton;
//     await preBtn.waitForDisplayed({ timeout: 10000 });
//     await preBtn.click();
//     await browser.pause(2000);

//     // const closeBtn = await VerbalPage.closebutton;
//     // await closeBtn.waitForDisplayed({ timeout: 5000 });
//     // await closeBtn.click();
//     // await browser.pause(1000);
// });

// Step untuk jawab semua 27 soal dengan pola berulang
Then('the user answers all verbal questions modul 1', async () => {
    const pattern = 'A,B,C,D,'.repeat(6) + 'A,B,C';
    const answers = pattern.split(',').map(a => a.trim()).filter(a => a);
    const optionMap: Record<string, number> = { 'A': 1, 'B': 2, 'C': 3, 'D': 4 };
    
    for (let i = 0; i < answers.length; i++) {
        const answer = answers[i];
        const optionIndex = optionMap[answer];
        
        const answerOption = await VerbalPage.answerOptionByIndex(optionIndex);
        await answerOption.waitForDisplayed({ timeout: 10000 });
        await answerOption.scrollIntoView();
        await browser.pause(300);
        await answerOption.click();
        await browser.pause(300);
        
        if (i < answers.length - 1) {
            await browser.pause(500);
            const nextBtn = await VerbalPage.nextBtn;
            await nextBtn.waitForDisplayed({ timeout: 8000 });
            await nextBtn.scrollIntoView();
            await browser.pause(300);
            await nextBtn.click();
            await browser.pause(800);
        }
    }});
    
Then('the user finishes the test modul 1', async () => {
    await browser.pause(500);
    
    const finishBtn = await VerbalPage.finishBtn;
    await finishBtn.waitForClickable({ timeout: 8000 });
    await finishBtn.click();
    await browser.pause(1000);
  
    const submitBtn = await VerbalPage.modalfinishBtn;
    await submitBtn.waitForClickable({ timeout: 8000 });
    await submitBtn.click();
    await browser.pause(1000); 
}); 

Then('the user answers all verbal questions modul 2', async () => {
    const closeBtn = await VerbalPage.closebutton;
    await closeBtn.waitForDisplayed({ timeout: 5000 });
    await closeBtn.click();
    await browser.pause(1000);

    const pattern = 'A,B,C,D,'.repeat(6) + 'A,B,C';
    const answers = pattern.split(',').map(a => a.trim()).filter(a => a);
    const optionMap: Record<string, number> = { 'A': 1, 'B': 2, 'C': 3, 'D': 4 };
    
    for (let i = 0; i < answers.length; i++) {
        const answer = answers[i];
        const optionIndex = optionMap[answer];
        
        const answerOption = await VerbalPage.answerOptionByIndex(optionIndex);
        await answerOption.waitForDisplayed({ timeout: 10000 });
        await answerOption.scrollIntoView();
        await browser.pause(300);
        await answerOption.click();
        await browser.pause(300);
        
        if (i < answers.length - 1) {
            await browser.pause(500);
            const nextBtn = await VerbalPage.nextBtn;
            await nextBtn.waitForDisplayed({ timeout: 8000 });
            await nextBtn.scrollIntoView();
            await browser.pause(300);
            await nextBtn.click();
            await browser.pause(800);
        }
    }});

Then('the user finishes the test modul 2', async () => {
    await browser.pause(500);
    
    const finishBtn = await VerbalPage.finishBtn;
    await finishBtn.waitForClickable({ timeout: 8000 });
    await finishBtn.click();
    await browser.pause(1000);
  
    const submitBtn = await VerbalPage.modalfinishBtn;
    await submitBtn.waitForClickable({ timeout: 8000 });
    await submitBtn.click();
    await browser.pause(1000); 
}); 
    






