package stepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HooksStepDefinition2 {

/* no need for @Before & After.  Once for all scenarios in the same feature file.
 * 	@Before // import from cucumber.api.java !!!
	public void setUP() {
		System.out.println("launch browser");
		System.out.println("Enter url for FreeCRM app");
	}

	@After
	public void tearDown() {
		System.out.println("close the browser");
	}*/

	@Given("^user on Contact Page$")
	public void user_on_Contact_Page() {
		System.out.println("user is on contact page");

	}

	@When("^user fills the contact form$")
	public void user_fills_the_contact_form() {
		System.out.println("user fills the contact form");

	}

	@Then("^contact is created$")
	public void contact_is_created() {
		System.out.println("contact is created");

	}
}
