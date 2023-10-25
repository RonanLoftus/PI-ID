// Returns the unique ID of the PI CPU
const { exec } = require("child_process");

getCpuId = function () {
    let cmd = 'cat /proc/cpuinfo | grep Serial';

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


// async function get() {
//     try{
//         let result = await getCpuId();
//         console.log(result);
//     } 
//         catch (error) {
//             console.error(error);
//           }
// };
// get();


module.exports = getCpuId;