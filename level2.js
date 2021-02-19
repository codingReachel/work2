//1冒泡排序
// var arr = []
// function bubbleSort(arr){
//     for(var i=arr.length; i>0; i--){
//         for(var j=0; j<i; j++){
//             if(arr[j] > arr[j+1]){
//                 var temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }
// bubbleSort()

//2数组扁平化
// var arr = [[1, 2], [3, 4,], [6, 7, 9, [11, 12, [12, 13, [14]]]], 10]

// function even(arr){
//     return arr.toString().split(',').map(function(item){
//         return Number(item)
//     })
// }

// even(arr)   // [ 1, 2, 3, 4, 6, 7, 9, 11, 12, 12, 13, 14, 10 ]

//3属性排序
var arr = [{id:10,name:'kc'},{id:8,name:'hy'},{id:15,name:'pipi'},{id:2,name:'mama'}]
function selectComp(property){
    return function(a, b){
        return a[property] - b[property]
    }
}
arr.sort(selectComp('id'))    