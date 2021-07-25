# Test Strategy

# 1. Scope

Assuming the bunnings customers use the following browsers, tablets, iOS and android devices based on the source from product analytics.

Browsers - Safari, Chrome, Firefox, IE - Desktop and Mobile Responsive (iPhone X, Pixel 2XL, iPad Pro and Galaxy Note3)

iOS Devices - iPhone 12 Pro, iPhone X, iPhone 8 Plus

Android Devices - Samsung S21, Samsung S9, Pixel 2, Pixel 3XL

Tablets - iPad Pro and Galaxy Tab S7
 
# 2. Test Approach

### 2.1 Functional Testing

Before picking up card for testing, as part of definition of done, pull request (assuming Github used for version control) to be code reviewed and tests passing in CI pipeline.

Ensure to take hand over with developers before starting testing. 
Include UX team in handover to receive early feedback to development team.

Exploratory testing can be done in scrum environment and mock server if applicable.

Early feedabck to be provided to the developers.

Bug bashes to be arranged for major releases to include Marketing, UX, Operations and other teams not working on product which would be quite beneficial to receive the early feedback before we cut the release branch.

## 2.2. Non Functional Testing

### 2.2.1 Load

Load testing to be considered at component level instead of performing on final release build. Add load tests based on the feature that has new API endpoint or changes in exisiting API functionality.

### 2.2.2 Security

Static security scans to be available in pipeline to scan code as well as dependencies for picking up vulnerbailities in CI pipeline.

Also based on feature, security tests to be automated considering the OWASP Web Top 10 Application Security Risks.

### 2.2.3 Accesibility

Accessibility testing to be considered based on W3C standards. 

https://www.w3.org/WAI/
https://www.w3.org/standards/webdesign/accessibility


# 3. Test Tools

UI & Security Test automation - Cypress

API Testing - Postman, Newman

Load Testing - k6

Accessibility Testing - https://github.com/GoogleChrome/accessibility-developer-tools

Requirements and bugs - Jira

Documenation - Confluence

# 4. Test Environments

Scrum & Exploratory Testing - Scrum environment
Integration Testing - QA Environment
Business Acceptance Testing - UAT Environment
Release Testing - Preprod Environment
Production Verification Testing - Production Environment

# 5. CI Pipelines

Deployments to be done in the environments only when automated tests passed in Continuous Integration (CI) pipeline.

Only QA team can progress deployments to Preprod
Only Operations team can progress deployment to Production

# 6. Bug Triage

Bugs to be raised with defined bug template and based on the severity level to be prioirtised with product owner.

Low and medium level severity bugs in the backlog to be looked in each sprint if any of them to be prioritised in the sprint.

# 7. Release Management

SHA-256 and Version to be noted during each testing phase.

Business acceptance testing to be done by Product Owner for each story card.

Once the release branch is made, automated regression test suite to be passed in CI pipeline.

Regression automated suite should be passed on Preprod environment.

All the test artifacts of the release to be documented for Change Control Board and provide handover to Operations team for production deployment.

PVT tests to be passed after production deployment.

# 8. Risk Analysis

List all risks that you can identify and estimate.

Come up with a plan to mitigate the risks as a team.

# 9. Continuous Improvements

During retro meetings, look for the activities that could improve better in testing and add items in the backlog.