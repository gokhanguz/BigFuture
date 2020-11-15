package step_definitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;
import pages.UsersPage;
import utilities.BrowserUtils;
import utilities.Driver;

import java.util.List;

public class UsersStepDefs {

    @When("user click users button")
    public void user_click_users_button() {
        BrowserUtils.waitFor(3);
        new UsersPage().usersButton.click();
    }


    @When("user click Add User button")
    public void user_click_Add_User_button() {
        BrowserUtils.waitFor(3);
        new UsersPage().addUserButton.click();

    }
    @When("user fill in the blank")
    public void user_fill_in_the_blank() {
        BrowserUtils.waitFor(3);
        UsersPage usersPage=new UsersPage();
        usersPage.fullName.sendKeys("Kral Sakir");
        usersPage.password.sendKeys("Antalya07");
        usersPage.email.sendKeys("kralsakir@gmail.com");
        usersPage.startDate.sendKeys("2020-11-14");
        usersPage.endDate.sendKeys("2020-11-30");
        usersPage.address.sendKeys("Antalya");

        Select select=new Select(usersPage.userGroup);
        select.selectByIndex(1);
        Select select1=new Select(usersPage.status);
        select.selectByIndex(0);

    }
    @When("user click Save Changes button")
    public void user_click_Save_Changes_button() {
        new UsersPage().saveChanges.click();

    }
    @Then("user see new User Id")
    public void user_see_new_User_Id() {
        BrowserUtils.waitFor(5);
        List<String> idNumber=BrowserUtils.getElementsText(new UsersPage().userId);
        Assert.assertTrue(idNumber.contains("2393"));

    }

    @When("user click close button")
    public void user_click_close_button() {
        BrowserUtils.waitFor(3);
       new UsersPage().close.click();

    }

    @Then("user see Users Page")
    public void user_see_Users_Page() {
      Assert.assertEquals(Driver.get().getCurrentUrl(),"http://library2.cybertekschool.com/#users");
    }


    @When("user click {string} user id Edit User button")
    public void user_click_user_id_Edit_User_button(String str) {
        BrowserUtils.waitFor(2);
        new UsersPage().getFindUserEdit(str).click();
    }

    @Then("user see edit page")
    public void user_see_edit_page() {

     Assert.assertTrue(new UsersPage().saveChanges.isEnabled());
    }


}
