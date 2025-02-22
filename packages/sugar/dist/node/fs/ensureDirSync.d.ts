/**
 * @name                ensureDirSync
 * @namespace           node.fs
 * @type                Function
 * @platform            node
 * @status              stable
 *
 * Ensure that the passed directory exists. If not, will be created recursively... (sync)
 *
 * @param       {String}              dir           The directory to ensure that it exists...
 * @return      {Promise}                           A promise that will be resolved once the directory has been created if needed...
 *
 * @todo        tests
 *
 * @snippet         __ensureDirSync($1)
 *
 * @example       js
 * import { __ensureDirSync } from '@lotsof/sugar/fs';
 * __ensureDirSync('my/cool/dir');
 *
 * @see             https://github.com/jprichardson/node-fs-extra
 * @since         1.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __ensureDirSync(dir: string): void;
