declare module "sap/ui/unified/library" {

    export = unified;

    namespace unified {

    }

    namespace unified {

        /** 
    * Visualization types for {@link sap.ui.unified.CalendarAppointment}. 
    */
        enum CalendarAppointmentVisualization {
            Filled = "Filled",
            Standard = "Standard",
        }

        /** 
    * Types of a calendar day used for visualization. 
    */
        enum CalendarDayType {
            None = "None",
            NonWorking = "NonWorking",
            Type01 = "Type01",
            Type02 = "Type02",
            Type03 = "Type03",
            Type04 = "Type04",
            Type05 = "Type05",
            Type06 = "Type06",
            Type07 = "Type07",
            Type08 = "Type08",
            Type09 = "Type09",
            Type10 = "Type10",
            Type11 = "Type11",
            Type12 = "Type12",
            Type13 = "Type13",
            Type14 = "Type14",
            Type15 = "Type15",
            Type16 = "Type16",
            Type17 = "Type17",
            Type18 = "Type18",
            Type19 = "Type19",
            Type20 = "Type20",
        }

        /** 
    * Interval types in a `CalendarRow`. 
    */
        enum CalendarIntervalType {
            Day = "Day",
            Hour = "Hour",
            Month = "Month",
        }

        /** 
    * different styles for a ColorPicker. 
    */
        enum ColorPickerMode {
            HSL = "HSL",
            HSV = "HSV",
        }

        /** 
    * Predefined animations for the ContentSwitcher 
    */
        enum ContentSwitcherAnimation {
            Fade = "Fade",
            None = "None",
            Rotate = "Rotate",
            SlideOver = "SlideOver",
            SlideRight = "SlideRight",
            ZoomIn = "ZoomIn",
            ZoomOut = "ZoomOut",
        }

        /** 
    * Types of display mode for overlapping appointments. 
    */
        enum GroupAppointmentsMode {
            Collapsed = "Collapsed",
            Expanded = "Expanded",
        }

        /**
    
    */
        interface IProcessableBlobs {


            /**
                * Allows to process Blobs before they get uploaded. This API can be used to create custom Blobs and upload these custom Blobs instead of the received/initials Blobs in the parameter `aBlobs`. One use case could be to create and upload zip archives based on the passed Blobs. The default implementation of this API should simply resolve with the received Blobs (parameter `aBlobs`).
            */
            getProcessedBlobsFromArray(aBlobs: any[]): any;

        }


        /** 
    * Standard day types visualized in a {@link sap.m.PlanningCalendarLegend}, which correspond to days in a {@link sap.ui.unified.Calendar}. 
    */
        enum StandardCalendarLegendItem {
            NonWorkingDay = "NonWorkingDay",
            Selected = "Selected",
            Today = "Today",
            WorkingDay = "WorkingDay",
        }


    }
}
