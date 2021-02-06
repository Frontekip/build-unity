const path = require('path');
var Table = require('cli-table3');

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

const infoTable = (os, version) => {
    const table = new Table();

    table.push(
        { "OS": os },
        { "Unity Version": version },
        { "Unity Path": getUnityPath(version) },
        { "Project Path": PROJECT_PATH },
        { "Build Path": BUILD_PATH },
    );

    return console.log(table.toString());
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
    getUnityPath,
    infoTable
}