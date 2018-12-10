package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginStepDefinition {
	
	WebDriver driver;
	
	@Given("^user is already on Login Page$")
	public void user_already_on_login_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\Program Files\\Selenium-ChromeDriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.get("https://www.freecrm.com");
	}
	
	

	@When("^title of login page is Free CRM$")
	public void title_of_login_page_is_Free_CRM() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
		
	}
	//1. \"([^\"]*)\"  or 2. \"(.*)\"
	@Then("^user enters \"(.*)\" and user enters \"(.*)\"$")
	public void user_enters_username_and_user_enters_password(String usr, String pswd) {
		driver.findElement(By.name("username")).sendKeys(usr);
		driver.findElement(By.name("password")).sendKeys(pswd);
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button()  {
		WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();",loginBtn);
	}


	@Then("^user is on home page$")
	public void user_is_on_home_page()  {
		
		String title = driver.getTitle();
		System.out.println("home page title: ");
		Assert.assertEquals("CRMPRO", title);

	}
	
	@Then("close the browser")
	public void close_the_browser() {
		driver.quit();
	}
}
