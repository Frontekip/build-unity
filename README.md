# Unity Command Line

Command line to build Unity games


## Installation 

To install a stable release use:

    yarn global add unity-cli
    
or use npm:

    npm install unity-cli -g

## Quickstart 

    unity-cli --help
    
```JS
Usage
    $ unity-cli <command>
Options
    --build, Build platform name <macos|windows>
    --version, Unity build version
```

#### Build

    $ unity-cli --build=<macos|windows> --version=<UnityVersion>
    
##### Example

```JS

// macos build
unity-cli --build=macos --version=2020.2.1f1

// windows build
unity-cli --build=windows --version=2020.2.1f1
```
    
After these commands, you can look in the `.build` folder.
