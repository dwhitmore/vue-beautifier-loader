const vueBeautify = require('vue-beautify');
const loaderUtils = require('loader-utils');
const fs = require("fs");

module.exports = function (source) {
    const options = loaderUtils.getOptions(this);
    var jsBeautityOptions = options.jsBeautify || {};
	var formatted = vueBeautify(source, jsBeautityOptions);

    if (source !== formatted) {
        fs.writeFile(this.resourcePath, formatted, this.encoding, err => {
            if (err) throw err;
        });
    }    
};