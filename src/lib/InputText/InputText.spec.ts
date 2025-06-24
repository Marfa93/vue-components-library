import { render } from 'vitest-browser-vue';

import InputText from './InputText.vue';

const renderComponent = () => render(InputText);

describe('The InputText component', () => {
  it('should render correctly', () => {
    expect(() => {
      renderComponent();
    }).not.toThrow();
  });

  it('should render the input', async () => {
    const { getByRole } = renderComponent();

    await expect.element(getByRole('textbox')).toBeInTheDocument();
  });

  it('should be visible', async () => {
    const { getByRole } = renderComponent();

    await expect.element(getByRole('textbox')).toBeVisible();
  });
});
