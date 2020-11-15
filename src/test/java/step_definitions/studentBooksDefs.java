package step_definitions;

import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;
import pages.StudentBooksPage;
import utilities.BrowserUtils;

import java.util.List;

public class studentBooksDefs {

    @Then("table should have following columns name")
    public void table_should_have_following_columns_name(List<String> dataTable) {
        BrowserUtils.waitFor(5);

        List<String> column= BrowserUtils.getElementsText(new StudentBooksPage().columnsName);
        Assert.assertEquals(dataTable,column);

    }

    @Then("user select differenet categories")
    public void user_select_differenet_categories() {
        BrowserUtils.waitFor(3);
        Select select=new Select(new StudentBooksPage().bookCategories);
        List<String> categories=BrowserUtils.getElementsText(select.getOptions());

        for (int i = 1; i < categories.size(); i++) {
            select.selectByIndex(i);
            BrowserUtils.waitFor(2);
            String expected=new StudentBooksPage().categoryName.getText();
            String actual=categories.get(i);
            Assert.assertEquals(expected,actual);


        }

    }


}
