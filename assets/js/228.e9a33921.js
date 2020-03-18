(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{2168:function(t,e,r){"use strict";r.r(e);var i=r(0),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"active-directory-new-entry-trigger"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#active-directory-new-entry-trigger"}},[t._v("#")]),t._v(" Active Directory - New entry trigger")]),t._v(" "),i("h2",{attrs:{id:"new-entry"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#new-entry"}},[t._v("#")]),t._v(" New entry")]),t._v(" "),i("p",[t._v("This trigger picks up new entries that are created in your Active Directory instance. Each entry is processed as an individual job. It checks for new entries once every poll interval.")]),t._v(" "),i("p",[i("DocImage",{attrs:{src:r(434),alt:"New entry trigger",width:"1500",height:"1142"}}),t._v(" "),i("em",[t._v("New entry trigger")])],1),t._v(" "),i("h2",{attrs:{id:"input-fields"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),i("table",{staticClass:"unchanged rich-diff-level-one"},[i("thead",[i("tr",[i("th",{attrs:{width:"25%"}},[t._v("Input field")]),t._v(" "),i("th",[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("Sample entry DN")]),t._v(" "),i("td",[t._v("\n        Used to introspect the attributes in your entry object. Give a distinguished name of an existing entry. Attributes of this object will be available in the output fields of this trigger.\n      ")])]),t._v(" "),i("tr",[i("td",[t._v("When first started, this recipe should pick up events from")]),t._v(" "),i("td",[t._v("\n        Entries that are created after this date and time will be processed in the trigger. If left blank, the trigger will pick up entries "),i("b",[t._v("created 1 hour before")]),t._v(" the first time this recipe is started.\n      ")])]),t._v(" "),i("tr",[i("td",[t._v("Entry search filter")]),t._v(" "),i("td",[t._v("\n        Use this to filter the entries to be processed by this trigger."),i("br"),t._v("\n        For example, use "),i("code",[t._v("&(ou=Dev)(objectClass=Person)")]),t._v(" to pick up only "),i("b",[t._v("Person")]),t._v(" entries from the "),i("b",[t._v("Dev")]),t._v(" organization unit.\n      ")])])])]),t._v(" "),i("h2",{attrs:{id:"output-fields"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[t._v("#")]),t._v(" Output fields")]),t._v(" "),i("p",[t._v("The output of this trigger is a single entry. The attributes of each entry is based on the "),i("strong",[t._v("Sample entry DN")]),t._v(" provided in the trigger input.")]),t._v(" "),i("p",[i("DocImage",{attrs:{src:r(23),alt:"Entry output fields",width:"804",height:"1052"}}),t._v(" "),i("em",[t._v("Entry output fields")])],1)])}),[],!1,null,null,null);e.default=s.exports},23:function(t,e,r){t.exports=r.p+"assets/img/entry_output_schema.91c2eb7d.png"},434:function(t,e,r){t.exports=r.p+"assets/img/new_entry_trigger.c4812df3.png"}}]);