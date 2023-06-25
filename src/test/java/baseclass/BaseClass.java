package baseclass;


import java.time.Duration;
import java.util.List;
import java.util.Map;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {
	public static WebDriver driver;
	
	public static void launchbrowser(String browsername)
	{
		switch(browsername)
		{
		case "chrome":
			ChromeOptions options = new ChromeOptions();
			options.addArguments("--remote-allow-origins=*");
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver(options);
			break;
			
		case "firefox":
			WebDriverManager.firefoxdriver().setup();
			driver = new FirefoxDriver();
			break;
			
		case "edge":
			WebDriverManager.edgedriver().setup();
			driver = new EdgeDriver();
			break;
			
	    default:
	    	break;
			
		}
	}
	
	public static void maximizewindow()
	{
		driver.manage().window().maximize();
	}
	public static void getUrl(String url)
	{
		driver.get(url);
	}
	public void enterValue(WebElement element, String data)
	{
		element.sendKeys(data);
	}
	public void clickElement(WebElement e)
	{
		e.click();
	}
	public String getText(WebElement element)
	{
		String text = element.getText();
		return text;
	}
	public String getAttributeValue(WebElement element , String value)
	{
		String attribute = element.getAttribute(value);
		return attribute;
	}
	
	public static String getProjectDirectory() {
		String path = System.getProperty("user.dir");
		return path;

	}

	public static void closebrowser() {
		driver.close();

	}

	public void quitbrowser() {
		driver.quit();

	}

	public String getDataTableAsMaps(io.cucumber.datatable.DataTable d, int index, String data) {
		List<Map<String, String>> map = d.asMaps();
		String x = map.get(index).get(data);
		return x;
	}
	
	public static void implicitWait(long seconds){
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(seconds));
	}
	
	

}
