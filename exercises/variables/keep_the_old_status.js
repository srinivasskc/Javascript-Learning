// Keep the Old Status
// Sometimes you need both the old value and the new value. Save the old value before you reassign the changing variable.
// Your task: A page starts with currentStatus set to "draft". Store that original value in previousStatus, change currentStatus to "published", then log both statuses.

let currentStatus="draft"
let previousStatus=currentStatus
currentStatus="published"

console.log(currentStatus)
console.log(previousStatus)