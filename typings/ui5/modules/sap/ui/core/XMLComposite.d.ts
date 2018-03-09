declare module "sap/ui/core/XMLComposite" {

    /**
    
    */
    export default abstract class XMLComposite extends sap.ui.core.Control {


        /**
            * XMLComposite is the base class for composite controls that use a XML fragment representation for their visual parts. From a user perspective such controls appear as any other control, but internally the rendering part is added as a fragment. The fragment that is used should appear in the same folder as the control's JS implementation with the file extension `.control.xml`. The fragment's content can access the interface data from the XMLComposite control via bindings. Currently only aggregations and properties can be used with bindings inside a fragment. The exposed model that is used for internal bindings in the fragment has the default name `$this`. The name will always start with an `$`. The metadata of the derived control can define the alias with its metadata. A code example can be found below.
         * 
         * As XMLComposites compose other controls, they are only invalidated and re-rendered if explicitly defined. Additional metadata for invalidation can be given for properties and aggregation. The default invalidation is `"none"`. Setting invalidate to `true` for properties and aggregations sets the complete XMLComposite to invalidate and rerender. For templating scenarios the XMLComposite can also be forced to re-template completely. In such case set invalidate of the corresponding property to `"template"`
         * 
         * Example: `XMLComposite.extend("sap.mylib.MyXMLComposite", {
         *   metadata : {
         *     library: "sap.mylib",
         *     properties : {
         *       text: { //changing this property will not re-render the XMLComposite
         *          type: "string",
         *          defaultValue: ""
         *       },
         *       title: { //changing this property will re-render the XMLComposite as it defines invalidate: true
         *          type: "string",
         *          defaultValue: "",
         *          invalidate: true
         *       },
         *       value: { //changing this property will re-render the XMLComposite as it defines invalidate: true
         *          type: "string",
         *          defaultValue: "",
         *          invalidate: true
         *       },
         *       progress: { //changing this property will re-template the XMLComposite as it defines invalidate: true
         *          type: "int",
         *          defaultValue: "",
         *          invalidate: "template"
         *       }
         *     },
         *     defaultProperty : "text",
         *     aggregations : {
         *       items : {
         *          type: "sap.ui.core.Control",
         *          invalidate: true
         *       },
         *       header : {
         *          type: "sap.mylib.FancyHeader",
         *          multiple : false
         *       }
         *     },
         *     defaultAggregation : "items"
         *     events: {
         *       outerEvent : {
         *         parameters : {
         *           opener : "sap.ui.core.Control"
         *         }
         *       }
         *     }
         *   },
         *   //alias defaults to "this"
         *   alias: "mycontrolroot" //inner bindings will use model name $mycontrolroot
         *   //fragment defaults to {control name}.control.xml in this case sap.mylib.MyXMLComposite.control.xml
         *   fragment: "sap.mylib.MyXMLCompositeOther.control.xml" //the name of the fragment
         * });`
         * 
         * Internally the XMLComposite instantiates and initializes the given fragment and stores the resulting control in a hidden aggregation named `_content`. The fragment should only include one root element.
         * 
         * Bindings of inner controls to the interface of the XMLComposite can be done with normal binding syntax. Here properties are used as property bindings and aggregations are used as list bindings. Currently it is not possible to bind associations in a fragment.
         * 
         * Example: `&lt;core:FragmentDefinition xmlns:m="sap.m" xmlns:core="sap.ui.core"&gt;
         *       &lt;m:Text text="{$this&gt;text}" visible="{= ${$this&gt;text} !== ""}" /&gt;
         *    &lt;/core:FragmentDefinition&gt;` `&lt;core:FragmentDefinition xmlns:m="sap.m" xmlns:core="sap.ui.core"&gt;
         *       &lt;m:VBox items="{path:"$this&gt;texts", filters:{path:"text", operator:"Contains", value1:"Text"}, sorter:{path:"text", descending:true}}"&gt;
         *           &lt;m:Text text="{$this&gt;text}" /&gt;
         *       &lt;/m:VBox&gt;
         *    &lt;/core:FragmentDefinition&gt;` `&lt;core:FragmentDefinition xmlns:m="sap.m" xmlns:core="sap.ui.core"&gt;
         *       &lt;m:Button text="Press Me" press="handlePress"/&gt;
         *    &lt;/core:FragmentDefinition&gt;`
         * 
         * All events handled within the fragment will be dispatched to the XMLComposite control. It is recommended to follow this paradigm to allow reuse of a XMLComposite without any dependency to controller code of the current embedding view.
         * 
         * `MyXMLComposite.prototype.handlePress = function() {
         *        this.fireOuterEvent(); // passing on the event to the outer view
         *    }`
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor();


        /**
            * Returns an element by its ID in the context of the XMLComposite.
         * 
         * May only be used by the implementation of a specific XMLComposite, not by an application using a XMLComposite.
        */
        protected byId(sId: string): sap.ui.core.Element;

        /**
            * Creates a new subclass of class sap.ui.core.XMLComposite with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: any, FNMetaImpl?: Function): Function;

        /**
            * Gets current value of property {@link #getDisplayBlock displayBlock}.
         * 
         * Whether the CSS display should be set to "block".
         * 
         * Default value is `true`.
        */
        public getDisplayBlock(): boolean;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * The height
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.ui.core.XMLComposite.
        */
        public static getMetadata(): sap.ui.base.Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | sap.ui.base.Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): sap.ui.base.Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * The width
         * 
         * Default value is `100%`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Sets a new value for property {@link #getDisplayBlock displayBlock}.
         * 
         * Whether the CSS display should be set to "block".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setDisplayBlock(bDisplayBlock: boolean): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * The height
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * The width
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }

}
