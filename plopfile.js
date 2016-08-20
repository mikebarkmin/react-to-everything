module.exports = ( plop ) => {
  plop.setGenerator( "component", {
    description: "Create a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?"
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{dashCase name}}/{{pascalCase name}}.js",
        templateFile: "plop-templates/component/Component.js"
      },
      {
        type: "add",
        path: "src/components/{{dashCase name}}/{{pascalCase name}}Base.js",
        templateFile: "plop-templates/component/ComponentBase.js"
      },
      {
        type: "add",
        path: "src/components/{{dashCase name}}/{{pascalCase name}}Base.android.js",
        templateFile: "plop-templates/component/ComponentBase.android.js"
      },
      {
        type: "add",
        path: "src/components/{{dashCase name}}/{{pascalCase name}}Base.ios.js",
        templateFile: "plop-templates/component/ComponentBase.ios.js"
      },
      {
        type: "add",
        path: "src/components/{{dashCase name}}/{{pascalCase name}}Base.native.js",
        templateFile: "plop-templates/component/ComponentBase.native.js"
      },
      {
        type: "add",
        path: "src/components/{{dashCase name}}/{{pascalCase name}}.tests.js",
        templateFile: "plop-templates/component/Component.tests.js"
      },
    ]
  });
}
