/**
 * @name              md5
 * @namespace         shared.crypto
 * @type              Object
 * @platform          js
 * @status            stable
 *
 * Expose two function named "encrypt" and "decrypt" that you can use to process your content using the md5 algorithm
 *
 * @snippet         __md5.encrypt($1)
 *
 * @example         js
 * import { __md5 } from '@lotsof/sugar/crypto';
 * __md5.encrypt('hello world');
 *
 * @since         1.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
declare const _default: {
    /**
     * @name        encrypt
     * @type          Function
     *
     * Encrypt
     *
     * @param       {String}      message         The message to encrypt
     * @return      {String}                      The encrypted string
     *
     * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
     */
    encrypt: (message: any) => string;
    /**
     * @name        decrypt
     * @type        Function
     *
     * Decrypt
     *
     * @param       {String}        message         The message to decrypt
     * @return      {String}                        The decrypted message
     *
     * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
     */
    decrypt: (message: string) => any;
};
export default _default;
