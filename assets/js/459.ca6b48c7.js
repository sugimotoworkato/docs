(window.webpackJsonp=window.webpackJsonp||[]).push([[459],{2204:function(t,e,i){"use strict";i.r(e);var r=i(0),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"dropbox-trigger-new-updated-csv-file-in-directory"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#dropbox-trigger-new-updated-csv-file-in-directory"}},[t._v("#")]),t._v(" Dropbox trigger - New/updated CSV file in directory")]),t._v(" "),i("p",[t._v("Triggers when a new CSV file is added or existing CSV file is updated in a specified folder. New and updated CSV files in subfolders will also be picked up.")]),t._v(" "),i("h2",{attrs:{id:"input-fields"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Field name")]),t._v(" "),i("th",[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("When first started, this recipe should pick up events from")]),t._v(" "),i("td",[t._v("When you start recipe for the first time, it picks up CSV files modified from this specified date and time. Defaults to fetching CSV files created/updated an hour ago if left blank. Once recipe has been run or tested, value cannot be changed. "),i("router-link",{attrs:{to:"/recipes/triggers.html#since-from"}},[t._v("Learn more about this field here.")])],1)]),t._v(" "),i("tr",[i("td",[t._v("Folder / Folder path")]),t._v(" "),i("td",[t._v("The folder to monitor for new/updated CSV files. Sub-folders will also be monitored.")])]),t._v(" "),i("tr",[i("td",[t._v("Column delimiter")]),t._v(" "),i("td",[t._v("The character used to separate column values in your CSV file.")])]),t._v(" "),i("tr",[i("td",[t._v("Batch size")]),t._v(" "),i("td",[t._v("Number of CSV rows to process per batch. Instead of reading rows one by one, Workato reads a batch of CSV rows at a time to increase throughput. "),i("router-link",{attrs:{to:"/features/batch-processing.html"}},[t._v("Learn more about batch processing")]),t._v(".")],1)]),t._v(" "),i("tr",[i("td",[t._v("Obtain a direct URL to file?")]),t._v(" "),i("td",[t._v("Generate a public URL that lives for 4 hours. This URL can be obtained from the "),i("code",[t._v("URL")]),t._v(" data pill in the trigger output.")])]),t._v(" "),i("tr",[i("td",[t._v("Add column names manually?")]),t._v(" "),i("td",[t._v("Set column names manually. Otherwise the first row of the latest CSV file in the selected folder will be taken to get column names.")])]),t._v(" "),i("tr",[i("td",[t._v("Column names")]),t._v(" "),i("td",[t._v("Enter CSV column names, each on a new line. By default, the column names of the latest CSV file in your selected folder will be retrieved.")])])])]),t._v(" "),i("h2",{attrs:{id:"output-fields"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[t._v("#")]),t._v(" Output fields")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Field name")]),t._v(" "),i("th",[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("Path")]),t._v(" "),i("td",[t._v("File path.")])]),t._v(" "),i("tr",[i("td",[t._v("Bytes")]),t._v(" "),i("td",[t._v("File size in bytes.")])]),t._v(" "),i("tr",[i("td",[t._v("Size")]),t._v(" "),i("td",[t._v("File size in string format.")])]),t._v(" "),i("tr",[i("td",[t._v("Mime type")]),t._v(" "),i("td",[t._v("The Mime type of this file.")])]),t._v(" "),i("tr",[i("td",[t._v("URL")]),t._v(" "),i("td",[t._v("File's public URL. Can be used to download file using "),i("router-link",{attrs:{to:"/features/utilities.html#download-file-from-url"}},[t._v("Workato Utility connector")]),t._v(".")],1)]),t._v(" "),i("tr",[i("td",[t._v("URL expires")]),t._v(" "),i("td",[t._v("Date/time the file's public URL will expire.")])]),t._v(" "),i("tr",[i("td",[t._v("Rev")]),t._v(" "),i("td",[t._v("A unique identifier for the current revision of the file.")])]),t._v(" "),i("tr",[i("td",[t._v("Modified")]),t._v(" "),i("td",[t._v("Date/time the file was last modified.")])]),t._v(" "),i("tr",[i("td",[t._v("Client modified time")]),t._v(" "),i("td",[t._v("This is the modification time set by the desktop client when the file was added to Dropbox. Since this time is not verified (the Dropbox server stores whatever the desktop client sends up), this should only be used for display purposes (such as sorting) and not, for example, to determine if a file has changed or not.")])]),t._v(" "),i("tr",[i("td",[t._v("Is directory")]),t._v(" "),i("td",[t._v("Whether this is a directory/folder.")])]),t._v(" "),i("tr",[i("td",[t._v("Read only")]),t._v(" "),i("td",[t._v("Whether this file is read only.")])]),t._v(" "),i("tr",[i("td",[t._v("Modifier")]),t._v(" "),i("td",[t._v("The user who modified this file.")])]),t._v(" "),i("tr",[i("td",[t._v("Content hash")]),t._v(" "),i("td",[t._v("A hash of the file content. This field can be used to verify data integrity. For more information see "),i("a",{attrs:{href:"https://www.dropbox.com/developers/reference/content-hash",target:"_blank",rel:"noopener noreferrer"}},[t._v("Box's  Content hash page"),i("OutboundLink")],1),t._v(".")])]),t._v(" "),i("tr",[i("td",[t._v("Thumb exists")]),t._v(" "),i("td",[t._v("Whether thumbnail exists.")])]),t._v(" "),i("tr",[i("td",[t._v("Icon")]),t._v(" "),i("td",[t._v("String contents of file icon.")])]),t._v(" "),i("tr",[i("td",[t._v("First batch")]),t._v(" "),i("td",[t._v("Whether this is the first batch of CSV lines.")])]),t._v(" "),i("tr",[i("td",[t._v("Last batch")]),t._v(" "),i("td",[t._v("Whether this is the first batch of CSV lines.")])]),t._v(" "),i("tr",[i("td",[t._v("Lines")]),t._v(" "),i("td",[t._v("A "),i("router-link",{attrs:{to:"/features/list-management.html"}},[t._v("list data pill")]),t._v(" representing the list of CSV lines. Can be used with "),i("router-link",{attrs:{to:"/recipes/steps.html#repeat-step"}},[t._v("Repeat step")]),t._v(" to loop through the CSV lines.")],1)]),t._v(" "),i("tr",[i("td",[t._v("- Line")]),t._v(" "),i("td",[t._v("The CSV line number.")])]),t._v(" "),i("tr",[i("td",[t._v("- Columns")]),t._v(" "),i("td",[t._v("Contains the CSV columns' values in this CSV line.")])]),t._v(" "),i("tr",[i("td",[t._v("- List size")]),t._v(" "),i("td",[t._v("Total number of CSV lines.")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);