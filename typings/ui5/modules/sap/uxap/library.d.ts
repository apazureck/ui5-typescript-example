declare module "sap/uxap/library" {

    export = uxap;

    namespace uxap {

    }

    namespace uxap {

        namespace BlockBaseColumnLayout {

        }
        /** 
    * Used by the BlockBase control to define if it should do automatic adjustment of its nested forms. 
    */
        enum BlockBaseFormAdjustment {
            BlockColumns = "BlockColumns",
            None = "None",
            OneColumn = "OneColumn",
        }

        /**
    
    */
        interface IHeaderContent {


        }


        /**
    
    */
        interface IHeaderTitle {


        }


        /** 
    * Used by the ObjectSectionBase control to define the importance of the content contained in it. 
    */
        enum Importance {
            High = "High",
            Low = "Low",
            Medium = "Medium",
        }

        /** 
    * Used by the sap.uxap.component.Component how to initialize the ObjectPageLayout sections and subsections. 
    */
        enum ObjectPageConfigurationMode {
            JsonModel = "JsonModel",
            JsonURL = "JsonURL",
        }

        /** 
    * Used by the ObjectPageHeader control to define which design to use. 
    */
        enum ObjectPageHeaderDesign {
            Dark = "Dark",
            Light = "Light",
        }

        /** 
    * Used by the ObjectPageHeader control to define which shape to use for the image. 
    */
        enum ObjectPageHeaderPictureShape {
            Circle = "Circle",
            Square = "Square",
        }

        /** 
    * Used by the ObjectPagSubSection control to define which layout to apply. 
    */
        enum ObjectPageSubSectionLayout {
            TitleOnLeft = "TitleOnLeft",
            TitleOnTop = "TitleOnTop",
        }

        /** 
    * Used by the ObjectPageLayout control to define which layout to use (either Collapsed or Expanded). 
    */
        enum ObjectPageSubSectionMode {
            Collapsed = "Collapsed",
            Expanded = "Expanded",
        }


    }
}
