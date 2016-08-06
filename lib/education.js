'use strict';

module.exports = function (education) {
	var subtitle = education.find('.item-subtitle').text().split(', ');

    return {
        name: education.find('.item-title').text(),
        link: education.find('.item-title a[href]').attr('href'),
        program: '', // TODO - get: 'High School', 'College', 'Others'
        degree: subtitle[0],
        major: subtitle[1],
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
        })(education.find('.date-range time'))
    };
};
