import { Box, Flex, Button, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex as="nav" bg="orange.500" p={4} color="white" justifyContent="space-between" alignItems="center">
      <Text fontSize="lg" fontWeight="bold">
        Invoice Manager
      </Text>
      <Box>
        <Link as={RouterLink} to="/" px={2}>
          Product
        </Link>
        <Link as={RouterLink} to="/pricing" px={2}>
          Pricing
        </Link>
        <Button as={RouterLink} to="/login" colorScheme="blackAlpha" variant="outline" ml={4}>
          Sign In / Log In
        </Button>
      </Box>
    </Flex>
  );
};

export default NavBar;
