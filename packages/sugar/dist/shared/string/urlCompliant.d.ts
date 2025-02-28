/**
 * @name            urlCompliant
 * @namespace       shared.string
 * @type            Function
 * @platform        js
 * @platform        node
 * @status          beta
 *
 * This function take a string and return a version of it that you can safely use
 * in url for example. It replace spaces with '-' as well as all the special characters
 * with their simple version like "à" will be replaces by "a"
 *
 * @param       {String}        string         The string to process
 * @return      {String}                        The processed string
 *
 * @snippet         __urlCompliant($1)
 *
 * @todo        tests
 *
 * @example         php
 * import { __urlCompliant } from '@lotsof/sugar/string';
 * __urlCompliant('Hello world'); // => hello-world
 *
 * @since       1.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export type TUrlCompliantSettings = {
    exclude: string[];
};
export default function __urlCompliant(str: string, settings?: TUrlCompliantSettings): string;
