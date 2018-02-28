declare module 'sap/m/library' {
    /**
    * Declares the type of semantic ruleset that will govern the styling and positioning of semantic content.
    */
    export type SemanticRuleSetType = "Classic" | "Optimized";
    export namespace SemanticRuleSetType {
        const Classic: SemanticRuleSetType;
        const Optimized: SemanticRuleSetType;
    }
}