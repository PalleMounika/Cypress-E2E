import { registerPage } from "../../pages/registrationPage";
import registerData from '../../fixtures/registerData.json';

const registerObj = new registerPage();

describe('Test Automation', () => {
  it('Register flow', () => {
    // Open the registration URL
    registerObj.openURL();

    // Fill in the registration form
    registerObj.enterFirstName(registerData.firstName);
    registerObj.enterLastName(registerData.lastName);
    registerObj.enterEmail(registerData.email);
    registerObj.enterTelephone(registerData.telephone);
    registerObj.enterPassword(registerData.password);

    // Select the checkbox and continue
    registerObj.selectCheckbox();
    registerObj.clickOnContinue();
  });
});
