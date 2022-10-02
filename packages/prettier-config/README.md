# Prettier config, mrbridge's style

This package provides mrbridge's prettier config.

-   `.prettierrc` as an importable/extensible file

## Installing

1.  In your project folder, run:

    ```bash
    npm i -D @misterbridge/prettier-config
    npx install-peerdeps --dev @misterbridge/prettier-config
    ```

    You will see several dependencies were installed.

2.  Add prettier config to your `package.json`

    ```json
    {
        "prettier": "@misterbridge/prettier-config/.prettierrc.js"
    }
    ```

    If you want to override it, you'll have to spread the config into a `.prettierrc.js` file instead.

    Example:

    ```js
    module.exports = {
        ...require('@misterbridge/prettier-config/.prettierrc.js'),
        semi: false,
    };
    ```
