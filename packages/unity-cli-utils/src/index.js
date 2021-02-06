const path = require('path');

const ARGS_OPTIONS = {
    permissive: true
};

const ARGS = {
    '--build': String,
    '--version': String,

    // Aliases
    '--help': Boolean,
};

const PROJECT_PATH = path.resolve('.');
const BUILD_PATH = `${PROJECT_PATH}/.builds`;

const OS_COMMAND_MAPPER = {
    macos: `-buildOSXUniversalPlayer ${BUILD_PATH}/MacOS/game`,
    windows: `-buildWindows64Player ${BUILD_PATH}/Windows/game`
};


const getUnityPath = (unityVersion) => {
    return `/Applications/Unity/Hub/Editor/${unityVersion}/Unity.app/Contents/MacOS/Unity`;
}

const buildCommand = (os, unityVersion) => {
    const unityPath = getUnityPath(unityVersion);
    return `${unityPath} -quit -batchmode -logFile stdout.log -projectPath ${PROJECT_PATH} ${OS_COMMAND_MAPPER[os]}`
}

module.exports = {
    ARGS,
    ARGS_OPTIONS,
    OS_COMMAND_MAPPER,

    // paths
    PROJECT_PATH,
    BUILD_PATH,

    // functions
    buildCommand,
    getUnityPath
}