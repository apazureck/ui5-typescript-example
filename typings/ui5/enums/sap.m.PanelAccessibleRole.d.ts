declare module 'sap/m/library' {
    /**
    * Available Panel Accessible Landmark Roles.
    */
    export type PanelAccessibleRole = "Complementary" | "Form" | "Region";
    export namespace PanelAccessibleRole {
        const Complementary: PanelAccessibleRole;
        const Form: PanelAccessibleRole;
        const Region: PanelAccessibleRole;
    }
}