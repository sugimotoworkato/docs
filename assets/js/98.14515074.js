(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{2068:function(t,o,e){t.exports=e.p+"assets/img/workbot-2.f4768219.gif"},2069:function(t,o,e){t.exports=e.p+"assets/img/slack-organization-authorization.404b863d.png"},2070:function(t,o,e){t.exports=e.p+"assets/img/workbot-for-slack-intro-screen.9da34894.png"},2071:function(t,o,e){t.exports=e.p+"assets/img/workbot-github-authorization.9b9d5b05.gif"},2072:function(t,o,e){t.exports=e.p+"assets/img/salesforce-commands-on.272c7f7a.png"},2073:function(t,o,e){t.exports=e.p+"assets/img/invite-workbot-to-channels-via-mention.976c796f.png"},2074:function(t,o,e){t.exports=e.p+"assets/img/invite-workbot-via-menu-option.9b8261af.gif"},213:function(t,o,e){t.exports=e.p+"assets/img/salesforce-commands-list.d8636e92.png"},2711:function(t,o,e){"use strict";e.r(o);var a=e(0),n=Object(a.a)({},(function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"workbot-for-slack-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workbot-for-slack-setup"}},[t._v("#")]),t._v(" Workbot for Slack setup")]),t._v(" "),a("p",[t._v("In this article, we cover how to setup Workbot in your Slack organization:")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"#_1-add-workbot-to-slack"}},[t._v("Add Workbot to Slack")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#_2-connect-workbot-to-your-apps"}},[t._v("Connect Workbot to your apps")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#_3-invite-workbot-to-channels"}},[t._v("Invite Workbot to channels")])])]),t._v(" "),a("h2",{attrs:{id:"_1-add-workbot-to-slack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-add-workbot-to-slack"}},[t._v("#")]),t._v(" 1. Add Workbot to Slack")]),t._v(" "),a("p",[t._v("Add Workbot to your Slack organization "),a("a",{attrs:{href:"https://www.workato.com/workbot-slack",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(". When you add Workbot to your organization, all team members in a channel will be able to view the notifications Workbot posts to that channel, and any team member will be able to interact with Workbot via direct messages.")]),t._v(" "),a("p",[t._v("When adding Workbot to your Slack organization, you will be prompted to enter your team's Slack URL.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:e(2068),alt:"Enter Slack team URL",width:"2718",height:"1676"}}),t._v(" "),a("em",[t._v("Enter your team's Slack URL to setup Workbot in your Slack organization")])],1),t._v(" "),a("p",[t._v("Click "),a("strong",[t._v("Continue")]),t._v(", then "),a("strong",[t._v("Add to Slack")]),t._v(", and Slack will generate a popup that asks you to authorize Workbot to have access to your Slack organization. Once you click "),a("strong",[t._v("Authorize")]),t._v(", Workbot will be added to your Slack organization.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:e(2069),alt:"Authorize Workbot to access your Slack organization",width:"2556",height:"1300"}}),t._v(" "),a("em",[t._v("Click Authorize to finish adding Workbot to your Slack organization")])],1),t._v(" "),a("h2",{attrs:{id:"_2-connect-workbot-to-your-apps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-connect-workbot-to-your-apps"}},[t._v("#")]),t._v(" 2. Connect Workbot to your apps")]),t._v(" "),a("p",[t._v("Once you've added Workbot to your Slack organization, you will be able to see the list of apps that Workbot is able to interact with by default.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:e(2070),alt:"List of apps Workbot can interact with",width:"1460",height:"1300"}}),t._v(" "),a("em",[t._v("List of apps Workbot can interact with by default")])],1),t._v(" "),a("p",[t._v("To view the available commands you can use with Workbot (via the pre-built Workato recipes), click "),a("strong",[t._v("Commands")]),t._v(".")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:e(213),alt:"Salesforce commands list",width:"1414",height:"1286"}}),t._v(" "),a("em",[t._v("List of available Workbot commands for Salesforce")])],1),t._v(" "),a("p",[t._v("To enable the commands for an app, toggle the switch for that app to "),a("strong",[t._v("On")]),t._v(". Workbot will prompt you to connect with that app and authorize it to have access to read, write or do both to that app. For example, when we try to toggle Github app on, it requests for our authorization.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:e(2071),alt:"Github authorization flow for Workbot",width:"900",height:"540"}}),t._v(" "),a("em",[t._v("Popup requesting for connection and authorization is generated when we toggle on the Github commands")])],1),t._v(" "),a("p",[t._v("In the following example, we connect to Salesforce to allow Workbot to retrieve details about our Salesforce opportunities, accounts and cases, etc. for posting onto Slack, as well as create new campaigns, accounts and cases for us from Slack.")]),t._v(" "),a("p",[t._v("Once connected successfully, the switch turns "),a("strong",[t._v("On")]),t._v(". The following screenshot shows that Workbot is successfully connected to Salesforce. Team members can now interact with Salesforce via Workbot in Slack.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:e(2072),alt:"Salesforce commands toggled on",width:"1494",height:"1300"}}),t._v(" "),a("em",[t._v("Salesforce commands toggled on")])],1),t._v(" "),a("h2",{attrs:{id:"_3-invite-workbot-to-channels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-invite-workbot-to-channels"}},[t._v("#")]),t._v(" 3. Invite Workbot to channels")]),t._v(" "),a("p",[t._v("You can interact with Workbot via direct messages immediately after adding Workbot to your Slack organization. Direct message with Workbot are not visible to anyone but you.")]),t._v(" "),a("p",[t._v("You can also interact with Workbot on channels it has been invited to. Note that conversations with Workbot on channels are visible to all team members in that channel. To invite Workbot to a channel, mention Workbot via "),a("code",[t._v("@workbot")]),t._v(".")]),t._v(" "),a("p",[t._v("Furthermore, in order for Workbot to post notifications to a Slack channel, it has to first be invited to that channel.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:e(2073),alt:"Invite Workbot to channels via mention",width:"2116",height:"398"}}),t._v(" "),a("em",[t._v("Invite Workbot to channels by mentioning @workbot")])],1),t._v(" "),a("p",[t._v("Alternatively, invite Workbot via the "),a("strong",[t._v("Invite new members to join")]),t._v(" menu option in channel details.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:e(2074),alt:"Invite Workbot to channels via the menu option",width:"960",height:"488"}}),t._v(" "),a("em",[t._v("Invite Workbot to channels via the menu option")])],1)])}),[],!1,null,null,null);o.default=n.exports}}]);