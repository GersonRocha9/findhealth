import { Box, Button, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { useState } from "react";
import { RiRefreshLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";

export default function UserList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, isError, refetch } = useQuery(["users"], () =>
    api.get("/profissional-busca/", { params: { page } })
  );

  return (
    <>
      <Head>
        <title>Usuários | dashgo.</title>
      </Head>

      <Box>
        <Header />
        <Flex w="100%" my={6} maxW={1480} mx="auto" px={6}>
          <Sidebar />

          <Box flex={1} borderRadius={8} bg="gray.800" p={8}>
            <Flex mb={8} justify="space-between" align="center">
              <Heading as="h2" size="lg" fontWeight="normal">
                Encontre um profissional
                {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml={4} />}
              </Heading>

              <Box>
                <Button
                  as="a"
                  colorScheme="green"
                  size="sm"
                  fontSize="sm"
                  mr={4}
                  cursor="pointer"
                  leftIcon={<Icon as={RiRefreshLine} fontSize={20} />}
                  onClick={() => refetch()}
                >
                  Atualizar dados
                </Button>
              </Box>
            </Flex>

            {isLoading ? (
              <Flex justify="center">
                <Spinner />
              </Flex>
            ) : isError ? (
              <Flex justify="center">
                <Text>Falha ao obter dados do usuário</Text>
              </Flex>
            ) : (
              <>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th>Nome</Th>
                      <Th>CRM</Th>
                      <Th>CPF</Th>
                      <Th>Telefone</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.data.map((user) => {
                      return (
                        <Tr key={user.id}>
                          <Td>
                            <Box>
                              <Text fontWeight="bold">{user.nome}</Text>

                              <Text fontSize="sm" color="gray.300">
                                {user.email}
                              </Text>
                            </Box>
                          </Td>

                          <Td>
                            <Text fontSize="sm">{user.crm}</Text>
                          </Td>

                          <Td>
                            <Text fontSize="sm">{user.cpf}</Text>
                          </Td>

                          <Td>
                            <Text fontSize="sm">{user.telefone}</Text>
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>

                <Pagination totalCountOfRegisters={10} currentPage={page} onPageChange={setPage} />
              </>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  );
}
