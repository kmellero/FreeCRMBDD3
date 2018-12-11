package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Users\\Hp\\eclipse-workspace\\FreeCRMBDD3\\src\\main\\java\\Feature\\hooks-tagged.feature"   // \\.deals.feature " to run specific feature file
		,glue= {"stepDefinition"}  //package/folder for steps
		,plugin= {"pretty","html:test-output", "junit:junit_xml\\cucumber.xml"}   //reporting formats e.g.: , "json:json_output\\cucumber.json"
		,monochrome= true  //display the console output: readable format				
		,strict=false  //if true: undefined steps fail entire execution
		,dryRun= false  // change to true to verify if all step = method mappings exists
		//,tags= {"@End2End , @SmokeTest\""}  //"tag1,tag2"="or","tag1" , "tag2"="and", ~tag=all but,  ; selected tag scenarios in feature file
		)
public class TestRunner {
	// This class will be empty
}
