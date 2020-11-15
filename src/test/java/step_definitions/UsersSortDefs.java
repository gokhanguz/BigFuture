package step_definitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.java.eo.Se;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;
import pages.UsersPage;
import utilities.BrowserUtils;

import java.util.List;

public class UsersSortDefs {
    @Then("user see {string} button")
    public void user_see_button(String rcd) {
        BrowserUtils.waitFor(3);

        Assert.assertTrue(new UsersPage().records.getText().contains(rcd));

    }

    @Then("user see default {string} records")
    public void user_see_default_records(String number) {
        BrowserUtils.waitFor(3);
        Select select=new Select(new UsersPage().numberDropDown);
        Assert.assertEquals(number,select.getFirstSelectedOption().getText());

    }

    @When("user click record dropdowm menu")
    public void user_click_record_dropdowm_menu() {
        BrowserUtils.waitFor(3);
       new UsersPage().numberDropDown.click();
    }

    @Then("user see all number")
    public void user_see_all_number(List<String> number) {
        BrowserUtils.waitFor(3);

        Select select=new Select(new UsersPage().numberDropDown);
        List<String > str= BrowserUtils.getElementsText(select.getOptions());

        Assert.assertEquals(number,str);
    }
}
