const {isValidDate} = require("../helpers/moment")

function validateString(input) {
  if (
    typeof (input) !== "string" ||
    input === null ||
    input === undefined ||
    input.trim() === ""
  )
    return true
  return false
}

function validateNumber(input) {
  if (
    typeof (input) !== "number" ||
    input === null ||
    input === undefined
  )
    return true
  return false
}

function validateArray(input) {
  if (
    typeof (input) !== "array" ||
    input === null ||
    input === undefined ||
    input.length <= 0
  )
    return true
  return false
}
function validateEnum(Enum, input) {
  return !Object.keys(Enum).includes(input)

}

function validateEmail(input) {
  const checkEmailInput = input
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  if (
    typeof input !== "string" ||
    input === null ||
    input === undefined ||
    !checkEmailInput
  )
    return true;
  return false;
}

function validatePhone(input) {
  const checkPhoneInput = input
    .toLowerCase()
    .match(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g);
  if (
    typeof input !== "string" ||
    input === null ||
    input === undefined ||
    !checkPhoneInput
  )
    return true;
  return false;
}

function validateDate(input) {
  if (
    typeof input !== "string" ||
    input === null ||
    input === undefined ||
    isValidDate(input)
  )
    return false
  return true;
}


module.exports = { validateArray, validateNumber, validateString, validateEnum, validateEmail, validatePhone, validateDate }

