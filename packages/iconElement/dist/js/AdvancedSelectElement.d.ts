import __LitElement from '@lotsof/lit-element';
import { PropertyValueMap } from 'lit';
import '../../src/css/AdvancedSelectElement.bare.css';
import type { TAdvancedSelectElementApi, TAdvancedSelectElementClasses, TAdvancedSelectElementItem, TAdvancedSelectElementItemsFunctionApi } from '../shared/AdvancedSelectElement.types.js';
/**
 * @name                AdvancedSelectElement
 * @as                  Advanced Select Input
 * @namespace           js
 * @type                CustomElement
 * @interface           ./interface/AdvancedSelectElementInterface.ts
 * @menu                Styleguide / UI              /styleguide/ui/s-filtrable-einput
 * @platform            html
 * @status              beta
 *
 * This component represent a filtrable input to display and filter a list of items easily.
 *
 * @feature           Framework agnostic. Simply webcomponent.
 * @feature           Fully customizable
 * @feature           Built-in search
 *
 * @attribute       {String|Function}         [items]                         The items to display in the dropdown. Can be a JSON string, a url to an api endpoints, a string that represent a query selector to a script tag, or a function that return the items
 * @attribute       {String}        [value=value]                                   The value property to use to display the items
 * @attribute       {String}        [label=label]                                   The label property to use to display the items
 * @attribute       {Boolean}       [showKeywords=false]                            Specify if you want to show the keywords in the dropdown
 * @attribute       {String}        [emptyText=No items found...]                   The text to display when no items are found
 * @attribute       {String}        [loadingText=Loading, please wait...]           The text to display when the component is in loading state
 * @attribute       {Function}      [filterValuePreprocess]                         A function to preprocess the filter value before filtering the items
 * @attribute       {String}        [hotkey=null]                                   A hotkey to focus the input
 * @attribute       {Function}      [filterItems=null]                              A function to filter the items
 * @attribute       {Number}        [minChars=1]                                    The minimum characters to type before filtering the items
 * @attribute       {Array}         [filtrable=[id,value,label]]                    The properties to filter on
 * @attribute       {Array}         [highlightable=[label]]                         The properties to highlight in the dropdown
 * @attribute       {Function}      [templates=null]                                A function to render the templates
 * @attribute       {Number}        [closeTimeout=100]                              The timeout to wait before closing the dropdown
 * @attribute       {Boolean}       [notSelectable=false]                           Specify if the component is not selectable
 * @attribute       {Number}        [maxItems=-1]                                   The maximum items to display in the dropdown
 * @attribute       {TAdvancedSelectElementClasses}        [classes=null]                                  Some classes to apply to the different elements
 * @attribute       {Boolean}       [inline=false]                                  Specify if the dropdown should be displayed inline
 *
 * @event           sAdvancedSelect.items                Dispatched when the items are setted of updated
 * @event           sAdvancedSelect.select               Dispatched when an item has been selected
 * @event           sAdvancedSelect.preselect            Dispatched when an item has been preselected
 * @event           sAdvancedSelect.close                Dispatched when the dropdown is closed
 * @event           sAdvancedSelect.open                 Dispatched when the dropdown is opened
 * @event           sAdvancedSelect.reset                Dispatched when the input is resetted
 * @event           sAdvancedSelect.loading              Dispatched when the element enterd in loading state
 * @event           sAdvancedSelect.loaded               Dispatched when the element exit the loading state
 *
 * @support         chromium
 * @support         firefox
 * @support         safari
 * @support         edge
 *
 * @import          import { define as __AdvancedSelectElementDefine } from '@lotsof/advancedSelect-component';
 *
 * @snippet         __AdvancedSelectElementDefine($1)
 *
 * @install           shell
 * npm i @lotsof/advancedSelect-component
 *
 * @install           js
 * import __SAdvancedSelectElement from '@lotsof/advancedSelect-component';
 * __SAdvancedSelectElement.define();
 *
 * @example         html            Simple example
 * <template id="items">
 *   [{"title":"Hello","value":"hello"},{"title":"world","value":"world"}]
 * </template>
 * <advancedSelect items="#items" label="title" filtrable="title">
 *   <input type="text" class="s-input" placeholder="Type something..." />
 * </advancedSelect>
 *
 * @example         js
 * import __SAdvancedSelectElement from '@lotsof/advanced-select-element';
 * __SAdvancedSelectElement.define('my-cool-filtrable-input');
 *
 * @example         html        Custom templates and items
 * <my-cool-filtrable-input>
 *    <input type="text" class="s-input" placeholder="Type something..." />
 * </my-cool-filtrable-input>
 *
 * @example         js
 * import __SAdvancedSelectElement from '@lotsof/advanced-select-element';
 * __SAdvancedSelectElement.define('my-cool-filtrable-input', {
 *     items: async () => {
 *         // you can get your items however you want
 *         // const request = await fetch('...');
 *         // const items = await request.json();
 *         return [{title: 'Hello', value: 'World'},{title: 'Plop', value:'Yop}];
 *     }
 * });
 *
 * @since           2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default class AdvancedSelectElement extends __LitElement {
    private _displayedMaxItems;
    private _filterValue;
    private _items;
    private _filteredItems;
    private _isLoading;
    items: any[] | ((api: TAdvancedSelectElementItemsFunctionApi) => any[]);
    value: string | Function;
    label: string | Function;
    showKeywords: boolean;
    emptyText: string;
    loadingText: string;
    filterValuePreprocess?: Function;
    hotkey?: string;
    filterItems?: Function;
    minChars: number;
    filtrable: string[];
    highlightable: string[];
    templates?: (api: TAdvancedSelectElementApi) => any;
    closeTimeout: number;
    notSelectable: boolean;
    maxItems: number;
    classes: TAdvancedSelectElementClasses;
    inline: boolean;
    private _$container;
    private _$list;
    private _$dropdown;
    private _$input;
    private _$form?;
    private _templatesFromHtml;
    private _isArrowUsed;
    private _isArrowUsedTimeout?;
    private _baseTemplates;
    constructor();
    protected mount(): Promise<void>;
    _loadingTimeout: any;
    protected updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    protected firstUpdated(): Promise<void>;
    private _initListeners;
    private _grabTemplatesFromDom;
    private _renderTemplate;
    /**
     * @name          preselect
     * @type          Function
     *
     * Preselect an item in the dropdown
     *
     * @param       {String|TAdvancedSelectElementItem}        item        The item to preselect. Can be a string that represent the id of the item, or the item itself
     * @param       {Object}        [settings={}]           Some settings to configure your preselection
     *
     * @since       1.0.0
     */
    preselect(item: string | TAdvancedSelectElementItem, settings?: {
        preventFocus?: boolean;
        scrollIntoView?: boolean;
    }): void;
    /**
     * @name        resetPreselected
     * @type        Function
     *
     * Reset the preselected item
     *
     * @since       1.0.0
     */
    resetPreselected(): void;
    /**
     * @name        setSearch
     * @type        Function
     *
     * Set the search value and refresh items accordingly
     *
     * @param       {String}        value       The value to set
     *
     * @since       1.0.0
     */
    setSearch(value: string): Promise<void>;
    /**
     * @name       select
     * @type       Function
     *
     * Select an item in the dropdown
     *
     * @param       {String|TAdvancedSelectElementItem}        item        The item to select. Can be a string that represent the id of the item, or the item itself
     *
     * @since       1.0.0
     */
    select(item?: string | TAdvancedSelectElementItem): void;
    resetSelected(): void;
    getItemDomElement(item: TAdvancedSelectElementItem): HTMLElement;
    /**
     * @name        reset
     * @type        Function
     *
     * Reset the advanced select (preselected, selected, search, etc...)
     *
     * @since       1.0.0
     */
    reset(): void;
    /**
     * @name        getItemById
     * @type        Function
     *
     * Get an item by it's id
     *
     * @param       {String}        id        The id of the item to get
     * @return      {TAdvancedSelectElementItem}        The item found
     *
     * @since       1.0.0
     */
    getItemById(id: string): TAdvancedSelectElementItem;
    /**
     * @name       getPreselectedItem
     * @type       Function
     *
     * Get the preselected item
     *
     * @return      {TAdvancedSelectElementItem}        The preselected item
     *
     * @since       1.0.0
     */
    getPreselectedItem(): TAdvancedSelectElementItem;
    /**
     * @name        getSelectedItem
     * @type        Function
     *
     * Get the selected item
     *
     * @return      {TAdvancedSelectElementItem}        The selected item
     *
     * @since       1.0.0
     */
    getSelectedItem(): TAdvancedSelectElementItem;
    /**
     * @name        getMatchItems
     * @type        Function
     *
     * Get the items that match the search
     *
     * @return      {TAdvancedSelectElementItem[]}        The items that match the search
     *
     * @since       1.0.0
     */
    getMatchItems(): TAdvancedSelectElementItem[];
    _open(): Promise<void>;
    _close(): void;
    /**
     * @name        focus
     * @type        Function
     *
     * Focus the input and open the dropdown
     *
     * @since       1.0.0
     */
    focus(): void;
    /**
     * @name       blur
     * @type       Function
     *
     * Blur the input and close the dropdown
     *
     * @since       1.0.0
     */
    blur(): void;
    private _isLoadingTimeout;
    /**
     * @name        refreshItems
     * @type        Function
     *
     * Refresh the items in the dropdown
     *
     * @since       1.0.0
     */
    refreshItems(): Promise<void>;
    private _initItems;
    private _initItem;
    private _getItemsOnly;
    private _filterItems;
    /**
     * Maintain the dropdown position and size
     */
    private _updateListSizeAndPosition;
    /**
     * This function just remove a keyword from the input and filter the items again
     */
    private _removeKeyword;
    private _renderItems;
    private _renderItem;
    private _currentItemIdx;
    render(): import("lit-html").TemplateResult<1>;
}
