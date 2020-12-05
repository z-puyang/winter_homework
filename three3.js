//lv0
let arr = [1,5,6,7,"8",10]
var string_value = String(number); 
function getSum(arr){
  var sum = arr.reduce((pre, cur) => {
	return pre + cur;
})
  return sum;
}
console.log(sum)

//let arr = [1,5,6,7,"8",10]
//注意转化类型
//var arr = arr.map(Number);
/*function getSum(arr){
  //code
  var sum = 0;
  for (var i=arr.length-1; i>=0; i--) {
    sum += arr[i];
  }
  return sum;
}
console.log(sum)//37*/
/*var i=0;
for (
    Number(arr[i]);
    let arr1[]; 
    arr1= arr.map(Number);
    i++;
)

/*function s(arr) {
  //var s = 0;
  for (var i=arr.length-1; i>=0; i--) {
    s += arr[i];
  }
  return s;
}
console.log(s)//37*/

//let arr = [1,5,6,7,"8",10]
//注意转化类型
/*function getSum(arr){
  //code
  var sum=0;
			for(var i in arr){
				sum+=arr[i];
			}

  return sum;
}
console.log(sum)//37
*/

//lv0(1)
/*alert("Hello World1");
document.write("Hello World2");
var mystr="Hello";
  document.write(mystr+"World3");
var mystr="Hello World4";
  document.write(mystr); 
*/


//lv1(1)
let str = "can-enter-volunteer-organization"
function change(str) {
    console.log(str.replace(/-./g, chars => chars[1].toUpperCase()));
}
change(str)        