/**
 * @name            getTheme
 * @namespace       js.theme
 * @type            Function
 * @platform        js
 * @status          stable
 *
 * This function allows you to get the theme set on the website/application through
 * the `setTheme` function.
 *
 * @param           {String}          defaultTheme        The default theme to return if no theme has been set
 * @param           {TGetThemeSettings}          [settings={}]         Some settings to configure your theme getter
 * @return          {String}                              The theme name
 *
 * @setting         {String}          [cookieName='theme']         The cookie name to use to store the theme
 *
 * @todo      tests
 *
 * @snippet         __getTheme($1)
 *
 * @example         js
 * import { __getTheme } from '@lotsof/sugar/theme';
 * __getTheme('dark');
 *
 * @since       1.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export type TGetThemeSettings = {
    cookieName: string;
};
export default function getTheme(defaultTheme: string, settings?: TGetThemeSettings): string;
