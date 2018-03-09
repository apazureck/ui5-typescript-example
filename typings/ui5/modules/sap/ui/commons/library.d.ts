declare module "sap/ui/commons/library" {
    /**

*/
    export default commons;
    namespace commons {

        // Fields
        /**
        * Level of a title.
        */
        export const TitleLevel: any;
    }
    /** 
* different styles for a button. 
*/


    export enum ButtonStyle {
        Accept = "Accept",
        Default = "Default",
        Emph = "Emph",
        Reject = "Reject",
    }

    /** 
* different styles for a ColorPicker. 
*/


    export enum ColorPickerMode {
    }

    /** 
* Value set for the background design of areas 
*/

    export namespace enums {
        export enum AreaDesign {
            Fill = "Fill",
            Plain = "Plain",
            Transparent = "Transparent",
        }
    }

    /** 
* Value set for the border design of areas 
*/

    export namespace enums {
        export enum BorderDesign {
            Box = "Box",
            None = "None",
        }
    }

    /** 
* Orientation of a UI element 
*/

    export namespace enums {
        export enum Orientation {
            horizontal = "horizontal",
            vertical = "vertical",
        }
    }

    /**

*/
    export interface FormattedTextViewControl {


    }


    /** 
* Enumeration of possible HorizontalDivider height settings. 
*/


    export enum HorizontalDividerHeight {
        Large = "Large",
        Medium = "Medium",
        Ruleheight = "Ruleheight",
        Small = "Small",
    }

    /** 
* Enumeration of possible HorizontalDivider types. 
*/


    export enum HorizontalDividerType {
        Area = "Area",
        Page = "Page",
    }

    /** 
* Available label display modes. 
*/


    export enum LabelDesign {
        Bold = "Bold",
        Standard = "Standard",
    }

    /** 
* Background design (i.e. color), e.g. of a layout cell. 
*/

    export namespace layout {
        export enum BackgroundDesign {
            Border = "Border",
            Fill1 = "Fill1",
            Fill2 = "Fill2",
            Fill3 = "Fill3",
            Header = "Header",
            Plain = "Plain",
            Transparent = "Transparent",
        }
    }

    /** 
* The type (=position) of a BorderLayoutArea 
*/

    export namespace layout {
        export enum BorderLayoutAreaTypes {
            begin = "begin",
            bottom = "bottom",
            center = "center",
            end = "end",
            top = "top",
        }
    }

    /** 
* Horizontal alignment, e.g. of a layout cell's content within the cell's borders. Note that some values depend on the current locale's writing direction while others do not. 
*/

    export namespace layout {
        export enum HAlign {
            Begin = "Begin",
            Center = "Center",
            End = "End",
            Left = "Left",
            Right = "Right",
        }
    }

    /** 
* Padding, e.g. of a layout cell's content within the cell's borders. Note that all options except "None" include a padding of 2px at the top and bottom, and differ only in the presence of a 4px padding towards the beginning or end of a line, in the current locale's writing direction. 
*/

    export namespace layout {
        export enum Padding {
            Begin = "Begin",
            Both = "Both",
            End = "End",
            Neither = "Neither",
            None = "None",
        }
    }

    /** 
* Separation, e.g. of a layout cell from its neighbor, via a vertical gutter of defined width, with or without a vertical line in its middle. 
*/

    export namespace layout {
        export enum Separation {
            Large = "Large",
            LargeWithLine = "LargeWithLine",
            Medium = "Medium",
            MediumWithLine = "MediumWithLine",
            None = "None",
            Small = "Small",
            SmallWithLine = "SmallWithLine",
        }
    }

    /** 
* Vertical alignment, e.g. of a layout cell's content within the cell's borders. 
*/

    export namespace layout {
        export enum VAlign {
            Bottom = "Bottom",
            Middle = "Middle",
            Top = "Top",
        }
    }

    /** 
* Determines the visual design of a MenuBar. The feature might be not supported by all themes. 
*/


    export enum MenuBarDesign {
        Header = "Header",
        Standard = "Standard",
    }

    /** 
* [Enter description for MessageType] 
*/


    export enum MessageType {
        Error = "Error",
        Success = "Success",
        Warning = "Warning",
    }

    /** 
* Distinct paginator event types 
*/


    export enum PaginatorEvent {
        First = "First",
        Goto = "Goto",
        Last = "Last",
        Next = "Next",
        Previous = "Previous",
    }

    /** 
* Possible values for the visualization of float values in the RatingIndicator Control. 
*/


    export enum RatingIndicatorVisualMode {
        Continuous = "Continuous",
        Full = "Full",
        Half = "Half",
    }

    /** 
* Determines the visual design of a RowRepeater. 
*/


    export enum RowRepeaterDesign {
        BareShell = "BareShell",
        Standard = "Standard",
        Transparent = "Transparent",
    }

    /**

*/
    export namespace SplitterSize {

    }
    /** 
* Semantic Colors of a text. 
*/


    export enum TextViewColor {
        Critical = "Critical",
        Default = "Default",
        Negative = "Negative",
        Positive = "Positive",
    }

    /** 
* Designs for TextView. 
*/


    export enum TextViewDesign {
        Bold = "Bold",
        H1 = "H1",
        H2 = "H2",
        H3 = "H3",
        H4 = "H4",
        H5 = "H5",
        H6 = "H6",
        Italic = "Italic",
        Monospace = "Monospace",
        Small = "Small",
        Standard = "Standard",
        Underline = "Underline",
    }

    /** 
* Determines the visual design of a Toolbar. 
*/


    export enum ToolbarDesign {
        Flat = "Flat",
        Standard = "Standard",
        Transparent = "Transparent",
    }

    /**

*/
    export interface ToolbarItem {


    }


    /** 
* Design of the Toolbar Separator. 
*/


    export enum ToolbarSeparatorDesign {
        FullHeight = "FullHeight",
        Standard = "Standard",
    }

    /** 
* Selection mode of the tree 
*/


    export enum TreeSelectionMode {
        Legacy = "Legacy",
        Multi = "Multi",
        None = "None",
        Single = "Single",
    }

    /** 
* States for TriStateCheckBox 
*/


    export enum TriStateCheckBoxState {
        Checked = "Checked",
        Mixed = "Mixed",
        Unchecked = "Unchecked",
    }

}
