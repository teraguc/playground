// LICENSE : MIT
"use strict";
import { element } from "decca";
export const WhatIsTextLint = {
    render({ props }) {
        return (
            <div className="WhatIsTextLint">
                <h2 className="WhatIsTextLint-title header-has-icon">What is textlint?</h2>
                <p>
                    textlint is an open source text linting utility written in JavaScript.<br />
                    It is hard to lint natural language texts, but we try to resolve this issue by <b>pluggable</b>{" "}
                    approach.
                </p>
                <h3 className="WhatIsTextLint-title">Everything is pluggable:</h3>
                <ul className="WhatIsTextLint-philosophy-list">
                    <li>No bundled rules.</li>
                    <li>
                        To use a rule, simply run <code>npm install textlint-rule-xxx</code>. See the{" "}
                        <a
                            href="https://github.com/textlint/textlint/wiki/Collection-of-textlint-rule"
                            title="Collection of textlint rule · textlint/textlint Wiki"
                        >
                            collection of textlint rules
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/textlint/textlint-plugin-markdown"
                            title="Markdown support for textlint."
                        >
                            Markdown
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://github.com/textlint/textlint-plugin-text"
                            title="plain txt support for textlint"
                        >
                            plain text
                        </a>{" "}
                        are supported by default. Additionally,{" "}
                        <a
                            href="https://github.com/textlint/textlint-plugin-html"
                            title="textlint/textlint-plugin-html: html support for textlint"
                        >
                            HTML
                        </a>{" "}
                        and other formats are supported by custom plugins
                    </li>
                    <li>Formatter (reporter) is used both by bundled and custom formatters</li>
                </ul>
            </div>
        );
    }
};
