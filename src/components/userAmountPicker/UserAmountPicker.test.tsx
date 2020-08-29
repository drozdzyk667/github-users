import React from 'react';
import { mount } from 'enzyme';
import UserAmountPicker from './UserAmountPicker';
import { MenuItem, Typography } from '@material-ui/core';
import { I18nextProvider } from 'react-i18next';
import translation from 'resource/translations';

describe('UserAmountPicker', () => {
  const mockedMaxUsers = 1;
  const clickFnChangeUsers = jest.fn();

  const Comp = (
    <I18nextProvider i18n={translation}>
      <UserAmountPicker
        maxUserToFetch={mockedMaxUsers}
        handleChangeAmountUsersToFetch={clickFnChangeUsers}
      />
    </I18nextProvider>
  );

  it('should render user amount picker button', () => {
    const component = mount(Comp);
    const btn = component
      .find({
        'data-testid': 'user-amount-button',
      })
      .first();
    expect(btn.length).toBe(1);
  });

  it('should find menuItem and check amount', () => {
    const component = mount(Comp);
    const menuItem = component.findWhere((node) => node.is(MenuItem));
    expect(menuItem.exists()).toBe(true);
    expect(menuItem.length).toBe(3);
  });

  it('should check value of last menuItem', () => {
    const component = mount(Comp);
    const menuItem = component.find(MenuItem).last();
    expect(menuItem.prop('children')).toEqual(3);
  });

  it('should check if max users to fetch displays', () => {
    const mounted = mount(Comp);

    expect(mounted.contains(<Typography>{mockedMaxUsers}</Typography>)).toBe(
      true
    );
  });
});
