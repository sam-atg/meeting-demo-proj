```tsx
//~ TestComponent.test.tsx
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from 'test-utils/TestWrappers';

describe('example', () => {
  it('is an example', () => {
    const onClickMock = jest.fn();
    renderWithProviders(<TestComponent label="Hello world" onClick={onClickMock} />);
    expect(screen.getByText(/submit/i)).toBeInTheDocument();
    const button = screen.getByRole('button', {
      name: /hello world/i,
      suggest: true /* set for query recommendations */
    });
    // logs a link to https://testing-playground.com/ with whats currently rendered
    screen.logTestingPlaygroundURL();
    userEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });
});
```
