/**
 * @name                unquote
 * @namespace           shared.string
 * @type                Function
 * @platform            js
 * @platform            node
 * @status              stable
 *
 * Remove the quotes of a string
 * Types of quotes removed :
 * - `"`, `'`, `”`, '`'
 *
 * @param    {String}    string    The string to process
 * @param    {TUnquoteSettings}    [settings={}]    Some settings to configure your unquoting process
 * @return    {String}    The unquoted string
 *
 * @todo      tests
 *
 * @snippet         __unquote($1)
 *
 * @example    js
 * import { __unquote } from '@lotsof/sugar/string'
 * __unquote("'Hello world'") // "Hello world"
 *
 * @since     1.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __unquote(string, settings) {
    const finalSettings = Object.assign({ quotesToRemove: ['"', "'", '”', '`'] }, (settings !== null && settings !== void 0 ? settings : {}));
    // trim the string just in case
    string = string.trim();
    // loop on each quotes to remove
    finalSettings.quotesToRemove.forEach((quote) => {
        if (string.substr(0, 1) === quote && string.substr(-1) === quote) {
            string = string.substr(1);
            string = string.substr(0, string.length - 1);
            // break the loop to avoid unquoting multiple levels
            return;
        }
    });
    // return the processed string
    return string;
}
//# sourceMappingURL=unquote.js.map