package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class NewContactStepDefintion {

	WebDriver driver;
	String title = "Mrs.";
	String fName = "aa1";
	String lName = "bb2";

	@Given("^user \"(.*)\" \"(.*)\" is already on Home Page$")
	public void user_is_already_on_Home_Page(String usr, String pwd) throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\Program Files\\Selenium-ChromeDriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.get("https://www.freecrm.com");
		driver.findElement(By.name("username")).sendKeys(usr);
		driver.findElement(By.name("password")).sendKeys(pwd);
		WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));

		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", loginBtn);
		Thread.sleep(2000);
		String title = driver.getTitle();
		System.out.println("home page title: " + title);
		Assert.assertEquals("CRMPRO", title);

	}

	@When("^user hover over contacts link$")
	public void user_hover_over_contacts_link() {
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[@title='Contacts']"))).build().perform();
	}

	@Then("^user clicks on New Contact link$")
	public void user_clicks_on_New_Contact_link() {
		try {
			driver.findElement(By.xpath("//a[@title='New Contact']")).click();
			Thread.sleep(2000);
			
//			driver.switchTo().frame("mainpanel");

			String label = driver.findElement(By.xpath("//legend[@class='fieldset' and contains(.,'Contact Information')]")).getText();
			Assert.assertEquals("Contact Information", label);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	@Then("^user enters \"(.*)\", \"(.*)\" and \"(.*)\" Names$")
	public void user_enters_First_and_Last_Namesit(String title, String fName, String lName) {
		/*String title = "Mrs.";
		String fName = "aa1";
		String lName = "bb2";*/

		Select select = new Select(driver.findElement(By.name("title")));
		select.selectByVisibleText(title);
		driver.findElement(By.id("first_name")).sendKeys(fName);
		driver.findElement(By.id("surname")).sendKeys(lName);

	}

	@Then("^user clicks on Save Btn$")
	public void user_clicks_on_Save_Btn() {
		driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
	}

	@Then("^verify new contact \"([^\"]*)\" and \"([^\"]*)\" created$")
//	@Then("^verify new contact \"(.*)\" and \"(.*)\"created$")
	public void verify_new_contact_created(String fName, String lName) {
	/*	String title = "Mrs.";
		String fName = "aa1";
		String lName = "bb2";*/
		driver.findElement(By.xpath("//a[contains(text(),'Contacts')]")).click();
		String newContact = driver.findElement(By.xpath("//a[contains(text(),'" + fName +" "+ lName+"')]")).getText();
		Assert.assertEquals(fName +" "+ lName, newContact);
	}

	@Then("^tear down$")
	public void tear_down() {
		driver.quit();
	}
}
