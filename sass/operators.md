 # OPERATORS

  Doing math in your CSS is very helpful. Sass has a handful of standard
  math operators like +, -, *, /, and %. In our example we're going to do
  some simple math to calculate widths for an aside & article.

     .container { width: 100%; }

     article[role="main"] {
       float: left;
       width: 600px / 960px * 100%;
     }

     aside[role="complimentary"] {
       float: right;
       width: 300px / 960px * 100%;
     }

  We've created a very simple fluid grid, based on 960px. Operations in Sass
  let us do something like take pixel values and convert them to percentages
  without much hassle. The generated CSS will look like:

     .container {
       width: 100%;
     }

     article[role="main"] {
       float: left;
       width: 62.5%;
     }

     aside[role="complimentary"] {
       float: right;
       width: 31.25%;
     }

 # EXERCISE

  Define a variable $page-width with a value of 1400px, and a variable
  $padding with a value of 20px. Then, define a rule for a selector
  .container, set its padding to the value of $padding, and its width to 0.8
  times the value of $page-width, minus twice the value of $padding.

 ─────────────────────────────────────────────────────────────────────────────

 ## HINTS

  To make a Sass (SCSS) stylesheet, create a new file with a .scss extension
  and start writing SCSS. When you are done, you must run:

     $ learn-sass verify stylesheet.scss