/**
 * @name                isMmddyyyyDate
 * @namespace           shared.is
 * @type                Function
 * @platform            js
 * @platform            node
 * @status              stable
 *
 * Check if is a valid mm.dd.yyyy date
 * This will match : mm.dd.yyyy | mm/dd/yyyy | mm-dd-yyyy | mm dd yyyy
 *
 * @param    {String}    date    The date to check
 * @return    {Boolean}    true if is valid, false if not
 *
 * @todo      tests
 *
 * @snippet         __isMmddyyyyDate($1)
 *
 * @example    js
 * import { __isMmddyyyyDate } from '@lotsof/sugar/is'
 * if (__isMmddyyyyDate('12.25.2018')) {
 *     // do something cool
 * }
 *
 * @since           1.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __isMmddyyyyDate(date: string): boolean;
