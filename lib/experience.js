'use strict';

module.exports = function (experience) {
    return {
        title: experience.find('.item-title').text(),
        companyName: experience.find('.item-subtitle').text(),
        dates: (function (dates) {
            var dd = dates.map(function(idx) {
                if (typeof idx === 'number') {
                    return dates[idx].innerHTML.trim();
                } else {
                    return undefined;
                }
            });
            var current = !dd[1] || ~dd[1].toLowerCase().indexOf('present') ? true : false;
            return {
                start: dd[0] ? new Date(dd[0]).toJSON() : undefined,
                end: dd[1] && !current ? new Date(dd[1]).toJSON() : undefined,
                current: current
            };
        })(experience.find('.date-range time')),
        locality: experience.find('.location').text(),
        description: experience.find('.description').html()
    };
};
