import { ICommonFileExtensionsSettings } from './commonFileExtensions.js';
/**
 * @name            commonExecutableFileExtensions
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
 * @snippet         __commonExecutableFileExtensions()
 *
 * @example         js
 * import { __commonExecutableFileExtensions } from '@lotsof/sugar/extension';
 * const extensions = __commonExecutableFileExtensions();
 *
 * @since       1.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __commonExecutableFileExtensions(settings?: Partial<ICommonFileExtensionsSettings>): string[];
