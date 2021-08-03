/**
 * The function takes three arguments corresponding to R,G and B values.
 * The function converts these values to corresponding HEX color code
 */
const rgbToHexConversion = (...rgbValues) => {
    let hex = "#";
    if (rgbValues.length > 3) {
        throw new Error("Invalid Input");
    }
    rgbValues.forEach((rgbValue) => {
        if (isNaN(rgbValue) || rgbValue > 255) {
            throw new Error("Invalid Input");
        }
        let rgbStr = rgbValue.toString(16);
        if (rgbStr.length < 2){
            rgbStr = "0" + rgbStr;
        }
        hex += rgbStr;
    })
    return hex;
};

module.exports = rgbToHexConversion;
