# Build Unity Games

Command line to build Unity games


## Installation 

To install a stable release use:

    yarn global add @frontekip/unity
    
or use npm:

    npm install @frontekip/unity -g


## Quickstart 

    unity --help
    
```JS
Usage
    $ unity <command>
Options
    --version, -v   Version number
For more information run a command with the --help flag
    $ unity --help
```

#### Build

    $ unity --build=<macos|windows> --version=<UnityVersion>
    
##### Example

```JS

// macos build
unity --build=macos --version=2020.2.1f1

// windows build
unity --build=windows --version=2020.2.1f1
```
    
After these commands, you can look in the `.build` folder.
