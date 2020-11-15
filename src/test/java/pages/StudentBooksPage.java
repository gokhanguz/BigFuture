package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;

public class StudentBooksPage extends BasePage{

    public StudentBooksPage(){

        PageFactory.initElements(Driver.get(), this);
    }

   @FindBy(xpath = "//table/thead/tr/th")
    public List<WebElement> columnsName;

    @FindBy(id="book_categories")
    public WebElement bookCategories;

    @FindBy(xpath = "(//td)[5]")
    public  WebElement categoryName;

}
