import { TypographyStylesProvider } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import logger from '~/logger';

interface MDXWrapperProps {
  children?: React.ReactNode;
}

const CodeBlock = (props: React.PropsWithChildren) => {
  logger.info('hm', props);
  return (
    <>
      <pre {...props} />
      <Prism language="tsx">{'props.children as string'}</Prism>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const components: React.ComponentProps<typeof MDXProvider>['components'] = {
  pre: CodeBlock
};

export function MDXWrapper(props: MDXWrapperProps) {
  return (
    <TypographyStylesProvider>
      <MDXProvider>{props.children}</MDXProvider>
    </TypographyStylesProvider>
  );
}
