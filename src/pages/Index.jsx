import { Container, Text, VStack, Box, Heading, Button, IconButton, Image, HStack, StackDivider } from "@chakra-ui/react";
import { FaCar, FaInfoCircle, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} divider={<StackDivider borderColor="gray.200" />}>
        {/* Header Section */}
        <Box w="100%" textAlign="center" p={4} bg="teal.500" color="white">
          <Heading as="h1" size="2xl">
            EV Marketplace
          </Heading>
          <Text fontSize="lg">Your one-stop shop for electric vehicles and information</Text>
        </Box>

        {/* Introduction Section */}
        <Box w="100%" textAlign="center">
          <Heading as="h2" size="xl">
            Welcome to the Future of Transportation
          </Heading>
          <Text fontSize="md" mt={4}>
            Explore our range of electric vehicles and learn more about the benefits of going electric.
          </Text>
        </Box>

        {/* EV Showcase Section */}
        <Box w="100%">
          <Heading as="h3" size="lg" mb={4}>
            Our Electric Vehicles
          </Heading>
          <HStack spacing={8} justify="center">
            <VStack>
              <Image src="https://images.unsplash.com/photo-1567168655494-190e0b7c5845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNhciUyMDF8ZW58MHx8fHwxNzE2NDE3OTA0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Electric Car 1" boxSize="200px" />
              <Text>Model X</Text>
              <Button leftIcon={<FaShoppingCart />} colorScheme="teal">
                Buy Now
              </Button>
            </VStack>
            <VStack>
              <Image src="https://images.unsplash.com/photo-1567168655494-190e0b7c5845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNhciUyMDJ8ZW58MHx8fHwxNzE2NDE3OTA0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Electric Car 2" boxSize="200px" />
              <Text>Model Y</Text>
              <Button leftIcon={<FaShoppingCart />} colorScheme="teal">
                Buy Now
              </Button>
            </VStack>
            <VStack>
              <Image src="https://images.unsplash.com/photo-1491921125492-f0b9c835b699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNhciUyMDN8ZW58MHx8fHwxNzE2NDE3OTA1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Electric Car 3" boxSize="200px" />
              <Text>Model Z</Text>
              <Button leftIcon={<FaShoppingCart />} colorScheme="teal">
                Buy Now
              </Button>
            </VStack>
          </HStack>
        </Box>

        {/* Educational Section */}
        <Box w="100%">
          <Heading as="h3" size="lg" mb={4}>
            Why Go Electric?
          </Heading>
          <VStack spacing={4} align="start">
            <HStack>
              <IconButton aria-label="Environment" icon={<FaInfoCircle />} size="lg" colorScheme="teal" />
              <Text>Electric vehicles produce zero emissions, helping to reduce your carbon footprint.</Text>
            </HStack>
            <HStack>
              <IconButton aria-label="Savings" icon={<FaInfoCircle />} size="lg" colorScheme="teal" />
              <Text>Save money on fuel and maintenance costs over the lifetime of the vehicle.</Text>
            </HStack>
            <HStack>
              <IconButton aria-label="Performance" icon={<FaInfoCircle />} size="lg" colorScheme="teal" />
              <Text>Experience instant torque and smooth acceleration with electric motors.</Text>
            </HStack>
          </VStack>
        </Box>

        {/* Footer Section */}
        <Box w="100%" textAlign="center" p={4} bg="gray.100">
          <Text>&copy; 2023 EV Marketplace. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
