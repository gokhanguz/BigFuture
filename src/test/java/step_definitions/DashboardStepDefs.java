package step_definitions;

import io.cucumber.java.en.Then;
import org.junit.Assert;
import pages.DashboardPage;
import utilities.BrowserUtils;

import java.util.List;

public class DashboardStepDefs {

    @Then("Student user see all title")
    public void user_see_all_title(List<String> menu) {
        BrowserUtils.waitFor(5);

        List<String> actual= BrowserUtils.getElementsText(new DashboardPage().titleDashboard);
        System.out.println("actual = " + actual);
        Assert.assertEquals(menu,actual);

    }

    @Then("Librarian user see all title")
    public void librarian_user_see_all_title(List<String> menu) {
        BrowserUtils.waitFor(5);
        List<String> actual= BrowserUtils.getElementsText(new DashboardPage().titleDashboard);
        System.out.println("actual = " + actual);
        Assert.assertEquals(menu,actual);

    }




}
