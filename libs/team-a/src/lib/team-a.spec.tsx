import { render } from '@testing-library/react';

import TeamA from './team-a';

describe('TeamA', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TeamA />);
    expect(baseElement).toBeTruthy();
  });
});
