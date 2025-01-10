# Test Prime Migration

This is a test migration for PrimeNg from v17 to v18.

## Theming

The whole theming system is evolving, with no scss involved and only css variables created by the library during the configuration phase.

## Layout

The layout system was handled by the PrimeFlex library, which is replaced by TailwindCSS.

## Components

Some components are deprecated and others are replaced. The most important changes are:

## Step 1 : Install the PrimeNg v17 theming system

### Install the libraries in v17 compatible versions

List of the libraries and their versions:

```json
{
    "primeflex": "^3.3.1",
    "primeicons": "^7.0.0",
    "primeng": "^17.13.0",
}
```

### Install the theming system

Create a custom theme using the primeng-sass-theme.
It can be found here :
[primeng-sass-theme](https://github.com/primefaces/primeng-sass-theme)

## Step 2 : upgrade to Angular 18

```bash
ng update @angular/core@18 @angular/cli@18
```

Uninstall primeflex
  
```bash
npm uninstall primeflex
```

Remove the references to primeng css and primeflex css in styles.scss or angular.json

Install Tailwind CSS for Angular

[Tailwind CSS for Angular](https://tailwindcss.com/docs/guides/angular)

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

Configure the tailwind.config.js file

Optimize the css bundle by separating the different bundles in angular.json

```json
"styles": [
    {
    "input": "node_modules/primeicons/primeicons.css",
    "bundleName": "primeicons"
    },
    {
    "input": "src/styles.scss",
    "bundleName": "styles"
    }
]
```

Define your colors in the preset of PrimeNg.

Replace the grid system with the Tailwind grid system.

Install PrimeCLT
  
```bash
npm install -g primeclt
```
Run the `pf2wt` in a directory that contains files to be migrated.

```bash
pf2wt
```



Configure the components with the preset system of PrimeNg v18.
