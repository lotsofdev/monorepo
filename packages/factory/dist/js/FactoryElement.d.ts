import __LitElement from '@lotsof/lit-element';
import __AdvancedSelectElement from '@lotsof/advanced-select-element';
import '@lotsof/json-schema-form';
import '../../src/css/FactoryElement.css';
import { TFactoryComponent, TFactoryComponentJson, TFactoryMediaQuery, TFactoryNotification, TFactorySpecs, TFactoryState } from '../shared/factory.types.js';
export default class FactoryElement extends __LitElement {
    src: string;
    mediaQueries: Record<string, TFactoryMediaQuery>;
    mediaQuery: string;
    commandPanelHotkey: string;
    darkModeClass: string;
    specs: TFactorySpecs;
    _notifications: TFactoryNotification[];
    _currentComponent: TFactoryComponent | null;
    _currentComponentId: string;
    _currentMediaQuery: string;
    _currentAction: 'saveValues' | null;
    protected _state: TFactoryState;
    private _$iframe?;
    private _$canvas?;
    constructor();
    get currentEngine(): string | undefined;
    get $commandPanel(): __AdvancedSelectElement;
    get currentComponent(): TFactoryComponentJson | undefined;
    get currentComponentId(): string | undefined;
    get currentMediaQuery(): TFactoryMediaQuery | undefined;
    update(changedProperties: any): void;
    private _updateMediaQueries;
    private _fetchSpecs;
    get $iframeDocument(): Document | null | undefined;
    mount(): Promise<void>;
    private _initCommandPanel;
    private _initListeners;
    private _initEnvironment;
    private _setIframeContent;
    private _updateIframeSize;
    private _updateComponent;
    getComponentById(id: string): TFactoryComponent | undefined;
    selectComponent(id: string, engine?: string): void;
    setComponentValues(id: string, values: any): void;
    toggleUiMode(): void;
    private _restoreUiMode;
    setUiMode(mode: 'light' | 'dark'): void;
    randomizeComponentValues(id: string): void;
    private _saveComponentValues;
    selectMediaQuery(name: string): void;
    private _applyUpdate;
    private _handleCommandPanelSelect;
    private _renderComponents;
    private _sendNotification;
    private _renderSidebar;
    private _renderMediaQueries;
    private _renderTopbar;
    private _renderMode;
    private _renderBottombar;
    private _renderCommandPanel;
    private _renderNotifications;
    private _renderSaveValuesForm;
    private _renderEditor;
    render(): import("lit-html").TemplateResult<1>;
}