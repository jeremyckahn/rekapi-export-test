# Rekapi Export Tester

[Rekapi](http://rekapi.com/) has APIs to [export](http://rekapi.com/dist/doc/classes/Rekapi.html#method_exportTimeline) and [import](http://rekapi.com/dist/doc/classes/Rekapi.html#method_importTimeline) animations to and from JSON.  [Stylie](http://jeremyckahn.github.io/stylie/) is a graphical tool that allows a user to create animations and export them either as CSS `@keyframe` code, or as JSON to be consumed via Rekapi's `importTimeline` function.  This tool is a demonstrative utility that allows you to easily import and test out the Rekapi JSON code created by Stylie.

## Why?

If you are using Stylie to create a lot of animations, it may make more sense to load the Rekapi library and each animation as JSON, rather than CSS, to be imported and run with Rekapi.  The focal point of this app is the part of [`app/scripts/components/animation-preview/view.js` that imports the animation JSON and associates the actor with a rendering context](https://github.com/jeremyckahn/rekapi-export-test/blob/8d2dcea71f91d7468c014b50abf6cebd450fc9ac/app/scripts/components/animation-preview/view.js#L34-L40).  **You will need to do something like this in your project if you wish to wire up Stylie's generated JSON code to a DOM element.**
