package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import utilities.BrowserUtils;
import utilities.Driver;

import java.util.List;

public class UsersPage extends BasePage{

    public UsersPage(){

        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(xpath = "(//*[@class='nav-link'])[2]")
    public WebElement usersButton;

    @FindBy(css = "[href*='add-user']")
    public WebElement addUserButton;

    @FindBy(name = "full_name")
    public WebElement fullName;

    @FindBy(name = "password")
    public WebElement password;

    @FindBy(xpath = "//*[@name='email']")
    public WebElement email;

    @FindBy(name = "start_date")
    public WebElement startDate;

    @FindBy(name = "end_date")
    public WebElement endDate;

    @FindBy(name = "address")
    public WebElement address;

    @FindBy(xpath = "(//*[@type='submit'])[1]")
    public WebElement saveChanges;

    @FindBy(xpath = "(//*[@type='cancel'])[1]")
    public WebElement close;

    @FindBy(id = "user_group_id")
    public WebElement userGroup;

    @FindBy(xpath = "(//*[@id='status'])[1]")
    public WebElement status;

    @FindBy(xpath = "//table//td[2]")
    public List<WebElement> userId;

    @FindBy(xpath = "//table//tbody/tr[1]/td[1]")
    public  WebElement editUser;

    @FindBy(id="tbl_users_length")
    public  WebElement records;

    @FindBy(name="tbl_users_length")
    public WebElement numberDropDown;




    public WebElement getFındUserEdit(String userNumber){
        String xpath="//*[contains(text(), '"+userNumber+"')]/../td[1]";

        return Driver.get().findElement(By.xpath(xpath));
    }








}
