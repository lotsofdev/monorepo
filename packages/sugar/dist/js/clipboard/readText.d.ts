/**
 * @name                readText
 * @namespace           js.clipboard
 * @type                Function
 * @platform            js
 * @async
 * @status              stable
 *
 * This function allows you to read the content of the clipboard
 *
 * @return      {Promise}                          A promise fullfilled when the content has been read correctly
 *
 * @todo     tests
 *
 * @snippet         __readText($1)
 *
 * @example         js
 * import { __copyText, __readText } from '@lotsof/sugar/clipboard';
 * await __readText();
 *
 * @since           1.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __readText(): Promise<string>;
