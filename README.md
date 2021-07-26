# Challenge

## Documentation

Test Strategy - https://github.com/aswin-g/bngs_challenge/blob/main/planning/test_strategy.md

Test Plan - https://github.com/aswin-g/bngs_challenge/blob/main/planning/test_plan.md

Test cases - https://github.com/aswin-g/bngs_challenge/blob/main/planning/test_cases.md

Project - https://github.com/aswin-g/bngs_challenge/projects/1




## Github Pull requests: 🎯

1. Challenge Planning - Test Strategy, Test plan and Test cases

https://github.com/aswin-g/bngs_challenge/pull/1

2. Load, API, Security and Accessibility Testing

https://github.com/aswin-g/bngs_challenge/pull/2

3. UI Test Automation using Cypress

https://github.com/aswin-g/bngs_challenge/pull/3

## Quick Analysis of web UI elements of the website

Recording of the test using Selenium IDE - https://github.com/aswin-g/bngs_challenge/blob/main/planning/bngs_web_ui_elements_analysis_selenium_ide.side

Video - https://github.com/aswin-g/bngs_challenge/blob/main/planning//bngs_add_to_cart_web_ui_elements_analysis.mov

## How to run UI Tests using Cypress

Steps to run UI tests provided in the below README file.

https://github.com/aswin-g/bngs_challenge/blob/main/automated/ui/README.md


## Troubleshooting Failed tests

If test(s) fail, logs,screesnhots and videos will be generated in the folders given below which would be helpful for troubleshooting the failed tests.

Logs - ```/automated/ui/cypress/logs```

Screenshots - ```/automated/ui/cypress/screenshots```

Videos - ```/automated/ui/cypress/videos```

## UI Test automation results

npx cypress run --browser=chrome

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    8.0.0                                                                              │
  │ Browser:    Chrome 91 (headless)                                                               │
  │ Specs:      1 found (add_item_to_cart.js)                                                      │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  add_item_to_cart.js                                                             (1 of 1)
[browserPermissions] permission 'geolocation' => 'allow'
[browserPermissions] permission 'notifications' => 'allow'
[browserPermissions] permission 'images' => 'allow'
[browserPermissions] permission 'javascript' => 'allow'
[browserPermissions] permission 'cookies' => 'allow'
[browserPermissions] permission 'camera' => 'block'
[browserPermissions] permission 'microphone' => 'block'
[browserPermissions] permission 'popups' => 'ask'
[browserPermissions] permission 'plugins' => 'ask'


  Feature: Add an item to the cart
    ✓ [BNGS-1031] @regression - As a customer I would like to understand search functionality from placeholder text in any device (10356ms)
    ✓ [BNGS-1032] @regression - As a customer I would like to see cart is empty before I start shopping (11984ms)
    ✓ [BNGS-1033] @smoke - As a customer I would like to see the relevant item listed based on the search keyword (10594ms)


  3 passing (40s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        3                                                                                │
  │ Passing:      3                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     39 seconds                                                                       │
  │ Spec Ran:     add_item_to_cart.js                                                              │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: /Users/aswing/projects/coding_challenges/bngs_challenge/aut    (4 seconds)
                          omated/ui/cypress/videos/add_item_to_cart.js.mp4                          


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  add_item_to_cart.js                      00:39        3        3        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:39        3        3        -        -        -  

# Load Test Results 🚀

## k6 run load_search_1_virtual_user.js 


          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: load_search_1_virtual_user.js
     output: -

  scenarios: (100.00%) 1 scenario, 1 max VUs, 10m30s max duration (incl. graceful stop):
           * default: 1 iterations for each of 1 VUs (maxDuration: 10m0s, gracefulStop: 30s)


running (00m03.9s), 0/1 VUs, 1 complete and 0 interrupted iterations
default ✓ [======================================] 1 VUs  00m03.9s/10m0s  1/1 iters, 1 per VU

     data_received..................: 876 kB 226 kB/s
     data_sent......................: 2.7 kB 690 B/s
     http_req_blocked...............: avg=349.31ms min=349.31ms med=349.31ms max=349.31ms p(90)=349.31ms p(95)=349.31ms
     http_req_connecting............: avg=9.33ms   min=9.33ms   med=9.33ms   max=9.33ms   p(90)=9.33ms   p(95)=9.33ms  
     http_req_duration..............: avg=2.52s    min=2.52s    med=2.52s    max=2.52s    p(90)=2.52s    p(95)=2.52s   
       { expected_response:true }...: avg=2.52s    min=2.52s    med=2.52s    max=2.52s    p(90)=2.52s    p(95)=2.52s   
     http_req_failed................: 0.00%  ✓ 0        ✗ 1  
     http_req_receiving.............: avg=376.6ms  min=376.6ms  med=376.6ms  max=376.6ms  p(90)=376.6ms  p(95)=376.6ms 
     http_req_sending...............: avg=432µs    min=432µs    med=432µs    max=432µs    p(90)=432µs    p(95)=432µs   
     http_req_tls_handshaking.......: avg=224.54ms min=224.54ms med=224.54ms max=224.54ms p(90)=224.54ms p(95)=224.54ms
     http_req_waiting...............: avg=2.14s    min=2.14s    med=2.14s    max=2.14s    p(90)=2.14s    p(95)=2.14s   
     http_reqs......................: 1      0.257552/s
     iteration_duration.............: avg=3.88s    min=3.88s    med=3.88s    max=3.88s    p(90)=3.88s    p(95)=3.88s   
     iterations.....................: 1      0.257552/s
     vus............................: 1      min=1      max=1
     vus_max........................: 1      min=1      max=1

## k6 run load_search_10_virtual_users.js 


          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: load_search_10_virtual_users.js
     output: -

  scenarios: (100.00%) 1 scenario, 10 max VUs, 1m0s max duration (incl. graceful stop):
           * default: 10 looping VUs for 30s (gracefulStop: 30s)


running (0m32.6s), 00/10 VUs, 90 complete and 0 interrupted iterations
default ✓ [======================================] 10 VUs  30s

     data_received..................: 78 MB  2.4 MB/s
     data_sent......................: 181 kB 5.6 kB/s
     http_req_blocked...............: avg=21.3ms   min=0s       med=2µs      max=192.1ms  p(90)=191.55ms p(95)=191.76ms
     http_req_connecting............: avg=2.44ms   min=0s       med=0s       max=22.95ms  p(90)=21.23ms  p(95)=22.09ms 
     http_req_duration..............: avg=2.49s    min=1.23s    med=2.44s    max=4.85s    p(90)=3.45s    p(95)=3.91s   
       { expected_response:true }...: avg=2.49s    min=1.23s    med=2.44s    max=4.85s    p(90)=3.45s    p(95)=3.91s   
     http_req_failed................: 0.00%  ✓ 0        ✗ 90  
     http_req_receiving.............: avg=985.87ms min=146.23ms med=916.21ms max=3.13s    p(90)=1.66s    p(95)=2.05s   
     http_req_sending...............: avg=153.56µs min=20µs     med=134.5µs  max=576µs    p(90)=290.1µs  p(95)=419.79µs
     http_req_tls_handshaking.......: avg=18.65ms  min=0s       med=0s       max=168.99ms p(90)=166.96ms p(95)=167.93ms
     http_req_waiting...............: avg=1.51s    min=996.69ms med=1.42s    max=3.24s    p(90)=2.14s    p(95)=2.32s   
     http_reqs......................: 90     2.761135/s
     iteration_duration.............: avg=3.52s    min=2.23s    med=3.46s    max=5.85s    p(90)=4.46s    p(95)=4.92s   
     iterations.....................: 90     2.761135/s
     vus............................: 4      min=4      max=10
     vus_max........................: 10     min=10     max=10


# Challenge

1. You are to design test cases and a test tracking plan for the newly rolled out "Add an item to cart" feature on this site, the feature in question is outlined on the below screenshots

2. Identify and document your testing strategy and approach to testing this application in an Agile development environment

3. List down any assumptions and questions you have about the brief

4. Design and document test cases for this feature as it appears on the site

5. Apply test automation to this feature outline the approach and tools you will use

6. Write test automation scripts for your top 3 test cases

# Deliverables:

1. Spend as little or as much time as you like ⌚ on the challenge, please record the total time you spend on this and include it in your response

2. The code you produce can be in any language ⭐

3. If you complete the automation part of the challenge output of the efforts ❗ must be committed back into a Public Repo(created by you) in Github and the URL shared back for review.