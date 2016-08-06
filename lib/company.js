'use strict';
module.exports = function(company) {
    var name = company.text().trim();
    if (name[name.length - 1] === ',') {
        name = name.substring(0, name.length - 1);
    }
    return name;
};
