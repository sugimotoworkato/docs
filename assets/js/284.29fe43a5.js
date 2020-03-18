(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{2160:function(e,t,a){"use strict";a.r(t);var r=a(0),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"calling-apis"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#calling-apis"}},[e._v("#")]),e._v(" Calling APIs")]),e._v(" "),r("p",[e._v("APIs that are exposed through the API Platform console can be called from recipes in accounts other than one owning the recipe, as well as from third-party tools, programs, and scripts. The API manager must provide the Auth Token or JWT token value to the client in order to call any endpoints in an API Collection.")]),e._v(" "),r("p",[e._v("With raw content support, the API platform allow clients to send text based (e.g. XML/SOAP) requests and receive custom responses from the callable recipes exposed as REST endpoints. This extends the security benefits of Workato's recipes to API calls from other systems. See more "),r("router-link",{attrs:{to:"/features/callable-recipes/handling-raw-content.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("h1",{attrs:{id:"authorization-headers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#authorization-headers"}},[e._v("#")]),e._v(" Authorization Headers")]),e._v(" "),r("p",[e._v("If the Access Profile specifies the "),r("strong",[e._v("Auth Token")]),e._v(" method of authentication, then the Auth Token value must be passed by the client as the value of the "),r("code",[e._v("API-Token")]),e._v(" header. If the authorization method is "),r("strong",[e._v("JSON Web Token")]),e._v(", then the value of the encoded and signed token is passed in the "),r("code",[e._v("Authorization")]),e._v(" header, using the "),r("code",[e._v("Bearer")]),e._v(" scheme.")]),e._v(" "),r("h1",{attrs:{id:"calling-an-api-endpoint-from-a-recipe"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#calling-an-api-endpoint-from-a-recipe"}},[e._v("#")]),e._v(" Calling an API Endpoint from a Recipe")]),e._v(" "),r("p",[e._v("An API Endpoint that belongs to another user can be called from a recipe using the HTTP Connector. Select the "),r("strong",[e._v("Send request")]),e._v(" action of the Connector. The following screen shows a typical configuration for this action (in this case a POST request):")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:a(416),alt:"API Client Request",width:"1000",height:"963"}}),e._v(" "),r("em",[e._v("API Client Request")])],1),e._v(" "),r("p",[e._v("Make sure that the type of request (POST, PUT, GET) matches the API that you are calling. Any required fields need to be specified in the body (for POST and PUT) or as query parameters in the URL (for GET).")]),e._v(" "),r("p",[e._v("Also, note that an "),r("code",[e._v("API-Token")]),e._v(" request header has been added. Its value should be set to the token that the API owner has supplied to you. (This assumes the "),r("strong",[e._v("Auth Token")]),e._v(" method of authentication).")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Caution")]),e._v("\nDo not hard-code "),r("b",[e._v("API token")]),e._v(" into input fields. Check out the recommended "),r("router-link",{attrs:{to:"/recipes/recipe-security.html"}},[e._v("security best practices")]),e._v(" for your recipe.")],1)]),e._v(" "),r("h1",{attrs:{id:"testing-a-call-to-an-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#testing-a-call-to-an-api"}},[e._v("#")]),e._v(" Testing a Call to an API")]),e._v(" "),r("p",[e._v("Using the recipe test feature, you can run the recipe a single time and have it generate a call to the REST API. If successful, the API will return a 200 status and the recipe execution will continue to completion. There are several possible errors that can occur. Here are some of the common ones.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Error code")]),e._v(" "),r("th",[e._v("Description")]),e._v(" "),r("th",[e._v("Details")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("401")]),e._v(" "),r("td",[e._v("Unauthorized")]),e._v(" "),r("td",[e._v("This indicates a problem with the API token. It is missing or does not match the correct code for the API you are trying to call.")])]),e._v(" "),r("tr",[r("td",[e._v("404")]),e._v(" "),r("td",[e._v("Not found")]),e._v(" "),r("td",[e._v("This may indicate that you have the incorrect URL in the request configuration on your side. Another possible cause is that the recipe you are calling is not running. Yet another possibility is that the recipe owner has either the API Collection or your client configuration set to "),r("strong",[e._v("Disabled")]),e._v(".")])]),e._v(" "),r("tr",[r("td",[e._v("422")]),e._v(" "),r("td",[e._v("Processing error")]),e._v(" "),r("td",[e._v("This indicate that there is an issue with the callable recipe - the job failed to complete. It could due to a mismatch between the request syntax and the expected syntax written in the recipe.")])]),e._v(" "),r("tr",[r("td",[e._v("500")]),e._v(" "),r("td",[e._v("Server error")]),e._v(" "),r("td",[e._v("This usually indicates that the request parameters were missing or invalid for the API.")])])])]),e._v(" "),r("h1",{attrs:{id:"calling-the-api-from-other-clients"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#calling-the-api-from-other-clients"}},[e._v("#")]),e._v(" Calling the API from other clients")]),e._v(" "),r("p",[e._v("Clients can access the Open API description for the service by performing a GET request on the API URL and adding "),r("code",[e._v("/swagger")]),e._v(" to the path. This URL should also have the API token as a query parameter. So for example, if the API URL is "),r("code",[e._v("https://workato.com/doc/service/sales-api-v1")]),e._v(", the Open API description is available at a URL like:")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("https://workato.com/doc/service/sales-api-v1/swagger?token"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("e6883d64843aaed62d48bcdf3cf4ebbf\n")])])]),r("p",[e._v("The Open API description can be used by tools such as the "),r("a",{attrs:{href:"https://swagger.io/tools/swagger-ui/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Swagger UI"),r("OutboundLink")],1),e._v(" to make requests. For programmers, it is possible to generate API client code using "),r("a",{attrs:{href:"https://github.com/swagger-api/swagger-codegen",target:"_blank",rel:"noopener noreferrer"}},[e._v("Swagger Codegen"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("Any other standard HTTP request tool, such as the command-line tool "),r("a",{attrs:{href:"https://curl.haxx.se/",target:"_blank",rel:"noopener noreferrer"}},[e._v("cURL"),r("OutboundLink")],1),e._v(" or the popular open source tool "),r("a",{attrs:{href:"https://www.getpostman.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Postman"),r("OutboundLink")],1),e._v(", can be used to make requests.")])])}),[],!1,null,null,null);t.default=o.exports},416:function(e,t,a){e.exports=a.p+"assets/img/api-client-request.6d342af4.png"}}]);