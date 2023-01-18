import { Avatar, Box, Button, Navbar, ScrollArea, Title } from '@mantine/core';
import img from '@static/favicon.ico';
import React from 'react';
import { NavbarLinks } from './NavLinks';

interface NavProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

const titleSection = (
  <Navbar.Section>
    <Box p="xs" sx={theme => ({ borderBottom: `1px solid ${theme.colors.dark[4]}` })}>
      <Button variant="subtle" leftIcon={<Avatar src={img.src} bg="#62799b" size="sm" />}>
        <Title display="inline-block" order={4}>
          Sync
        </Title>
      </Button>
    </Box>
  </Navbar.Section>
);

export function Nav({ title, children, footer }: NavProps) {
  return (
    <Navbar width={{ base: 300 }}>
      {title ?? titleSection}
      <Navbar.Section grow component={ScrollArea} p="md" mx="-xs" px="xs">
        {children ?? <NavbarLinks />}
      </Navbar.Section>
      {footer ?? (
        <Navbar.Section p="xs" sx={theme => ({ borderTop: `1px solid ${theme.colors.dark[4]}` })}>
          Footer with user
        </Navbar.Section>
      )}
    </Navbar>
  );
}
