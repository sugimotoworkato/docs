(window.webpackJsonp=window.webpackJsonp||[]).push([[470],{2227:function(t,e,o){"use strict";o.r(e);var r=o(0),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"google-speech-to-text-action-convert-short-speech-to-text"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#google-speech-to-text-action-convert-short-speech-to-text"}},[t._v("#")]),t._v(" Google Speech-to-text action - Convert short speech to text")]),t._v(" "),o("p",[t._v("This action allows you to convert a short audio file (less than 1 minute) into a text transcript.")]),t._v(" "),o("h2",{attrs:{id:"input-fields"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Field name")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Audio content")]),t._v(" "),o("td",[t._v("Accepts a content datapill, or audio content as a string. Workato will automatically convert the provided audio content into base-64 format.")])]),t._v(" "),o("tr",[o("td",[t._v("Language")]),t._v(" "),o("td",[t._v("The language code of the audio file, as listed "),o("a",{attrs:{href:"https://cloud.google.com/speech-to-text/docs/languages",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[t._v("Encoding")]),t._v(" "),o("td",[t._v("Encoding of the audio file. Note that Google has not supported MP3 input yet. MP3 file must be converted to one of "),o("a",{attrs:{href:"https://cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig#AudioEncoding",target:"_blank",rel:"noopener noreferrer"}},[t._v("these supported encodings"),o("OutboundLink")],1),t._v(" before inputing into this action.")])]),t._v(" "),o("tr",[o("td",[t._v("Sample rate in Hertz")]),t._v(" "),o("td",[t._v("Sample rate of the audio file. Valid value range is 8000-48000. Usual optimal rate is 16,000, but varies across encodings and settings. Please refer to "),o("a",{attrs:{href:"https://cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig#audioencoding",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google documentation"),o("OutboundLink")],1),t._v(" to figure out the best sample rate.")])]),t._v(" "),o("tr",[o("td",[t._v("Enable word time offsets")]),t._v(" "),o("td",[t._v("If true, the output includes a list of words, the start and end time offsets (timestamps) for those words.")])])])]),t._v(" "),o("h2",{attrs:{id:"output-fields"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[t._v("#")]),t._v(" Output fields")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Field name")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Transcript")]),t._v(" "),o("td",[t._v("The extracted text transcript from the audio.")])]),t._v(" "),o("tr",[o("td",[t._v("Confidence score")]),t._v(" "),o("td",[t._v("The confidence level for the entire transcription, with 0.0 as the lowest and 1.0 as the highest.")])]),t._v(" "),o("tr",[o("td",[t._v("Words")]),t._v(" "),o("td",[t._v("List of words extracted from the audio. This list contains the output fields below.")])]),t._v(" "),o("tr",[o("td",[t._v("- Start time")]),t._v(" "),o("td",[t._v("Time when the word appears in the audio.")])]),t._v(" "),o("tr",[o("td",[t._v("- End time")]),t._v(" "),o("td",[t._v("Time when the word ends in the audio.")])]),t._v(" "),o("tr",[o("td",[t._v("- Word")]),t._v(" "),o("td",[t._v("The extracted word.")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);