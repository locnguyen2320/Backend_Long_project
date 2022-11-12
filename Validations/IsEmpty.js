function validateString(input){
    if(
        typeof(input) !== "string" || 
        input === null || 
        input === undefined || 
        input.trim() === ""
    )
        return true
    return false
}

function validateNumber(input){
    if(
        typeof(input) !== "number" || 
        input === null || 
        input === undefined 
    )
        return true
    return false
}




module.exports = {validateNumber, validateString}

