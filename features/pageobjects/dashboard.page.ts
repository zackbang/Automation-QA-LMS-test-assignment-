import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    /**
     * define selectors using getter methods
     */
    
    
    public get flashAlert () {
        return $("//*[@id='root']/div[2]/div[2]/div[2]/div/a[1]/div/div[2]/div[1]/span");
    }
    public get buttonIELTS(){
        return $("//*[@id='root']/div[2]/div[2]/div[2]/div/a[1]/div/div[2]")

    }
    
    public get buttonSAT() {
        return $("//body[@id='root']/div[2]/div[2]/div[2]/div/a[4]/div/div");
    }

    public get verbalSAT() {
        return $("//body[@id='root']//a[@id='verbal_sat' or contains(., 'Verbal')]");
    }
    public get listeningIELTS (){
        return $("//button[@id='listening_pre-test']")
    }
    
    public get titleInstructions(){
        return $("//h2[contains(.,'Practice Test Instruction')]")
    }

    public get audioInstrustions (){
        return $("//p[contains(.,'Click here for the audio')]")
    }

    public get checkBox (){
        return $("//label[contains(.,'I Understand')]")
    }

    public get startButton(){
        return $("/html/body/div[6]/div/div/div/div/div/div[2]/div[3]/button")
    }
    public get tittlePreTest(){
        return $("//h4[contains(.,'Pre Test')]")
    }

    public get audioListening(){
        return $("//button[contains(.,'Click here for the audio')]")
    }

    public get question1(){
        return $("//input[@name='question1']")
    }


    public get question2(){
        return $("//input[@name='question2']")
    }


    public get question3(){
        return $("//input[@name='question3']")
    }


    public get question4(){
        return $("//input[@name='question4']")
    }


    public get question5(){
        return $("//input[@name='question5']")
    }

    public get question6(){
        return $("//input[@name='question6']")
    }
    
    public get question7(){
        return $("//input[@name='question7']")
    }

    public get question8(){
        return $("//input[@name='question8']")
    }

    public get question9(){
        return $("//input[@name='question9']")
    }

    public get question10(){
        return $("//input[@name='question10']")
    }

    public get question11(){
        return $("//*[@id='root']/div[3]/div[1]/section[2]/div/div[2]/div[3]/div/div[2]/section[2]")
        
    }

    public get question12(){
        return $("/html/body/div[3]/div[1]/section[2]/div/div[2]/div[4]/div/div[2]/section[1]/input")
    }
    

    public get question13(){
        return $("/html/body/div[3]/div[1]/section[2]/div/div[2]/div[5]/div/div[2]/section[2]/input")
    }

    public get question14(){
        return $("/html/body/div[3]/div[1]/section[2]/div/div[2]/div[6]/div/div[2]/section[3]/input")
    }

    public get question15(){
        return $("/html/body/div[3]/div[1]/section[2]/div/div[2]/div[7]/div/div[2]/section[1]/input")
    }

    public get question16(){
        return $("//input[@name='question16']")
    }
    public get question17(){
        return $("//input[@name='question17']")
    }
    public get question18(){
        return $("//input[@name='question18']")
    }
    public get question19(){
        return $("//input[@name='question19']")
    }

    public get question20(){
        return $("//input[@name='question20']")
    }


    public get question21(){
        return $("//input[@name='question21']")
    }


    public get question22(){
        return $("//input[@name='question22']")
    }


    public get question23(){
        return $("//input[@name='question23']")
    }


    public get question24(){
        return $("//input[@name='question24']")
    }

    public get question25(){
        return $("//input[@name='question25']")
    }

    public get question26(){
        return $("//input[@name='question26']")
    }

    public get question27(){
        return $("//input[@name='question27']")
    }

    public get question28(){
        return $("//input[@name='question28']")
    }

    public get question29(){
        return $("//input[@name='question29']")
    }

    public get question30(){
        return $("//input[@name='question30']")
    }

    public get question31(){
        return $("//input[@name='question31']")
    }

    public get question32(){
        return $("//input[@name='question32']")
    }

    public get question33(){
        return $("//input[@name='question33']")
    }

    public get question34(){
        return $("//input[@name='question34']")
    }

    public get question35(){
        return $("//input[@name='question35']")
    }

    public get question36(){
        return $("//input[@name='question36']")
    }

    public get question37(){
        return $("//input[@name='question37']")
    }

    public get question38(){
        return $("//input[@name='question38']")
    }

    public get question39(){
        return $("//input[@name='question39']")
    }

    public get question40(){
        return $("//input[@name='question40']")
    }

    public get question41(){
        return $("//input[@name='question41']")
    }

    public get question42(){
        return $("//input[@name='question42']")
    }

    public get question43(){
        return $("//input[@name='question43']")
    }

    public get question44(){
        return $("//input[@name='question44']")
    }

    public get question45(){
        return $("//input[@name='question45']")
    }

    public get submitListening(){
        return $("//*[@id='root']/div[3]/main/nav/div/button[3]")
    }

    public get submitBtn(){
        return $("/html/body/div[7]/div/div/div/div/div/button[2]")
    }
    

    public get ieltsSidebar(){
        return $("//a[@id='IELTS_Sidebar']/div")

    }

    public get reportBtn(){
        return $("/html/body/div[3]/div[2]/div[2]/div/div[2]/section/div[2]/div[1]/div[2]/div[2]/button")
    }

    public get subjectList(){
        return $("//div[@id='Subject_filter']/div/div/div[2]")
    }

    public get preTestSubject(){
        return $("//div/div[2]/div/div[2]/div/div/div/div[2]/div/div")
    }

    public get listeningSubject(){
        return $("/html/body/div[2]/div[2]/div[2]/div/div[2]/div/div[3]/button[1]")
    }
}

export default new DashboardPage();


