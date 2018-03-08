declare module "sap/ui/commons/library" {

    export = commons;

    namespace commons {

        // Fields
        /**
        * Level of a title.
        */
        export const TitleLevel: any;
    }

    namespace commons {

        /** 
    * different styles for a button. 
    */
        enum ButtonStyle {
            Accept = "Accept",
            Default = "Default",
            Emph = "Emph",
            Reject = "Reject",
        }

        /** 
    * different styles for a ColorPicker. 
    */
        enum ColorPickerMode {
        }

        /** 
    * Value set for the background design of areas 
    */
        namespace enums {
            enum AreaDesign {
                Fill = "Fill",
                Plain = "Plain",
                Transparent = "Transparent",
            }
        }

        /** 
    * Value set for the border design of areas 
    */
        namespace enums {
            enum BorderDesign {
                Box = "Box",
                None = "None",
            }
        }

        /** 
    * Orientation of a UI element 
    */
        namespace enums {
            enum Orientation {
                horizontal = "horizontal",
                vertical = "vertical",
            }
        }

        /**
    
    */
        interface FormattedTextViewControl {


        }


        /** 
    * Enumeration of possible HorizontalDivider height settings. 
    */
        enum HorizontalDividerHeight {
            Large = "Large",
            Medium = "Medium",
            Ruleheight = "Ruleheight",
            Small = "Small",
        }

        /** 
    * Enumeration of possible HorizontalDivider types. 
    */
        enum HorizontalDividerType {
            Area = "Area",
            Page = "Page",
        }

        /** 
    * Available label display modes. 
    */
        enum LabelDesign {
            Bold = "Bold",
            Standard = "Standard",
        }

        /** 
    * Background design (i.e. color), e.g. of a layout cell. 
    */
        namespace layout {
            enum BackgroundDesign {
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
        namespace layout {
            enum BorderLayoutAreaTypes {
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
        namespace layout {
            enum HAlign {
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
        namespace layout {
            enum Padding {
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
        namespace layout {
            enum Separation {
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
        namespace layout {
            enum VAlign {
                Bottom = "Bottom",
                Middle = "Middle",
                Top = "Top",
            }
        }

        /** 
    * Determines the visual design of a MenuBar. The feature might be not supported by all themes. 
    */
        enum MenuBarDesign {
            Header = "Header",
            Standard = "Standard",
        }

        /** 
    * [Enter description for MessageType] 
    */
        enum MessageType {
            Error = "Error",
            Success = "Success",
            Warning = "Warning",
        }

        /** 
    * Distinct paginator event types 
    */
        enum PaginatorEvent {
            First = "First",
            Goto = "Goto",
            Last = "Last",
            Next = "Next",
            Previous = "Previous",
        }

        /** 
    * Possible values for the visualization of float values in the RatingIndicator Control. 
    */
        enum RatingIndicatorVisualMode {
            Continuous = "Continuous",
            Full = "Full",
            Half = "Half",
        }

        /** 
    * Determines the visual design of a RowRepeater. 
    */
        enum RowRepeaterDesign {
            BareShell = "BareShell",
            Standard = "Standard",
            Transparent = "Transparent",
        }

        namespace SplitterSize {

        }
        /** 
    * Semantic Colors of a text. 
    */
        enum TextViewColor {
            Critical = "Critical",
            Default = "Default",
            Negative = "Negative",
            Positive = "Positive",
        }

        /** 
    * Designs for TextView. 
    */
        enum TextViewDesign {
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
        enum ToolbarDesign {
            Flat = "Flat",
            Standard = "Standard",
            Transparent = "Transparent",
        }

        /**
    
    */
        interface ToolbarItem {


        }


        /** 
    * Design of the Toolbar Separator. 
    */
        enum ToolbarSeparatorDesign {
            FullHeight = "FullHeight",
            Standard = "Standard",
        }

        /** 
    * Selection mode of the tree 
    */
        enum TreeSelectionMode {
            Legacy = "Legacy",
            Multi = "Multi",
            None = "None",
            Single = "Single",
        }

        /** 
    * States for TriStateCheckBox 
    */
        enum TriStateCheckBoxState {
            Checked = "Checked",
            Mixed = "Mixed",
            Unchecked = "Unchecked",
        }


    }
}
