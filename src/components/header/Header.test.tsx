import React from 'react';
import { shallow } from 'enzyme';
import { Typography } from '@material-ui/core';
import Header from './Header';

describe('Header', () => {
  it('should return correct header text', () => {
    const component = shallow(<Header />);
    expect(component.find(Typography).at(0).text()).toEqual('Github Users');
  });
});
