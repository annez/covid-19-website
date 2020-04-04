import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Spinner, Box } from "@chakra-ui/core"

const PartnerWithUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Layout>
      <SEO title="Partner With Us" />
      <Box textAlign="center">
        {isLoading && <Spinner marginTop={200} />}

        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js" />
        <iframe
          title="Partner with Us Form"
          className="airtable-embed airtable-dynamic-height"
          src="https://airtable.com/embed/shrtSXiyO1dPOOfiW?backgroundColor=yellow"
          frameBorder="0"
          width="100%"
          height="3050"
          background="transparent"
          onLoad={() => setIsLoading(false)}
        />
      </Box>
    </Layout>
  )
}

export default PartnerWithUs
