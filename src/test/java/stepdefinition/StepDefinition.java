package stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.WebElement;

import baseclass.BaseClass;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pom.SignUpPage;

public class StepDefinition extends BaseClass{
	


	@Given("user launch Qafox web application")
	public void userLaunchQafoxWebApplication() {
		launchbrowser("chrome");
		maximizewindow();
		implicitWait(20);
		getUrl("https://tutorialsninja.com/demo/index.php?route=account/register");
	    
	}

	@When("user enter firstname , lastname, email, telephone , password and pwdconfirm")
	public void userEnterFirstnameLastnameEmailTelephonePasswordAndPwdconfirm(io.cucumber.datatable.DataTable dataTable) {
		SignUpPage sp= new  SignUpPage();
		enterValue(sp.getFname(), getDataTableAsMaps(dataTable, 0, "firstname"));
		enterValue(sp.getLname(), getDataTableAsMaps(dataTable, 0, "lastname"));
		enterValue(sp.getEmail(), getDataTableAsMaps(dataTable, 0, "email"));
		enterValue(sp.getPhone(), getDataTableAsMaps(dataTable, 0, "telephone"));
		enterValue(sp.getPass(), getDataTableAsMaps(dataTable, 0, "password"));
		enterValue(sp.getPwdconf(), getDataTableAsMaps(dataTable, 0, "pwdconfirm"));
	    
	}

	@When("user click on subscribe button , accept privacy policy and continue button")
	public void userClickOnSubscribeButtonAcceptPrivacyPolicyAndContinueButton() {
		SignUpPage sp= new  SignUpPage();
		clickElement(sp.getRadiobutton());
		clickElement(sp.getCheckbox());
		clickElement(sp.getContinuebtn());
	}

	@Then("user verify the successful account creation page is dispalyed")
	public void userVerifyTheSuccessfulAccountCreationPageIsDispalyed() {
		SignUpPage sp= new  SignUpPage();
		String text = getText(sp.getSuccessmsg());
		boolean contains = text.contains("Your Account Has Been Created!");
		Assert.assertTrue("verify successful msg", contains);
	  
	}

	@Then("user verify the Password error message is displayed")
	public void userVerifyThePasswordErrorMessageIsDisplayed() {
		SignUpPage sp= new  SignUpPage();
		String text = getText(sp.getErrormsg());
		boolean contains = text.contains("Password must be between 4 and 20 characters!");
		Assert.assertTrue("verify error msg", contains);
		
		
		
	}

	@Then("user verify the E-mail Warning message is displayed")
	public void userVerifyTheEMailWarningMessageIsDisplayed() {
		SignUpPage sp= new  SignUpPage();
		String text = getText(sp.getWarningmsg());
		boolean contains = text.contains("Warning: E-Mail Address is already registered!");
		Assert.assertTrue("verify warning msg", contains);
	}

	

}
