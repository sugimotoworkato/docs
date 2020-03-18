(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{173:function(e,t,r){e.exports=r.p+"assets/img/basic-scheduler-trigger.bf8d54f7.png"},174:function(e,t,r){e.exports=r.p+"assets/img/advanced-scheduler-trigger.52078775.gif"},1821:function(e,t,r){e.exports=r.p+"assets/img/trigger-types.76c4e6d9.png"},1822:function(e,t,r){e.exports=r.p+"assets/img/queued-trigger-events.a844b9a9.png"},1823:function(e,t,r){e.exports=r.p+"assets/img/durable-cursor-position.a37ba110.png"},1824:function(e,t,r){e.exports=r.p+"assets/img/polling_intervals.1abf7303.png"},1825:function(e,t,r){e.exports=r.p+"assets/img/scheduled_trigger_schedules.b1867e1f.png"},1826:function(e,t,r){e.exports=r.p+"assets/img/batching-diagram.5b7ebb93.png"},1827:function(e,t,r){e.exports=r.p+"assets/img/set-since-date-for-trigger.4d8a17af.gif"},1828:function(e,t,r){e.exports=r.p+"assets/img/since_param_ran_recipe.7982ec54.png"},1829:function(e,t,r){e.exports=r.p+"assets/img/google_calendar_since_param.1b70b128.png"},1830:function(e,t,r){e.exports=r.p+"assets/img/configure-trigger-filter.98e9811f.gif"},1831:function(e,t,r){e.exports=r.p+"assets/img/define-trigger-condition.3518ffa2.gif"},1832:function(e,t,r){e.exports=r.p+"assets/img/adding-trigger-filter-with-or.47235577.gif"},1833:function(e,t,r){e.exports=r.p+"assets/img/define-additional-trigger-condition.d6900303.gif"},2661:function(e,t,r){"use strict";r.r(t);var i=r(0),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"triggers"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#triggers"}},[e._v("#")]),e._v(" Triggers")]),e._v(" "),i("p",[e._v("Triggers determine what event to listen to in order to execute the actions described in a recipe.")]),e._v(" "),i("p",[e._v("Trigger events can be set off in apps (e.g. Salesforce, JIRA) when a certain event happens (e.g. new contact is created, existing ticket is updated), when a new line is added in a file, or according to a schedule (fires at a certain time or interval), etc.")]),e._v(" "),i("p",[e._v("Depending on the available API, Workato can receive trigger events in real-time, or check for the occurrence of an event periodically by polling the app.")]),e._v(" "),i("p",[e._v("Triggers can be classified into different types based on when they check for new events (trigger mechanism) and how they group new events (trigger dispatch).")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:r(1821),alt:"Trigger types",width:"1105",height:"840"}}),e._v(" "),i("em",[e._v("Trigger mechanisms and dispatches")])],1),e._v(" "),i("h2",{attrs:{id:"trigger-behaviour"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#trigger-behaviour"}},[e._v("#")]),e._v(" Trigger behaviour")]),e._v(" "),i("p",[e._v("Workato recipes pick up and queue trigger events in-sequence to be processed as recipe jobs. The recipe maintains a cursor and progresses through the trigger event queue synchronously, with an adjustable throughput. No duplication of jobs occur as Workato maintains a record of the trigger events it has seen.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:r(1822),alt:"Queued trigger events",width:"766",height:"728"}}),e._v(" "),i("em",[e._v("Trigger events are queued and processed by the recipe as jobs")])],1),e._v(" "),i("p",[e._v("Workato triggers have the following behaviour.")]),e._v(" "),i("ul",[i("li",[e._v("In-sequence delivery")])]),e._v(" "),i("p",[e._v("Triggers will be delivered in chronological order, e.g. oldest records will be processed first, or in the sequence they were delivered to Workato.")]),e._v(" "),i("ul",[i("li",[e._v("Durable cursor position")])]),e._v(" "),i("p",[e._v("Recipes remember the jobs it has processed even across stopped and running states. Whenever a recipe is started, it will pick up where it stopped and begin processing all trigger events since it was stopped.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:r(1823),alt:"Durable cursor position",width:"1670",height:"420"}}),e._v(" "),i("em",[e._v("When the recipe is stopped at 10/21/2017, 11.30am and started again days or weeks later, it will pick up trigger events from when it stopped at 10/21/2017, 11.30am")])],1),e._v(" "),i("ul",[i("li",[e._v("No duplication")])]),e._v(" "),i("p",[e._v("Each recipe maintains a record of the trigger events it has seen, and will not process duplicate events.")]),e._v(" "),i("ul",[i("li",[e._v("Flow control")])]),e._v(" "),i("p",[e._v("Recipes process trigger events synchronously, e.g. only process a second job when the first job has been completed. Workato provides flow control over recipes by enabling multiple jobs to be processed concurrently.")]),e._v(" "),i("ul",[i("li",[e._v("Guaranteed delivery")])]),e._v(" "),i("p",[e._v("For Workato polling triggers, Workato guarantees trigger event delivery. Even if servers experience temporary downtime, or if the network is unstable, Workato ensures that triggers are picked up and processed in-sequence.")]),e._v(" "),i("p",[e._v("Webhook events, which powers most real-time Workato triggers, inherently have the possibility of being lost. To mitigate this, most Workato-built real-time triggers (a notable exception is the HTTP webhook trigger) have a backup polling mechanism that ensures missed webhook trigger events will be picked up.")]),e._v(" "),i("h2",{attrs:{id:"trigger-mechanisms"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#trigger-mechanisms"}},[e._v("#")]),e._v(" Trigger mechanisms")]),e._v(" "),i("p",[e._v("Trigger mechanisms determine when a trigger will fire. In this section, we cover polling triggers, real-time triggers and scheduled triggers.")]),e._v(" "),i("h3",{attrs:{id:"polling-triggers"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#polling-triggers"}},[e._v("#")]),e._v(" Polling triggers")]),e._v(" "),i("p",[e._v("Polling triggers check for new events by periodically querying the app to see if new events are available. The polling frequency is determined by the type of Workato plan, and can be as low as 5 minutes. Each poll may yield multiple events ready for processing i.e. a single poll can result in several jobs being created.")]),e._v(" "),i("p",[e._v("When the recipe is first started, the polling trigger fetches all events after the "),i("strong",[e._v("From")]),e._v(' date, e.g. "fetch all NetSuite customers created or updated since 2017 January 10am, PST". Subsequently, polls are made at regular intervals as dictated by the plan type. A recipe with a 5 minutes polling interval that is kept running continuously will therefore fetch new trigger events every 5 minutes, e.g. "fetch all NetSuite customers created or updated in the last 5 minutes".')]),e._v(" "),i("p",[e._v("When the recipe is stopped, polling triggers stop fetching events from the trigger app. However, if the recipe is started again, polling triggers will fetch all events since the recipe was stopped.")]),e._v(" "),i("h4",{attrs:{id:"example-polling-trigger"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#example-polling-trigger"}},[e._v("#")]),e._v(" Example: Polling trigger")]),e._v(" "),i("p",[e._v("A Workato account on the Business plan has a 5-minute polling interval, as displayed on their polling triggers.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:r(1824),alt:"Polling intervals",width:"1872",height:"1186"}}),e._v(" "),i("em",[e._v("Trigger hint regarding the specific polling interval")])],1),e._v(" "),i("p",[e._v("The recipe polls every 5 minutes for new accounts created in Salesforce, and fetches any new accounts. If there were multiple accounts created, each will result in a new job.")]),e._v(" "),i("p",[e._v("If the recipe is stopped on 1 Feb 2017, midnight PST, it will cease to fetch trigger events. However, when the recipe is started again, lets say on the 10 of March midnight PST, Workato will fetch all Salesforce accounts created since Feb 1.")]),e._v(" "),i("h3",{attrs:{id:"real-time-triggers"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#real-time-triggers"}},[e._v("#")]),e._v(" Real-time triggers")]),e._v(" "),i("p",[e._v("Real-time triggers are usually built on top of an asynchronous notification mechanism. Real-time triggers typically require registration in your connected app (either via the API or manually via the app interface), to let the app know that you are interested in a specific event. When that event occurs, the app will send a notification to Workato and generate a trigger event.")]),e._v(" "),i("p",[e._v("Webhooks are one such mechanism. Most real-time triggers supported on Workato are built on webhooks. The advantage of webhooks is that there is no delay, and it is more efficient as we only receive notifications from apps when events occur, instead of Workato having to check at regular intervals for new events.")]),e._v(" "),i("p",[e._v("Real-time triggers supported by Workato (this excludes HTTP real-time triggers) are generally webhooks supported by regular polling. The polling intervals for real-time triggers are generally longer than the normal polling triggers, however, i.e. instead of polling once every 5 minutes or so, the trigger can now poll once every hour. The polling mechanism in real-time triggers is also what allows you to select a "),i("strong",[e._v("From")]),e._v(" date at the time of recipe start.")]),e._v(" "),i("h3",{attrs:{id:"scheduled-triggers"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#scheduled-triggers"}},[e._v("#")]),e._v(" Scheduled triggers")]),e._v(" "),i("p",[e._v("Scheduled triggers are executed at specified days and times, hourly, daily, monthly, etc.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:r(1825),alt:"Salesforce scheduled trigger schedules",width:"1498",height:"1130"}}),e._v(" "),i("em",[e._v("Various schedule options for Salesforce scheduled search trigger")])],1),e._v(" "),i("p",[e._v("At the scheduled time or interval, this trigger will fetch all events matching the specified criteria. Also, unlike other triggers, scheduled triggers will return events that have already been picked up previously.")]),e._v(" "),i("p",[e._v("Scheduled triggers will return events in batches, similar to how batch triggers work. Users can specify the maximum batch size, e.g. if the batch size is set to 100 and 420 new events are identified, 5 new jobs will be created. The first four jobs will have 100 events each and the fifth will have 20 jobs.")]),e._v(" "),i("h4",{attrs:{id:"scheduler-clock-timer"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#scheduler-clock-timer"}},[e._v("#")]),e._v(" Scheduler/clock/timer")]),e._v(" "),i("p",[e._v("Scheduler triggers allows you to schedule when exactly your recipe will run. There are two triggers:")]),e._v(" "),i("ul",[i("li",[e._v("New scheduled event")])]),e._v(" "),i("p",[e._v("This trigger allows you to specify the time the recipe should first trigger, and subsequently, the time intervals to continue triggering on.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:r(173),alt:"Basic scheduler trigger",width:"965",height:"819"}}),e._v(" "),i("em",[e._v("Basic scheduler trigger that triggers the first time when recipe is started, then subsequently every hour after that")])],1),e._v(" "),i("ul",[i("li",[e._v("New scheduled event (advanced)")])]),e._v(" "),i("p",[e._v("This trigger allows you to specify the days of the week the recipe should trigger on, as well as the times it should trigger on. If you specify only the minutes, e.g. 30, the recipe will trigger 24 times in a day, every 30 minutes past the hour. If both hour and minute inpur fields are filled, the recipe will trigger once a day.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:r(174),alt:"Advanced scheduler trigger",width:"600",height:"415"}}),e._v(" "),i("em",[e._v("Advanced scheduler trigger that triggers every Monday at midnight 0000")])],1),e._v(" "),i("h2",{attrs:{id:"trigger-dispatches"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#trigger-dispatches"}},[e._v("#")]),e._v(" Trigger dispatches")]),e._v(" "),i("p",[e._v("Trigger dispatches determine whether a trigger returns a single event or a list of events. In this section, we cover single triggers and batch triggers.")]),e._v(" "),i("h3",{attrs:{id:"single-triggers"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#single-triggers"}},[e._v("#")]),e._v(" Single triggers")]),e._v(" "),i("p",[e._v("Single triggers are useful for continuous real-time synchronization of data, e.g. moving opportunities from Salesforce into NetSuite as sales orders the moment these opportunities close. Most Workato triggers are single triggers.")]),e._v(" "),i("h3",{attrs:{id:"batch-triggers"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#batch-triggers"}},[e._v("#")]),e._v(" Batch triggers")]),e._v(" "),i("p",[e._v("Batch triggers are generally used for increasing throughput, as trigger events are retrieved in lists instead of single events, e.g. moving high volume of user activity data from Marketo into data warehouses like Redshift.")]),e._v(" "),i("p",[e._v("Batch triggers are similar to polling triggers in terms of how they fetch new events. This group size i.e. batch size can be specified by the end user as part of the trigger configuration.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:r(1826),alt:"Batch triggers process trigger events in batches of user-specified sizes",width:"752",height:"798"}}),e._v(" "),i("em",[e._v("Batch triggers process trigger events in batches of user-specified sizes")])],1),e._v(" "),i("p",[e._v("For further details about batch triggers, refer to the Batch processing article "),i("router-link",{attrs:{to:"/features/batch-processing.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),i("h2",{attrs:{id:"since-from"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#since-from"}},[e._v("#")]),e._v(" Since/From")]),e._v(" "),i("p",[e._v("The "),i("strong",[e._v("Since")]),e._v(" or "),i("strong",[e._v("From")]),e._v(" setting enables recipes to fetch past trigger events from a specified date and time. i.e. instead of picking up new trigger events (events created since recipe was started) this enables picking events that have already occurred.")]),e._v(" "),i("p",[e._v("In the example below, the "),i("strong",[e._v("New Salesforce object")]),e._v(" trigger has a "),i("strong",[e._v("From")]),e._v(" date as 1 Jan 2017, midnight PST and the 'accounts' object is selected.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:r(1827),alt:"Setting since date",width:"894",height:"564"}}),e._v(" "),i("em",[e._v("Setting the Since date for the trigger. Trigger will only pick up new accounts created since midnight of Jan 1, 2017")])],1),e._v(" "),i("p",[e._v("When the recipe is started, only Salesforce accounts created after 1 Jan 2017, midnight PST will be picked up, as viewed from the created date column on the job report.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:r(1828),alt:"Since parameter",width:"1866",height:"730"}}),e._v(" "),i("em",[e._v("Job report shows that only Salesforce accounts created after Jan 1, 2017 were processed")])],1),e._v(" "),i("p",[e._v("If the trigger was "),i("strong",[e._v("New/updated Salesforce object")]),e._v(", only Salesforce accounts created or updated after 1 Jan 2017, midnight PST will be picked up.")]),e._v(" "),i("p",[e._v("However, not all triggers have the "),i("strong",[e._v("Since/From")]),e._v(" parameter. For such triggers, the date and time from which trigger events will be fetched is predetermined by default, usually as an offset from the time the recipe is started. Common values are:")]),e._v(" "),i("ul",[i("li",[e._v("When recipe is first started")]),e._v(" "),i("li",[e._v("An hour before recipe is first started")]),e._v(" "),i("li",[e._v("A day before recipe is first started.\nThis offset is usually communicated in the trigger hint for the connector.")])]),e._v(" "),i("p",[i("DocImage",{attrs:{src:r(1829),alt:"Google Calendar since parameter",width:"1498",height:"960"}}),e._v(" "),i("em",[e._v("Trigger hint regarding the default offset of 1 hour ago for Google Calendar")])],1),e._v(" "),i("p",[e._v("The "),i("strong",[e._v("Since/From")]),e._v(" value can only be set once, and will be locked from further changing after the recipe has been started for the first time.")]),e._v(" "),i("h2",{attrs:{id:"trigger-conditions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#trigger-conditions"}},[e._v("#")]),e._v(" Trigger conditions")]),e._v(" "),i("p",[e._v("Trigger conditions are additional rules that define what kind of trigger events should be selected for processing, e.g. you can specify that only Salesforce accounts from California must be processed.")]),e._v(" "),i("p",[e._v("Trigger conditions are evaluated by Workato after the trigger events have been fetched i.e. Workato retrieves all new Salesforce accounts created in the last 5 minutes, and then filters out accounts not from California. This also means that, with a "),i("strong",[e._v("New Salesforce account")]),e._v(" trigger, accounts which are subsequently updated to be from California will not be picked up. If you find that your recipe seems to be missing events that you expected to be picked up, this might be the issue. Refer to the "),i("router-link",{attrs:{to:"/recipes/recipe-logic-errors.html#missing-trigger-events"}},[e._v("recipe logic errors article")]),e._v(" to find out more.")],1),e._v(" "),i("p",[e._v("Note: trigger conditions generally do not monitor a field change, but simply check if the trigger condition is fulfilled. For example, if you wish to sync only closed won opportunities from Salesforce into your ERP system, setting the following trigger condition will cause every update made to the opportunity when its in "),i("code",[e._v("Closed Won")]),e._v(" state be picked up by the recipe. This is as opposed to having the recipe pick up the opportunity only when its status is marked closed won for the first time. Refer to the "),i("router-link",{attrs:{to:"/recipes/recipe-logic-errors.html#unexpected-trigger-events-data-duplication"}},[e._v("recipe logic errors article")]),e._v(" to find out more.")],1),e._v(" "),i("p",[e._v("To add a trigger condition, check the "),i("strong",[e._v("Trigger IF")]),e._v(" checkbox. The trigger datatree will appear, displaying the variables that can be used to formulate the trigger condition.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:r(1830),alt:"Configure trigger filter",width:"746",height:"588"}}),e._v(" "),i("em",[e._v("Checking the Trigger IF checkbox brings up trigger condition fields to be configured")])],1),e._v(" "),i("p",[e._v("Define the trigger condition. For more information on the available conditions you can use, refer to the "),i("router-link",{attrs:{to:"/features/if-conditions.html"}},[e._v("IF condition")]),e._v(" article. The following ensures that only Salesforce accounts with a "),i("strong",[e._v("Warm")]),e._v(" rating value will be picked up by the trigger. Values are case sensitive and should be exact.")],1),e._v(" "),i("p",[i("DocImage",{attrs:{src:r(1831),alt:"Define trigger filter",width:"746",height:"530"}}),e._v(" "),i("em",[e._v("Define the trigger condition")])],1),e._v(" "),i("p",[e._v("To add an additional trigger condition, select from the OR or AND in the picklist. The selected operator will define how all additional trigger conditions will be added.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:r(1832),alt:"Adding trigger filter",width:"742",height:"604"}}),e._v(" "),i("em",[e._v("Adding another trigger condition with the OR operator")])],1),e._v(" "),i("p",[e._v("Define the additional trigger condition. Values are case sensitive and should be exact. The following ensures that accounts with a "),i("strong",[e._v("Hot")]),e._v(" rating value will also be picked up by the trigger. Notice that from the third trigger condition onwards, trigger conditions will be combined with the previously selected operator (OR or AND).")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:r(1833),alt:"Define additional trigger condition",width:"746",height:"600"}}),e._v(" "),i("em",[e._v("Define the additional trigger condition. Subsequent trigger conditions has to use the same AND operator")])],1)])}),[],!1,null,null,null);t.default=s.exports}}]);