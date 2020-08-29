import React from 'react';
import { mount } from 'enzyme';
import UserItem from './UserItem';
import { Typography, Accordion } from '@material-ui/core';
import { UserMock } from 'testUtils/user';

describe('UserItem', () => {
  const Comp = <UserItem key={UserMock.id} user={UserMock} />;

  it('should find Accordion and check amount', () => {
    const component = mount(Comp);
    const menuItem = component.findWhere((node) => node.is(Accordion));
    expect(menuItem.exists()).toBe(true);
    expect(menuItem.length).toBe(1);
  });

  it('should check value of typography login', () => {
    const component = mount(Comp);
    const typho = component.find(Typography).first();
    expect(typho.prop('children')).toEqual(UserMock.login);
  });
});
