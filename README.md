# Cypress with Github Actions - Simple setup guide

## 1. Prerequisites
  - NodeJS on your machine
  - A Github repo to run the actions in

## 2. Setup
1. Install Cypress 
   - Open the repo locally and in it run `npm init()` with default settings
   - Run `npm install cypress --save-dev` to install cypress in node project
   - You can now run `npx cypress open` to open the local tool (useful for writing and debugging tests)
2. Write a Test Spec and Push everything except **node_modules, cypress/videos, cypress/screenshots**
3. Create a **GitHub Action** using the **Simple workflow** template
   - Add the following code to the ***.yml**:
```
name: Cypress Tests using Cypress Docker Image
on: [push]
jobs:
  cypress-run:
    runs-on: ubuntu-latest
    container: cypress/browsers:node12.18.3-chrome87-ff82
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Cypress run
        uses: cypress-io/github-action@v2
        with:
          # Specify Browser since container image is compile with Firefox
          browser: chrome
          record: true
        env:
          CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
4. Login to the [Cypress Dashboard](https://dashboard.cypress.io/) and follow the steps to get your **Record Key**
5. Create a **GitHub Secret** named **CYPRESS_RECORD_KEY**
6. Add the **ProjectID** from the Cypress Dashboard to **cypress.json**

## 3. Done
Now you should see the GitHub action running the tests on every push 
to the repo and in the Dashboard you can checkout the results + videos/screenshots and analytics
