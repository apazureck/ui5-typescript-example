declare module 'sap/m/library' {
    /**
    * Defines the scopes of GenericTile enabling the developer to implement different "flavors" of tiles.
    */
    export type GenericTileScope = "Actions" | "Display";
    export namespace GenericTileScope {
        const Actions: GenericTileScope;
        const Display: GenericTileScope;
    }
}