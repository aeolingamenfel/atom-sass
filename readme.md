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
make `@import` statements simpler. Most of the documentation below assumes that
you have completed this step, for brevity.

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

## Usage

Each component is separated into its own SASS file, and each component can have
any number of configuration variables based on the components' function. To 
include a component, simply add `@import "atom-sass/sass/[component name]"` to 
the appropriate SASS file. See the [Components](#components) section for a list 
of components, their names, and any configuration variables they have.

## Components

See below for a list of components. 

### Container

**Name:** `container`<br />
**Import:** `@import "atom-sass/sass/container";`<br />
**Classes:** `.container`

Any element with this class will automatically fill the entire width of the
screen, unless the screen width is greater than `$atom_container_max`
(default: `1151px`). If the screen width is greater than that value, then the 
contents of the element will max out at that width, and margin will be evenly 
applied to the left and right sides to center the content.

In addition, a gutter (applied via padding) is added to the left and right side
for mobile devices, and screens smaller than `$atom_container_max`. 

#### Variables

##### $atom_container_max

**Type:** Unit<br />
**Default:** `1151px`

The maximum width of the content in the container.

##### $atom_container_gutter

**Type:** Unit<br />
**Default:** `15px`

The amount of padding to add to the left and right of the container as a gutter
for mobile devices.