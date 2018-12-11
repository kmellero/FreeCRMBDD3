package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HooksStepDefinition3 {

	@Given("^user on Mail Page$")
	public void user_on_Mail_Page() {
		System.out.println("user is on mail page");
	}

	@When("^user fills the mail form$")
	public void user_fills_the_mail_form() {
		System.out.println("user fills the mail form");
	}

	@Then("^mail is created$")
	public void mail_is_created() {
		System.out.println("mail is created");
	}
}
