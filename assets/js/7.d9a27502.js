(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1036:function(t,e,a){t.exports=a.p+"assets/img/slack-connection.b555a747.gif"},1037:function(t,e,a){t.exports=a.p+"assets/img/post-message-basic-example.177bd194.png"},1038:function(t,e,a){t.exports=a.p+"assets/img/post-message-advanced-example.38bd64bf.png"},1039:function(t,e,a){t.exports=a.p+"assets/img/post-advanced-message-config.35a2b4d2.png"},1040:function(t,e,a){t.exports=a.p+"assets/img/buttons-display.5031d5bc.png"},1041:function(t,e,a){t.exports=a.p+"assets/img/interacting-with-normal-button.4a75dc42.gif"},1042:function(t,e,a){t.exports=a.p+"assets/img/interacting-with-danger-button.ea8d7110.gif"},1043:function(t,e,a){t.exports=a.p+"assets/img/popup-prompt-example.a21256b3.png"},1044:function(t,e,a){t.exports=a.p+"assets/img/button-config.52924676.png"},1045:function(t,e,a){t.exports=a.p+"assets/img/button-action-datatree-output.9067596a.png"},1046:function(t,e,a){t.exports=a.p+"assets/img/button-action-output-data.19684e57.png"},1047:function(t,e,a){t.exports=a.p+"assets/img/post-notification-and-buttons-separately.45bf13b4.png"},1048:function(t,e,a){t.exports=a.p+"assets/img/respond-to-button-action-replace-original.ee595959.gif"},1049:function(t,e,a){t.exports=a.p+"assets/img/notify-sales-thread.7f7d130f.png"},1050:function(t,e,a){t.exports=a.p+"assets/img/notify-sales-thread-config.f58b4ccf.png"},150:function(t,e,a){t.exports=a.p+"assets/img/button-action-example-recipe.6c80a9d0.png"},151:function(t,e,a){t.exports=a.p+"assets/img/respond-to-button-action-example-recipe.42f8f00c.png"},152:function(t,e,a){t.exports=a.p+"assets/img/respond-to-button-action-config.6447ebd2.png"},153:function(t,e,a){t.exports=a.p+"assets/img/notify-bd-thread.737c4ce4.png"},154:function(t,e,a){t.exports=a.p+"assets/img/posting-to-existing-thread-via-parent-id.a85e3c4d.gif"},2376:function(t,e,a){"use strict";a.r(e);var o=a(0),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"slack"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#slack"}},[t._v("#")]),t._v(" Slack")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://slack.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Slack"),o("OutboundLink")],1),t._v(" is a team collaboration platform that consolidates your team's communication and resources.")]),t._v(" "),o("p",[t._v("Workato allows you to connect Slack with the enterprise and productivity apps used across your organization. Transform your team's conversations into automated tasks in those apps - all without leaving your Slack workspace.")]),t._v(" "),o("h2",{attrs:{id:"slack-connector-vs-workbot-for-slack-connector"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#slack-connector-vs-workbot-for-slack-connector"}},[t._v("#")]),t._v(" Slack connector VS Workbot for Slack connector")]),t._v(" "),o("p",[t._v("Workato supports both the Slack connector and the Workbot for Slack connector.")]),t._v(" "),o("p",[t._v("If you're a Slack administrator (or part of an administrative team) that needs to automate workflows on a workspace-level, then the Slack connector is what you need. Using the Slack connector, you can subscribe to workspace-level events and and manage channels, groups and more. For example you can automate the creation, naming, purpose, and invitees of private Slack channels (typically between members from Customer Success and customers), triggered by a ticket escalation in Jira.")]),t._v(" "),o("p",[t._v("Workbot is a bot user. A bot user, like a human user, must be invited to channels before it can respond to other users. Workbot is primarily used to automate workflows specifically for users who command it to do so. If you envision a virtual assistant which your team can command to perform complex tasks specifically for them, go for Workbot.")]),t._v(" "),o("p",[t._v("A functional comparison table for both the Slack connector and the Workbot for Slack connector can be found "),o("router-link",{attrs:{to:"/workbot/workbot.html#slack-connector-vs-workbot-for-slack-connector"}},[t._v("here")]),t._v(".")],1),t._v(" "),o("h2",{attrs:{id:"api-version"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#api-version"}},[t._v("#")]),t._v(" API version")]),t._v(" "),o("p",[t._v("The Slack connector uses the "),o("a",{attrs:{href:"https://api.slack.com/web",target:"_blank",rel:"noopener noreferrer"}},[t._v("Slack Web API"),o("OutboundLink")],1),t._v(" with the endpoint URLs "),o("code",[t._v("https://slack.com/api/METHOD")]),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"supported-editions-and-versions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#supported-editions-and-versions"}},[t._v("#")]),t._v(" Supported editions and versions")]),t._v(" "),o("p",[t._v("Workato connects to to both Slack for Teams (for single workspaces) and Slack Enterprise Grid (for multiple workspaces).")]),t._v(" "),o("h2",{attrs:{id:"how-to-connect-to-slack-on-workato"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-connect-to-slack-on-workato"}},[t._v("#")]),t._v(" How to connect to Slack on Workato")]),t._v(" "),o("p",[t._v("Authorize Workato to access your Slack organization via the OAuth2 standard. This will require you to login to Slack and authorize the permissions that Workato requests.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(1036),alt:"Configuring Slack connection",width:"892",height:"540"}}),t._v(" "),o("em",[t._v("Setting up the Slack connection")])],1),t._v(" "),o("h2",{attrs:{id:"working-with-the-slack-connector"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#working-with-the-slack-connector"}},[t._v("#")]),t._v(" Working with the Slack connector")]),t._v(" "),o("h3",{attrs:{id:"using-the-post-message-action"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-the-post-message-action"}},[t._v("#")]),t._v(" Using the post message action")]),t._v(" "),o("p",[t._v("The "),o("strong",[t._v("Post message")]),t._v(" action can be used to post a message to a channel or a direct message to a Slack user. By default, the message will be posted as the Workato app, but it can be configured to post under another name and corresponding icon image.")]),t._v(" "),o("h4",{attrs:{id:"example-message-with-attachment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-message-with-attachment"}},[t._v("#")]),t._v(" Example message with attachment")]),t._v(" "),o("p",[t._v("The following shows an example of how the different fields show up in Slack. As the "),o("strong",[t._v("Post message as")]),t._v(" and "),o("strong",[t._v("Icon image URL")]),t._v(" input fields have not been configured, the message displays as being posted by the Workato app.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(1037),alt:"Post message example with attachment",width:"1452",height:"726"}}),t._v(" "),o("em",[t._v("Basic example of the post message action with attachment")])],1),t._v(" "),o("p",[t._v("The corresponding configuration of the action step can be seen below. In addition, the "),o("strong",[t._v("Message type")]),t._v(" has been configured to "),o("strong",[t._v("Good")]),t._v(".")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(261),alt:"Post message basic configuration 1",width:"1494",height:"1108"}})],1),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(262),alt:"Post message basic configuration 2",width:"1490",height:"854"}}),t._v(" "),o("em",[t._v("Post message action configuration - message with attachment. "),o("a",{attrs:{href:"https://www.workato.com/recipes/604131",target:"_blank",rel:"noopener noreferrer"}},[t._v("Example recipe"),o("OutboundLink")],1)])],1),t._v(" "),o("h4",{attrs:{id:"example-message-with-attachment-customized-app-name-and-images"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-message-with-attachment-customized-app-name-and-images"}},[t._v("#")]),t._v(" Example message with attachment, customized app name and images")]),t._v(" "),o("p",[t._v("The following shows an example of how the different fields show up in Slack. As the "),o("strong",[t._v("Post message as")]),t._v(" and "),o("strong",[t._v("Icon image URL")]),t._v(" input fields have been configured to have the value of "),o("strong",[t._v("Workato Chatbot")]),t._v(" and the "),o("a",{attrs:{href:"https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2017-04-11/168463184839_7e90d40c4856fdda4c19_512.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("Workbot icon"),o("OutboundLink")],1),t._v(", the message displays as being posted by "),o("strong",[t._v("Workato Chatbot")]),t._v(" with the Workbot icon.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(1038),alt:"Post message example with attachment, customized app name and images",width:"1452",height:"861"}}),t._v(" "),o("em",[t._v("Example of the post message action with attachment, customized app name and images")])],1),t._v(" "),o("p",[t._v("The corresponding configuration of the action step can be seen below.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(261),alt:"Post message advanced configuration 1",width:"1494",height:"1108"}})],1),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(262),alt:"Post message advanced configuration 2",width:"1490",height:"854"}})],1),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(1039),alt:"Post message advanced configuration 2",width:"1498",height:"1222"}}),t._v(" "),o("em",[t._v("Post message action configuration - message with attachment, customized app name and images. "),o("a",{attrs:{href:"https://www.workato.com/recipes/604145",target:"_blank",rel:"noopener noreferrer"}},[t._v("Example recipe"),o("OutboundLink")],1)])],1),t._v(" "),o("h3",{attrs:{id:"using-slack-message-buttons"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-slack-message-buttons"}},[t._v("#")]),t._v(" Using Slack message buttons")]),t._v(" "),o("p",[t._v("You can interact with messages in Slack via "),o("a",{attrs:{href:"https://api.slack.com/docs/message-buttons",target:"_blank",rel:"noopener noreferrer"}},[t._v("Slack buttons"),o("OutboundLink")],1),t._v(". To use Slack buttons in Slack, you need:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("A recipe with a "),o("strong",[t._v("Post message")]),t._v(" action that has buttons configured. This recipe needs to specifically refer to the second recipe below in its button configuration.")])]),t._v(" "),o("li",[o("p",[t._v("A button action handler recipe - a recipe with a "),o("strong",[t._v("New button action")]),t._v(" trigger, which picks up button clicks. In the actions, there should be recipe logic that carries out actions depending on which button has been clicked.")])])]),t._v(" "),o("p",[t._v("There are 2 ways we can build interactive Slack buttons recipes, either "),o("a",{attrs:{href:"#using-if-conditions-to-build-interactive-slack-buttons-recipes"}},[t._v("via IF conditions")]),t._v(", or "),o("a",{attrs:{href:"#using-slack-respond-to-button-action-to-build-interactive-slack-buttons-recipes"}},[t._v("via the Slack action "),o("strong",[t._v("Respond to button")])]),t._v(".")]),t._v(" "),o("h4",{attrs:{id:"using-if-conditions-to-build-interactive-slack-buttons-recipes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-if-conditions-to-build-interactive-slack-buttons-recipes"}},[t._v("#")]),t._v(" Using IF conditions to build interactive Slack buttons recipes")]),t._v(" "),o("p",[t._v("Possible use cases for building your recipe via IF conditional recipe steps would be scenarios whereby you're okay with multiple clicks of the buttons, such as team polls.")]),t._v(" "),o("h5",{attrs:{id:"example-recipe-1a-recipe-with-a-post-message-action-with-buttons-configured"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-recipe-1a-recipe-with-a-post-message-action-with-buttons-configured"}},[t._v("#")]),t._v(" Example recipe #1A: recipe with a post message action with buttons configured")]),t._v(" "),o("p",[t._v("We're going to add buttons configuration to the "),o("a",{attrs:{href:"https://www.workato.com/recipes/604131",target:"_blank",rel:"noopener noreferrer"}},[t._v("basic recipe"),o("OutboundLink")],1),t._v(" we had "),o("a",{attrs:{href:"#example-message-with-attachment"}},[t._v("above")]),t._v(". The recipe we will be using can be found "),o("a",{attrs:{href:"https://www.workato.com/recipes/604149",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[t._v("The buttons configured in this recipe show up in Slack as follows.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(1040),alt:"Button display",width:"1015",height:"622"}}),t._v(" "),o("em",[t._v("Corresponding buttons generated from the above configuration")])],1),t._v(" "),o("h6",{attrs:{id:"button-styles-danger-and-non-danger"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#button-styles-danger-and-non-danger"}},[t._v("#")]),t._v(" Button styles: danger and non-danger")]),t._v(" "),o("p",[t._v("There are two available styles for buttons - non-danger and danger style. The non-danger styled buttons, once clicked, records the button click immediately and triggers the second recipe with the "),o("strong",[t._v("New button action")]),t._v(" trigger.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(1041),alt:"Interacting with non-danger style button",width:"960",height:"484"}}),t._v(" "),o("em",[t._v("Interacting with non-danger styled button")])],1),t._v(" "),o("p",[t._v("The danger styled buttons, when clicked, generates a popup prompt that asks the Slack user for confirmation of their click.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(1042),alt:"Interacting with danger style button",width:"960",height:"488"}}),t._v(" "),o("em",[t._v("Interacting with danger styled button")])],1),t._v(" "),o("p",[t._v("The prompt that pops up can be completely configured in the button configuration in the Slack action "),o("strong",[t._v("Post message")]),t._v(".")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(1043),alt:"Popup prompt example",width:"2548",height:"552"}}),t._v(" "),o("em",[t._v("Popup prompt")])],1),t._v(" "),o("h6",{attrs:{id:"button-definitions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#button-definitions"}},[t._v("#")]),t._v(" Button definitions")]),t._v(" "),o("p",[t._v("The button configuration for both button styles is in the following screenshot. We're calling a recipe we have pre-built: "),o("a",{attrs:{href:"https://www.workato.com/recipes/602058",target:"_blank",rel:"noopener noreferrer"}},[o("strong",[t._v("New Salesforce account button response recipe - Notify BizDev & Notify Sales")]),o("OutboundLink")],1),t._v(". All recipes with the Slack trigger "),o("strong",[t._v("New button action")]),t._v(" should show up in this picklist - select the recipe you have built to respond to this particular set of buttons.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(1044),alt:"Button configuration for action",width:"1680",height:"564"}}),t._v(" "),o("em",[t._v("Button configuration for post message action step")])],1),t._v(" "),o("p",[t._v("The following is the button configuration we used in the recipe. For non-danger styled actions, only the first 2 parameters need to be filled in, as there is no popup prompt generated. For danger styled actions, all 7 parameters need to be filled in.")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("Notify BizDev, bd, , , , ,\nNotify Sales, sales, danger, Confirm, Are you sure?, Yes, Cancel\n")])])]),o("p",[t._v("The above button configuration follows this format for button actions:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("action name, action ID, style, confirmation title, confirmation text, ok button title, dismiss button title\n")])])]),o("p",[t._v("The following is an elaboration on each field in the definition of a button.")]),t._v(" "),o("table",{staticClass:"unchanged rich-diff-level-one"},[o("tbody",[o("tr",[o("th",[t._v("Button definition input fields")]),t._v(" "),o("th",[t._v("Description")])]),t._v(" "),o("tr",[o("td",[t._v("Action name")]),t._v(" "),o("td",[t._v("Button label visible to Slack user interacting with the buttons.")])]),t._v(" "),o("tr",[o("td",[t._v("Action ID")]),t._v(" "),o("td",[t._v("\n              Internal value of the button. This needs to be unique. Not visible on Slack to anyone.\n            ")])]),t._v(" "),o("tr",[o("td",[t._v("Style")]),t._v(" "),o("td",[t._v("\n            Leave this field as well as the remaining 4 fields blank for non-danger styled actions since no pop-up will be generated."),o("br"),t._v(" Otherwise, put "),o("b",[t._v("danger")]),t._v(" to generate a red button with a pop-up prompt, requiring the user to confirm the button click. You will then need to fill up the rest of the fields too.\n            ")])]),t._v(" "),o("tr",[o("td",[t._v("Confirmation title")]),t._v(" "),o("td",[t._v("\n              Shows up in the popup prompt as the header.\n            ")])]),t._v(" "),o("tr",[o("td",[t._v("Confirmation text")]),t._v(" "),o("td",[t._v("\n              Shows up in the popup prompt as the body text.\n            ")])]),t._v(" "),o("tr",[o("td",[t._v("Ok button title")]),t._v(" "),o("td",[t._v("\n              Button label in the popup prompt to confirm the button click.\n            ")])]),t._v(" "),o("tr",[o("td",[t._v("Dismiss button title")]),t._v(" "),o("td",[t._v("\n              Button label in the popup prompt to cancel the button click.\n            ")])])])]),t._v(" "),o("h5",{attrs:{id:"example-recipe-1b-button-action-handler-recipe-recipe-with-a-new-button-action-trigger-with-if-conditional-logic-defining-the-actions-to-carry-out-upon-each-button-click"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-recipe-1b-button-action-handler-recipe-recipe-with-a-new-button-action-trigger-with-if-conditional-logic-defining-the-actions-to-carry-out-upon-each-button-click"}},[t._v("#")]),t._v(" Example recipe #1B: button action handler recipe - recipe with a new button action trigger with IF conditional logic defining the actions to carry out upon each button click")]),t._v(" "),o("p",[t._v("This following recipe has been built for the above scenario. It posts different messages as a thread under the first Salesforce account notification message, depending on which button has been clicked. Using IF conditions is more versatile than using the Slack action "),o("strong",[t._v("Respond to button")]),t._v(", because you can carry out multiple steps in the IF condition and in multiple apps.")]),t._v(" "),o("p",[t._v('In this recipe, to check which button has been clicked, we use the IF condition to check the button name. If it matches "Notify BizDev", we post a message for the business development team, and if it matches "Notify Sales", we post a message for the sales team.')]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(150),alt:"Button action example recipe",width:"1796",height:"996"}}),t._v(" "),o("em",[t._v("Button response using IF conditions. "),o("a",{attrs:{href:"https://www.workato.com/recipes/602058",target:"_blank",rel:"noopener noreferrer"}},[t._v("Example recipe"),o("OutboundLink")],1)])],1),t._v(" "),o("h6",{attrs:{id:"output-of-the-slack-trigger-new-button-action"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output-of-the-slack-trigger-new-button-action"}},[t._v("#")]),t._v(" Output of the Slack trigger - new button action")]),t._v(" "),o("p",[t._v("The datapills used in the IF conditions come from the Slack trigger "),o("strong",[t._v("New button action")]),t._v(". The following screenshot shows the output datatree from the Slack trigger "),o("strong",[t._v("New button action")]),t._v(". The datapills are variables that the recipe builder can use while building the recipe actions.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(1045),alt:"Button action datatree output",width:"1552",height:"1130"}}),t._v(" "),o("em",[t._v("Output datatree of the new button trigger")])],1),t._v(" "),o("p",[t._v("The following table elaborates upon these datapill variables and what they can be used for.")]),t._v(" "),o("table",{staticClass:"unchanged rich-diff-level-one"},[o("tbody",[o("tr",[o("th",[t._v("\n              New button click trigger output datapills\n            ")]),t._v(" "),o("th",[t._v("Description")])]),t._v(" "),o("tr",[o("td",[t._v("Action name")]),t._v(" "),o("td",[t._v("\n              Button label visible to Slack user interacting with the buttons.\n            ")])]),t._v(" "),o("tr",[o("td",[t._v("Action ID")]),t._v(" "),o("td",[t._v("\n              Internal value of the button. This needs to be unique. Not visible on Slack to anyone.\n            ")])]),t._v(" "),o("tr",[o("td",[t._v("Channel")]),t._v(" "),o("td",[t._v("\n              The channel where the button click occurred. You can obtain both the channel internal Slack ID and the channel name.\n            ")])]),t._v(" "),o("tr",[o("td",[t._v("User")]),t._v(" "),o("td",[t._v("\n              The user who clicked the button. You can obtain both the user internal Slack ID and the username.\n            ")])]),t._v(" "),o("tr",[o("td",[t._v("Team")]),t._v(" "),o("td",[t._v("\n              The Slack team where the button click occurred. You can obtain both the unique domain and the internal team ID.\n            ")])]),t._v(" "),o("tr",[o("td",[t._v("Action timestamp")]),t._v(" "),o("td",[t._v("\n              The epoch time when the button click occurred.\n            ")])]),t._v(" "),o("tr",[o("td",[t._v("Message ID")]),t._v(" "),o("td",[t._v("\n              The epoch time when the message with buttons was sent. Can be used to populate "),o("b",[t._v("Thread ID")]),t._v(" input fields to create a thread under this message.\n            ")])]),t._v(" "),o("tr",[o("td",[t._v("Attachment ID")]),t._v(" "),o("td",[t._v("\n              ID of the attachment sent with the initial Slack message with buttons, if any.\n            ")])]),t._v(" "),o("tr",[o("td",[t._v("Response URL")]),t._v(" "),o("td",[t._v("\n              Used by Workato to respond to the button click. Also used in Slack action "),o("b",[t._v("Respond to button.")])])])])]),t._v(" "),o("p",[t._v("An example of the values can be viewed in the job output, as follows.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(1046),alt:"Button action data output",width:"1590",height:"1050"}}),t._v(" "),o("em",[t._v("Button action data output")])],1),t._v(" "),o("h4",{attrs:{id:"using-slack-respond-to-button-action-to-build-interactive-slack-buttons-recipes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-slack-respond-to-button-action-to-build-interactive-slack-buttons-recipes"}},[t._v("#")]),t._v(" Using Slack respond to button action to build interactive Slack buttons recipes")]),t._v(" "),o("p",[t._v("Possible use cases for building your recipe in this way would be scenarios whereby you only wish the button to be clicked once, such as approval workflows, e.g. approving leave, approving expenses.")]),t._v(" "),o("h5",{attrs:{id:"example-recipe-2a-recipe-with-2-post-message-actions-with-buttons-configured"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-recipe-2a-recipe-with-2-post-message-actions-with-buttons-configured"}},[t._v("#")]),t._v(" Example recipe #2A: recipe with 2 post message actions with buttons configured")]),t._v(" "),o("p",[t._v("We're going to use almost exactly the same recipe as "),o("router-link",{attrs:{to:"/connectors/slack.html#example-recipe-1a-recipe-with-a-post-message-action-with-buttons-configured"}},[t._v("example recipe #1A")]),t._v(", except that we're breaking up the single Slack action "),o("strong",[t._v("Post message")]),t._v(" into 2 separate "),o("strong",[t._v("Post message")]),t._v(" actions. The first action will post notification information (in this case, my Salesforce account information), while the second action will only post button data. The recipe we will be using can be found "),o("a",{attrs:{href:"https://www.workato.com/recipes/605784",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),o("OutboundLink")],1),t._v(".")],1),t._v(" "),o("p",[t._v("The buttons configured in this recipe show up in Slack as follows.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(1047),alt:"Salesforce account information and button posted via separate actions",width:"2544",height:"676"}}),t._v(" "),o("em",[t._v("Salesforce account information and button posted via separate actions")])],1),t._v(" "),o("p",[t._v("When the button is clicked on, it is immediately replaced by a message notifying either the business development or the sales team.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(1048),alt:"Salesforce account information and button posted via separate actions",width:"960",height:"488"}})],1),t._v(" "),o("p",[t._v("This is because the input field "),o("strong",[t._v("Replace original?")]),t._v(" has been marked as true in the "),o("strong",[t._v("Respond to button")]),t._v(" action configuration. We will cover this action in the following section. This allows us to remove the buttons from the Slack channel once they have been clicked on - so as to prevent multiple clicks on the buttons. This is also why the first recipe breaks up the notification information and the buttons data into 2 separate actions - we want to replace only the buttons with the new message, and not replace the notification information.")]),t._v(" "),o("h5",{attrs:{id:"example-recipe-2b-button-action-handler-recipe-recipe-with-a-new-button-action-trigger-with-slack-action-respond-to-button-that-responds-to-each-button-click-with-a-slack-message"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-recipe-2b-button-action-handler-recipe-recipe-with-a-new-button-action-trigger-with-slack-action-respond-to-button-that-responds-to-each-button-click-with-a-slack-message"}},[t._v("#")]),t._v(" Example recipe #2B: button action handler recipe - recipe with a new button action trigger with Slack action "),o("strong",[t._v("Respond to button")]),t._v(" that responds to each button click with a Slack message")]),t._v(" "),o("p",[t._v("This following recipe is an alternative way we can build the interactive scenario on Slack. Similarly, it posts different messages back in the channel depending on which button has been clicked. We use the Slack action "),o("strong",[t._v("Respond to button")]),t._v(" to immediately post a message back onto the channel.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(151),alt:"Respond to button action example recipe",width:"1788",height:"1024"}}),t._v(" "),o("em",[t._v("Respond to button action. "),o("a",{attrs:{href:"https://www.workato.com/recipes/605785",target:"_blank",rel:"noopener noreferrer"}},[t._v("Example recipe"),o("OutboundLink")],1)])],1),t._v(" "),o("p",[t._v("With the "),o("strong",[t._v("Respond to button")]),t._v(" action, we can simply pass in the "),o("strong",[t._v("button response URL")]),t._v(", and the recipe will know, at run-time, which button has been clicked. Therefore, if we wish to do something like post a generic message that tells the channel which button has been clicked, this action is suited to handle that easily.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(152),alt:"Respond to button action configuration",width:"1520",height:"1134"}}),t._v(" "),o("em",[t._v("Respond to button action configuration")])],1),t._v(" "),o("h6",{attrs:{id:"input-of-the-slack-action-respond-to-button-action"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#input-of-the-slack-action-respond-to-button-action"}},[t._v("#")]),t._v(" Input of the Slack action - respond to button action")]),t._v(" "),o("p",[t._v("The following are the new input fields that the Slack action "),o("strong",[t._v("Respond to button")]),t._v(" introduces to the usual input fields in the "),o("strong",[t._v("Post message")]),t._v(" action.")]),t._v(" "),o("table",{staticClass:"unchanged rich-diff-level-one"},[o("tbody",[o("tr",[o("th",[t._v("\n              Respond to button action input field\n            ")]),t._v(" "),o("th",[t._v("Description")])]),t._v(" "),o("tr",[o("td",[t._v("Button response URL")]),t._v(" "),o("td",[t._v("\n              Provide this from the output datatree of the Slack trigger "),o("b",[t._v("New button action")]),t._v(". This tells the action what button click to respond to.\n            ")])]),t._v(" "),o("tr",[o("td",[t._v("Response type")]),t._v(" "),o("td",[o("b",[t._v("In channel")]),t._v(" will post the message like a normal chat message. "),o("b",[t._v("Ephemeral")]),t._v(" will post the message in greyed out text.\n            ")])]),t._v(" "),o("tr",[o("td",[t._v("Replace original")]),t._v(" "),o("td",[t._v("\n            If "),o("b",[t._v("yes")]),t._v(", the new message will overwrite the original message with buttons and be posted in the same position in the channel.  \n            "),o("p",[t._v("If "),o("b",[t._v("no")]),t._v(", the original message with buttons will remain in the same position in the channel. The new message will be added to the end of the channel conversation.")])])]),t._v(" "),o("tr",[o("td",[t._v("Delete original")]),t._v(" "),o("td",[t._v("\n              If "),o("b",[t._v("yes")]),t._v(", the original message with buttons will be removed from the channel. The new The new message will be added to the end of the channel conversation.\n              "),o("p",[t._v("If "),o("b",[t._v("no")]),t._v(", the original message with buttons will remain in the same position in the channel. The new message will be added to the end of the channel conversation.")])])])])]),t._v(" "),o("h3",{attrs:{id:"using-slack-threads"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-slack-threads"}},[t._v("#")]),t._v(" Using Slack threads")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://api.slack.com/docs/message-threading",target:"_blank",rel:"noopener noreferrer"}},[t._v("Slack threads"),o("OutboundLink")],1),t._v(" allow you to group related messages together, making it easier to follow conversations in Slack channels or groups. To use Slack threads, you can either:")]),t._v(" "),o("ol",[o("li",[t._v("continue a conversation by replying to a message ID and starting a thread,")]),t._v(" "),o("li",[t._v("continue a conversation by replying to the parent message ID (the very first message of the thread), or")]),t._v(" "),o("li",[t._v("continue an existing thread by replying to the thread ID.")])]),t._v(" "),o("p",[t._v("You need to specify the message ID, parent message ID or thread ID in the "),o("strong",[t._v("Thread ID")]),t._v(" input field in order to start or continue a thread.")]),t._v(" "),o("h4",{attrs:{id:"example-recipe-1-recipe-that-replies-to-a-message-id-and-starts-a-thread"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-recipe-1-recipe-that-replies-to-a-message-id-and-starts-a-thread"}},[t._v("#")]),t._v(" Example recipe #1: recipe that replies to a message ID and starts a thread")]),t._v(" "),o("p",[t._v("Let us relook at the "),o("a",{attrs:{href:"#example-recipe-1b-button-action-handler-recipe-recipe-with-a-new-button-action-trigger-with-if-conditional-logic-defining-the-actions-to-carry-out-upon-each-button-click"}},[t._v("above example recipe")]),t._v(" that responds to a button click.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(150),alt:"Button action example recipe",width:"1796",height:"996"}}),t._v(" "),o("em",[t._v("Button response "),o("a",{attrs:{href:"https://www.workato.com/recipes/602058",target:"_blank",rel:"noopener noreferrer"}},[t._v("example recipe"),o("OutboundLink")],1)])],1),t._v(" "),o("p",[t._v("If a Slack user clicks on the "),o("strong",[t._v("Notify BizDev")]),t._v(" button, we can see that it creates a new thread by posting under the original message,")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(153),alt:"Notify BD thread example",width:"734",height:"950"}}),t._v(" "),o("em",[t._v("Thread created and message posted if Slack user clicks on the Notify BizDev button")])],1),t._v(" "),o("p",[t._v("The configuration in the recipe is as follows. We're passing the message ID of the original Slack message into the "),o("strong",[t._v("Thread ID")]),t._v(" input field. As the message has no thread currently, it will create a new thread.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(54),alt:"Notify BD thread configuration",width:"1596",height:"1218"}}),t._v(" "),o("em",[t._v("Action configuration for the Notify BizDev action. Message ID is used in the "),o("strong",[t._v("Thread ID")]),t._v(" input field.")])],1),t._v(" "),o("p",[t._v("Correspondingly, if a Slack user clicks on the "),o("strong",[t._v("Notify Sales")]),t._v(" button, we can see that it creates a new thread by posting under the original message.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(1049),alt:"Notify sales thread example",width:"734",height:"952"}}),t._v(" "),o("em",[t._v("Thread created and message posted if Slack user clicks on the Notify Sales button")])],1),t._v(" "),o("p",[t._v("The configuration in the recipe is as follows. We're passing the message ID of the original Slack message into the "),o("strong",[t._v("Thread ID")]),t._v(" input field. As the message has no thread currently, it will create a new thread.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(1050),alt:"Notify sales thread configuration",width:"1598",height:"1212"}}),t._v(" "),o("em",[t._v("Action configuration for the Notify Sales action. Message ID is used in the "),o("strong",[t._v("Thread ID")]),t._v(" input field.")])],1),t._v(" "),o("h4",{attrs:{id:"example-recipe-2-recipe-that-replies-to-a-parent-message-id-and-continues-a-thread"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-recipe-2-recipe-that-replies-to-a-parent-message-id-and-continues-a-thread"}},[t._v("#")]),t._v(" Example recipe #2: recipe that replies to a parent message ID and continues a thread")]),t._v(" "),o("p",[t._v("Using the "),o("a",{attrs:{href:"https://www.workato.com/recipes/602058",target:"_blank",rel:"noopener noreferrer"}},[t._v("same recipe"),o("OutboundLink")],1),t._v(" as "),o("a",{attrs:{href:"#example-recipe-1a-recipe-with-a-post-message-action-with-buttons-configured"}},[t._v("above")]),t._v(", we can see that putting the parent message ID also works to post to an existing thread.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(150),alt:"Button action example recipe",width:"1796",height:"996"}}),t._v(" "),o("em",[t._v("Button response "),o("a",{attrs:{href:"https://www.workato.com/recipes/602058",target:"_blank",rel:"noopener noreferrer"}},[t._v("example recipe"),o("OutboundLink")],1)])],1),t._v(" "),o("p",[t._v("For example, when I click on the "),o("strong",[t._v("Notify BizDev")]),t._v(" button for the second time, it posts to the same thread.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(154),alt:"Messages are posted under the same thread via parent message ID",width:"368",height:"600"}}),t._v(" "),o("em",[t._v("Messages are posted under the same thread via parent message ID")])],1),t._v(" "),o("p",[t._v("Referring back to the action's thread configuration, we see that we're specifying the parent message ID in the "),o("strong",[t._v("Thread ID")]),t._v(" input field, which is the initial message that the thread is under.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(54),alt:"Notify BD thread configuration",width:"1596",height:"1218"}}),t._v(" "),o("em",[t._v("Action configuration for the Notify BizDev action. Message ID is used in the "),o("strong",[t._v("Thread ID")]),t._v(" input field.")])],1)])}),[],!1,null,null,null);e.default=n.exports},261:function(t,e,a){t.exports=a.p+"assets/img/post-basic-message-config-1.ca1c2faf.png"},262:function(t,e,a){t.exports=a.p+"assets/img/post-basic-message-config-2.e659eaa6.png"},54:function(t,e,a){t.exports=a.p+"assets/img/notify-bd-thread-config.635cc967.png"}}]);