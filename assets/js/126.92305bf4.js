(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{1150:function(e,t,a){e.exports=a.p+"assets/img/view_raas_url.c72c2607.png"},1151:function(e,t,a){e.exports=a.p+"assets/img/copy_raas_json_url.be009058.png"},1152:function(e,t,a){e.exports=a.p+"assets/img/raas_prompts.951a203f.png"},1153:function(e,t,a){e.exports=a.p+"assets/img/raas_change_to_advance.c5cdef37.png"},1154:function(e,t,a){e.exports=a.p+"assets/img/raas_add_prompts.58aeb9cc.png"},1155:function(e,t,a){e.exports=a.p+"assets/img/raas_add_filter.08da2877.png"},2416:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"workday-raas"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#workday-raas"}},[e._v("#")]),e._v(" Workday RaaS")]),e._v(" "),r("p",[e._v("Workday Report-as-a-Service (RaaS) is a feature that exposes reports as web services. These reports must be configured as "),r("strong",[e._v("Advanced")]),e._v(" type reports to be web service enabled.")]),e._v(" "),r("h2",{attrs:{id:"custom-reports-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#custom-reports-setup"}},[e._v("#")]),e._v(" Custom Reports Setup")]),e._v(" "),r("p",[e._v("Custom Reports (advanced type) can be exposed as a Web Service to be used programmatically. Workato uses this web service to automate report run and to integrate report data from Workday to other applications.")]),e._v(" "),r("h3",{attrs:{id:"how-to-find-report-url"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-find-report-url"}},[e._v("#")]),e._v(" How to find report URL")]),e._v(" "),r("p",[e._v("Find URL in Actions > Web Service > View URLs")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:a(1150),alt:"View RaaS URL",width:"1794",height:"900"}}),e._v(" "),r("em",[e._v("View Report URLs")])],1),e._v(" "),r("p",[e._v("Right-click "),r("code",[e._v("JSON")]),e._v(' and choose "Copy URL"')]),e._v(" "),r("p",[r("DocImage",{attrs:{src:a(1151),alt:"RaaS JSON URL",width:"1402",height:"1376"}}),e._v(" "),r("em",[e._v("Copy RaaS JSON URL")])],1),e._v(" "),r("p",[e._v("JSON endpoint example")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("https://wd2-impl-services1.workday.com/ccx/service/customreport2/workato/workato/Investors?format=json&Worker_Type!WID=d588c41a446c11de98360015c5e6daf6&Base_Pay=0\n")])])]),r("h2",{attrs:{id:"filter-parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#filter-parameters"}},[e._v("#")]),e._v(" Filter parameters")]),e._v(" "),r("p",[e._v("Prompts behave like request parameters. In the UI, it is presented as input fields before generating the actual report.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:a(1152),alt:"RaaS prompts",width:"1432",height:"619"}}),e._v(" "),r("em",[e._v("Raas prompts on Workday UI")])],1),e._v(" "),r("p",[e._v("As a REST endpoint, these prompts are passed as request parameters. To do so, you have to set the report type and configure prompts. You can also define filters for your prompts.")]),e._v(" "),r("h4",{attrs:{id:"report-type"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#report-type"}},[e._v("#")]),e._v(" Report type")]),e._v(" "),r("p",[e._v("Switch to advanced type if not already. Only Advanced custom reports can be used in RaaS.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:a(1153),alt:"RaaS change to advance",width:"1600",height:"784"}}),e._v(" "),r("em",[e._v("Use advanced report")])],1),e._v(" "),r("h4",{attrs:{id:"add-prompts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#add-prompts"}},[e._v("#")]),e._v(" Add prompts")]),e._v(" "),r("p",[e._v("Add all default prompts that are required of web-service-enabled reports. Add additional prompts as desired.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:a(1154),alt:"Add RaaS prompts",width:"1600",height:"799"}}),e._v(" "),r("em",[e._v("Add RaaS prompts")])],1),e._v(" "),r("p",[e._v("In this example, Base Pay is assigned to Prompt Qualifier as Prompt #1, which will be used in filters.")]),e._v(" "),r("h4",{attrs:{id:"add-filters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#add-filters"}},[e._v("#")]),e._v(" Add filters")]),e._v(" "),r("p",[e._v("Apply logic to filter prompt values.")]),e._v(" "),r("p",[e._v("Use values from Prompt to compare against report column values. Example, assign Prompt parameter Base Pay as Prompt #1.")]),e._v(" "),r("p",[r("DocImage",{attrs:{src:a(1155),alt:"Add RaaS filters",width:"1600",height:"413"}}),e._v(" "),r("em",[e._v("Add RaaS filters")])],1),e._v(" "),r("p",[e._v("When generating a report, Base Pay parameter will be checked. If a value is provided, only records with Base Pay greater than the provided value will be included in the report.")])])}),[],!1,null,null,null);t.default=s.exports}}]);