function introduction(name) {
    return `Hi, my name is ${name}.`
}
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
function introductionWithLanguageOptional(firstName,language) {
    return `Hi, my name is Gracie and I am learning to program in JavaScript.`
}
function introductionWithLanguageOptional
(firstName,language= "JavaScript") {
    return `Hi, my name is ${firstName} and I am learning to program in ${language}.`
}