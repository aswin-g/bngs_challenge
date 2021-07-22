# API Testing

## Search Endpoints:

https://api.prod.bunnings.com.au/v1/search/global
https://api.prod.bunnings.com.au/v1/search/global/querySuggest
https://api.prod.bunnings.com.au/v1/search/recommendation


##Responses:

### 1. Token Error

{
  			"statusDetails": {
   	 			"state": "FAILURE",
    			"errorCode": "SYS-3003",
    			"correlationid": "rrt-3221850255495873891-b-gsy1-20503-416306-1",
    			"description": "Invalid key identifier or token"
  			}
		}

### 2. Success from Global Endpoint

{
  			"statusDetails": {
   	 			"state": "SUCCESS",
    			"correlationid": "fa058e10-eacf-11eb-997e-07dc92253ab1"
  			},
  			"data":{"q":"hammer","queryCorrections":[],"product":{"totalCount":449,"totalCountFiltered":449,"duration":355,"indexDuration":186,"requestDuration":255,"searchUid":"c158e6f3-bd8a-4253-b0cf-929a0a4abcef","pipeline":"Variant_Product","apiVersion":2,"index":"bunningswarehouseprod9nzq98ze-00k9sqdq-Indexer-2-veyukwwv72iqj56zab2t2zcify","indexRegion":"ap-southeast-2","indexToken":"YnVubmluZ3N3YXJlaG91c2Vwcm9kOW56cTk4emUtMDBrOXNxZHEtSW5kZXhlci0yLXZleXVrd3d2NzJpcWo1NnphYjJ0MnpjaWZ5","refinedKeywords":[],"triggers":[],"termsToHighlight":{"hammer":["hammered","hammering","hammers"]},"phrasesToHighlight":{},"queryCorrections":[],"groupByResults":[{"field":"price","Field":"price","values":[{"value":"2.950000..1499.000000","lookupValue":"2.95..1499","numberOfResults":449,"score":0,"valueType":"Standard","Value":"2.950000..1499.000000","LookupValue":"2.95..1499","NumberOfResults":449,"Score":0,"computedFieldResults":[],"ComputedFieldResults":[]}],"globalComputedFieldResults":[],"GlobalComputedFieldResults":[]},{"field":"supercategoriesurl","Field":"supercategoriesurl","values":[{"value":"tools|Tools|/tools|https://delivery.bunningscontenthub.bunnings.com.au/api/public/content/08be4ddd6dbc4108b726420d2ad9913e?v=f3d6eb14","lookupValue":"tools|Tools|/tools|https://delivery.bunningscontenthub.bunnings.com.au/api/public/content/08be4ddd6dbc4108b726420d2ad9913e?v=f3d6eb14","numberOfResults":21378,"score":93810666,"valueType":"Standard","Value":"tools|Tools|/tools|https://delivery.bunningscontenthub.bunnings.com.au/api/public/content/08be4ddd6dbc4108b726420d2ad9913e?v=f3d6eb14","LookupValue":"tools|Tools|/tools|https://delivery.bunningscontenthub.bunnings.com.au/api/public/content/08be4ddd6dbc4108b726420d2ad9913e?v=f3d6eb14",
            
            -----------------------
            -----------------------
		}
