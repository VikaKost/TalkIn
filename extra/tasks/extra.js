/*let arr = [-2,1,-3,4,-1,2,1,-5,4];
let sum = 0;
let ans = arr[0];
let ans_l = 0;
let ans_r = 0;
let minus_pos = -1;

for(let i=0; i < arr.length; i++){
  sum += arr[i];
  if (sum > ans) {
    ans = sum;
  }

  if (sum < 0) {
    sum = 0;
  }

}
console.log(ans);

 */

let arr = [7,6,4,3,1];
let min = arr[0];
let max = arr[1];
let s = 0;
let sum = 0;
let minFl = true;
let maxFl = false;
let fl = false;



for (let i = 1; i < arr.length-1; i++){
  if(arr[i-1] < arr[i] && arr[i] > arr[i+1]){
    max = arr[i];
    maxFl = true;
  }else if(arr[i-1] > arr[i] && arr[i] < arr[i+1]){
    min = arr[i];
    minFl = true;
  }else{
    fl = true;
  }

  if (minFl && maxFl ){
    sum +=(max-min);
    maxFl = false;
    minFl = false;
  }

  }
if (arr[arr.length-1] > min && fl === true){
  max = arr[arr.length-1];
  sum +=(max-min);
}


console.log(sum);