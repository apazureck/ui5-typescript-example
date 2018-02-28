declare module 'sap/m/library' {
    /**
    * Defines the layout options of the table popins.
    */
    export type PopinLayout = "Block" | "GridLarge" | "GridSmall";
    export namespace PopinLayout {
        const Block: PopinLayout;
        const GridLarge: PopinLayout;
        const GridSmall: PopinLayout;
    }
}