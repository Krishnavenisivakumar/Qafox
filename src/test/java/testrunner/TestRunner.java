package testrunner;

import org.junit.runner.RunWith;

import baseclass.BaseClass;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Features", glue="stepdefinition",dryRun=false,snippets=SnippetType.CAMELCASE,monochrome=true,plugin= {"pretty", "junit:target\\Report\\jfile.xml","html:target\\Report","json:target\\Report\\sample.json"})

public class TestRunner  extends BaseClass {

}
