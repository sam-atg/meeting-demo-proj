import '@testing-library/jest-dom';
/// <reference path="@testing-library/dom/types" />

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

type test = import('@testing-library/react').Screen;
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
});
