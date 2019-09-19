# Ultimaker ESLint Config

## Usage
To use this set of rules, simply create an `.eslintrc.js` file in the root of your project and add the following:

```js
module.exports = {
    extends: '@ultimaker/eslint-config',
};
```

You can then run your linting command as usual.

## Publishing Releases on NPM
To make a new release, run `npm version` with the right parameters (see example).
This will update the package.json file, commit the changes and create an annotated tag.
After pushing, the CI will pick this up and publish it to npm. 
You should also make a release on github to document the changes.
See https://docs.npmjs.com/cli/version for supported parameters to `npm version`. 

### Example

> **Note:** `%s` will be automatically replaced with the new version number.

```bash
npm version major|minor|patch
git push --tags
```
