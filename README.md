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

