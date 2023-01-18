import type { BoxProps } from '@mantine/core';
import { Box } from '@mantine/core';

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  return <div>{props.children}</div>;
}

export const MainContent = (props: BoxProps) => (
  <Box component="main" sx={{ paddingLeft: '2rem', paddingRight: '2rem' }} {...props} />
);
