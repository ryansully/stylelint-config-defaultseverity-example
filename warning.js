/**
 * Provides base stylelint rules with "warning"-level severity.
 *
 * By default, all rules have an "error"-level severity. You can change this
 * default by adding a defaultSeverity property to your configuration (see
 * below).
 *
 * The rules here will primarily be stylistic in nature and won't cause actual
 * errors, so they are redefined here with "warning" severity.
 */
module.exports = {
  /**
   * The default severity level for all rules that do not have a severity
   * specified in their secondary options.
   * https://stylelint.io/user-guide/configuration/#defaultseverity
   */
  // FIXME: set this, pending resolution of this issue:
  // https://github.com/stylelint/stylelint/issues/3171
  // then remove severity option from individual rules
  // defaultSeverity: 'warning',

  /**
   * Only rules that are to have "warning"-level severity should go here. If the
   * rule will have "error"-level severity, please add it to ./base.js instead.
   */
  rules: {
    /**
     * Specify indentation.
     * https://stylelint.io/user-guide/rules/indentation/
     */
    indentation: [2, { severity: 'warning' }],

    /**
     * Specify a pattern for class selectors.
     * https://stylelint.io/user-guide/rules/selector-class-pattern/
     *
     * Specify a pattern for id selectors.
     * https://stylelint.io/user-guide/rules/selector-id-pattern/
     *
     * https://stylelint.io/user-guide/faq/#how-do-i-configure-the--pattern-rules-for-common-css-naming-conventions-like-kebab-case
     *
     * Also allow UpperCamelCase for classes and IDs that correspond to React
     * component names.
     * UpperCamelCase: ^[A-Z][a-zA-Z0-9]+$
     */
    'selector-class-pattern': ['^([a-z][a-z0-9]*)(_[a-z0-9]+)*$|^[A-Z][a-zA-Z0-9]+$', { severity: 'warning' }],
    'selector-id-pattern': ['^([a-z][a-z0-9]*)(_[a-z0-9]+)*$|^[A-Z][a-zA-Z0-9]+$', { severity: 'warning' }],
  },
};
