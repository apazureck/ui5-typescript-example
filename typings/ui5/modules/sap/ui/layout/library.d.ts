declare module "sap/ui/layout/library" {
    /**

*/
    export default layout;
    namespace layout {

    }
    /** 
* Available Background Design. 
*/


    export enum BackgroundDesign {
        Solid = "Solid",
        Translucent = "Translucent",
        Transparent = "Transparent",
    }

    /** 
* A string type that is used inside the BlockLayout to set predefined background color to the cells inside the control. 
*/


    export enum BlockBackgroundType {
        Accent = "Accent",
        Dashboard = "Dashboard",
        Default = "Default",
        Light = "Light",
        Mixed = "Mixed",
    }

    /** 
* A string type that is used inside the BlockLayoutCell to set a predefined set of colors for the cells. 
*/


    export enum BlockLayoutCellColorSet {
        ColorSet1 = "ColorSet1",
        ColorSet10 = "ColorSet10",
        ColorSet11 = "ColorSet11",
        ColorSet2 = "ColorSet2",
        ColorSet3 = "ColorSet3",
        ColorSet4 = "ColorSet4",
        ColorSet5 = "ColorSet5",
        ColorSet6 = "ColorSet6",
        ColorSet7 = "ColorSet7",
        ColorSet8 = "ColorSet8",
        ColorSet9 = "ColorSet9",
    }

    /** 
* A string type that is used inside the BlockLayoutCell to set a predefined set of color shades for the cells. The colors are defined with sap.ui.layout.BlockLayoutCellColorSet. And this is for the shades only. 
*/


    export enum BlockLayoutCellColorShade {
        ShadeA = "ShadeA",
        ShadeB = "ShadeB",
        ShadeC = "ShadeC",
        ShadeD = "ShadeD",
    }

    /** 
* A string type that is used inside the BlockLayoutRow to set predefined set of colors the cells inside the control. Color sets depend on sap.ui.layout.BlockBackgroundType 
*/


    export enum BlockRowColorSets {
        ColorSet1 = "ColorSet1",
        ColorSet2 = "ColorSet2",
        ColorSet3 = "ColorSet3",
        ColorSet4 = "ColorSet4",
    }

    /**

*/
    export namespace GridElementCells {

    }
    /** 
* Available `FormLayouts` used to render a `SimpleForm`. 
*/

    export namespace form {
        export enum SimpleFormLayout {
            GridLayout = "GridLayout",
            ResponsiveGridLayout = "ResponsiveGridLayout",
            ResponsiveLayout = "ResponsiveLayout",
        }
    }

    /**

*/
    export namespace GridIndent {

    }
    /** 
* The position of the Grid. Can be "Left", "Center" or "Right". "Left" is default. 
*/


    export enum GridPosition {
        Center = "Center",
        Left = "Left",
        Right = "Right",
    }

    /**

*/
    export namespace GridSpan {

    }
    /** 
* Types of the DynamicSideContent FallDown options 
*/


    export enum SideContentFallDown {
        BelowL = "BelowL",
        BelowM = "BelowM",
        BelowXL = "BelowXL",
        OnMinimumWidth = "OnMinimumWidth",
    }

    /** 
* The position of the side content - End (default) and Begin. 
*/


    export enum SideContentPosition {
        Begin = "Begin",
        End = "End",
    }

    /** 
* Types of the DynamicSideContent Visibility options 
*/


    export enum SideContentVisibility {
        AlwaysShow = "AlwaysShow",
        NeverShow = "NeverShow",
        ShowAboveL = "ShowAboveL",
        ShowAboveM = "ShowAboveM",
        ShowAboveS = "ShowAboveS",
    }

}
