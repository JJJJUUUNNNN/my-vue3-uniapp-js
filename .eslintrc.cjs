// cspell:disable
module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [

    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        // 'simple-import-sort/imports': 'off',
        // 'simple-import-sort/exports': 'off',

      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'no-unused-vars': 'off',
      },
    },
  ],
  reportUnusedDisableDirectives: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:vue/vue3-recommended',
  ],
  plugins: ['simple-import-sort'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'],
      },
      'eslint-import-resolver-custom-alias': {
        alias: {
          '@': './src',
          '~': './types',
        },
        extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  rules: {
    // Common
    'import/no-unresolved': 0,
    'import/named': 0,
    'import/namespace': 'off',
    'import/default': 2,
    'import/export': 2,
    semi: [2, 'always'],
    curly: ['error', 'multi-or-nest', 'consistent'],
    'quote-props': ['error', 'as-needed'],
    // 'no-unused-vars': 'warn',
    'no-param-reassign': 'off',
    'array-bracket-spacing': ['error', 'never'],
    'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'block-spacing': ['error', 'always'],
    camelcase: 'off',
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-constant-condition': 'warn',
    'no-debugger': 'error',
    'no-console': ['off'],
    'no-cond-assign': ['error', 'always'],
    'func-call-spacing': ['off', 'never'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'no-whitespace-before-property': 'error',
    // indent: ['error', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
    // indent: ['error', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
    indent: 'off',
    'no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'object-curly-spacing': ['error', 'always'],
    'no-return-await': 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
    'no-dupe-keys': 'error',
    // 填充块
    'padded-blocks': ['error', { blocks: 'never', switches: 'never', classes: 'never' }],
    // 无追尾空格
    'no-trailing-spaces': 'error',
    // es6
    'no-var': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'prefer-exponentiation-operator': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': 'error',
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'arrow-spacing': ['error', { before: true, after: true }],
    'generator-star-spacing': 'off',
    'spaced-comment': ['error', 'always', {
      line: {
        markers: ['/'],
        exceptions: ['/', '#'],
      },
      block: {
        markers: ['!'],
        exceptions: ['*'],
        balanced: true,
      },
    }],
    'space-in-parens': ['error', 'never'],
    // best-practice
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'consistent-return': 'off',
    complexity: ['off', 11],
    eqeqeq: 'off',
    'no-alert': 'off',
    'no-case-declarations': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-with': 'error',
    'no-void': 'error',
    'no-useless-escape': 'off',
    'vars-on-top': 'error',
    'require-await': 'off',
    'no-return-assign': 'off',
    'operator-linebreak': ['error', 'before'],

    'no-use-before-define': 'off',

    'eslint-comments/disable-enable-pair': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'n/no-callback-literal': 'off',

    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],
    // TS
    // Override JS
    'no-useless-constructor': 'off',
    'no-unused-expressions': 'off',
    'no-redeclare': 'off',
    'space-before-blocks': 'off',
    'space-infix-ops': 'off',
    'keyword-spacing': 'off',
    'no-extra-parens': 'off',
    'no-dupe-class-members': 'off',
    'no-loss-of-precision': 'off',
    'lines-between-class-members': 'off',
    // off
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/prefer-import-from-vue': 'off',

    // reactivity transform
    'vue/no-setup-props-destructure': 'off',
    'vue/component-tags-order': ['error', {
      order: ['script', 'template', 'style'],
    }],
    'vue/block-tag-newline': ['error', {
      singleline: 'always',
      multiline: 'always',
    }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: true,
      ignores: ['/^uni-*/'],
    }],
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/define-macros-order': ['error', {
      order: ['defineProps', 'defineEmits'],
    }],
    'vue/html-comment-content-spacing': ['error', 'always', {
      exceptions: ['-'],
    }],
    'vue/no-restricted-v-bind': ['error', '/^v-/'],
    'vue/no-useless-v-bind': 'error',
    'vue/no-v-text-v-html-on-component': 'error',
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/prefer-separate-static-class': 'error',

    // extensions
    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/arrow-spacing': ['error', { before: true, after: true }],
    'vue/block-spacing': ['error', 'always'],
    'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/comma-spacing': ['error', { before: false, after: true }],
    'vue/comma-style': ['error', 'last'],
    'vue/dot-location': ['error', 'property'],
    'vue/dot-notation': ['error', { allowKeywords: true }],
    'vue/eqeqeq': ['error', 'smart'],
    // 'vue/func-call-spacing': ['off', 'never'],
    'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'vue/keyword-spacing': ['error', { before: true, after: true }],
    'vue/no-constant-condition': 'warn',
    'vue/no-empty-pattern': 'error',
    'vue/no-extra-parens': ['error', 'functions'],
    'vue/no-irregular-whitespace': 'error',
    'vue/no-loss-of-precision': 'error',
    'vue/no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'vue/no-sparse-arrays': 'error',
    'vue/object-curly-newline': ['error', { multiline: true, consistent: true }],
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
    'vue/object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'vue/operator-linebreak': ['error', 'before'],
    'vue/prefer-template': 'error',
    'vue/quote-props': ['error', 'consistent-as-needed'],
    'vue/space-in-parens': ['error', 'never'],
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': ['error', { words: true, nonwords: false }],
    'vue/template-curly-spacing': 'error',
    'vue/html-self-closing': ['off'],

    // plugins
    'simple-import-sort/exports': 'error',
    'eslint-comments/no-unlimited-disable': 'off',
  },
};
