// LICENSE : MIT
"use strict";
import { element } from "decca";
import EnabledTextlintRuleList from "./TextlintDemo/EnabledTextlintRuleList";
import DisabledTextlintRuleList from "./TextlintDemo/DisabledTextlintRuleList";
// import AddTextlintRule from "./TextlintDemo/AddTextlintRule";
import TextlintEditor from "./TextlintDemo/TextlintEditor";
import TextlintErrorList from "./TextlintDemo/TextlintErrorList";
export const TextlintDemo = {
    render({ props }) {
        const { enabledRules, disabledRules, ruleErrors, text } = props;
        return (
            <div className="TextlintDemo">
                <div className="TextlintDemo-Content l-flex-container l-flex-row">
                    <div className="TextlintDemo-Editor l-flex-left-half">
                        <TextlintEditor enabledRules={enabledRules} value={text} />
                    </div>
                    <div className="TextlintDemo-Setting l-flex-right-half l-flex-container l-flex-col">
                        <div className="TextlintDemo-ruleBox l-flex-top-half">
                            <h3>Rule Errors</h3>
                            <TextlintErrorList errors={ruleErrors} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
