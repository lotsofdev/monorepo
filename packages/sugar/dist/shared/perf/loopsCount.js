/**
 * @name                loopsCount
 * @namespace           shared.perf
 * @type                Function
 * @platform            js
 * @platform            node
 * @status              stable
 *
 * This function calculate how mane loops are executed in a certain timeframe (ms).
 * This is usefull to estimate the computer speed on which this code is running...
 *
 * @param       {Number}        [timeframe=100]         The timeframe to use for calculation
 * @return      {Number}                                 The count of loops executed in the passed timeframe
 *
 * @todo      tests
 *
 * @snippet         __loopsCount($1)
 *
 * @example       js
 * import { __loopsCount } from '@lotsof/sugar/perf';
 * __loopsCount(); // 122003
 *
 * @since       1.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function loopsCount(timeframe = 100) {
    let sysm = 0, start = new Date().getTime(), end = start;
    while (end - start === 0) {
        end = new Date().getTime();
    }
    start = end;
    while (end - start < timeframe) {
        sysm++;
        end = new Date().getTime();
    }
    return sysm;
}
//# sourceMappingURL=loopsCount.js.map