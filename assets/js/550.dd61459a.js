(window.webpackJsonp=window.webpackJsonp||[]).push([[550],{2605:function(e,t,o){"use strict";o.r(t);var a=o(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"workato-embedded-implementation-guide"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#workato-embedded-implementation-guide"}},[e._v("#")]),e._v(" Workato Embedded (Implementation Guide)")]),e._v(" "),o("p",[e._v("Workato Embedded allows all pages and elements on the Workato platform to be embedded within in an iframe built into the OEM partner’s platform UI. This allows for the most seamless end customer experience and brings the power of Workato's modern, low-code recipe building interface to your platform.")]),e._v(" "),o("p",[e._v("Alongside tools like the "),o("router-link",{attrs:{to:"/features/activity-audit-log.html"}},[e._v("activity audit log")]),e._v(", "),o("router-link",{attrs:{to:"/user-accounts-and-teams/team-collaboration.html#team-roles"}},[e._v("role-based access control")]),e._v(", the "),o("router-link",{attrs:{to:"/features/admin-dashboard.html"}},[e._v("Workato admin dashboard")]),e._v(" and more, your customers can build, test and monitor their integrations from within your platform.")],1),e._v(" "),o("h2",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),o("p",[e._v("In this guide, we will show you how Workato embedded can be implemented within your platform.")]),e._v(" "),o("p",[e._v("A couple of key points to note:")]),e._v(" "),o("ul",[o("li",[e._v("The integration between Workato and the vendor is done via iFrame - a native way to embed one webapp into another in a browser.")]),e._v(" "),o("li",[e._v("To match page style and design on our OEM partner's application, we provides a way to customize some of Workato's style properties like brand color, page margins etc.")]),e._v(" "),o("li",[e._v("We also provide the Workato Embedding Client script that is meant to simplify synchronization between Workato (embedded via iframe) and the partner's web app.")])]),e._v(" "),o("h2",{attrs:{id:"configuration-parameters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration-parameters"}},[e._v("#")]),e._v(" Configuration parameters")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Parameter name")]),e._v(" "),o("th",[e._v("Type")]),e._v(" "),o("th",[e._v("Example value")]),e._v(" "),o("th",[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Vendor origin")]),e._v(" "),o("td",[e._v("Required")]),e._v(" "),o("td",[o("code",[e._v("https://vendor.com")])]),e._v(" "),o("td",[e._v("Origin ("),o("code",[e._v("<url_schema>://<url_host>")]),e._v(") of the vendor's webapp.")])]),e._v(" "),o("tr",[o("td",[e._v("Embedding URL prefix")]),e._v(" "),o("td",[e._v("Required")]),e._v(" "),o("td",[o("code",[e._v("/integration")])]),e._v(" "),o("td",[e._v("In order to provide the best user experience we need a way to synchronize Workato URL from the iframe with the URL of the vendor's webapp. To do so, vendor have to pick some embedding path prefix that will be used to generate vendor URLs from Workato URLs using this pattern: "),o("code",[e._v("<embedding_url_prefix>/<workato_url>")]),e._v(". For example if prefix is "),o("code",[e._v("/integration")]),e._v(" and Workato URL is "),o("code",[e._v("/foo?a=1#hash")]),e._v(" then corresponding vendor URL will be "),o("code",[e._v("/integration/foo?a=1#hash")]),e._v(".")])]),e._v(" "),o("tr",[o("td",[e._v("Styling properties")]),e._v(" "),o("td",[e._v("Optional")]),e._v(" "),o("td",[e._v("See "),o("a",{attrs:{href:"#styling"}},[e._v("Styling")]),e._v(" section")]),e._v(" "),o("td",[e._v("List of properties that customize Workato to better match vendor's design. See "),o("a",{attrs:{href:"#styling"}},[e._v("Styling")]),e._v(" section for more information.")])])])]),e._v(" "),o("h2",{attrs:{id:"glossary-of-terms"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#glossary-of-terms"}},[e._v("#")]),e._v(" Glossary of terms")]),e._v(" "),o("p",[e._v("We will introduce a few terms to make this guide clearer:")]),e._v(" "),o("h3",{attrs:{id:"links"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[e._v("#")]),e._v(" Links")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Vendor")]),e._v(": The OEM partner's web app is a "),o("strong",[o("em",[e._v("vendor")])]),e._v(".")]),e._v(" "),o("li",[o("strong",[e._v("Vendor URL")]),e._v(" - all the URLs that belong to "),o("code",[e._v("Vendor origin")]),e._v(" ("),o("code",[e._v("https://vendor.com/*")]),e._v(")")]),e._v(" "),o("li",[o("strong",[e._v("Embedding URL")]),e._v(" - all the vendor URLs that start with "),o("code",[e._v("Embedding URL prefix")]),e._v(" ("),o("code",[e._v("https://vendor.com/integration/*")]),e._v(").")]),e._v(" "),o("li",[o("strong",[e._v("Embedding link")]),e._v(" - "),o("code",[e._v("<a>")]),e._v(" element which points to an embedding URL.")]),e._v(" "),o("li",[o("strong",[e._v("Embedding iframe")]),e._v(" or just "),o("strong",[e._v("iframe")]),e._v(" - an "),o("code",[e._v("<iframe>")]),e._v(" HTML element that contains embedded Workato webapp.")]),e._v(" "),o("li",[o("strong",[e._v("Embedding page")]),e._v(" - any page of the vendor's web app which is located under embedding URL "),o("strong",[e._v("and")]),e._v("  contains an embedding iframe.")])]),e._v(" "),o("p",[o("code",[e._v("Vendor origin")]),e._v(" and "),o("code",[e._v("Embedding URL prefix")]),e._v(" parameters are needed to convert all the links in the embedded Workato webapp into an embedding links.")]),e._v(" "),o("p",[e._v("For example, "),o("code",[e._v('<a href="/foo?a=1#hash">')]),e._v(" will become:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('<a href="https://vendor.com/integration/foo?a=1#hash">\n')])])]),o("p",[e._v("This allows users to open the correct embedded page when he wants to open a link in a new tab or in the case of copying a link's URL.")]),e._v(" "),o("h3",{attrs:{id:"communication-between-apps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#communication-between-apps"}},[e._v("#")]),e._v(" Communication between apps")]),e._v(" "),o("p",[e._v("Communication between the iframe and the partner's application is done via browser's "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage",target:"_blank",rel:"noopener noreferrer"}},[e._v("PostMessage API"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("See "),o("a",{attrs:{href:"https://workato.github.io/full-embed-sample/globals.html#embeddingworkatomessage",target:"_blank",rel:"noopener noreferrer"}},[e._v("EmbeddingWorkatoMessage"),o("OutboundLink")],1),e._v(" for the complete list of messages that Workato sends to the vendor's webapp and "),o("a",{attrs:{href:"https://workato.github.io/full-embed-sample/globals.html#embeddingvendormessage",target:"_blank",rel:"noopener noreferrer"}},[e._v("EmbeddingVendorMessage"),o("OutboundLink")],1),e._v(" for the list of messages\nthat can be sent in the opposite direction.")]),e._v(" "),o("p",[e._v("In order to simplify communication between Workato and vendor's webapps we have built the "),o("a",{attrs:{href:"#workato-embedding-client"}},[e._v("Workato Embedding Client")]),e._v(". Read on to learn more.")]),e._v(" "),o("h2",{attrs:{id:"workato-embedding-client"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#workato-embedding-client"}},[e._v("#")]),e._v(" Workato Embedding Client")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("Workato Embedding Client")]),e._v(" is a tiny script that simplifies communication between vendor's webapp and the embedded Workato platform. It also provides a few helper methods that help with synchronization of Workato and embedding URLs.")]),e._v(" "),o("p",[e._v("In order to inject it into your webapp you can follow these installation steps:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Inject this script on every embedding page: "),o("code",[e._v('<script src="https://embedding.workato.com/r/embedding-client.js">')]),e._v(".")]),e._v(" "),o("p",[e._v("There are a few important things to note:")]),e._v(" "),o("ul",[o("li",[e._v("It should be injected "),o("strong",[e._v("before")]),e._v(" the embedding iframe.")]),e._v(" "),o("li",[e._v("It shouldn't contain neither "),o("code",[e._v("async")]),e._v(" nor "),o("code",[e._v("defer")]),e._v(" attributes as it must be loaded synchronously before the iframe does.")])]),e._v(" "),o("p",[e._v("It creates a global "),o("code",[e._v("Workato")]),e._v(" object that is an instance of the [[EmbeddingClient]] class.")])]),e._v(" "),o("li",[o("p",[e._v("Insert the following configuration script right below the first one:")]),e._v(" "),o("div",{staticClass:"language-html extra-class"},[o("pre",{pre:!0,attrs:{class:"language-html"}},[o("code",[o("span",{pre:!0,attrs:{class:"token tag"}},[o("span",{pre:!0,attrs:{class:"token tag"}},[o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("script")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),o("span",{pre:!0,attrs:{class:"token script"}},[o("span",{pre:!0,attrs:{class:"token language-javascript"}},[e._v("\n  Workato"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("configure")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Value of `Embedding URL prefix` parameter")]),e._v("\n    embeddingUrlPrefix"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/integration'")]),e._v("\n  "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),o("span",{pre:!0,attrs:{class:"token tag"}},[o("span",{pre:!0,attrs:{class:"token tag"}},[o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("script")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])])])]),e._v(" "),o("p",[e._v("That's it! Now you can use any property or method of the "),o("a",{attrs:{href:"https://workato.github.io/full-embed-sample/classes/embeddingclient.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("EmbeddingClient class"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("For example, you can use the "),o("a",{attrs:{href:"https://workato.github.io/full-embed-sample/classes/embeddingclient.html#handlenavigation",target:"_blank",rel:"noopener noreferrer"}},[e._v("EmbeddingClient.handleNavigation"),o("OutboundLink")],1),e._v(" method to synchronize current Workato URL in the embedded\niframe with current URL of the vendor's webapp or the "),o("a",{attrs:{href:"https://workato.github.io/full-embed-sample/classes/embeddingclient.html#generateiframeurl",target:"_blank",rel:"noopener noreferrer"}},[e._v("EmbeddingClient.generateIFrameUrl"),o("OutboundLink")],1),e._v(" method to generate a value for the iframe's "),o("code",[e._v("src")]),e._v(" attribute.")]),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"https://workato.github.io/full-embed-sample/classes/embeddingclient.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("EmbeddingClient"),o("OutboundLink")],1),e._v(" documentation lists information about all the available helper methods.")]),e._v(" "),o("h2",{attrs:{id:"styling"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#styling"}},[e._v("#")]),e._v(" Styling")]),e._v(" "),o("p",[e._v("As an OEM partner, you can customize some of Workato's style properties to better match design of your application. All of them are optional. If the value for a property is not provided its default value will be used.")]),e._v(" "),o("p",[e._v("Here is the list of all the customizable properties and their defaults:")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Name")]),e._v(" "),o("th",[e._v("Value type")]),e._v(" "),o("th",[e._v("Default value")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("code",[e._v("brand-color")])]),e._v(" "),o("td",[e._v("Hex color code")]),e._v(" "),o("td",[o("code",[e._v("#108291")])])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("brand-hover-color")])]),e._v(" "),o("td",[e._v("Hex color code")]),e._v(" "),o("td",[o("code",[e._v("#065f69")])])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("brand-pending-color")])]),e._v(" "),o("td",[e._v("Hex color code")]),e._v(" "),o("td",[o("code",[e._v("#c7eded")])])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("page-background-color")])]),e._v(" "),o("td",[e._v("Hex color code")]),e._v(" "),o("td",[o("code",[e._v("#f7f9fa")])])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("container-max-width")])]),e._v(" "),o("td",[e._v("Dimension")]),e._v(" "),o("td",[o("code",[e._v("1296px")])])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("container-margin-left")])]),e._v(" "),o("td",[e._v("Dimension")]),e._v(" "),o("td",[o("code",[e._v("auto")])])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("container-margin-right")])]),e._v(" "),o("td",[e._v("Dimension")]),e._v(" "),o("td",[o("code",[e._v("auto")])])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("container-padding-left")])]),e._v(" "),o("td",[e._v("Dimension")]),e._v(" "),o("td",[o("code",[e._v("8px")])])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("container-padding-right")])]),e._v(" "),o("td",[e._v("Dimension")]),e._v(" "),o("td",[o("code",[e._v("8px")])])])])]),e._v(" "),o("h3",{attrs:{id:"value-types"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#value-types"}},[e._v("#")]),e._v(" Value types")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Type")]),e._v(" "),o("th",[e._v("Allowed values")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Hex color code")]),e._v(" "),o("td",[e._v("CSS color in 3- or 6-digits HEX format e.g. "),o("code",[e._v("#108291")]),e._v(" or "),o("code",[e._v("#ccc")])])]),e._v(" "),o("tr",[o("td",[e._v("Dimension")]),e._v(" "),o("td",[e._v("Value in pixels or "),o("code",[e._v("auto")])])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);