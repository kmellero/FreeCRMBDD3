package stepDefinition;

import java.util.List;
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

public class DealStepDefinition {

	WebDriver driver;
	
	@Given("^user on Login Page$")
	public void user_on_login_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\Program Files\\Selenium-ChromeDriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.get("https://www.freecrm.com");
	}
	
	@When("^title is Free CRM$")
	public void title_is_Free_CRM() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
		
	}	
	@Then("^user enters user and password$")
	public void user_enters_user_and_password(DataTable credentials) {
	
	  List<List<String>> data = credentials.raw();
	 driver.findElement(By.name("username")).sendKeys(data.get(0).get(0)); 
	 driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
	}

	@Then("^login button click$")
	public void login_button_click()  {
		WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();",loginBtn);
	}

	
	@Then("^user home page$")
	public void user_home_page()  {
		
		String title = driver.getTitle();
		System.out.println("home page title: ");
		Assert.assertEquals("CRMPRO", title);

	}
	
	@Then("^user moves to new deal page$")
	public void user_moves_to_new_deal_page() {
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

	@Then("^user enters deal details$")
	public void user_enters_deal_details(DataTable dealDetails)  {
		List<List<String>> data = dealDetails.raw();
		driver.findElement(By.id("title")).sendKeys(data.get(0).get(0));
		driver.findElement(By.id("amount")).sendKeys(data.get(0).get(1));
		driver.findElement(By.id("probability")).sendKeys(data.get(0).get(2));
		driver.findElement(By.id("commission")).sendKeys(data.get(0).get(3));
		driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();

	}

	@Then("browser down")
	public void browser_down() {
		driver.quit();
	}
	
}
