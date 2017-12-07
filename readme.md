# Atom SASS

An extremely simple set of SASS components to help build out the basic layout
of a given site. Ignores style as much as possible, focusing on layout, and 
built for responsive design.

## Installation

### Getting the SASS Files

To get the SASS files, just include `atom-sass` in your NPM package:

```
npm i --save-dev atom-sass
```

### (Optional) Update SASS includePaths for Easy Imports

You can optionally also update your SASS `includePaths` configuration to
make `@import` statements simpler.

To do so, just add `node_modules/` to your `includePaths` configuration. For
example:

```Javascript
const sassConfig = {
    includePaths: [
        "node_modules/"
    ]
};
```

Which results in:

**Before:**

```SCSS
@import "path/to/node_modules/atom-sass/sass/split"; 
```

**After:**

```SCSS
@import "atom-sass/sass/split";
```

