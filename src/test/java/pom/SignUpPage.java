package pom;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import baseclass.BaseClass;

public class SignUpPage extends BaseClass{
	public SignUpPage() {
		PageFactory.initElements(driver, this);
	}
	
	
	@FindBy(id="input-firstname")
	private WebElement fname;
	@FindBy(id="input-lastname")
	private WebElement lname;
	
	@FindBy(id="input-email")
	private WebElement email;
	
	@FindBy(name="telephone")
	private WebElement phone;
	
	@FindBy(name="password")
	private WebElement pass;
	@FindBy(name="confirm")
	private WebElement pwdconf;
	
	@FindBy(xpath="(//input[@type='radio'])[2]")
	private WebElement radiobutton;
	
	@FindBy(name="agree")
	private WebElement checkbox;
	@FindBy(xpath="//input[@type='submit']")
	private WebElement continuebtn ;
	
	@FindBy(xpath="//h1[text()='Your Account Has Been Created!']")
	private WebElement successmsg;
	
	@FindBy(xpath="//div[text()='Password must be between 4 and 20 characters!']")
	private WebElement errormsg;
	
	@FindBy(xpath="//div[text()='Warning: E-Mail Address is already registered!']")
	private WebElement warningmsg;
	
	

	

	public WebElement getWarningmsg() {
		return warningmsg;
	}
	public WebElement getErrormsg() {
		return errormsg;
	}
	public WebElement getSuccessmsg() {
		return successmsg;
	}
	public WebElement getFname() {
		return fname;
	}
	public WebElement getLname() {
		return lname;
	}
	public WebElement getEmail() {
		return email;
	}
	public WebElement getPhone() {
		return phone;
	}
	public WebElement getPass() {
		return pass;
	}
	public WebElement getPwdconf() {
		return pwdconf;
	}
	public WebElement getRadiobutton() {
		return radiobutton;
	}
	public WebElement getCheckbox() {
		return checkbox;
	}
	public WebElement getContinuebtn() {
		return continuebtn;
	}
	
}

