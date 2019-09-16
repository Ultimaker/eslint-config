# Ultimaker ESLint Config

## Usage
To use this set of rules, simply create an `.eslintrc.js` file in the root of your project and add the following:

```js
module.exports = {
    extends: "@ultimaker/eslint-config",
};
```

You can then run your linting command as usual.

## Publishing Releases on NPM
To make a new release, just create an annotated git tag with the new version number.
The CI will pick this up and publish it on NPM. The new version number must follow [semver](https://semver.org/).

You should also make a release on GitHub to document the changes (this is the preferred method).

Example:

```bash
git tag -a v1.0.0 -m "Tagging v1.0.0 release"
git push --tags
```
