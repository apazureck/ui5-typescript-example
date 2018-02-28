declare module 'sap/ui/core/library' {
    /**
    * Defines the accessible landmark roles for ARIA support. This enumeration is used with the AccessibleRole control property. For more information, goto "Roles for Accessible Rich Internet Applications (WAI-ARIA Roles)" at the www.w3.org homepage.
    */
    export type AccessibleLandmarkRole = "Banner" | "Complementary" | "Main" | "Navigation" | "None" | "Region" | "Search";
    export namespace AccessibleLandmarkRole {
        const Banner: AccessibleLandmarkRole;
        const Complementary: AccessibleLandmarkRole;
        const Main: AccessibleLandmarkRole;
        const Navigation: AccessibleLandmarkRole;
        const None: AccessibleLandmarkRole;
        const Region: AccessibleLandmarkRole;
        const Search: AccessibleLandmarkRole;
    }
}