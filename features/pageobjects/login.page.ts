import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputEmail () {
        return $("//input[@name='email']");
    }

    public get inputPassword () {
        return $("//input[@name='password']");
    }

    public get btnSubmit () {
        return $("//button[@type='submit']");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (email: string, password: string) {
        email = 'studentqa@gmail.com';
        password = 'satu2tiga';
        await this.inputEmail.waitForDisplayed({ timeout: 10000 });
        await this.inputEmail.setValue(email);
        await this.inputPassword.waitForDisplayed({ timeout: 5000 });
        await this.inputPassword.setValue(password);
        await this.btnSubmit.waitForClickable({ timeout: 5000 });
        await this.btnSubmit.click();
        await browser.pause(3000);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
