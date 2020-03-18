(window.webpackJsonp=window.webpackJsonp||[]).push([[428],{1467:function(t,e,i){t.exports=i.p+"assets/img/streaming-illustration.4ff99189.png"},2559:function(t,e,i){"use strict";i.r(e);var a=i(0),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"file-streaming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-streaming"}},[t._v("#")]),t._v(" File Streaming")]),t._v(" "),a("p",[t._v("File streaming is the concept of reading and writing a file in smaller parts (chunks) in sequence. This allows us to transfer large files between apps or file systems without worrying about hitting the size limit of the sending and receiving systems. A common example is transferring records from a shared file system (SFTP) to a file hosting platform for analysis (Amazon S3).")]),t._v(" "),a("h2",{attrs:{id:"how-it-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[t._v("#")]),t._v(" How it works")]),t._v(" "),a("p",[t._v("When transferring a file from a source app to a destination app, Workato splits the file into smaller chunks and downloads them. These chunks are then uploaded to the destination app in separate requests. This allows us to stay within the size limit of both apps, regardless of the total size of the original file.")]),t._v(" "),a("p",[t._v("The following diagram illustrates how this works:")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:i(1467),alt:"File streaming",width:"3270",height:"1014"}})],1),t._v(" "),a("p",[t._v("As a result, Workato is able to transfer files of any size between apps that support streaming.")]),t._v(" "),a("h2",{attrs:{id:"how-to-use-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-it"}},[t._v("#")]),t._v(" How to use it")]),t._v(" "),a("p",[t._v("File streaming is supported only if both the source download and destination upload actions support this feature. It is automatically initiated when you map a "),a("kbd",[t._v("File contents")]),t._v(" datapill (from the source app) to a "),a("strong",[t._v("File contents")]),t._v(" input field (of the destination app).")]),t._v(" "),a("p",[t._v("If either the source datapill or the destination input field does not support streaming, then standard data mapping is performed, i.e. the entire file is downloaded and then uploaded without any chunking. In this case, the file transfer is limited by the size limit imposed by the respective apps. The smaller of the 2 will be the resultant limit.")]),t._v(" "),a("p",[t._v("In either case, no additional configuration is required in the recipe.")]),t._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{rowspan:"2"}},[t._v("Connector")]),t._v(" "),a("th",{attrs:{colspan:"2"}},[t._v("Triggers/Actions that support  file streaming")])]),t._v(" "),a("tr",[a("th",[t._v("Download")]),t._v(" "),a("th",[t._v("Upload")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Amazon S3")]),t._v(" "),a("td",[a("li",[t._v("New file trigger")]),t._v(" "),a("li",[t._v("Download file action")])]),t._v(" "),a("td",[a("li",[t._v("Upload file action")])])]),t._v(" "),a("tr",[a("td",[t._v("Anaplan")]),t._v(" "),a("td",[a("li",[t._v("Download file action")])]),t._v(" "),a("td",[a("li",[t._v("Upload file action")])])]),t._v(" "),a("tr",[a("td",[t._v("Box")]),t._v(" "),a("td",[a("li",[t._v("Download file action")])]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Microsoft Sharepoint")]),t._v(" "),a("td"),t._v(" "),a("td",[a("li",[t._v("Upload file to folder action")])])]),t._v(" "),a("tr",[a("td",[t._v("On-prem files")]),t._v(" "),a("td",[a("li",[t._v("New file in folder trigger")]),t._v(" "),a("li",[t._v("Download file action")])]),t._v(" "),a("td",[a("li",[t._v("Upload file action")])])]),t._v(" "),a("tr",[a("td",[t._v("Quickbase")]),t._v(" "),a("td"),t._v(" "),a("td",[a("li",[t._v("Create and update records in bulk from CSV file action")])])]),t._v(" "),a("tr",[a("td",[t._v("Salesforce")]),t._v(" "),a("td"),t._v(" "),a("td",[a("li",[t._v("Insert object in bulk from CSV file action")]),t._v(" "),a("li",[t._v("Update object in bulk from CSV file action")]),t._v(" "),a("li",[t._v("Upsert object in bulk from CSV file action")])])]),t._v(" "),a("tr",[a("td",[t._v("SFTP")]),t._v(" "),a("td"),t._v(" "),a("td",[a("li",[t._v("Upload file action")])])])])]),t._v(" "),a("p",[a("em",[t._v("Table of all current triggers/actions that support file streaming.")])]),t._v(" "),a("p",[t._v("This "),a("a",{attrs:{href:"https://www.workato.com/recipes/867852#recipe",target:"_blank",rel:"noopener noreferrer"}},[t._v("sample recipe"),a("OutboundLink")],1),t._v(" transfers files from an On-prem file system to Amazon S3 with file streaming.")])])}),[],!1,null,null,null);e.default=o.exports}}]);