const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    
if ( Array.isArray(members) == false){
    return false
} else if (Array.isArray(members) == true){
    let arr = [];
for(let i=0;i<members.length;i++){
        if (typeof members[i]=='string'){
            arr.push(members[i])
        }
}
    return arr.join(',').replace(/ /g,"").split(',').map(el => el.slice(0,1)).sort().join('').toUpperCase().match(/[A-Z]/gi).join('')
}
}
