import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, browser } from '@wdio/globals';

import VerbalPage from '../pageobjects/verbal.page';


Then('the user open the math test', async () => {
    const preBtn = await VerbalPage.mathbtn;
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

    const closeBtn = await VerbalPage.closebutton;
    await closeBtn.waitForDisplayed({ timeout: 5000 });
    await closeBtn.click();
    await browser.pause(1000);
});

// When('the user open the math test', async () => {
//     const preBtn = await VerbalPage.continueButton;
//     await preBtn.waitForDisplayed({ timeout: 10000 });
//     await preBtn.click();
//     await browser.pause(2000);

//     // const closeBtn = await VerbalPage.closebutton;
//     // await closeBtn.waitForDisplayed({ timeout: 10000 });
//     // await closeBtn.click();
//     // await browser.pause(1000);
// });

function getEssayAnswer(questionIndex?: number): number {
    // List jawaban essay integer untuk SAT Math (bisa disesuaikan)
    const essayAnswers = [1, 2, 3, 5, 10, 15, 20];
    
    // Ambil jawaban secara berurutan atau random
    if (questionIndex !== undefined) {
        return essayAnswers[questionIndex % essayAnswers.length];
    }
    
    // Atau gunakan random
    return essayAnswers[Math.floor(Math.random() * essayAnswers.length)];
}

// Step untuk jawab semua 27 soal dengan pola berulang
Then('the user answers all math questions modul 1', async () => {
    const totalQuestions = 22;
    const pattern = 'A,B,C,D,'.repeat(5) + 'A,B';
    const answers = pattern.split(',').map(a => a.trim()).filter(a => a).slice(0, totalQuestions);
    const optionMap: Record<string, number> = { 'A': 1, 'B': 2, 'C': 3, 'D': 4 };

    const tryAnswerEssay = async (questionIndex: number): Promise<boolean> => {
        const answerValue = getEssayAnswer(questionIndex);
        const answerText = String(Math.trunc(answerValue));
        const essaySelectors = [
            "//*[contains(normalize-space(),'Answer Preview')]/preceding::input[(not(@type) or @type='text' or @type='number' or @type='tel') and not(@disabled) and not(@readonly)][1]",
            "//*[contains(normalize-space(),'Answer Preview')]/preceding::textarea[not(@disabled) and not(@readonly)][1]",
            "//input[(not(@type) or @type='text' or @type='number' or @type='tel') and not(@disabled) and not(@readonly) and not(@type='checkbox') and not(@type='radio')]"
        ];

        for (const selector of essaySelectors) {
            const field = await $(selector);
            if (await field.isExisting() && await field.isDisplayed()) {
                await field.scrollIntoView();
                await field.clearValue();
                await field.setValue(answerText);
                await browser.keys('Tab');
                await browser.pause(300);
                return true;
            }
        }

        return false;
    };
    
    for (let i = 0; i < answers.length; i++) {
        const answer = answers[i];
        const optionIndex = optionMap[answer];

        const essayAnswered = await tryAnswerEssay(i);
        if (!essayAnswered) {
            const answerOption = await VerbalPage.answerOptionByIndex(optionIndex);
            if (await answerOption.isExisting() && await answerOption.isDisplayed()) {
                await answerOption.click();
                await browser.pause(300);
            } else {
                const fallbackOption = await VerbalPage.answerOptionByInde1(optionIndex);
                await fallbackOption.waitForDisplayed({ timeout: 8000 });
                await fallbackOption.click();
                await browser.pause(300);
            }
        }
        
        if (i < answers.length - 1) {
            const finishVisible = await VerbalPage.finishBtn.isExisting() && await VerbalPage.finishBtn.isDisplayed();
            if (finishVisible) {
                break;
            }

            const nextBtn = await VerbalPage.nextBtn;
            await nextBtn.waitForDisplayed({ timeout: 10000 });
            await nextBtn.scrollIntoView();

            try {
                await nextBtn.waitForClickable({ timeout: 10000 });
                await nextBtn.click();
            } catch {
                await browser.execute((el) => {
                    (el as HTMLElement).click();
                }, nextBtn);
            }

            await browser.pause(800);
        }
    }
    
    await browser.pause(1000);
}); 
    

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


Then('the user answers all math questions modul 2', async () => {
    const closeBtn = await VerbalPage.closebutton;
    await closeBtn.waitForDisplayed({ timeout: 5000 });
    await closeBtn.click();
    await browser.pause(1000)
    
    const totalQuestions = 22;
    const pattern = 'A,B,C,D,'.repeat(5) + 'A,B';
    const answers = pattern.split(',').map(a => a.trim()).filter(a => a).slice(0, totalQuestions);
    const optionMap: Record<string, number> = { 'A': 1, 'B': 2, 'C': 3, 'D': 4 };

    const tryAnswerEssay = async (questionIndex: number): Promise<boolean> => {
        const answerValue = getEssayAnswer(questionIndex);
        const answerText = String(Math.trunc(answerValue));
        const essaySelectors = [
            "//*[contains(normalize-space(),'Answer Preview')]/preceding::input[(not(@type) or @type='text' or @type='number' or @type='tel') and not(@disabled) and not(@readonly)][1]",
            "//*[contains(normalize-space(),'Answer Preview')]/preceding::textarea[not(@disabled) and not(@readonly)][1]",
            "//input[(not(@type) or @type='text' or @type='number' or @type='tel') and not(@disabled) and not(@readonly) and not(@type='checkbox') and not(@type='radio')]"
        ];

        for (const selector of essaySelectors) {
            const field = await $(selector);
            if (await field.isExisting() && await field.isDisplayed()) {
                await field.scrollIntoView();
                await field.clearValue();
                await field.setValue(answerText);
                // Trigger blur so app validates answer and enables Next.
                await browser.keys('Tab');
                await browser.pause(300);
                return true;
            }
        }

        return false;
    };
    
    for (let i = 0; i < answers.length; i++) {
        const answer = answers[i];
        const optionIndex = optionMap[answer];

        const essayAnswered = await tryAnswerEssay(i);
        if (!essayAnswered) {
            const answerOption = await VerbalPage.answerOptionByIndex(optionIndex);
            if (await answerOption.isExisting() && await answerOption.isDisplayed()) {
                await answerOption.click();
                await browser.pause(300);
            } else {
                const fallbackOption = await VerbalPage.answerOptionByInde1(optionIndex);
                await fallbackOption.waitForDisplayed({ timeout: 8000 });
                await fallbackOption.click();
                await browser.pause(300);
            }
        }
        
        if (i < answers.length - 1) {
            const finishVisible = await VerbalPage.finishBtn.isExisting() && await VerbalPage.finishBtn.isDisplayed();
            if (finishVisible) {
                break;
            }

            const nextBtn = await VerbalPage.nextBtn;
            await nextBtn.waitForDisplayed({ timeout: 10000 });
            await nextBtn.scrollIntoView();

            try {
                await nextBtn.waitForClickable({ timeout: 10000 });
                await nextBtn.click();
            } catch {
                await browser.execute((el) => {
                    (el as HTMLElement).click();
                }, nextBtn);
            }

            await browser.pause(800);
        }
    }
    
    await browser.pause(1000);
});

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