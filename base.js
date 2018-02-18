/**
 * Provides base stylelint rules for all configs.
 */
module.exports = {
  /**
   * The standard shareable config for stylelint.
   * https://github.com/stylelint/stylelint-config-standard
   */
  extends: 'stylelint-config-standard',

  /**
   * The following rules will override the configuration from "extends".
   * https://stylelint.io/user-guide/configuration/#extends
   */
  rules: {
    /**
     * Require a newline after the opening brace of blocks.
     * https://stylelint.io/user-guide/rules/block-opening-brace-newline-after/
     *
     * Require a newline or disallow whitespace before the closing brace of blocks.
     * https://stylelint.io/user-guide/rules/block-closing-brace-newline-before/
     *
     * https://stylelint.io/user-guide/faq/#how-do-i-disallow-single-line-blocks
     */
    'block-opening-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
  },
};
