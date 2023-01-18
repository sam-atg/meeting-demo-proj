import { Button, Container, Group, Stack, Stepper } from '@mantine/core';
import { useState } from 'react';
import { ADDED, LineFlasher, REMOVED } from './LineFlasher';

const codeSnippets = [
  `
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('Tests the button', async () => {
    render(<Button>Submit</Button>);

    // logs a link to https://testing-playground.com with whats currently rendered
    screen.logTestingPlaygroundURL();

    const button = screen.getByText(/submit/i, {
      /* can use this for query recommendations */
      suggest: true
    });
  });
});
  `,
  `
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  const onClickMock = vi.fn();

  beforeEach(() => {
    onClickMock.mockReset();
  });

  it('Tests the button', async () => {
    render(<Button>Submit</Button>);

    // logs a link to https://testing-playground.com with whats currently rendered
    screen.logTestingPlaygroundURL();

    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toBeInTheDocument();
  });
});
  `,

  `
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  const onClickMock = vi.fn();

  beforeEach(() => {
    onClickMock.mockReset();
  });

  it('Tests the button', async () => {
    render(<Button onClick={onClickMock}>Submit</Button>);

    // logs a link to https://testing-playground.com with whats currently rendered
    screen.logTestingPlaygroundURL();

    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });
});
  `
];

export function StepDemo() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive(current => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive(current => (current > 0 ? current - 1 : current));
  const highlight_step2 = Object.fromEntries([
    ...[14, 15].map(x => [x, REMOVED]),
    ...[1, 5, 6, 7, 8, 9, 17, 18].map(x => [x, ADDED])
  ]);
  const highlight_step3 = Object.fromEntries([21, 22, 3].map(x => [x, ADDED]));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="Create the test" description="Figure out what you're working with">
          <Container size="md">
            <LineFlasher flashContent={['+']} language="tsx" withLineNumbers>
              {codeSnippets[0]}
            </LineFlasher>
          </Container>
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Add the assertion">
          <Container size="md" key={1}>
            <LineFlasher flashContent={['+']} language="tsx" withLineNumbers highlightLines={highlight_step2}>
              {codeSnippets[1]}
            </LineFlasher>
          </Container>
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Test interactions">
          <Container size="md">
            <LineFlasher key={2} flashContent={['+']} language="tsx" withLineNumbers highlightLines={highlight_step3}>
              {codeSnippets[2]}
            </LineFlasher>
          </Container>
        </Stepper.Step>
        <Stepper.Completed>
          <Container size="md">
            <LineFlasher key={2} flashContent={['+']} language="tsx" withLineNumbers>
              {codeSnippets[2]}
            </LineFlasher>
          </Container>
        </Stepper.Completed>
      </Stepper>
      <Stack align="center">
        <Group position="center" mt="md">
          <Button variant="default" disabled={active <= 0} onClick={prevStep}>
            Back
          </Button>
          <Button disabled={active >= 3} onClick={nextStep}>
            Next step
          </Button>
          <Button variant="subtle" onClick={() => setActive(3)}>
            Skip
          </Button>
        </Group>
      </Stack>
    </>
  );
}
