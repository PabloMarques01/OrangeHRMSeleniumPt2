import { Builder,By} from 'selenium-webdriver';
import {should} from "chai";
should();

async function invalidCredentials() {

    // GIVEN that I open the browser
    let driver = await new Builder().forBrowser('firefox').build();

    // AND I navigate to the site
    await driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await sleep(1000);

    // AND I type an invalid username
    await driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys("tiorico");

    await sleep(1000);

    // AND I type an invalid password
    await driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys("nolose");

    await sleep(1000);

    // WHEN I click in the "Login" button
    await driver.findElement(By.xpath("//button[normalize-space()='Login']")).click();

    await sleep(1000);

    // THEN it doesn't work (Assertion)
    driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    .then(function() {
        return driver.getCurrentUrl();
    })
    .then(function(currentUrl) {
        // work with the current url of browser
    });
    
    // Function sleep to set a time between steps
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    await sleep(1000);

    // Ends this test case
    await driver.quit();
    
}

invalidCredentials();

await sleep(3000);

async function invalidPassword() {

    // GIVEN that I open the browser
    let driver = await new Builder().forBrowser('firefox').build();

    // AND I navigate to the site
    await driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await sleep(1000);

    // AND I type a valid username
    await driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys("Admin");

    await sleep(1000);

    // AND I type an invalid password
    await driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys("nolose");

    await sleep(1000);

    // WHEN I click in the "Login" button
    await driver.findElement(By.xpath("//button[normalize-space()='Login']")).click();

    await sleep(1000);

    // THEN it doesn't work (Assertion)
    driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    .then(function() {
        return driver.getCurrentUrl();
    })
    .then(function(currentUrl) {
        // work with the current url of browser
    });

    // Function sleep to set a time between steps
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    await sleep(1000);

    // Ends this test case
    await driver.quit();
    
}

invalidPassword();

await sleep(3000);

async function emptyUsername() {

    // GIVEN that I open the browser
    let driver = await new Builder().forBrowser('firefox').build();

    // AND I navigate to the site
    await driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await sleep(1000);

    // AND I type a valid password
    await driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys("admin123");

    await sleep(1000);

    // WHEN I click in the "Login" button
    await driver.findElement(By.xpath("//button[normalize-space()='Login']")).click();

    await sleep(1000);

    // THEN it doesn't work and appears an error message (Assertion)
    let required = await driver.findElement(By.xpath("//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']")).getText()
    .then(function(value) {
        return value
    });

    // Function sleep to set a time between steps
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    await sleep(1000);

    // Ends this test case
    await driver.quit();
    
}

emptyUsername();

await sleep(3000);

async function emptyPassword() {

    // GIVEN that I open the browser
    let driver = await new Builder().forBrowser('firefox').build();

    // AND I navigate to the site
    await driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await sleep(1000);

    // AND I type a valid username
    await driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys("Admin");

    await sleep(1000);

    // WHEN I click in the "Login" button
    await driver.findElement(By.xpath("//button[normalize-space()='Login']")).click();

    await sleep(1000);

    // THEN it doesn't work and appears an error message (Assertion)
    let required = await driver.findElement(By.xpath("//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']")).getText()
    .then(function(value) {
        return value
    });

    // Function sleep to set a time between steps
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    await sleep(1000);

    // Ends this test case
    await driver.quit();
    
}

emptyPassword();

await sleep(3000);

async function emptySpaces() {

    // GIVEN that I open the browser
    let driver = await new Builder().forBrowser('firefox').build();

    // AND I navigate to the site
    await driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await sleep(1000);

    // WHEN I click in the "Login" button
    await driver.findElement(By.xpath("//button[normalize-space()='Login']")).click();

    await sleep(1000);

    // THEN it doesn't work and appears an error message (Assertion)
    let required = await driver.findElement(By.xpath("//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']")).getText()
    .then(function(value) {
        return value
    });

    let required2 = await driver.findElement(By.xpath("//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']")).getText()
    .then(function(value) {
        return value
    });

    // Function sleep to set a time between steps
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    await sleep(1000);

    // Ends this test case
    await driver.quit();
    
}

emptySpaces();

await sleep(3000);

async function upperCasesAll() {

    // GIVEN that I open the browser
    let driver = await new Builder().forBrowser('firefox').build();

    // AND I navigate to the site
    await driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await sleep(1000);

    // AND I type a valid username in uppercases
    await driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys("ADMIN");

    await sleep(1000);

    // AND I type a valid password in uppercases
    await driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys("ADMIN123");

    await sleep(1000);

    // WHEN I click in the "Login" button
    await driver.findElement(By.xpath("//button[normalize-space()='Login']")).click();

    await sleep(1000);

    // THEN it doesn't work (Assertion)
    driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    .then(function() {
        return driver.getCurrentUrl();
    })
    .then(function(currentUrl) {
        // work with the current url of browser
    });
    
    // Function sleep to set a time between steps
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    await sleep(1000);

    // Ends this test case
    await driver.quit();
    
}

upperCasesAll();

await sleep(3000);

async function blankSpaceBehind() {

    // GIVEN that I open the browser
    let driver = await new Builder().forBrowser('firefox').build();

    // AND I navigate to the site
    await driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await sleep(1000);

    // AND I type a valid username with a blank space behind
    await driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys(" admin");

    await sleep(1000);

    // AND I type a valid password with a blank space behind
    await driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys(" admin123");

    await sleep(1000);

    // WHEN I click in the "Login" button
    await driver.findElement(By.xpath("//button[normalize-space()='Login']")).click();

    await sleep(1000);

    // THEN it doesn't work and appears an error message (Assertion)
    let errorMessage = await driver.findElement(By.xpath("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']")).getText()
    .then(function(value) {
        return value
    });

    // Function sleep to set a time between steps
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    await sleep(1000);

    // Ends this test case
    await driver.quit();
    
}

blankSpaceBehind();

await sleep(3000);

async function blankSpaceNextTo() {

    // GIVEN that I open the browser
    let driver = await new Builder().forBrowser('firefox').build();

    // AND I navigate to the site
    await driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await sleep(1000);

    // AND I type a valid username with a blank space next to
    await driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys("Admin ");

    await sleep(1000);

    // AND I type a valid password with a blank space next to
    await driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys("admin123 ");

    await sleep(1000);

    // WHEN I click in the "Login" button
    await driver.findElement(By.xpath("//button[normalize-space()='Login']")).click();

    await sleep(1000);

    // THEN it doesn't work and appears an error message (Assertion)
    let errorMessage = await driver.findElement(By.xpath("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']")).getText()
    .then(function(value) {
        return value
    });

    // Function sleep to set a time between steps
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    await sleep(1000);

    // Ends this test case
    await driver.quit();
    
}

blankSpaceNextTo();

await sleep(3000);

async function blankSpaceMiddle() {

    // GIVEN that I open the browser
    let driver = await new Builder().forBrowser('firefox').build();

    // AND I navigate to the site
    await driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await sleep(1000);

    // AND I type a valid username with a blank space in the middle
    await driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys("Ad min");

    await sleep(1000);

    // AND I type a valid password with a blank space in the middle
    await driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys("admin 123");

    await sleep(1000);

    // WHEN I click in the "Login" button
    await driver.findElement(By.xpath("//button[normalize-space()='Login']")).click();

    await sleep(1000);

    // THEN it doesn't work and appears an error message (Assertion)
    let errorMessage = await driver.findElement(By.xpath("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']")).getText()
    .then(function(value) {
        return value
    });

    // Function sleep to set a time between steps
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    await sleep(1000);

    // Ends this test case
    await driver.quit();
    
}

blankSpaceMiddle();

await sleep(3000);

async function invalidUsername() {

    // GIVEN that I open the browser
    let driver = await new Builder().forBrowser('firefox').build();

    // AND I navigate to the site
    await driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await sleep(1000);

    // AND I type an invalid username
    await driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys("tiorico");

    await sleep(1000);

    // AND I type a valid password
    await driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys("admin123");

    await sleep(1000);

    // WHEN I click in the "Login" button
    await driver.findElement(By.xpath("//button[normalize-space()='Login']")).click();

    await sleep(1000);

    // THEN it doesn't work (Assertion)
    driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    .then(function() {
        return driver.getCurrentUrl();
    })
    .then(function(currentUrl) {
        // work with the current url of browser
    });
    
    // Function sleep to set a time between steps
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    await sleep(1000);

    // Ends this test case
    await driver.quit();
    
}

invalidUsername();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}








