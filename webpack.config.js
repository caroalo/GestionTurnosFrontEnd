

module.exports = {
  // Otras configuraciones de Webpack
  resolve: {
    fallback: {
      "zlib": require.resolve("browserify-zlib"),
      "querystring": require.resolve("querystring-es3"),
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "http": require.resolve("stream-http"),
      "net": false, // si no necesitas este módulo, desactívalo
      "fs": false // fs no es compatible con el navegador, así que configúralo como falso
    }
  }
};
