import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect } from 'react';

import { SidebarDrawerProviderProps } from '../@types/types';

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  // fecha o sidebar toda vez que o usuário entrar em alguma página
  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return <SidebarDrawerContext.Provider value={disclosure}>{children}</SidebarDrawerContext.Provider>;
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
