(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{2286:function(e,t,i){"use strict";i.r(t);var s=i(0),l=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"on-prem-files-new-line-in-csv-file-trigger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on-prem-files-new-line-in-csv-file-trigger"}},[e._v("#")]),e._v(" On-prem files - New line in CSV file trigger")]),e._v(" "),s("p",[e._v("This trigger picks up new lines added to the end of a selected CSV file. Each line is processed as a separate job.")]),e._v(" "),s("p",[e._v("When the recipe is first started, the trigger will pick up all existing lines in the selected CSV file. Subsequently, each new line added to the end of the file will be processed as a new job. This trigger checks for new lines once every poll interval.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:i(773),alt:"New line in CSV file trigger",width:"2206",height:"1507"}}),e._v(" "),s("em",[e._v("New line in CSV file trigger")])],1),e._v(" "),s("h2",{attrs:{id:"input-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[e._v("#")]),e._v(" Input fields")]),e._v(" "),s("table",{staticClass:"unchanged rich-diff-level-one"},[s("thead",[s("tr",[s("th",{attrs:{width:"25%"}},[e._v("Input field")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("CSV file")]),e._v(" "),s("td",[e._v("\n        First, select a CSV file to process lines from. This CSV file must have a header line. The value of each column in the header will be used to generate the output schema of the trigger.\n      ")])]),e._v(" "),s("tr",[s("td",[e._v("Column delimiter")]),e._v(" "),s("td",[e._v("\n        Next, select a column delimiter for this selected CSV file. The delimiters available are: comma, semicolon, space and tab.\n      ")])])])]),e._v(" "),s("h2",{attrs:{id:"output-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[e._v("#")]),e._v(" Output fields")]),e._v(" "),s("table",{staticClass:"unchanged rich-diff-level-one"},[s("thead",[s("tr",[s("th",{attrs:{width:"25%"}},[e._v("Output field")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("Line number")]),e._v(" "),s("td",[e._v("Line number of the line currently being processed. Header lines are not processed, so the first line has the value 1.")])]),e._v(" "),s("tr",[s("td",[e._v("Columns")]),e._v(" "),s("td",[e._v("This is an object type datapill. Columns of the selected CSV file will be available as datapills here.")])])])])])}),[],!1,null,null,null);t.default=l.exports},773:function(e,t,i){e.exports=i.p+"assets/img/new-line-trigger.f95af494.png"}}]);