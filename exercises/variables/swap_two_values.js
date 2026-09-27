// Swap Two Values
// Two server variables need to trade values. This is a common reassignment pattern: save one value temporarily before it gets overwritten.
// Your task: Swap primaryServer and backupServer without typing either server name as a string again. Log the new primary server, then the new backup server.
let primaryServer = "api-1";
let backupServer = "api-2";

let temp = primaryServer;
primaryServer = backupServer;
backupServer = temp;

console.log(primaryServer);
console.log(backupServer);