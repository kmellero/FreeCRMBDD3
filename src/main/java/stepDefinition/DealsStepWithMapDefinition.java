package stepDefinition;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

//data table with maps : for parametrization of test cases
public class DealsStepWithMapDefinition {

	WebDriver driver;
	
	@Given("^login page$")
	public void login_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\Program Files\\Selenium-ChromeDriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.get("https://www.freecrm.com");
	}
	
	@When("^title -Free CRM$")
	public void title_Free_CRM() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
		
	}	
	@Then("^entering credentials$")
	public void entering_credentials(DataTable credentials) {
	
	for(Map<String, String> data : credentials.asMaps(String.class, String.class)) {
	 driver.findElement(By.name("username")).sendKeys(data.get("username")); 
	 driver.findElement(By.name("password")).sendKeys(data.get("password"));
		}
	}

	@Then("^login button submit$")
	public void login_button_submit()  {
		WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();",loginBtn);
	}

	
	@Then("^home page$")
	public void home_page()  {
		
		String title = driver.getTitle();
		System.out.println("home page title: ");
		Assert.assertEquals("CRMPRO", title);

	}
	
	@Then("^moves to new deal page$")
	public void moves_to_new_deal_page() {
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[@title='Deals']"))).build().perform();
		driver.findElement(By.xpath("//a[@title='New Deal']")).click();
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
		String label = driver.findElement(By.xpath("//legend[@class='fieldset' and contains(.,'Deal')]")).getText();
		Assert.assertEquals("Deal", label);
		
	}

	@Then("^user and deal details$")
	public void user_and_deal_details(DataTable dealDetails)  {
		for(Map<String, String> dData : dealDetails.asMaps(String.class, String.class)) {
		driver.findElement(By.id("title")).sendKeys(dData.get("title"));
		driver.findElement(By.id("amount")).sendKeys(dData.get("amount"));
		driver.findElement(By.id("probability")).sendKeys(dData.get("probability"));
		driver.findElement(By.id("commission")).sendKeys(dData.get("commission"));
		driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
		//move to new deal page
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[@title='Deals']"))).build().perform();
		driver.findElement(By.xpath("//a[@title='New Deal']")).click();

		}
	}
	@Then("browser quit")
	public void browser_quit() {
		driver.quit();
	}
	
}
