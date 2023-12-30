#!/usr/bin/env node

// Usage: npx create-my-template my-app --next| --react-ts

const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');
const spawn = require('child_process').spawn;

enum TemplateType {
  Next = '--next',
  ReactTS = '--react-ts',
}
interface Template {
  type: TemplateType;
  description: string;
  directory: string;
}

const templates: Record<TemplateType, Template> = {
  [TemplateType.Next]: {
    type: TemplateType.Next,
    description: 'Next.js template with TrustAuthX SDK',
    directory: 'NextJS-Example-SSR',
  },
  [TemplateType.ReactTS]: {
    type: TemplateType.ReactTS,
    description: 'ReactJs-Typescript template with TrustAuthX SDK',
    directory: 'example-reactjs-starter',
  },
};

if (process.argv.length < 4) {
  console.log(
    'You have to provide a name to your app and the template to use.'
  );
  console.log('For example :');
  console.log(`npx trustauthx my-app ${Object.values(TemplateType).join(
    ' | '
  )}`);
  process.exit(1);
}

const appName = process.argv[2];
const templateType = process.argv[3] as TemplateType;
const appPath = path.join(process.cwd(), appName);

const getTemplate = (type: TemplateType): Template | undefined => {
  return templates[type];
};

const createAppDirectory = () => {
  try {
    fs.mkdirSync(appPath);
  } catch (err) {
    console.error(`Failed to create directory ${appPath}: ${err}`);
    process.exit(1);
  }
};

const copyTemplateFiles = (template: Template) => {
  const templateDir = path.resolve(
    __dirname,
    '..',
    'Templates',
    template.directory
  );
  console.log(`Creating a new ${template.description} in \n${appPath}.`);
  fs.copySync(templateDir, appPath);
};

const printRunInstructions = (template: Template) => {
  console.log('Run the App:');
  console.log(`cd ${appName}`);
  if (template.type === TemplateType.Next) {
    console.log('    npm run dev');
  } else if (template.type === TemplateType.ReactTS) {
    console.log('    npm start');
  }
};

const installDependencies = () => {
  process.chdir(appPath);
  console.log('Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  console.log('Dependencies installed.');
};

const main = () => {
  const template = getTemplate(templateType);

  if (!template) {
    console.error(
      `Invalid template. Only ${Object.values(TemplateType).join(
        ' and '
      )} are supported.`
    );
    process.exit(1);
  }

  createAppDirectory();
  copyTemplateFiles(template);
  installDependencies();
  printRunInstructions(template);
};

main();
