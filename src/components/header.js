import PropTypes from "prop-types"
import {
  DarkMode,
  Button,
  Flex,
  Stack,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  css,
} from "@chakra-ui/core"
import React from "react"
import code4covid from "../images/code4covid.svg"
import { Link } from "gatsby"

const PAGES = [
  { children: "Home", to: "/" },
  { children: "Volunteer", to: "/tech-landing/" },
  { children: "Page 2", to: "/404/" },
]

const NavLink = props => (
  <Button variant="ghost" size="lg" as={Link} {...props} />
)

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <header
      style={{
        background: `white`,
      }}
    >
      <Flex
        margin="0 auto"
        maxWidth={1300}
        padding="1.45rem 1.0875rem"
        justifyContent="space-between"
      >
        <Link to="/">
          <img
            style={{ marginBottom: 0 }}
            src={code4covid}
            alt="code4covidLogo"
          />
        </Link>
        <IconButton
          display={["block", "block", "none"]} // Match this with the inverse of the buttons stack to use Chakra breakpoints
          variant="ghost"
          size="lg"
          aria-label="Navigation Button"
          icon="menu"
          onClick={onOpen}
        />
        <Stack
          display={["none", "none", "block"]}
          as="nav"
          direction="row"
          spacing={2}
        >
          {PAGES.map(page => (
            <NavLink key={page.children + page.to} {...page} />
          ))}
        </Stack>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DarkMode>
            <DrawerContent backgroundColor="gray.700" color="white">
              <DrawerCloseButton />
              <DrawerBody>
                <Stack as="nav" direction="column" marginTop={16} spacing={8}>
                  {PAGES.map(page => (
                    <NavLink
                      key={page.children + page.to}
                      fontSize={28}
                      css={css`
                        [aria-current]& {
                          font-weight: 800;
                        }
                      `}
                      {...page}
                    />
                  ))}
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </DarkMode>
        </Drawer>
      </Flex>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Code4Covid`,
}

export default Header
