/*
 * @Author: Marlon
 * @Date: 2024-07-12 17:02:17
 * @Description: 
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { exec } from 'child_process';
import { green, blue } from 'colors';

const files = ['dist', 'README.md', 'LICENSE', 'package.json'];
const packageJsonPath = resolve(__dirname, 'package.json');
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
packageJson.main = 'dist/index.js';
packageJson.files = files;
writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log(green('Successfully updated package.json'));

console.log(blue('Executing npm run build...'));
const buildProcess = exec('npm run build');

buildProcess.stdout.on('data', (data) => {
  process.stdout.write(data);
});

buildProcess.stderr.on('data', (data) => {
  process.stderr.write(data);
});

buildProcess.on('close', (code) => {
  if (code === 0) {
    console.log('npm run build completed successfully.');
  } else {
    console.error(`npm run build failed with code ${code}.`);
  }
});

