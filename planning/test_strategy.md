# Test Strategy

# 1. Scope

Browsers - Safari, Chrome, Firefox, IE - Desktop and Mobile Responsive (iPhone X, Pixel 2XL, iPad Pro and Galaxy Note3)

iOS Devices - iPhone 12 Pro, iPhone X, iPhone 8 Plus

Android Devices - Samsung S21, Samsung S9, Pixel 2, Pixel 3XL

Tablets - iPad Pro and Galaxy Tab S7
 
# 2. Test Approach

### 2.1 Functional Testing

Before picking up card for testing, as part of definition of done, pull request (assuming Github used for version control) to be code reviewed and tests passing in CI pipeline.

Ensure to take hand over with devs before starting testing. Include UX team in handover to receive early feedback to devs.

Exploratory testing can be done in scrum environment and mock server if applicable.

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


# 3. Automated Test Tools

UI & Security - Cypress
API - Postman, Newman
Load - k6
Accessibility - https://github.com/GoogleChrome/accessibility-developer-tools

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

# 6. Release Management

Jira will be used for sprint cards and docuemntion in Confluence.

SHA-256 and Version to be noted during each testing phase.

Regression suite to be passed on Preprod environment.

PVT tests to be passed after production deployment.

# 7. Risk Analysis

List all risks that you can identify and estimate.

Give a clear plan to mitigate the risks.

# 8. Review and Approvals

All these activities are reviewed and signed off by the business team, project management, development team, etc.

Summary of review changes should be traced at the beginning of the document along with an approved date, name, and comment