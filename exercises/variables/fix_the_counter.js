// Fix the Counter
// This retry counter is supposed to increase twice and log 2, but the current declaration prevents reassignment.
// Your task: Fix the declaration so the counter can change. Keep the two updates and the log.

let retries = 0;

retries = retries + 1;
retries = retries + 1;

console.log(retries);
