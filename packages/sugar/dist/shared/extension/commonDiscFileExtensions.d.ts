import { ICommonFileExtensionsSettings } from './commonFileExtensions.js';
/**
 * @name            commonDiscFileExtensions
 * @namespace       shared.extension
 * @type            Function
 * @platform        node
 * @platform        js
 * @status          stable
 *
 * This function allows you to get an array of common text file extensions with or without the dot
 *
 * @param       {Boolean}           withDot          If true, the dot will be added to the extension
 * @return     {Array<String>}                           The array of extensions
 *
 * @snippet         __commonDiscFileExtensions()
 *
 * @example         js
 * import { __commonDiscFileExtensions } from '@lotsof/sugar/extension';
 * const extensions = __commonDiscFileExtensions();
 *
 * @since       1.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __commonDiscFileExtensions(settings?: Partial<ICommonFileExtensionsSettings>): string[];
