import type { ExampleTabs } from './ExampleTabPanel';
import { ExampleTabPanel } from './ExampleTabPanel';
import { TsIcon } from './icons';

const icon = <TsIcon width={16} height={16} />;

const tabs: ExampleTabs[] = [
  { name: 'MyButton.tsx', icon, code: 'const MyButton = props => <Button {...props}>{props.label}</Button>;' },
  {
    name: 'MyButton.test.tsx',
    icon,
    code: `
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('example', () => {
  const onClickMock = vi.fn();

  beforeEach(() => {
    onClickMock.mockReset();
  });

  it('is an example', async () => {
    render(<div />);

    expect(screen.getByText(/submit/i)).toBeInTheDocument();

    const button = screen.getByRole('button', {
      name: /hello world/i,
      suggest: true /* set for query recommendations */
    });

    // logs a link to https://testing-playground.com/ with whats currently rendered
    screen.logTestingPlaygroundURL();

    await userEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });
});`
  }
];

export function BasicTestExample() {
  return <ExampleTabPanel tabs={tabs} />;
}
