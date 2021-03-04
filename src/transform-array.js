const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    for (let i=0;i<arr.length;i++){
         if (arr == []){
            return []
        }else if(arr[i] === '--double-next'){
                arr[i] = arr[i+1] 
            }else if(arr[i] === '--double-prev'){
                arr[i] = arr[i-1] 
            }else if(arr[i] === '--discard-next'){
                delete arr[i+1] 
               }else if(arr[i] === '--discard-prev'){
                   delete arr[i-1] 
               }
        }
        return arr.filter(Number)
};