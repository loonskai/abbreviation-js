enum ExpressionTypes {
  CALL_EXPRESSION = 'CallExpression',
  IDENTIFIER = 'Identifier',
  STRING_LITERAL = 'StringLiteral',
  OBJECT_PATTERN = 'ObjectPattern',
  OBJECT_PROPERTY = 'ObjectProperty',
  VARIABLE_DECLARATION = 'VariableDeclaration',
  VARIABLE_DECLARATOR = 'VariableDeclarator',
  IMPORT_DECLARATION = 'ImportDeclaration',
  IMPORT_DEFAULT_SPECIFIER = 'ImportDefaultSpecifier',
  IMPORT_SPECIFIER = 'ImportSpecifier',
  IMPORT_NAMESPACE_SPECIFIER = 'ImportNamespaceSpecifier',
  FUNCTION_DECLARATION = 'FunctionDeclaration',
  FUNCTION_EXPRESSION = 'FunctionExpression',
  BLOCK_STATEMENT = 'BlockStatement',
}

export default ExpressionTypes;
