import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";

import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { ChartComponent } from "../components/Chart";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex width="100%" my={6} maxWidth={1480} mx="auto" px={6}>
        <Sidebar />

        <SimpleGrid flex={1} gap={4} minChildWidth="320px" alignItems="flex-start">
          <Box p={8} bg="gray.800" borderRadius={8} pb={4}>
            <Text fontSize="lg" mb={4}>
              Inscritos da Semana
            </Text>
            <ChartComponent />
          </Box>

          <Box p={8} bg="gray.800" borderRadius={8} pb={4}>
            <Text fontSize="lg" mb={4}>
              Taxa de Abertura
            </Text>
            <ChartComponent />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
