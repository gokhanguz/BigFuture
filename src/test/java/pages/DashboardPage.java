package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;

public class DashboardPage extends BasePage{
    public DashboardPage(){

        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(xpath = "(//*[@class='title'])[1]")
    public WebElement title;

    @FindBy(css = "[class='title']")
    public List<WebElement> titleDashboard;






}
