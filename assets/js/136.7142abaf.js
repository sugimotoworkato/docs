(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{2347:function(e,t,s){"use strict";s.r(t);var a=s(0),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"salesforce-object-relationships"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#salesforce-object-relationships"}},[e._v("#")]),e._v(" Salesforce Object Relationships")]),e._v(" "),a("p",[e._v("An object relationship in Salesforce is a two-way association between two objects. Relationships are created by creating custom relationship fields on an object. This is done so that when users view records, they can also see and access related data.")]),e._v(" "),a("p",[e._v("An example of a relationship between standard objects in Salesforce is the relationship between "),a("code",[e._v("Account")]),e._v(" and "),a("code",[e._v("Contacts")]),e._v(". In most Salesforce instances this is a one-to-many lookup relationship where "),a("code",[e._v("Account ID")]),e._v(" is a field on a Contact, representing the relationship between the Contact and its associated Account. An Account usually has many associated Contacts.")]),e._v(" "),a("p",[e._v("There are several different types of relationships in Salesforce. Commonly used ones include:")]),e._v(" "),a("ul",[a("li",[e._v("Master-detail")]),e._v(" "),a("li",[e._v("Lookup")]),e._v(" "),a("li",[e._v("Hierarchical")])]),e._v(" "),a("p",[e._v("View a detailed explanation of the different types of relationships in Salesforce "),a("a",{attrs:{href:"https://help.salesforce.com/articleView?id=overview_of_custom_object_relationships.htm&type=5",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"related-objects-field"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-objects-field"}},[e._v("#")]),e._v(" Related objects field")]),e._v(" "),a("p",[e._v("In order to quickly access related objects' fields in Salesforce objects with "),a("strong",[e._v("lookup relationships")]),e._v(", all "),a("a",{attrs:{href:"https://www.workato.com/integrations/salesforce",target:"_blank",rel:"noopener noreferrer"}},[e._v("Salesforce triggers and SOQL search actions"),a("OutboundLink")],1),e._v(" on Workato contain the 'Related objects' field and 'Fields' field. If you cannot locate these fields, it can be found in the 'Remove optional fields' dropdown below the required fields.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:s(936),alt:"Related objects field",width:"1420",height:"538"}}),e._v(" "),a("em",[e._v("'Related Objects' and 'Fields' on triggers and actions")])],1),e._v(" "),a("h3",{attrs:{id:"accessing-fields-in-parent-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessing-fields-in-parent-objects"}},[e._v("#")]),e._v(" Accessing fields in Parent Objects")]),e._v(" "),a("p",[e._v("Here's an example of using this field in a New/Updated Record trigger. In this example:")]),e._v(" "),a("ol",[a("li",[e._v("The recipe will trigger when a New or Updated "),a("strong",[e._v("Opportunity")]),e._v(" is detected")]),e._v(" "),a("li",[e._v("Information in the "),a("strong",[e._v("Primary contact")]),e._v(" Parent Object such as Address and Phone number is required so it can be entered in an Order fulfillment app (eg. Netsuite)")])]),e._v(" "),a("p",[e._v("Once the Salesforce trigger "),a("code",[e._v("New/Updated Record")]),e._v(" is selected, the "),a("code",[e._v("Opportunity")]),e._v(" object is selected in the "),a("strong",[e._v("Object")]),e._v(" dropdown. This fulfills part 1 of the requirements.")]),e._v(" "),a("p",[e._v("Then, click on the 'Related Objects' field dropdown to pull up a list of Parent Objects. Note that only Parent Objects will be listed here. Select "),a("strong",[e._v("Primary contact")]),e._v(" here.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:s(937),alt:"Select related object",width:"1430",height:"1236"}}),e._v(" "),a("em",[e._v("Parent objects are displayed in the dropdown")])],1),e._v(" "),a("p",[e._v("Next, move on to the next field, 'Fields' to select the fields in "),a("strong",[e._v("Primary contact")]),e._v(" required in this recipe. Since Salesforce objects usually contain many fields, using the search function in this dropdown will speed up this process. If you do not select specified fields here, all fields will be returned.")]),e._v(" "),a("p",[e._v("In this dropdown, fields belonging to the Opportunity, eg. Main competitor(s), Primary contact and Secondary contact belong to the Opportunity. Fields belonging to the selected Parent will have a dot notation separating the Parent and field name. The example below shows Primary contact.Contact ID and Primary contact.Deleted.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:s(938),alt:"Fields field",width:"1450",height:"998"}}),e._v(" "),a("em",[e._v("Fields dropdown")])],1),e._v(" "),a("p",[e._v("To fulfill part 2 of the requirements, select the Mailing Address and Business Phone fields. These fields will now be available in the data tree on the right for use in subsequent recipe steps.")]),e._v(" "),a("h3",{attrs:{id:"grandparent-relationships"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grandparent-relationships"}},[e._v("#")]),e._v(" Grandparent relationships")]),e._v(" "),a("blockquote",[a("p",[e._v("This is an advanced feature that requires users to know the relationship names between their Salesforce objects")])]),e._v(" "),a("p",[a("DocImage",{attrs:{src:s(939),alt:"Grandparent hierarchy",width:"1272",height:"640"}}),e._v(" "),a("em",[e._v("Relationship hierarchy")])],1),e._v(" "),a("p",[e._v("The image above shows a typical Grandparent - Parent - Child lookup object relationship. Contacts or Accounts usually have multiple Opportunities: A simple example would be multiple sales offers (Opportunities) made to the same company or person within a company (Accounts/Contacts). Accounts and Contacts belong to Users in Salesforce. This User could be an account executive within your sales organization.")]),e._v(" "),a("p",[e._v("To access fields in a Grandparent Object, in this case, toggle the related objects list to accept text input. This will allow you to enter multiple object relationships. Enter the following comma-separated list of relationships:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Primary_Contact__r,Primary_Contact__r.User__r\n")])])]),a("p",[e._v("Note that each object has the suffix "),a("code",[e._v("__r")]),e._v(", which denotes a relationship. If using custom objects, which have the suffix "),a("code",[e._v("__c")]),e._v(", the "),a("code",[e._v("__c")]),e._v(" suffix is replaced with "),a("code",[e._v("__r")]),e._v(". For example, if the custom object 'Invoice__c' has a parent relationship to Opportunity, the field input will be:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Invoice__r\n")])])]),a("p",[e._v("Also note that relationship names are case sensitive. Typing in "),a("code",[e._v("Primary_contact__r")]),e._v(" instead of "),a("code",[e._v("Primary_Contact__r")]),e._v(" will not yield any results in the 'Fields' field. Please ensure that object names and relationships are verified before using this field.")]),e._v(" "),a("p",[e._v("Now, select the required fields in the 'Fields' field, as below:\n"),a("DocImage",{attrs:{src:s(940),alt:"Fields field 2",width:"1454",height:"654"}}),e._v(" "),a("em",[e._v("Fields from parent and grandparent object selected")])],1)])}),[],!1,null,null,null);t.default=i.exports},936:function(e,t,s){e.exports=s.p+"assets/img/related-objs-fields.36711cf2.png"},937:function(e,t,s){e.exports=s.p+"assets/img/parent-field-dropdown.f6e71079.png"},938:function(e,t,s){e.exports=s.p+"assets/img/fields-field-1.bd3f73ca.png"},939:function(e,t,s){e.exports=s.p+"assets/img/grandparent-hierarchy.337dba39.png"},940:function(e,t,s){e.exports=s.p+"assets/img/grandparent-relationship-selected.22f9c0ee.png"}}]);