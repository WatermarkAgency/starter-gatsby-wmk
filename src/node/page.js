import React from "react";

export default ({ pageContext }) => {
  // const blocks = data.wordpressPage.acf ? data.wordpressPage.acf.block_page : null;
  // const yoast = data.wordpressPage.yoast_meta
  return <div>Page Content Here {console.log(pageContext)}</div>;
};
