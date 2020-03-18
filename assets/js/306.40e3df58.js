(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{2258:function(t,e,s){"use strict";s.r(e);var r=s(0),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"sql-server-run-custom-sql-action"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sql-server-run-custom-sql-action"}},[t._v("#")]),t._v(" SQL Server - Run custom SQL action")]),t._v(" "),r("h2",{attrs:{id:"run-custom-sql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#run-custom-sql"}},[t._v("#")]),t._v(" Run custom SQL")]),t._v(" "),r("p",[t._v("This action lets you send a SQL string to the SQL Server instance to be executed. It can be used to execute Data Manipulation Language (DML) statements like "),r("code",[t._v("INSERT")]),t._v(", "),r("code",[t._v("UPDATE")]),t._v(", "),r("code",[t._v("SELECT")]),t._v(" and "),r("code",[t._v("DELETE")]),t._v(", as well as Data Definition Language (DDL) commands, like "),r("code",[t._v("CREATE")]),t._v(", "),r("code",[t._v("ALTER")]),t._v(" and "),r("code",[t._v("DROP")]),t._v(".")]),t._v(" "),r("p",[t._v("Unlike "),r("router-link",{attrs:{to:"/connectors/mssql/select.html#select-rows-using-custom-sql"}},[t._v("Select rows using custom SQL")]),t._v(", this action is not optimized for easy configuration. For "),r("code",[t._v("SELECT")]),t._v(" statements with large number of columns, use that action instead. Using custom SQL is a great way to improve recipe efficiency and balance load between Workato and your database. "),r("router-link",{attrs:{to:"/connectors/mssql/best-practices.html#when-to-use-custom-sql-and-stored-procedures-in-workato"}},[t._v("Find out more in our best practices section how to use custom SQL to make your recipes more efficient.")])],1),t._v(" "),r("p",[r("strong",[t._v("This action requires a connection using OPA version 2.4.3 or newer.")])]),t._v(" "),r("p",[r("DocImage",{attrs:{src:s(679),alt:"Run custom SQL action",width:"1000",height:"986"}}),t._v(" "),r("em",[t._v("Run custom SQL action")])],1),t._v(" "),r("h3",{attrs:{id:"input-fields"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),r("table",{staticClass:"unchanged rich-diff-level-one"},[r("thead",[r("tr",[r("th",{attrs:{width:"25%"}},[t._v("Input field")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("SQL")]),t._v(" "),r("td",[r("p",[r("b",[t._v("This field is required")]),t._v(". Provide a valid SQL string to be executed. This SQL string will be executed in your SQL Server instance.")]),t._v(" "),r("p",[t._v("If multiple SQL statements are provided, all of them will be executed. However, only results from the last statement will be returned. Make sure each statement is separated by a "),r("code",[t._v(";")]),t._v(" character.")]),t._v(" "),r("p",[t._v("You can map datapills here to execute dynamically changing SQL statements. Remember to wrap datapills in quotes ("),r("code",[t._v("''")]),t._v(").")])])]),t._v(" "),r("tr",[r("td",[t._v("Output fields")]),t._v(" "),r("td",[r("p",[t._v("Use this input to describe the columns that you are expecting from your SQL statement.")]),t._v(" "),r("p",[t._v("If you do not expect any return values or do not need any, you may ignore this input field.")])])])])]),t._v(" "),r("h3",{attrs:{id:"output-fields"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[t._v("#")]),t._v(" Output fields")]),t._v(" "),r("table",{staticClass:"unchanged rich-diff-level-one"},[r("thead",[r("tr",[r("th",{attrs:{width:"25%"}},[t._v("Input field")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Rows")]),t._v(" "),r("td",[r("p",[t._v("List of rows returned from the SQL execution. The fields in this list are defined by the "),r("b",[t._v("Output fields")]),t._v(" input field.")]),t._v(" "),r("p",[t._v("If left blank, this row will be available in the datatree as an array datapill.")])])]),t._v(" "),r("tr",[r("td",[t._v("Rows affected")]),t._v(" "),r("td",[r("p",[t._v("This is an integer value indicating the number of rows inserted/updated/deleted from the SQL string.")]),t._v(" "),r("p",[t._v("When executing "),r("code",[t._v("SELECT")]),t._v(" statements, this will return "),r("code",[t._v("nil")]),t._v(".")]),t._v(" "),r("p",[t._v("When executing a DDL (for example, creating a table), the value "),r("code",[t._v("0")]),t._v(" will be returned.")])])])])]),t._v(" "),r("h3",{attrs:{id:"limitations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#limitations"}},[t._v("#")]),t._v(" Limitations")]),t._v(" "),r("p",[t._v("There is a size limit of "),r("code",[t._v("1000")]),t._v(" rows when your custom SQL statement returns data.")]),t._v(" "),r("h2",{attrs:{id:"next-steps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next steps")]),t._v(" "),r("p",[t._v("Learn more about the other triggers and actions Workato has to offer for SQL server")]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/connectors/mssql/new-row-trigger.html"}},[t._v("New row trigger")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/mssql/updated-row-trigger.html"}},[t._v("New/updated row trigger")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/mssql/select.html"}},[t._v("Select actions")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/mssql/insert.html"}},[t._v("Insert actions")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/mssql/update.html"}},[t._v("Update actions")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/mssql/upsert.html"}},[t._v("Upsert actions")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/mssql/delete.html"}},[t._v("Delete actions")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/mssql/stored-procedure.html"}},[t._v("Execute stored procedure")])],1)]),t._v(" "),r("p",[t._v("Or get busy building your recipes now! Check out our")]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/connectors/mssql/best-practices.html"}},[t._v("Best practices")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/database-common-use-cases.html"}},[t._v("Use cases")])],1)])])}),[],!1,null,null,null);e.default=o.exports},679:function(t,e,s){t.exports=s.p+"assets/img/run_sql.cf07356e.png"}}]);