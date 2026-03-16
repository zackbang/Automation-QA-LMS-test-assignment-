import { $ } from '@wdio/globals'
import Page from './page.js';

class VerbalPage extends Page {
    
    public get verbalSubject(){
        return $("//a[contains(@href, 'verbal') or contains(., 'Verbal') or contains(., 'SAT')]//div")
    }
    public get mathbtn(){
        return $ ("/html[1]/body[1]/div[2]/div[3]/div[2]/div[1]/div[2]/section[1]/div[2]/div[2]/div[2]/div[2]/button[1]");
     }

    public get verbalPreTestBtn(){
    return $("//*[@id='verbal_pre-test']");
}

    public get questionContainer(){
        return $("//div[contains(@class,'question') or contains(@class,'options') or contains(@class,'choices') or contains(@class,'answers')]//ul | //ul[.//li]")
    }

    public answerOptionByIndex(index: number){
        return $(`//ul[contains(@class, 'option') or contains(@class, 'choice') or contains(@class, 'answer') or .//li[contains(@class, 'option') or contains(@class, 'choice')]]/li[${index}] | (//ul[.//li])[last()]/li[${index}]`)
    }

    public get nextBtn(){
        return $("//button[normalize-space()='Next' or .//span[normalize-space()='Next'] or contains(., 'Next')]")
    }

    // Finish button - muncul di soal terakhir (ke-27)
    public get finishBtn(){
        return $("//button[normalize-space()='FINISH' or normalize-space()='Finish' or contains(., 'FINISH')]")
    }

    public get finishBtnSpan(){
        return $("//div[@id='«r2a»']/div[3]/button/span")
    }

    public get nextIconSvg(){
        return $("(.//*[normalize-space(text()) and normalize-space(.)='Next'])[1]/following::*[name()='svg'][1]")
    }

    public get resultModal(){
        return $("//div[@id='«r4s»']/div/div")
    }

    public get subjectList(){
    return $("//div[@id='Subject_filter']/div/div/div[2]");
}

    public get checkboxintructions(){
        return $("//label[contains(.,'I Understand')]");
    }
    public get instruction(){
        return $("//div[contains(@class, 'modal')]//p[contains(text(), 'instruction')]");
    }
    public get startTestButton(){
        return $("//button[normalize-space()='START' or normalize-space()='Start' or contains(., 'Mulai') or contains(., 'Begin')]");
    }

    public get testintructions(){
        return $("//body[@id='root']/div[3]/div[4]/div[3]/div/ul/li/div/p/span/div");
    }

    public get testintructions1(){
        return $("xpath=//div[@id='«r14»']/div[3]/button");
    }
    public get continueButton(){
        return $("//button[normalize-space()='Continue' or contains(., 'Continue')]");
    }
    public answerOptionByInde1(index: number) {
        return $(`//ul/li[${index}]//div[contains(@class,'option') or contains(@class,'choice') or self::li/div]`);
    }
    public get closebutton(){
        return $("//button[normalize-space()='CLOSE' or normalize-space()='Close' or contains(., 'CLOSE')]");
    }
    public get confirmbutton(){
        return $("//button[contains(.,'confirm')]");
    }

    public get SATbutton(){
        return $("/body[@id='root']/div[2]/div[3]/div[2]/div/a[4]/div/div[2]/div/span");
    }

    public get modalfinishBtn(){
        return $("//div[@role='dialog' or contains(@class,'modal')]//button[normalize-space()='FINISH' or normalize-space()='Finish']");
    }

}
export default new VerbalPage();