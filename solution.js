let data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]
let checksum = 0

function findChecksum(data){
for (array of data){
  console.log(findDifference(array))
   checksum = checksum + (findDifference(array))
  console.log("in progress", checksum)
}
return checksum
console.log("finished", checksum)
}



function findDifference (arr){
    let differences = [];
    for(let i = 1; i < arr.length; i++){
        for(let j = 0; j < i; j++){
            if(arr[i] > arr[j]){
                differences.push(arr[i]-arr[j]);
            }
        }
    }
    return Math.max.apply( Math, differences );
}
