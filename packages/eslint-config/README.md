# ESLint config, mrbridge's style

This package provides mrbridge's eslint config for TypeScript projects with `react`.

-   `.eslintrc` as an extensible shared config

## Installing

1.  In your project folder, run:

    ```bash
    npm i -D @misterbridge/eslint-config
    npx install-peerdeps --dev @misterbridge/eslint-config
    ```

    You will see several dependencies were installed.

2.  Now, create (or update) a `.eslintrc` file with the following content:

    ```json
    {
        "extends": ["@misterbridge/eslint-config"]
    }
    ```

    **If you need to extend the configuration with other plugins, make sure that `@misterbridge/eslint-config/prettier` is the last item of the array**

    ```json
    {
       "extends": [
          "@misterbridge/eslint-config",
          // ...,
          "@misterbridge/eslint-config/prettier"
       ]
    }
    ```

