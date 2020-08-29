import React from 'react';
import { shallow } from 'enzyme';
import UserProfile from './UserProfile';
import { UserMock } from 'testUtils/user';

describe('UserProfile', () => {
  const Comp = <UserProfile user={UserMock} />;

  it('should use provided img as src', () => {
    const component = shallow(Comp);
    const img = component.find({
      'data-testid': 'avatar-img',
    });
    expect(img.first().props().src).toEqual(UserMock.avatar_url);
  });
});
