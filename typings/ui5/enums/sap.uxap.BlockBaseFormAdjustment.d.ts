declare module 'sap/uxap/library' {
    /**
    * Used by the BlockBase control to define if it should do automatic adjustment of its nested forms.
    */
    export type BlockBaseFormAdjustment = "BlockColumns" | "None" | "OneColumn";
    export namespace BlockBaseFormAdjustment {
        const BlockColumns: BlockBaseFormAdjustment;
        const None: BlockBaseFormAdjustment;
        const OneColumn: BlockBaseFormAdjustment;
    }
}