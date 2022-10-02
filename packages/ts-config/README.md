# TypeScript config, mrbridge's style

This package provides mrbridge's TypeScript config.

-   `.tsconfig` as an importable/extensible file

## Installing

1.  In your project folder, run:

    ```bash
    npm i -D @misterbridge/ts-config
    npx install-peerdeps --dev @misterbridge/ts-config
    ```

    You will see several dependencies were installed.

2.  Create (or update) a `.tsconfig` file with the following content:

    ```json
    {
        "extends": "@misterbridge/tsconfig-config/tsconfig.json",
        "compilerOptions": {},
        "include": ["./src"]
    }
    ```

    You can also set/override any `compilerOptions` you want, as well as change the `include` or any other entry.
