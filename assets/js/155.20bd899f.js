(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{123:function(e,t,o){e.exports=o.p+"assets/img/selecting-object.c76036b5.gif"},2193:function(e,t,o){"use strict";o.r(t);var a=o(0),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"coupa-object-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coupa-object-actions"}},[e._v("#")]),e._v(" Coupa - Object actions")]),e._v(" "),a("p",[e._v("Workato allows you to create, update or search for objects on Coupa. In Workato, we classify things like invoices, expenses and even suppliers as objects. We currently work with a long list of Coupa objects. "),a("router-link",{attrs:{to:"/connectors/coupa/introduction.html#objects"}},[e._v("Find out which objects we work with")]),e._v(". When using actions in Workato that reference objects, you'll be able to specify which object you want to work with later on.")],1),e._v(" "),a("p",[a("strong",[e._v("Object actions available in Workato")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Create object")])]),e._v(" "),a("li",[a("code",[e._v("Update object")])]),e._v(" "),a("li",[a("code",[e._v("Search object")])]),e._v(" "),a("li",[a("code",[e._v("Get object by ID")])]),e._v(" "),a("li",[a("code",[e._v("Get remit to addresses by object ID")])]),e._v(" "),a("li",[a("code",[e._v("Create attachment on object")])])]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"input-fields-for-create-update-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-fields-for-create-update-actions"}},[e._v("#")]),e._v(" Input fields for create/update actions")]),e._v(" "),a("p",[e._v("This step will perform the selected action on the object you select. For example, selecting the "),a("code",[e._v("Create object")]),e._v(" action and selecting "),a("code",[e._v("Invoice")]),e._v(" as your object will create an invoice in Coupa when the step is executed in a recipe.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(123),alt:"Selecting an object",width:"708",height:"608"}}),e._v(" "),a("center",[a("i",[e._v("Selecting an object in the Coupa connector in the create/update object action")])]),e._v(" "),a("br")],1),e._v(" "),a("p",[e._v("After the object is selected, all relevant fields will be shown to you. For example, if you were to select the "),a("code",[e._v("Create Object")]),e._v(" action and select "),a("code",[e._v("Invoice")]),e._v(", the action would populate with all relevant invoice related fields for you to fill in. Use datapills from earlier steps to make objects based on data in your workflow.")]),e._v(" "),a("p",[e._v("Required fields will always show up in the recipe configuration. Remember to fill them in to prevent errors from happening. You can also find custom fields defined in your Coupa instance in the additional fields tab.")]),e._v(" "),a("h4",{attrs:{id:"list-input-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-input-fields"}},[e._v("#")]),e._v(" List input fields")]),e._v(" "),a("p",[e._v("Some Coupa objects actions in Workato can accept list input lines. This is often the case in invoices and purchase orders when looking to generate a list of invoice lines or purchase order lines. Workato gives you a quick and easy way to generate these lists. When you are working with actions earlier on in your recipe that generates list outputs, easily map them using over with the list input fields. "),a("router-link",{attrs:{to:"/features/list-management.html"}},[e._v("Find out more about list inputs.")])],1),e._v(" "),a("h3",{attrs:{id:"create-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-object"}},[e._v("#")]),e._v(" Create Object")]),e._v(" "),a("p",[e._v("This action creates an object which you specify such as a purchase order or an invoice. The dynamically generated input fields will show you all input fields that are required to successfully create this object. Optional input fields may be hidden away in the fields tab below.")]),e._v(" "),a("p",[e._v("A good practice would be to create custom fields in Coupa to store the ID of the record in the application the data is coming from. For example, any new supplier created in Coupa through an integration pulling data from NetSuite should have a custom field to store NetSuite ID of that same supplier. Another subsequent action should be done to update the NetSuite record with the Coupa internal ID of that very same action. This makes future recipes and integrations easier by having this relationship between records in applications explicitly defined.")]),e._v(" "),a("h3",{attrs:{id:"update-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-object"}},[e._v("#")]),e._v(" Update Object")]),e._v(" "),a("p",[e._v("This action updates a specific object in Coupa. One required input field is the specific Coupa internal ID of that object. This lets Coupa know exactly which object you want to update. All other fields will be dynamically generated.")]),e._v(" "),a("p",[e._v("If your recipe does not have the internal ID of this invoice in Coupa, use our "),a("code",[e._v("search object")]),e._v(" action. The "),a("code",[e._v("search object")]),e._v(" action allows you to search for that specific object in Coupa based on other fields such as "),a("code",[e._v("Invoice number")]),e._v(" for invoices and "),a("code",[e._v("Purchase order number")]),e._v(" for purchase orders. Use the search action's result's ID datapill to update your object after.")]),e._v(" "),a("h3",{attrs:{id:"output-fields-for-create-update-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-fields-for-create-update-actions"}},[e._v("#")]),e._v(" Output fields for create/update actions")]),e._v(" "),a("p",[e._v("Each create/update object action executes an action on a single object in Coupa. This action in Workato retrieves all object-related information included custom fields. You can then use the output datapills in subsequent steps in your recipe.")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"input-fields-for-search-retrieval-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-fields-for-search-retrieval-actions"}},[e._v("#")]),e._v(" Input fields for Search/Retrieval actions")]),e._v(" "),a("p",[e._v("This action performs a search in Coupa when the step is executed. It receives input from you on a few attributes and returns objects in a list of objects that match those returns")]),e._v(" "),a("p",[e._v("After the object is selected, all relevant fields will be shown to you. Workato supports different relevant fields for you to search for if you are using the "),a("code",[e._v("Search object")]),e._v(" action. All other search/retrieval actions require you to use the internal Coupa object ID.")]),e._v(" "),a("h3",{attrs:{id:"search-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#search-object"}},[e._v("#")]),e._v(" Search Object")]),e._v(" "),a("p",[e._v("This action searches for objects in Coupa based on certain fields which you determine. Common fields available include the Coupa internal ID as well as numbers/name associated with the Object. For example, you are able to search invoices based on invoice numbers or search suppliers based on supplier name. This is useful when you are looking to update these objects but don't have their Coupa internal ID on hand.")]),e._v(" "),a("p",[e._v("This action can return "),a("strong",[e._v("multiple")]),e._v(" object records. The Workato connector allows you to search in two ways.")]),e._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{width:"25%"}},[e._v("Search type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Fields")]),e._v(" "),a("td",[e._v("Search for records using a predefined set of filters. First, choose the object type and then the relevant fields will be shown to you.")])]),e._v(" "),a("tr",[a("td",[e._v("Query")]),e._v(" "),a("td",[e._v("Search for records using a free-form query. Find out more details "),a("a",{attrs:{href:"https://success.coupa.com/Integrate/Technical_Documentation/API/Get_Started/Querying_Options"}},[e._v("here")])])])])]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(475),alt:"Configure search type for search actions",width:"683",height:"678"}}),e._v(" "),a("center",[a("i",[e._v("Search by either standard fields or write your own Coupa Query")])])],1),e._v(" "),a("h3",{attrs:{id:"get-object-by-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-object-by-id"}},[e._v("#")]),e._v(" Get object by ID")]),e._v(" "),a("p",[e._v("This action retrieves a specific object in Coupa. Define the type of object you are looking for and also the internal ID. The object returned would be similar to the "),a("code",[e._v("Search Object")]),e._v(" action's results.")]),e._v(" "),a("p",[e._v("This action returns only a "),a("strong",[e._v("single")]),e._v(" unique record.")]),e._v(" "),a("h3",{attrs:{id:"get-remit-to-addresses-by-object-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-remit-to-addresses-by-object-id"}},[e._v("#")]),e._v(" Get remit to addresses by object ID")]),e._v(" "),a("p",[e._v("This action allows you to select an object and an associated internal Coupa ID with that object to retrieve their remit-to addresses. This is the address which you will send payment to. The output for this action comes in the form of a list of addresses for that specified object. We currently only support this action for Suppliers.")]),e._v(" "),a("h3",{attrs:{id:"output-fields-for-search-retrieval-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-fields-for-search-retrieval-actions"}},[e._v("#")]),e._v(" Output fields for search/retrieval actions")]),e._v(" "),a("p",[e._v("Each search/retrieval action except the "),a("code",[e._v("Get object by ID")]),e._v(" action returns a list of object(s) that match your search criteria. Use this action to search for objects in Coupa that could be related to common objects in other applications.")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"input-fields-for-add-file-attachment-on-object-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-fields-for-add-file-attachment-on-object-action"}},[e._v("#")]),e._v(" Input fields for Add file attachment on object action")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Add file attachment on object")]),e._v(" action allows you to create file attachments on various objects in Coupa. When configuring the action, you'll first need to define the object you want to create an attachment for in Coupa. You may do so by selecting the object type manually or mapping a datapill. You'll also need to provide the internal Coupa ID of the object and the attachment contents. We currently support adding file attachments for "),a("code",[e._v("Contracts")]),e._v(", "),a("code",[e._v("Purchase Orders")]),e._v(", "),a("code",[e._v("Requisitions")]),e._v(", "),a("code",[e._v("Invoices")]),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("The attachment name is optional and a generic attachment name will be generated by Coupa if none is supplied. We recommend that you give a meaningful name to your attachments.")])]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(476),alt:"Sample configuration",width:"2264",height:"1652"}}),e._v(" "),a("center",[a("i",[e._v("Action configuration example")])])],1),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(477),alt:"Coupa view",width:"2030",height:"1780"}}),e._v(" "),a("center",[a("i",[e._v("Where it shows up in Coupa")])])],1),e._v(" "),a("h3",{attrs:{id:"output-fields-for-add-file-attachment-on-object-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-fields-for-add-file-attachment-on-object-action"}},[e._v("#")]),e._v(" Output fields for Add file attachment on object action")]),e._v(" "),a("p",[e._v("The action returns the location of the attachment just created in Coupa. This location cannot be used directly as a URL.")]),e._v(" "),a("h2",{attrs:{id:"list-of-triggers-and-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-of-triggers-and-actions"}},[e._v("#")]),e._v(" List of triggers and actions")]),e._v(" "),a("p",[e._v("Workato currently supports the following Coupa triggers and actions. Find out more details about each by clicking on the links below. You can also navigate to them through the sidebar.")]),e._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/connectors/coupa/introduction.html"}},[e._v("Introduction")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/connectors/coupa/object-triggers.html"}},[e._v("Object triggers")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/connectors/coupa/purchase-order-actions.html"}},[e._v("Purchase order actions")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/connectors/coupa/supplier-actions.html"}},[e._v("Supplier actions")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/connectors/coupa/integration-action.html"}},[e._v("Integration actions")])],1)])])}),[],!1,null,null,null);t.default=i.exports},475:function(e,t,o){e.exports=o.p+"assets/img/search_input.ee327dea.gif"},476:function(e,t,o){e.exports=o.p+"assets/img/attachment-action-config.46e73bb3.png"},477:function(e,t,o){e.exports=o.p+"assets/img/attachment-coupa-view.e8e706f6.png"}}]);