(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{2313:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"postgresql-new-row-triggers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postgresql-new-row-triggers"}},[t._v("#")]),t._v(" PostgreSQL - New row triggers")]),t._v(" "),a("h2",{attrs:{id:"new-row"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-row"}},[t._v("#")]),t._v(" New row")]),t._v(" "),a("p",[t._v("This trigger picks up rows that are inserted in the selected table or view. Each row is processed as a separate job. It checks for new rows once every poll interval.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:s(835),alt:"New row trigger",width:"2127",height:"1490"}}),t._v(" "),a("em",[t._v("New row trigger")])],1),t._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{width:"25%"}},[t._v("Input field")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"#table"}},[t._v("Table")])]),t._v(" "),a("td",[t._v("\n        First, select a table/view to process rows from.\n      ")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#unique-key"}},[t._v("Unique key")])]),t._v(" "),a("td",[t._v("\n        Next, select a unique key column to uniquely identify rows. This list of columns are generated from the selected table/view.\n      ")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#where-condition"}},[t._v("WHERE condition")])]),t._v(" "),a("td",[t._v("\n        Finally, provide an optional "),a("code",[t._v("WHERE")]),t._v(" condition to filter rows.\n      ")])])])]),t._v(" "),a("h2",{attrs:{id:"new-batch-of-rows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-batch-of-rows"}},[t._v("#")]),t._v(" New batch of rows")]),t._v(" "),a("p",[t._v("This trigger picks up rows that are inserted in the selected table or view. These rows are processed as a batch of rows for each job. This batch size can be configured in the trigger input. It checks for new rows once every poll interval.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:s(836),alt:"New batch of rows trigger",width:"2130",height:"1813"}}),t._v(" "),a("em",[t._v("New batch of rows trigger")])],1),t._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{width:"25%"}},[t._v("Input field")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"#table"}},[t._v("Table")])]),t._v(" "),a("td",[t._v("\n        First, select a table/view to process rows from.\n      ")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#unique-key"}},[t._v("Unique key")])]),t._v(" "),a("td",[t._v("\n        Next, select a unique key column to uniquely identify rows. This list of columns are generated from the selected table/view.\n      ")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#batch-size"}},[t._v("Batch size")])]),t._v(" "),a("td",[t._v("\n        Next, configure the batch size to process in each individual job for this recipe.\n      ")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#where-condition"}},[t._v("WHERE condition")])]),t._v(" "),a("td",[t._v("\n        Finally, provide an optional "),a("code",[t._v("WHERE")]),t._v(" condition to filter rows.\n      ")])])])]),t._v(" "),a("h2",{attrs:{id:"input-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),a("h3",{attrs:{id:"table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[t._v("#")]),t._v(" Table")]),t._v(" "),a("p",[t._v("Select the table/view to process rows from. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.")]),t._v(" "),a("h3",{attrs:{id:"unique-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unique-key"}},[t._v("#")]),t._v(" Unique key")]),t._v(" "),a("p",[t._v("Values from this selected column is used to deduplicate rows in the selected table, making sure that the same row is not processed twice in the same recipe.")]),t._v(" "),a("p",[t._v("As such, the values in the selected column should not be repeated in your table. Typically, this column is the primary key of the table (e.g. "),a("code",[t._v("ID")]),t._v("). It should be incremental and sortable. This column can also be indexed for better performance.")]),t._v(" "),a("p",[t._v("Only columns that have "),a("strong",[t._v("PRIMARY KEY")]),t._v(" or "),a("strong",[t._v("UNIQUE")]),t._v(" constraints can be used. Run this SQL query to find out which columns fulfill this requirement.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("column_name\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" information_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key_column_usage "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" c\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LEFT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" information_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table_constraints "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" t\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constraint_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constraint_name\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v("\n  t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table_schema "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'schema_name'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v("\n  t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'table_name'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v("\n  t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constraint_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PRIMARY KEY'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UNIQUE'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ordinal_position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"batch-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#batch-size"}},[t._v("#")]),t._v(" Batch size")]),t._v(" "),a("p",[t._v("Batch size of rows to return in each job. This can be any number between "),a("strong",[t._v("1")]),t._v(" and the maximum batch size. Maximum batch size is "),a("strong",[t._v("100")]),t._v(" and default is "),a("strong",[t._v("100")]),t._v(".")]),t._v(" "),a("p",[t._v("In any given poll, if there are less rows than the configured batch size, this trigger will deliver all rows as a smaller batch.")]),t._v(" "),a("h3",{attrs:{id:"where-condition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-condition"}},[t._v("#")]),t._v(" WHERE condition")]),t._v(" "),a("p",[t._v("This condition is used to filter rows based on one or more column values.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'closed'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" priority "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n")])])]),a("p",[t._v("Leave blank to process all rows from the selected table.")]),t._v(" "),a("p",[t._v("Complex "),a("code",[t._v("WHERE")]),t._v(" conditions with subqueries can also be used. Refer to the "),a("router-link",{attrs:{to:"/connectors/postgresql.html#where-condition"}},[t._v("WHERE condition")]),t._v(" guide for more information.")],1)])}),[],!1,null,null,null);e.default=r.exports},835:function(t,e,s){t.exports=s.p+"assets/img/new-row-trigger.5fef63e4.png"},836:function(t,e,s){t.exports=s.p+"assets/img/new-batch-of-rows-trigger.f3f709e3.png"}}]);