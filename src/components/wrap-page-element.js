import * as React from "react";

export default ({ element, props }) => {
  const { path } = props;

  // On the server, path always equals `/*`.
  // On the client, path is the pathname of the current page.
  // This causes the React 18 tree mismatch error!
  console.log({ path });

  return (
    <>
      {element}
      {path?.includes(`/`) && <footer>Footer</footer>}
    </>
  );
};
