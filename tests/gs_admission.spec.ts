import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

// Configure parallel execution - 4 workers (tabs) running simultaneously
test.describe.configure({ mode: 'parallel' });

// THIS TEST IS WORKING ON ADMISSION FORM FOR BULSU GRADUATE SCHOOL

test.describe("BulSU Graduate School Admission - 140 Applicants", () => {
  // Run the test 140 times
  for (let i = 1; i <= 2; i++) {
    test(`Applicant ${i} - Graduate School Admission`, async ({ page }) => {
      const lastName = faker.person.lastName();
      const firstName = faker.person.firstName();
      const middleInitial = faker.string.alpha({ length: 1 }).toUpperCase();
      const email = faker.internet.email({ firstName, lastName });

      console.log(`🚀 [Worker ${test.info().parallelIndex + 1}] Processing applicant ${i}: ${firstName} ${lastName}`);

      await page.goto('https://bulsu-staging.heims.ph/admission');
      await page.locator('div').filter({ hasText: /^Graduate School$/ }).click();
      await page.getByRole('button', { name: 'Continue' }).click();
      await page.getByRole('textbox', { name: 'Last Name' }).click();
      await page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
      await page.getByRole('textbox', { name: 'First Name' }).click();
      await page.getByRole('textbox', { name: 'First Name' }).click();
      await page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
      await page.getByText('Last NameFirst NameMiddle').click();
      await page.getByRole('textbox', { name: 'Middle Name' }).click();
      await page.getByRole('textbox', { name: 'Middle Name' }).fill(middleInitial);
      await page.locator('#civil_status').click();
      await page.getByRole('option', { name: 'Single' }).click();
      await page.getByRole('button', { name: 'Choose date' }).click();
      await page.getByRole('gridcell', { name: '16' }).click();
      //await page.locator('div').filter({ hasText: /^12345678910111213141516171819202122232425262728293031$/ }).first().click();
      await page.getByRole('textbox', { name: 'Place of Birth' }).fill('a');
      await page.getByRole('textbox', { name: 'Religion' }).fill('a');
      await page.getByText("Male", { exact: true }).click();
      await page.getByRole("radio", { name: "Male", exact: true }).press("a");
      await page.getByRole('textbox', { name: 'Ethnic Affiliation' }).fill('a');
      await page.getByRole('textbox', { name: 'Nationality' }).fill('a');
      await page.locator('#region').click();
      await page.getByRole('option', { name: 'REGION XIII (Caraga)' }).click();
      await page.locator('#province').click();
      await page.getByRole('option', { name: 'DINAGAT ISLANDS' }).click();
      await page.locator('#city').click();
      await page.getByRole('option', { name: 'TUBAJON' }).click();
      // Select barangay - use more specific selector
      await page.locator('#barangay').click();
      await page.getByRole('option', { name: 'Santa Cruz (Pob.)' }).click();
      await page.getByRole('textbox', { name: 'Address', exact: true }).click();
      await page.getByRole('textbox', { name: 'Address', exact: true }).fill('a');
      await page.getByRole('textbox', { name: 'Telephone Number' }).click();
      await page.getByRole('textbox', { name: 'Telephone Number' }).fill('a');
      await page.getByRole('textbox', { name: 'Mobile Number' }).click();
      await page.getByRole('textbox', { name: 'Mobile Number' }).fill('a');
      await page.getByRole('textbox', { name: 'Email Address' }).click();
      await page.getByRole('textbox', { name: 'Email Address' }).fill(email);
      await page.getByTestId('btn-group-containerNO').first().click();
      await page.getByText('Are you member of 4Ps?').click();
      await page.getByTestId('btn-group-containerNO').nth(1).click();
      await page.getByTestId('btn-group-containerNO').nth(2).click();
      await page.getByTestId('btn-group-containerNO').nth(3).click();
      await page.getByTestId('btn-group-containerNO').nth(4).click();
      await page.getByRole('button', { name: 'Save and Continue' }).click();
      await page.locator('#classification').click();
      await page.getByRole('option', { name: 'Masteral' }).click();
      // Select program - use more specific selector
      await page.locator('#program').click();
      await page.getByText('Master of Industrial').click();
      await page.getByRole('button', { name: 'Choose date' }).click();
      await page.getByRole('gridcell', { name: '18' }).click();
      await page.getByRole('button', { name: 'Save and Continue' }).click();
      //await page.locator('.MuiInputBase-root.MuiFilledInput-root.MuiInputBase-colorPrimary.Mui-disabled.MuiInputBase-formControl.MuiInputBase-adornedEnd').click();
      await page.getByRole('textbox', { name: 'School Name' }).fill('a');
      // Select level - use more specific selector
      await page.locator('#level').click();
      await page.getByRole('option', { name: 'Master Degree' }).click();
      await page.getByRole('textbox', { name: 'Program' }).click();
      await page.getByRole('textbox', { name: 'Program' }).fill('a');
      await page.getByRole('textbox', { name: 'Graduation Year' }).click();
      await page.getByRole('textbox', { name: 'Graduation Year' }).fill('21');
      await page.getByRole('button', { name: 'Add School' }).click();
      await page.getByText('Educational BackgroundLast').click();
      await page.getByRole('button', { name: 'Save and Continue' }).click();
      await page.getByRole('textbox', { name: 'Complete Name' }).click();
      await page.getByRole('textbox', { name: 'Complete Name' }).fill('a');
      await page.getByRole('textbox', { name: 'Complete Address' }).click();
      await page.getByRole('textbox', { name: 'Complete Address' }).fill('a');
      await page.getByRole('textbox', { name: 'Telephone Number' }).click();
      await page.getByRole('textbox', { name: 'Complete Address' }).fill('aa');
      await page.getByRole('textbox', { name: 'Mobile Number' }).click();
      await page.getByRole('textbox', { name: 'Mobile Number' }).fill('a');
      await page.getByRole('textbox', { name: 'Telephone Number' }).click();
      await page.getByRole('textbox', { name: 'Telephone Number' }).fill('a');
      await page.getByRole('textbox', { name: 'Email Address' }).click();
      await page.getByRole('textbox', { name: 'Email Address' }).fill('a');
      await page.getByRole('button', { name: 'Save and Continue' }).click();
      await page.getByText('Medical RecordsConsent for').click();
      await page.getByRole('radio', { name: 'I consent to the University Infirmary providing medical treatment in case of' }).check();
      await page.getByRole('radio', { name: 'I consent to the University Infirmary giving medications appropriate for my' }).check();
      await page.getByRole('radio', { name: 'No Yes' }).first().check();
      await page.getByRole('radio', { name: 'No Yes' }).nth(1).check();
      await page.getByRole('radio', { name: 'No Yes' }).nth(2).check();
      await page.getByRole('radio', { name: 'No Yes' }).nth(3).check();
      await page.getByRole('radio', { name: 'No Yes' }).nth(4).check();
      await page.getByTestId('btn-group-containerNO').first().click();
      await page.getByText('Do you have a regular').click();
      await page.getByTestId('btn-group-containerNO').nth(1).click();
      await page.getByTestId('btn-group-containerNO').nth(2).click();
      await page.getByRole('radio', { name: 'Spontaneous' }).check();
      await page.getByTestId('btn-group-containerNO').nth(3).click();
      await page.getByRole('radio', { name: 'No Yes' }).nth(5).check();
      await page.locator('#do_alcohol').first().check();
      await page.getByRole('button', { name: 'Save and Continue' }).click();
      
      // File Uploads
      await page.getByRole("button", { name: "Browse" }).first().click();
      await page.locator('input[type="file"]').first().setInputFiles('uploads/OIP.jpeg');
      await page.getByRole("button", { name: "Browse" }).click();
      await page.locator('input[type="file"]').first().setInputFiles('uploads/OIP.jpeg');
      
      await page.getByRole('button', { name: 'Submit Application' }).click();
      await page.getByRole('button', { name: 'Submit Form' }).click();

      // Wait for submission to process
      await page.waitForTimeout(3000);

      console.log(`✅ [Worker ${test.info().parallelIndex + 1}] Applicant ${i} submitted successfully: ${firstName} ${lastName}`);
    });
  }
});