declare module "sap/m/Image" {
    import { ImageMode } from "sap/m/library";

    /**
    
    */
    export default class Image extends sap.ui.core.Control {


        /**
            * Constructor for a new Image.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:error error} event of this `sap.m.Image`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Image` itself.
         * 
         * Event is fired when the image resource can't be loaded. If densityAware is set to true, the event is fired when none of the fallback resources can be loaded.
        */
        attachError<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:error error} event of this `sap.m.Image`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Image` itself.
         * 
         * Event is fired when the image resource can't be loaded. If densityAware is set to true, the event is fired when none of the fallback resources can be loaded.
        */
        attachError<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:load load} event of this `sap.m.Image`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Image` itself.
         * 
         * Event is fired when the image resource is loaded.
        */
        attachLoad<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:load load} event of this `sap.m.Image`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Image` itself.
         * 
         * Event is fired when the image resource is loaded.
        */
        attachLoad<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.Image`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Image` itself.
         * 
         * Event is fired when the user clicks on the control.
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.Image`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Image` itself.
         * 
         * Event is fired when the user clicks on the control.
        */
        attachPress<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:tap tap} event of this `sap.m.Image`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Image` itself.
         * 
         * Event is fired when the user clicks on the control. (This event is deprecated, use the press event instead)
        */
        attachTap<TcustomData, Tcontext>(oData: any, fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:tap tap} event of this `sap.m.Image`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Image` itself.
         * 
         * Event is fired when the user clicks on the control. (This event is deprecated, use the press event instead)
        */
        attachTap<Tcontext>(fnFunction: (this: Tcontext, oEvent: sap.ui.base.Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getDetailBox detailBox} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindDetailBox(oBindingInfo: any): this;

        /**
            * Destroys the detailBox in the aggregation {@link #getDetailBox detailBox}.
        */
        public destroyDetailBox(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:error error} event of this `sap.m.Image`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachError(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:load load} event of this `sap.m.Image`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachLoad(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.m.Image`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: Function, oListener: any): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:tap tap} event of this `sap.m.Image`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachTap(fnFunction: Function, oListener: any): this;

        /**
            * Creates a new subclass of class sap.m.Image with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Fires event {@link #event:error error} to attached listeners.
        */
        protected fireError(mParameters?: any): this;

        /**
            * Fires event {@link #event:load load} to attached listeners.
        */
        protected fireLoad(mParameters?: any): this;

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: any): this;

        /**
            * Fires event {@link #event:tap tap} to attached listeners.
        */
        protected fireTap(mParameters?: any): this;

        /**
            
        */
        protected getAccessibilityInfo(): any;

        /**
            * Gets current value of property {@link #getActiveSrc activeSrc}.
         * 
         * The source property which is used when the image is pressed.
         * 
         * Default value is ``.
        */
        public getActiveSrc(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getAlt alt}.
         * 
         * The alternative text that is displayed in case the Image is not available, or cannot be displayed. If the image is set to decorative this property is ignored.
        */
        public getAlt(): string;

        /**
            * Gets current value of property {@link #getBackgroundPosition backgroundPosition}.
         * 
         * Defines the position of the image in sap.m.ImageMode.Background mode. This property is set on the output DOM element using CSS style 'background-position'. This property takes effect only when the 'mode' property is set to sap.m.ImageMode.Background.
         * 
         * Default value is `initial`.
        */
        public getBackgroundPosition(): string;

        /**
            * Gets current value of property {@link #getBackgroundRepeat backgroundRepeat}.
         * 
         * Defines whether the source image is repeated when the output DOM element is bigger than the source. This property is set on the output DOM element using CSS style 'background-repeat'. This property takes effect only when the 'mode' property is set to sap.m.ImageMode.Background.
         * 
         * Default value is `no-repeat`.
        */
        public getBackgroundRepeat(): string;

        /**
            * Gets current value of property {@link #getBackgroundSize backgroundSize}.
         * 
         * Defines the size of the image in sap.m.ImageMode.Background mode. This property is set on the output DOM element using CSS style 'background-size'. This property takes effect only when the 'mode' property is set to sap.m.ImageMode.Background.
         * 
         * Default value is `cover`.
        */
        public getBackgroundSize(): string;

        /**
            * Gets current value of property {@link #getDecorative decorative}.
         * 
         * A decorative image is included for design reasons. Accessibility tools will ignore decorative images.
         * 
         * Note: If the Image has an image map (useMap is set), this property will be overridden (the image will not be rendered as decorative). A decorative image has no ALT attribute, so the Alt property is ignored if the image is decorative.
         * 
         * Default value is `true`.
        */
        public getDecorative(): boolean;

        /**
            * Gets current value of property {@link #getDensityAware densityAware}.
         * 
         * If this is set to false, the src image will be loaded directly without attempting to fetch the density perfect image for high density device.
         * 
         * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
         * 
         * If bandwidth is the key for the application, set this value to false.
         * 
         * Default value is `true`.
        */
        public getDensityAware(): boolean;

        /**
            * Gets content of aggregation {@link #getDetailBox detailBox}.
         * 
         * A `sap.m.LightBox` instance, that will be opened automatically when the user interacts with the `Image` control.
         * 
         * The `tap` event will still be fired.
        */
        public getDetailBox(): any;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * When the empty value is kept, the original size is not changed. It is also possible to make settings for width or height only, the original ratio between width/height is maintained. When 'mode' property is set to sap.m.ImageMode.Background, this property always needs to be set. Otherwise the output DOM element has a 0 size.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.m.Image.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | sap.ui.base.Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Gets current value of property {@link #getMode mode}.
         * 
         * Defines how the src and the activeSrc is output to the Dom Element. When set to sap.m.ImageMode.Image which is the default value, the src (activeSrc) is set to the 'src' attribute of the 'img' tag. When set to sap.m.ImageMode.Background, the src (activeSrc) is set to the CSS style 'background-image' and the root DOM element is rendered as a 'span' tag instead of an 'img' tag.
         * 
         * Default value is `Image`.
        */
        public getMode(): ImageMode;

        /**
            * Gets current value of property {@link #getSrc src}.
         * 
         * Relative or absolute path to URL where the image file is stored. The path will be adapted to the density aware format according to the density of the device following the convention that [imageName]@[densityValue].[extension]
        */
        public getSrc(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getUseMap useMap}.
         * 
         * The name of the image map that defines the clickable areas
        */
        public getUseMap(): string;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * When the empty value is kept, the original size is not changed. It is also possible to make settings for width or height only, the original ratio between width/height is maintained. When 'mode' property is set to sap.m.ImageMode.Background, this property always needs to be set. Otherwise the output DOM element has a 0 size.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * This overrides the default setter of the activeSrc property in order to avoid the rerendering.
        */
        public setActiveSrc(sActiveSrc: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getAlt alt}.
         * 
         * The alternative text that is displayed in case the Image is not available, or cannot be displayed. If the image is set to decorative this property is ignored.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAlt(sAlt: string): this;

        /**
            * Sets a new value for property {@link #getBackgroundPosition backgroundPosition}.
         * 
         * Defines the position of the image in sap.m.ImageMode.Background mode. This property is set on the output DOM element using CSS style 'background-position'. This property takes effect only when the 'mode' property is set to sap.m.ImageMode.Background.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `initial`.
        */
        public setBackgroundPosition(sBackgroundPosition: string): this;

        /**
            * Sets a new value for property {@link #getBackgroundRepeat backgroundRepeat}.
         * 
         * Defines whether the source image is repeated when the output DOM element is bigger than the source. This property is set on the output DOM element using CSS style 'background-repeat'. This property takes effect only when the 'mode' property is set to sap.m.ImageMode.Background.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `no-repeat`.
        */
        public setBackgroundRepeat(sBackgroundRepeat: string): this;

        /**
            * Sets a new value for property {@link #getBackgroundSize backgroundSize}.
         * 
         * Defines the size of the image in sap.m.ImageMode.Background mode. This property is set on the output DOM element using CSS style 'background-size'. This property takes effect only when the 'mode' property is set to sap.m.ImageMode.Background.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `cover`.
        */
        public setBackgroundSize(sBackgroundSize: string): this;

        /**
            * Sets a new value for property {@link #getDecorative decorative}.
         * 
         * A decorative image is included for design reasons. Accessibility tools will ignore decorative images.
         * 
         * Note: If the Image has an image map (useMap is set), this property will be overridden (the image will not be rendered as decorative). A decorative image has no ALT attribute, so the Alt property is ignored if the image is decorative.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setDecorative(bDecorative: boolean): this;

        /**
            * Sets a new value for property {@link #getDensityAware densityAware}.
         * 
         * If this is set to false, the src image will be loaded directly without attempting to fetch the density perfect image for high density device.
         * 
         * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
         * 
         * If bandwidth is the key for the application, set this value to false.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setDensityAware(bDensityAware: boolean): this;

        /**
            * Sets the `detailBox` aggregation.
        */
        public setDetailBox(oLightBox: any | any): any;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * When the empty value is kept, the original size is not changed. It is also possible to make settings for width or height only, the original ratio between width/height is maintained. When 'mode' property is set to sap.m.ImageMode.Background, this property always needs to be set. Otherwise the output DOM element has a 0 size.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getMode mode}.
         * 
         * Defines how the src and the activeSrc is output to the Dom Element. When set to sap.m.ImageMode.Image which is the default value, the src (activeSrc) is set to the 'src' attribute of the 'img' tag. When set to sap.m.ImageMode.Background, the src (activeSrc) is set to the CSS style 'background-image' and the root DOM element is rendered as a 'span' tag instead of an 'img' tag.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Image`.
        */
        public setMode(sMode: ImageMode): this;

        /**
            * This overrides the default setter of the src property and update the dom node.
        */
        public setSrc(sSrc: sap.ui.core.URI): any;

        /**
            * Sets a new value for property {@link #getUseMap useMap}.
         * 
         * The name of the image map that defines the clickable areas
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setUseMap(sUseMap: string): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * When the empty value is kept, the original size is not changed. It is also possible to make settings for width or height only, the original ratio between width/height is maintained. When 'mode' property is set to sap.m.ImageMode.Background, this property always needs to be set. Otherwise the output DOM element has a 0 size.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Unbinds aggregation {@link #getDetailBox detailBox} from model data.
        */
        public unbindDetailBox(): this;

    }

}
