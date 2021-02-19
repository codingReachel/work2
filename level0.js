var str = 'today is a happy day'

//字符串分割+首字母替换
// function change(str){
// 	var arr = str.toLowerCase().split(" ")
//     for(var i=0; i<arr.length; i++){
//         var char = arr[i].charAt(0)
//         arr[i] = arr[i].replace(char, function(s){return s.toUpperCase();})
//     }
//     return arr.join(" ")
// }

//正则表达式+ES6
function change(str){
    return str.toLowerCase().replace(/( |^)[a-z]/g, (L)=>L.toUpperCase())
}

change(str)     //'Today Is A Happy Day