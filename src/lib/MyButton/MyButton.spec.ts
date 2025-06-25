import { render } from 'vitest-browser-vue';

import MyButton from './MyButton.vue';

const mockOnClick = vi.fn();
const renderComponent = (label = 'Button') =>
  render(MyButton, { props: { onClick: mockOnClick }, slots: { default: label } });

describe('The Button component', () => {
  it('should render correctly', () => {
    expect(() => {
      renderComponent();
    }).not.toThrow();
  });

  it('should render the button', async () => {
    const { getByRole } = renderComponent();

    await expect.element(getByRole('button')).toBeInTheDocument();
  });

  it('should have the type button', async () => {
    const { getByRole } = renderComponent();

    await expect.element(getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('should be visible', async () => {
    const { getByRole } = renderComponent();

    await expect.element(getByRole('button')).toBeVisible();
  });

  it('should have the right label', async () => {
    const buttonLabel = 'Custom Button Label';
    const { getByRole } = renderComponent(buttonLabel);

    await expect.element(getByRole('button')).toHaveTextContent(buttonLabel);
  });

  it('should execute the action on click', async () => {
    const { getByRole } = renderComponent();

    await getByRole('button').click();

    expect(mockOnClick).toBeCalledTimes(1);
  });
});
