module.exports = function parseStringAsArrary(arrayAsString) {
    return arrayAsString.split(',').map(tech => tech.trim()); 
}