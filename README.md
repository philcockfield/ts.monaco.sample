# Module Federation: Monaco Editor (Sample)

A stripped back demonstration repo of exporting the [Monaco](https://github.com/Microsoft/monaco-editor) code editor via [Module Federation](https://webpack.js.org/concepts/module-federation/).

## Structure

```
pkg/
  - host     Consumes the exposed monoaco <Editor> (port 3000)
  - monaco   Exposes an <Editor> (port 3001)
```

### Monaco

The `pkg/monaco/` module is based on the sample webpack configuration found in [browser-esm-webpack-typescript](https://github.com/microsoft/monaco-editor-samples/tree/master/browser-esm-webpack-typescript) example in the [monaco-editor-samples](https://github.com/microsoft/monaco-editor-samples/tree/master/browser-esm-webpack-typescript) repo.

When run standalone (no module-federation) it works, loading it's workers locally:

```
cd pkg/monaco/
yarn start
```

![working-locally](https://user-images.githubusercontent.com/185555/96311836-db7c5800-1066-11eb-8ab8-567ac11c5999.png)

Note the `src/MonacoEnvironment.ts` file that provides a global `getWorkerUrl` function that the editor uses to determine where to load the worker bundle from.
