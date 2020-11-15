package step_definitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import pages.BasePage;
import pages.DashboardPage;
import pages.LoginPage;
import utilities.BrowserUtils;
import utilities.ConfigurationReader;
import utilities.Driver;

public class LoginStepDefs {

    @Given("the user is on the login page")
    public void the_user_is_on_the_login_page() {
        Driver.get().get(ConfigurationReader.get("url"));
    }


    @When("user login as a {string}")
    public void user_login_as_a(String role) {
        LoginPage loginPage=new LoginPage();
        loginPage.login(role);

    }

    @Then("user on {string}")
    public void user_on(String title) {
        DashboardPage dashboardPage=new DashboardPage();
        BrowserUtils.waitFor(5);
        System.out.println("dashboardPage.title.getText() = " + dashboardPage.title.getText());

        Assert.assertEquals(title,dashboardPage.title.getText());
        dashboardPage.logOut();

    }






}
