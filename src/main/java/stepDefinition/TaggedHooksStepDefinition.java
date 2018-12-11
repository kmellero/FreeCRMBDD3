package stepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TaggedHooksStepDefinition {

	@Before() // import from cucumber.api.java !!!
	public void setup() {
		System.out.println("launch browser-global");
		System.out.println("Enter url for FreeCRM app-global");
	}

	@After()  // global hooks, for all scenarios, (order=0, 1 etc) for global tags
	public void teardown() {
		System.out.println("close the browser-global");
	}
	@Before("@First") // import from cucumber.api.java !!!
	public void beforeFirst() {
		System.out.println("launch browser-first");
		System.out.println("Enter url for FreeCRM app-first");
	}

	@After("@First")  // only for scenario tagged in feature @First
	public void afterFirst() {
		System.out.println("close the browser-first");
	}
	
	@Before("@Second") // import from cucumber.api.java !!!
	public void beforeSecond() {
		System.out.println("launch browser-second");
		System.out.println("Enter url for FreeCRM app-second");
	}

	@After("@Second")
	public void afterSecond() {
		System.out.println("close the browser-second");
	}
	
	@Given("^this is first step$")
	public void this_is_first_step() {
		System.out.println("This is First first step");
	}

	@When("^this is second step$")
	public void this_is_second_step() {
		System.out.println("This is First second step");
	}

	@Then("^this is third step$")
	public void this_is_third_step() {
		System.out.println("This is First third step");
	}
}
