import { GET_THEME } from 'actions/types';
import { getTheme } from 'actions/theme';

describe('actions', () => {
  it('should create an action to update theme', () => {
    const payload = { color: 'default' };
    const expectedAction = {
      type: GET_THEME,
      payload,
    };

    expect(getTheme(payload)).toEqual(expectedAction);
  });
});

