import React from 'react';
import { mount } from 'enzyme';
import UserProfileDetails from './UserProfileDetails';
import { Typography, Link } from '@material-ui/core';
import { UserMock } from 'testUtils/user';
import { I18nextProvider } from 'react-i18next';
import translation from 'resource/translations';

describe('UserProfile', () => {
  const isScreenMobile = false;
  const Comp = (
    <I18nextProvider i18n={translation}>
      <UserProfileDetails isScreenMobile={isScreenMobile} response={UserMock} />
    </I18nextProvider>
  );

  it('should check if user name displays correctly', () => {
    const component = mount(Comp);
    const item = component.find(Typography).first();
    expect(item.prop('children')).toEqual(UserMock.name);
  });

  it('should check if user location displays correctly', () => {
    const component = mount(Comp);
    const item = component.find(Typography).at(1);
    expect(item.prop('children')).toEqual(UserMock.location);
  });

  it('<Link /> should have correct href attribute value', () => {
    const component = mount(Comp);
    const link = component.find(Link);
    expect(link.first().props().href).toEqual(UserMock.html_url);
  });

  it('should check if user description displays correctly', () => {
    const component = mount(Comp);
    const item = component.find(Typography).at(2);
    expect(item.prop('children')).toEqual(UserMock.bio);
  });

  it('should check if user link to profile displays correct text', () => {
    const component = mount(Comp);
    const item = component.find(Typography).last();
    expect(item.prop('children')).toEqual('Visit Profile');
  });
});
