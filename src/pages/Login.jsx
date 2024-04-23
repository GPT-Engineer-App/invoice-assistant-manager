import React from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

function Login() {
  return (
    <Box p={4}>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Enter your email" />
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="Enter your password" />
        <Button mt={4} colorScheme="teal" type="submit">
          Login
        </Button>
      </FormControl>
    </Box>
  );
}

export default Login;
