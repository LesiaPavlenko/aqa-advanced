import chalk from 'chalk';
console.log(chalk.blue.bgYellowBright.bold('Кey principles for working with libraries via npm:\n'));

console.log(chalk.blue('To start a project with npm, run ') + chalk.yellow('npm init -y') + chalk.blue(' to create a package.json that tracks all dependencies.'));
console.log(chalk.blue('Then, you can install libraries using ') + chalk.yellow('npm install package-name') + chalk.blue(', which adds them to node_modules and dependencies in package.json.'));
console.log(chalk.blue('Update or remove packages with ') + chalk.yellow('npm update package-name') + chalk.blue(' or ') + chalk.yellow('npm uninstall package-name') + chalk.blue(', keeping package.json and package-lock.json in sync for Git.'));
console.log(chalk.blue('When cloning a project from Git, running ') + chalk.yellow('npm install') + chalk.blue(' in VS Code automatically installs all required dependencies for smooth development.\n'));

console.log(chalk.blue.bgYellowBright.bold('Кey principles for working with Git:\n'));

console.log(chalk.blue(
	'Commit Often, Commit Meaningfully - ' +
	chalk.yellow.underline.bold('Make small, frequent commits') +
	' with clear messages to track changes effectively.'
));
console.log(chalk.hex('#324dd1ff').underline('Use Branches for Features and Fixes: Keep development organized by creating separate branches for new features or bug fixes, avoiding conflicts in the main branch.'));
console.log(chalk.hex('#091276ff').bold('Synchronize Regularly with Remote Repositories: Frequently pull and push changes to stay up-to-date with the team and prevent merge conflicts.'));


