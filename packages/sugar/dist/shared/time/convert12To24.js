import { __pad } from '@lotsof/sugar/number';
/**
 * @name                 convert12To24
 * @namespace            shared.time
 * @type                 Function
 * @platform             js
 * @platform             node
 * @status               stable
 *
 * Convert a 12 hours time to a 24 hours time
 *
 * @param       {String|Number}        time        The 12 hours time to convert formatted like "12pm" or "12:30am"
 * @return      {String}                    The 24 hours time like "23:00"
 *
 * @todo      tests
 *
 * @snippet         __convert12To24($1)
 *
 * @example    js
 * import { __convert12To24 } from '@lotsof/sugar/time'
 * __convert12To24('12pm') // => '12:00'
 *
 * @since           1.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function convert12To24(time) {
    var _a;
    if (typeof time !== 'string' ||
        !time.match(/^[01]?[0-9]\:?([012345][0-9])?(am|pm)$/)) {
        throw new Error('[convert12To24] Invalid time format. Must be a string like "12pm" or "12:30am"');
    }
    const suffix = (_a = time.match(/(am|pm)/g)) === null || _a === void 0 ? void 0 : _a[0];
    const [hours, minutes] = time.replace(suffix, '').split(':');
    let finalHours, finalMinutes = parseInt(minutes) || 0;
    if (suffix === 'pm') {
        finalHours = parseInt(hours) + 12;
    }
    else {
        finalHours = parseInt(hours);
    }
    return `${__pad(finalHours, 2)}:${__pad(finalMinutes, 2)}`;
}
//# sourceMappingURL=convert12To24.js.map