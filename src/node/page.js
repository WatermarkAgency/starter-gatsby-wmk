import React from "react";
import Layout from "../components/layout/MainLayout";

export default ({ pageContext }) => {
  // const blocks = data.wordpressPage.acf ? data.wordpressPage.acf.block_page : null;
  // const yoast = data.wordpressPage.yoast_meta
  return (
    <Layout>
      <h2>Page Content Here</h2> {console.log(pageContext)}
    </Layout>
  );
};
