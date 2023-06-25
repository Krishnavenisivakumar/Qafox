Feature: To validate the SignUp page

Background:
		Given user launch Qafox web application
		Scenario: TC_SU_01 Validation of Successful creation of account with valid credentials
		When user enter firstname , lastname, email, telephone , password and pwdconfirm 
		|firstname|lastname|email|telephone|password|pwdconfirm|
		|Krishnaveni|S|veni@gmail.com|7878787878|Testtest@123|Testtest@123|
		And  user click on subscribe button , accept privacy policy and continue button
		Then user verify the successful account creation page is dispalyed
		
		Scenario: TC_SU_02 Validation of Successful creation of account with Invalid credentials( Invalid password)
		When user enter firstname , lastname, email, telephone , password and pwdconfirm 
		|firstname|lastname|email|telephone|password|pwdconfirm|
		|Krishnaveni|S|krishna123@gmail.com|7878787878|T12|T12|
		And  user click on subscribe button , accept privacy policy and continue button
		Then user verify the Password error message is displayed
		
		Scenario: TC_SU_03 Validation of Successful creation of account with Invalid credentials (Invalid email)
		When user enter firstname , lastname, email, telephone , password and pwdconfirm 
		|firstname|lastname|email|telephone|password|pwdconfirm|
		|Krishnaveni|S|veni@gmail.com|7878787878|Testtest@123|Testtest@123|
		And  user click on subscribe button , accept privacy policy and continue button
		Then user verify the E-mail Warning message is displayed
		
		Scenario: TC_SU_04 Validation of Successful creation of account with Invalid credentials (Invalid telephone)
		When user enter firstname , lastname, email, telephone , password and pwdconfirm 
		|firstname|lastname|email|telephone|password|pwdconfirm|
		|Krishnaveni|S|veni134@gmail.com|78787|Testtest@123|Testtest@123|
		And  user click on subscribe button , accept privacy policy and continue button
		Then user verify the successful account creation page is dispalyed
		
		
		
		
		
		
		
		
		
		 

