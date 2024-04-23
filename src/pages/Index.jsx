import { Box, Button, Container, Flex, Heading, HStack, Image, Stack, Text, VStack, SimpleGrid, useColorModeValue, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaComments, FaCreditCard, FaRegHandshake, FaSignInAlt } from "react-icons/fa";

const NavBar = () => {
  return (
    <Flex as="nav" py={4} px={8} justifyContent="space-between" alignItems="center" bg="orange.400" color="white">
      <Text fontSize="lg" fontWeight="bold">
        InvoiceApp
      </Text>
      <Box>
        <Button variant="ghost" mx={2}>
          Product
        </Button>
        <Button variant="ghost" mx={2} as={Link} to="/features">
          Features
        </Button>
        <Button variant="ghost" mx={2} as={Link} to="/pricing">
          Pricing
        </Button>
        <Button leftIcon={<FaSignInAlt />} colorScheme="teal" variant="solid" mx={2} as={Link} to="/login">
          Sign In
        </Button>
      </Box>
    </Flex>
  );
};

const Index = () => {
  return (
    <Container maxW="container.xl">
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
    </Container>
  );
};

const HeroSection = () => {
  return (
    <HStack spacing={10} py={20} align="center">
      <VStack spacing={10}>
        <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbnZvaWNlJTIwbWFuYWdlbWVudHxlbnwwfHx8fDE3MTM4NjcyNjd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Invoice Management" />
        <Heading as="h1" size="2xl" textAlign="center">
          Simplify Your Invoice Management with AI
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Invoice Manager is your AI-powered assistant that integrates seamlessly with your Gmail, Google Drive, and Slack to streamline your invoicing process.
        </Text>
        <Button rightIcon={<FaComments />} colorScheme="orange" size="lg" as={Link} to="/chat">
          Chat with Assistant
        </Button>
      </VStack>
      <Box p={5} bg="gray.100" rounded="md" boxShadow="xl">
        <Text fontSize="md" fontWeight="bold">
          Demo Chat:
        </Text>
        <Text fontSize="sm">User: Can you generate an invoice report for last month?</Text>
        <Text fontSize="sm">Assistant: Sure, generating your invoice report now...</Text>
      </Box>
    </HStack>
  );
};

const FeaturesSection = () => {
  return (
    <SimpleGrid columns={3} spacing={10} py={20} align="center">
      <VStack>
        <FaComments size="3em" />
        <Text fontSize="md" textAlign="center">
          Have the assistant extract and analyze invoices in your Gmail.
        </Text>
      </VStack>
      <VStack>
        <FaRegHandshake size="3em" />
        <Text fontSize="md" textAlign="center">
          Ask him to prepare an invoice report for you (overview of the invoices in the mailbox, invoice details).
        </Text>
      </VStack>
      <VStack>
        <FaCreditCard size="3em" />
        <Text fontSize="md" textAlign="center">
          Assistant will save the invoices from the given period in your Google Drive.
        </Text>
      </VStack>
      <VStack py={10} align="center">
        <Text fontSize="xl" textAlign="center" color="orange.500" fontWeight="bold">
          Coming Soon
        </Text>
        <Text fontSize="lg" textAlign="center" color="orange.500">
          Payments and Payroll Assistants
        </Text>
      </VStack>
    </SimpleGrid>
  );
};

const PricingSection = () => {
  return (
    <Box py={20}>
      <Heading as="h2" size="xl" textAlign="center" mb={10}>
        Choose Your Plan
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

const PricingCard = ({ plan }) => {
  return (
    <Flex direction="column" alignItems="center" p={5} bg={useColorModeValue("white", "gray.700")} boxShadow="xl" rounded="md">
      <Text fontWeight="bold" fontSize="2xl">
        {plan.reports} Reports
      </Text>
      <Text fontSize="6xl" fontWeight="bold">
        ${plan.price}
      </Text>
      <Text fontSize="md" color="gray.500">
        per month
      </Text>
      <Button leftIcon={<FaCreditCard />} colorScheme="orange" mt={5} size="lg">
        Subscribe
      </Button>
    </Flex>
  );
};

const pricingPlans = [
  { id: 1, price: 10, reports: 2 },
  { id: 2, price: 9, reports: 5 },
  { id: 3, price: 8, reports: 10 },
];

export default Index;
