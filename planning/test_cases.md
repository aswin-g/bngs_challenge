# Scope: 

Browsers - Safari, Chrome, Firefox, IE - Desktop and Mobile Responsive (iPhone X, Pixel 2XL, iPad Pro and Galaxy Note3)

iOS Devices - iPhone 12 Pro, iPhone X, iPhone 8 Plus

Android Devices - Samsung S21, Samsung S9, Pixel 2, Pixel 3XL

Tablets - iPad Pro and Galaxy Tab S7

# Assumptions

1. User stories acceptance criteria agreed by product owner or business analyst to be considered. As part fo this challenge assuming the general acceptance criteria of ecommerce cart and user journey provided under screenshots section.

2. Above devices considered in scope assuming the customer device analytics has popularity accordilngly


# User Journey:

1.  Enter text into search box and click on search icon

2. Identify the first item displayed into the search results and add an item into the cart by clicking on to "Add to cart" icon button

3. Once an item added, click on to "Review and checkout" button displayed on the screen

4. Now, you can view the previously selected item under "Review Cart" section

# Test Cases for desktop, mobile and tablet resolutions

1. Verify placeholder text  in search text input as per user acceptance criteria in desktop, mobile and tablet resolutions

2. Verify cart is empty before shopping

3. Verify relevant item listed based on the search input

3. Verify cart with one product on selecting first item in displayed list
    - [x] Enter text into search box and click on search icon
    - [x] Identify the first item displayed into the search results and add an item into the cart by clicking on to "Add to cart" icon button
    - [x] Once an item added, click on to "Review and checkout" button displayed on the screen
    - [x] Now, you can view the previously selected item under "Review Cart" section

4. Verify cart with one product on selecting last item in displayed list 

5. Verify search results with 

    - [x] characters input "hammer", "HAMMER", "hAmmER" and "h a m m e r"
    - [x] regex input "hamme.*", "*.mmer.*" and "h.*"
    - [x] miscellaneous input "%#@%^", "!~^%hammer and "$hammer"
    - [x] various combinations continuously keying characters with different intervals
    - [x] empty text
    - [x] spaces, line breaks, tab spaces and escape letters in search input
    
6. Verify cookie "lumery.cartCount" retains the count after refreshing the review cart page

7. Verify cart retains the product whike switching between review cart and add to cart pages

8. Verify cart with multiple refresh on each web page in the add to cart journey


