/**
 * @name            distanceFromElementTopToViewportTop
 * @namespace       js.dom.distance
 * @type            Function
 * @platform        js
 * @status          stable
 *
 * This function take an element as parameter and returns you to distance it has
 * from the element top to the viewport top in pixels
 *
 * @param       {HTMLElement}       elm             The element you want to get the distance from
 * @return      {Number}                            The calculated distance
 *
 * @snippet         __distanceFromElementTopToViewportTop($1)
 *
 * @example         js
 * import { __distanceFromElementTopToViewportTop } from '@lotsof/sugar/dom';
 * __distanceFromElementTopToViewportTop(myElement); // => 23
 *
 * @since       1.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __distanceFromElementTopToViewportTop(elm: HTMLElement): number;
