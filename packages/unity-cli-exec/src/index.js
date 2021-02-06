const exec = require('child_process').exec;
const ora = require('ora');

module.exports = {
    cmd(title, cmd, callback) {
        const spinner = ora(title).start();

        exec(cmd, (error, stdout, stderr) => {

            // Spinner Stop
            spinner.stop();
            
            error ? spinner.fail("Building ERROR") : spinner.succeed("Build SUCCESS");

            // show std
            console.log(stdout);
            console.log(stderr);

            // run callback
            callback();
        });
    }
}