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
    ]
  });
  plop.setGenerator( "container", {
    description: "Create a new container",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your container name?"
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/containers/{{dashCase name}}/{{pascalCase name}}.js",
        templateFile: "plop-templates/container/Container.js"
      },
      {
        type: "add",
        path: "src/containers/{{dashCase name}}/{{pascalCase name}}Base.js",
        templateFile: "plop-templates/container/ContainerBase.js"
      },
      {
        type: "add",
        path: "src/containers/{{dashCase name}}/{{pascalCase name}}Base.android.js",
        templateFile: "plop-templates/container/ContainerBase.android.js"
      },
      {
        type: "add",
        path: "src/containers/{{dashCase name}}/{{pascalCase name}}Base.ios.js",
        templateFile: "plop-templates/container/ContainerBase.ios.js"
      },
      {
        type: "add",
        path: "src/containers/{{dashCase name}}/{{pascalCase name}}Base.native.js",
        templateFile: "plop-templates/container/ContainerBase.native.js"
      },
    ]
  });
}
