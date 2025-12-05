import { test, expect } from "@playwright/test";
import { faker } from '@faker-js/faker';

test("test", async ({ page }) => {

  const lastName = faker.person.lastName();
  const firstName = faker.person.firstName();
  const middleInitial = faker.string.alpha({ length: 1 }).toUpperCase();
  const email = faker.internet.email({ firstName, lastName });

  //admission for graduate school
  await page
    .locator("div")
    .filter({ hasText: /^Graduate School$/ })
    .click();
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByRole("textbox", { name: "Last Name" }).click();
  await page.getByRole("textbox", { name: "Last Name" }).fill(lastName);
  await page.getByRole("textbox", { name: "First Name" }).click();
  await page.getByRole("textbox", { name: "First Name" }).fill(firstName);
  await page.getByRole("textbox", { name: "Middle Name" }).click();
  await page.getByRole("textbox", { name: "Middle Name" }).fill(middleInitial);
  await page.locator("#civil_status").click();
  await page.getByRole("option", { name: "Single" }).click();
  await page.getByRole("button", { name: "Choose date" }).click();
  await page.getByRole("gridcell", { name: "2", exact: true }).click();
  await page.getByRole("textbox", { name: "Place of Birth" }).click();
  await page.getByRole("textbox", { name: "Place of Birth" }).fill("aa");
  await page.getByText("Male", { exact: true }).click();
  await page.getByText("Male", { exact: true }).click();
  await page.getByRole("radio", { name: "Male", exact: true }).press("a");
  await page.getByRole("textbox", { name: "Religion" }).click();
  await page.getByRole("textbox", { name: "Religion" }).fill("a");
  await page.getByRole("textbox", { name: "Ethnic Affiliation" }).click();
  await page.getByRole("textbox", { name: "Ethnic Affiliation" }).fill("a");
  await page.getByRole("textbox", { name: "Nationality" }).click();
  await page.getByRole("textbox", { name: "Nationality" }).fill("a");
  await page.locator("#region").click();
  await page.getByRole("option", { name: "REGION XIII (Caraga)" }).click();
  await page.locator("#province").click();
  await page.getByRole("option", { name: "DINAGAT ISLANDS" }).click();
  await page.locator("#city").click();
  await page.getByRole("option", { name: "TUBAJON" }).click();
  await page.getByLabel("", { exact: true }).click();
  await page.getByRole("option", { name: "Santa Cruz (Pob.)" }).click();
  await page.getByRole("textbox", { name: "Address", exact: true }).click();
  await page.getByRole("textbox", { name: "Address", exact: true }).fill("a");
  await page.getByRole("textbox", { name: "Telephone Number" }).click();
  await page.getByRole("textbox", { name: "Telephone Number" }).fill("a");
  await page.getByRole("textbox", { name: "Mobile Number" }).click();
  await page
    .getByRole("textbox", { name: "Mobile Number" })
    .fill("09999999999");
  await page.getByRole("textbox", { name: "Email Address" }).click();
  await page
    .getByRole("textbox", { name: "Email Address" })
    .fill(email);
  await page.getByTestId("btn-group-containerNO").first().click();
  await page.getByText("YesNo").nth(2).click();
  await page.getByTestId("btn-group-containerYES").nth(2).click();
  await page.getByTestId("btn-group-containerNO").nth(2).click();
  await page.getByTestId("btn-group-containerNO").nth(1).click();
  await page.getByTestId("btn-group-containerNO").nth(3).click();
  await page.getByTestId("btn-group-containerNO").nth(4).click();
  await page.getByRole("button", { name: "Save and Continue" }).click();
  await page.locator("#campus").click();
  await page.getByRole("option", { name: "Doctoral" }).click();
  await page.getByLabel("", { exact: true }).click();
  await page.getByText("Doctor of Public").click();
  await page.getByRole("button", { name: "Choose date" }).click();
  await page.getByRole("gridcell", { name: "28" }).click();
  await page.getByRole("button", { name: "Save and Continue" }).click();
  await page.getByRole("button", { name: "Add School" }).click();
  await page.getByRole("textbox", { name: "School" }).click();
  await page.getByRole("textbox", { name: "School" }).fill("a");
  await page.getByLabel("", { exact: true }).click();
  await page.getByRole("option", { name: "Doctoral Degree" }).click();
  await page.getByRole("textbox", { name: "Program" }).click();
  await page.getByRole("textbox", { name: "Program" }).fill("90");
  await page.getByRole("textbox", { name: "Graduation Year" }).click();
  await page.getByRole("textbox", { name: "Graduation Year" }).fill("2021");
  await page.getByRole("textbox", { name: "GWA" }).click();
  await page.getByRole("textbox", { name: "GWA" }).fill("89");
  await page
    .locator("div")
    .filter({ hasText: "CancelAdd School" })
    .nth(3)
    .click();
  await page.getByRole("button", { name: "Add School" }).click();
  await page.getByRole("button", { name: "Save and Continue" }).click();
  await page.getByRole("textbox", { name: "Complete Name" }).click();
  await page.getByRole("textbox", { name: "Complete Name" }).fill("a");
  await page.getByRole("textbox", { name: "Complete Address" }).click();
  await page.getByRole("textbox", { name: "Complete Address" }).fill("a");
  await page.getByRole("textbox", { name: "Telephone Number" }).click();
  await page.getByRole("textbox", { name: "Telephone Number" }).fill("a");
  await page.getByRole("textbox", { name: "Mobile Number" }).click();
  await page
    .getByRole("textbox", { name: "Mobile Number" })
    .fill("09999999999");
  await page.getByRole("textbox", { name: "Email Address" }).click();
  await page.getByRole("textbox", { name: "Email Address" }).fill("sa");
  await page.getByRole("button", { name: "Save and Continue" }).click();
  await page.getByText("Medical RecordsConsent for").click();
  await page
    .getByRole("radio", {
      name: "I consent to the University Infirmary providing medical treatment in case of",
    })
    .check();
  await page.getByRole("radio", { name: "No Yes" }).first().check();
  await page
    .getByRole("radio", {
      name: "I consent to the University Infirmary giving medications appropriate for my",
    })
    .check();
  await page.getByRole("radio", { name: "No Yes" }).nth(1).check();
  await page.getByRole("radio", { name: "No Yes" }).nth(2).check();
  await page.getByRole("radio", { name: "No Yes" }).nth(3).check();
  await page.getByRole("radio", { name: "No Yes" }).nth(4).check();
  await page.getByTestId("btn-group-containerNO").first().click();
  await page.getByTestId("btn-group-containerNO").nth(1).click();
  await page.getByTestId("btn-group-containerNO").nth(2).click();
  await page.getByRole("radio", { name: "Spontaneous" }).check();
  await page.getByRole("spinbutton", { name: "Number of times" }).click();
  await page.getByRole("spinbutton", { name: "Number of times" }).fill("1");
  await page.getByTestId("btn-group-containerYES").nth(3).click();
  await page.getByRole("radio", { name: "No Yes" }).nth(5).check();
  await page.locator("#do_alcohol").first().check();
  await page.getByText("Medical RecordsConsent for").click();
  await page.getByRole("button", { name: "Save and Continue" }).click();
  await page.getByRole("button", { name: "Browse" }).first().click();
  await page
    .getByRole("button", { name: "Browse" })
    .first()
    .setInputFiles("cert majo.png");
  await page.getByRole("button", { name: "Browse" }).click();
  await page
    .getByRole("button", { name: "Browse" })
    .setInputFiles("advising slip.png");
  await page.getByRole("button", { name: "Submit Application" }).click();
  await page.getByRole("button", { name: "Submit Form" }).click();
});
