// Returns the unique ID of the PI or MAC CPU
const { exec } = require("child_process");
const os = require('os');

async function getCpuId() {
    let cmd = 'cat /proc/cpuinfo | grep Serial';
    if (os.platform() == 'darwin') cmd = "system_profiler SPHardwareDataType | grep Serial";

    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) reject(`Unable to retrieve CPU ID. ${error.message}`);
            if (stderr) reject(`Unable to retrieve CPU ID. ${stderr}`);
            let n = stdout.indexOf(':');
            let result = stdout.slice(n + 1).trim();
            resolve(result);
        });
    });
}

// Usage:
// async function get() {
//     try{
//         let result = await this.getCpuId();
//         return(result);
//     } 
//         catch (error) {
//             console.error(error);
//             return(error);
//           }
// };

module.exports = { getCpuId } ;
