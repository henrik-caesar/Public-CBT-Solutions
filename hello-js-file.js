const fs = require('fs')

const jobId=process.env.APICA_JOB_ID || ""
const results = {
    returncode: 0,
    stdout: "",
    start_timestamp_ms: Date.now(),
    value: 1,
    end_timestamp_ms: Date.now(),
    stderr: "",
    message: `Hello JavaScript. Job Id= ${jobId}`,
};


if (jobId) {
    let resultFile = `result-${jobId}.json`
    fs.writeFileSync(resultFile,JSON.stringify(results, null, 2))
} else {
    console.info(results)
}
process.exit(results.returncode);



console.info(JSON.stringify(crsResult, null, 2));