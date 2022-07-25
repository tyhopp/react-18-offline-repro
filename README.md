# react-18-offline-repro

1. Clone repo
2. `npm i`
3. `npm run build`
4. Observe logged value of `path` prop in terminal during SSR, see it's `/*` for each page
5. `npm run serve`
6. Observe logged value of `path` prop in browser console during runtime, see it's the pathname of whatever the current page is (e.g. `/`)
7. Hard refresh whatever page you're on
8. Observe React 18 tree mismatch error

This only happens with `gatsby-plugin-offline` and is caused by trying to use the `path` prop to conditionally render parts of the DOM. This would happen for any props that differ between server and browser runtimes, the one that causes our current tests to fail just happens to be `path`.

See [src/components/wrap-page-element.js](src/components/wrap-page-element.js) for an example.
