/**
 * @name                writeTmpFileSync
 * @namespace           node.fs
 * @type                Function
 * @async
 * @platform            node
 * @status              stable
 *
 * Create a temporary file on the disk with the passed content and returns the path
 * to it.
 *
 * @param       {Any}              data          The data to write in the file
 * @param       {TWriteTmpFileSyncSettings}         [settings={}]           Some settings to customize your temp file creation
 * @return      {Promise}                           A promise that will be resolved when the writeTmpFileSync is completed with the path to it
 *
 * @setting         {String}            [path=null]         A path relative to the temp folder to store your file
 *
 * @todo      tests
 *
 * @snippet         __writeTmpFileSync($1, $2)
 *
 * @example       js
 * import { __writeTmpFileSync } from '@lotsof/sugar/fs';
 * const path = __writeTmpFileSync('Hello World');
 *
 * @since           1.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export type TWriteTmpFileSyncSettings = {
    path: string;
};
export default function __writeTmpFileSync(data: any, settings?: Partial<TWriteTmpFileSyncSettings>): string;
