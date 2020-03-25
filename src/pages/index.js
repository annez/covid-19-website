import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Heading, Box, Text } from "@chakra-ui/core"
import { Link } from "gatsby"

const headerStyling = {
  color: "white",
  fontSize: ["36px", "48px", "84px"],
  maxWidth: "847px",
  fontWeight: "bold",
  marginTop: [5,10],
}

const buttonStyling = {
  backgroundColor: "#FFEE56",
  margin: "40px 0px",
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box
      as="section"
      backgroundColor={"#B56AFF"}
      paddingX={["1rem", "4.5rem"]}
      paddingY={[1,8]}
    >
      <Heading {...headerStyling}>Need help in Quarantine?</Heading>
      <Button {...buttonStyling}>SUPPORT RESOURCES</Button>
      <Heading {...headerStyling}>
        Be part of the #code4covid Tech Response team
      </Heading>
      <Link to="/tech-landing/">
        <Button style={buttonStyling}>VOLUNTEER</Button>
      </Link>
    </Box>
    <Box
      as="section"
      fontSize={[16, 24]}
      maxWidth={800}
      paddingX={["1rem", "4.5rem"]}
      paddingY={8}
    >
      <Heading paddingBottom={6}>Who we are</Heading>
      <Text>
        We are a team of helpers to help...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae enim mi. Etiam eget mi mi. In rhoncus nibh dolor, vel pulvinar ipsum pharetra eget. Aenean diam dolor, ullamcorper vitae dolor sit amet, convallis faucibus est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed euismod tortor sed suscipit aliquam. Curabitur sollicitudin lorem non nisl bibendum, nec iaculis metus bibendum.
      </Text>
    </Box>
  </Layout>
)

export default IndexPage
