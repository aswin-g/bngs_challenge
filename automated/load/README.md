# Load Testing

Reference - https://k6.io/docs/testing-guides/automated-performance-testing/

Install k6 - https://k6.io/docs/getting-started/installation/

Once k6 is installed in your local or the agent running automated tests, run the below command(s) to run 

k6 run <script_name>

Examples:

k6 run load_search_1_virtual_user.js

k6 run load_search_10_virtual_users.js

k6 run load_search_ramping_up_down_vus.js