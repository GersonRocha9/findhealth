import { Button } from '@chakra-ui/react';

import { PaginationItemProps } from '../../@types/types';

export function PaginationItem({ number, onPageChange, isCurrent = false }: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w={4}
        colorScheme="green"
        disabled
        _disabled={{
          bgColor: "purple.600",
          cursor: "default",
        }}
      >
        {number}
      </Button>
    );
  } else {
    return (
      <Button
        onClick={() => onPageChange(number)}
        size="sm"
        fontSize="xs"
        w={4}
        bg="gray.700"
        _hover={{ bg: "gray.500" }}
      >
        {number}
      </Button>
    );
  }
}
