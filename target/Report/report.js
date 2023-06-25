$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Signup.feature");
formatter.feature({
  "name": "To validate the SignUp page",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launch Qafox web application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.userLaunchQafoxWebApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_SU_01 Validation of Successful creation of account with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user enter firstname , lastname, email, telephone , password and pwdconfirm",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "telephone",
        "password",
        "pwdconfirm"
      ]
    },
    {
      "cells": [
        "Krishnaveni",
        "S",
        "krish@gmail.com",
        "7878787878",
        "Testtest@123",
        "Testtest@123"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userEnterFirstnameLastnameEmailTelephonePasswordAndPwdconfirm(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on subscribe button , accept privacy policy and continue button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.userClickOnSubscribeButtonAcceptPrivacyPolicyAndContinueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify the successful account creation page is dispalyed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userVerifyTheSuccessfulAccountCreationPageIsDispalyed()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[text()\u003d\u0027Your Account Has Been Created!\u0027]\"}\n  (Session info: chrome\u003d114.0.5735.134)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-BQBMMJ9E\u0027, ip: \u0027192.168.1.22\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_361\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [044c9f9d672dc34b8c8f34e1e8d3d5da, findElement {using\u003dxpath, value\u003d//h1[text()\u003d\u0027Your Account Has Been Created!\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.134, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\Krish\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52434}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52434/devtoo..., se:cdpVersion: 114.0.5735.134, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 044c9f9d672dc34b8c8f34e1e8d3d5da\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat baseclass.BaseClass.getText(BaseClass.java:65)\r\n\tat stepdefinition.StepDefinition.userVerifyTheSuccessfulAccountCreationPageIsDispalyed(StepDefinition.java:48)\r\n\tat ✽.user verify the successful account creation page is dispalyed(file:src/test/resources/Features/Signup.feature:10)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launch Qafox web application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.userLaunchQafoxWebApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_SU_02 Validation of Successful creation of account with Invalid credentials( Invalid password)",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user enter firstname , lastname, email, telephone , password and pwdconfirm",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "telephone",
        "password",
        "pwdconfirm"
      ]
    },
    {
      "cells": [
        "Krishnaveni",
        "S",
        "krish123@gmail.com",
        "7878787878",
        "T12",
        "T12"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userEnterFirstnameLastnameEmailTelephonePasswordAndPwdconfirm(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on subscribe button , accept privacy policy and continue button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.userClickOnSubscribeButtonAcceptPrivacyPolicyAndContinueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify the Password error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userVerifyThePasswordErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launch Qafox web application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.userLaunchQafoxWebApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_SU_03 Validation of Successful creation of account with Invalid credentials (Invalid email)",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user enter firstname , lastname, email, telephone , password and pwdconfirm",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "telephone",
        "password",
        "pwdconfirm"
      ]
    },
    {
      "cells": [
        "Krishnaveni",
        "S",
        "krish@gmail.com",
        "7878787878",
        "Testtest@123",
        "Testtest@123"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userEnterFirstnameLastnameEmailTelephonePasswordAndPwdconfirm(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on subscribe button , accept privacy policy and continue button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.userClickOnSubscribeButtonAcceptPrivacyPolicyAndContinueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify the E-mail Warning message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userVerifyTheEMailWarningMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launch Qafox web application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.userLaunchQafoxWebApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_SU_04 Validation of Successful creation of account with Invalid credentials (Invalid telephone)",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user enter firstname , lastname, email, telephone , password and pwdconfirm",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "telephone",
        "password",
        "pwdconfirm"
      ]
    },
    {
      "cells": [
        "Krishnaveni",
        "S",
        "veni987@gmail.com",
        "78787",
        "Testtest@123",
        "Testtest@123"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userEnterFirstnameLastnameEmailTelephonePasswordAndPwdconfirm(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on subscribe button , accept privacy policy and continue button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.userClickOnSubscribeButtonAcceptPrivacyPolicyAndContinueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify the successful account creation page is dispalyed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userVerifyTheSuccessfulAccountCreationPageIsDispalyed()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[text()\u003d\u0027Your Account Has Been Created!\u0027]\"}\n  (Session info: chrome\u003d114.0.5735.134)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-BQBMMJ9E\u0027, ip: \u0027192.168.1.22\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_361\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f97f37fba720c04b5529bf672bcf7af3, findElement {using\u003dxpath, value\u003d//h1[text()\u003d\u0027Your Account Has Been Created!\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.134, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\Krish\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52503}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52503/devtoo..., se:cdpVersion: 114.0.5735.134, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: f97f37fba720c04b5529bf672bcf7af3\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat baseclass.BaseClass.getText(BaseClass.java:65)\r\n\tat stepdefinition.StepDefinition.userVerifyTheSuccessfulAccountCreationPageIsDispalyed(StepDefinition.java:48)\r\n\tat ✽.user verify the successful account creation page is dispalyed(file:src/test/resources/Features/Signup.feature:31)\r\n",
  "status": "failed"
});
});