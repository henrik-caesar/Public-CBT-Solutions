const jobId=process.env.APICA_JOB_ID || ""
var crsResult = {
    returncode: 0,
    stdout: "",
    start_timestamp_ms: Date.now(),
    value: 1,
    end_timestamp_ms: Date.now(),
    stderr: "",
    message: `Hello JavaScript. Job Id= ${jobId}`,
};


console.info(JSON.stringify(crsResult, null, 2));