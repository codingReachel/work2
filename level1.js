var arr = []
//1输出重复元素
function recur(arr){
  var d = {}
  var repeat = []
  for(var i=0; i<arr.length; i++){
    if(d[arr[i]]){
      d[arr[i]]++ 
    }
    else{
      d[arr[i]]=1
    }
  }
  for(var key in d){
    if(d[key] > 1){
      repeat.push(key)
    }
  }
  return repeat
}

//2统计指定元素出现次数
// function count(arr,n){
//   var d = {}
//   for(var i=0; i<arr.length; i++){
//     if(d[arr[i]]){
//       d[arr[i]]++
//     }
//     else{
//       d[arr[i]]=1
//     }
//   }
//   var num=d[n]
//   return num
// }

recur('ABCDEEEF,GHJKKM') 
// count('ABCDEEF,GHJKKM','E')