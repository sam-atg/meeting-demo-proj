import { Box } from '@mantine/core';
import { StepDemo } from '~/components/StepDemo';

export default function Home() {
  return (
    <Box component="main" sx={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
      <Box my="md">
        <StepDemo />
      </Box>
    </Box>
  );
}
