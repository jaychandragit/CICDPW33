import {test,expect} from "@playwright/test";
test("Playwright Locators", async({page})=>
{
    //const slowExpect=expect.configure({timeout:9000}); //Test Level timeout configuration
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Employed").click();
    await page.getByLabel("Gender").selectOption("Female");


    await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole("button",{name:'Submit'}).click();

     await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible(); //bydefault 5sec
    /*  steplevel : override expect default timeout 5 sec , and increase the timeout to 10 sec
    await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible({timeout:10_000}); */

    await page.getByRole("link",{name:'Shop'}).click();
   //await slowExpect(page.locator('my-4').first()).toHaveText("Shop");  test level timeout

    //app-crad contains 4 items, filter with the text name , after that using add button to click
    await page.locator('app-card').filter({hasText:'Nokia Edge'}).getByRole("button").click(); 
})