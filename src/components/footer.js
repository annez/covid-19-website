import PropTypes from "prop-types"
import React from "react"
import { Box, Image, Flex, Heading, ListItem, List } from '@chakra-ui/core';
import { Link } from "gatsby";

import code4coviddark from "../images/code4coviddark.svg"

const Footer = () => (
  <Flex
    as="footer"
    backgroundColor="#2F3B45"
    paddingX={["1rem", "4rem"]}
    paddingY={"2rem"}
    justifyContent="space-between"
    minHeight={300}
  >
    <Box color="white">
      <Heading paddingBottom={5}>
        Useful Links
      </Heading>
      <List textDecoration="underline" lineHeight={2}>
        <ListItem>
          <Link to="/support_resources">Support Resources</Link>
        </ListItem>
        <ListItem>
          <Link to="/volunteer">Volunteer</Link>
        </ListItem>
      </List>
    </Box>
    <Flex alignSelf="flex-end">
      <Image
        src={code4coviddark}
        alt="code4covidLogo"
        width={[125, 200]}
      />
    </Flex>
  </Flex>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
