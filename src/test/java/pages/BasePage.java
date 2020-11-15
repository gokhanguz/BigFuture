package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import utilities.BrowserUtils;

public abstract class BasePage {

    @FindBy(id="navbarDropdown")
    public WebElement userName;

    @FindBy(css = "[class='dropdown-item']")
    public  WebElement logOutLink;


    public void logOut(){
        BrowserUtils.waitFor(2);
        userName.click();
        logOutLink.click();
    }
}
