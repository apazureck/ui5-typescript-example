declare module "sap/m/LightBoxItem" {

    /**
    
    */
    export default class LightBoxItem extends sap.ui.core.Element {


        /**
            * Constructor for a new LightBoxItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId?: string, mSettings?: any);


        /**
            * Creates a new subclass of class sap.m.LightBoxItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getAlt alt}.
         * 
         * Alt value for the image
         * 
         * Default value is ``.
        */
        public getAlt(): string;

        /**
            * Gets current value of property {@link #getImageSrc imageSrc}.
         * 
         * Source for the image. This property is mandatory. If not set the popup will not open
         * 
         * Default value is ``.
        */
        public getImageSrc(): sap.ui.core.URI;

        /**
            * Returns a metadata object for class sap.m.LightBoxItem.
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
            * Gets current value of property {@link #getSubtitle subtitle}.
         * 
         * Subtitle text for the image
         * 
         * Default value is ``.
        */
        public getSubtitle(): string;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Title text for the image. This property is mandatory.
         * 
         * Default value is ``.
        */
        public getTitle(): string;

        /**
            * Sets the alt text of the image.
        */
        public setAlt(alt: string): this;

        /**
            * Sets the source of the image.
        */
        public setImageSrc(sImageSrc: sap.ui.core.URI): this;

        /**
            * Sets the subtitle of the image.
        */
        public setSubtitle(subtitleText: string): this;

        /**
            * Sets the title of the image.
        */
        public setTitle(title: string): this;

    }

}
