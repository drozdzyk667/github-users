import React from 'react';
import { mount } from 'enzyme';
import SearchContainer from './SearchContainer';
import { TextField } from '@material-ui/core';
import Icon from 'Icons';
import { I18nextProvider } from 'react-i18next';
import translation from 'resource/translations';

describe('SearchContainer', () => {
  const clickFnSearch = jest.fn();
  const clickFnCleanQuery = jest.fn();
  const clickFnSubmitQuery = jest.fn();
  const clickFnChangeUsers = jest.fn();
  const mockedQuery = 'drozdzyk667';
  const mockedMaxUsers = 1;

  const Comp = (
    <I18nextProvider i18n={translation}>
      <SearchContainer
        searchQuery={mockedQuery}
        maxUserToFetch={mockedMaxUsers}
        handleSearchQuery={clickFnSearch}
        handleOnClearQuery={clickFnCleanQuery}
        handleSubmitSearchQuery={clickFnSubmitQuery}
        handleChangeAmountUsersToFetch={clickFnChangeUsers}
      />
    </I18nextProvider>
  );

  it('renders <TextField/> with expected props', () => {
    const component = mount(Comp);
    expect(component.find(TextField).props().label).toEqual('Enter Username');
    expect(component.find(TextField).props().onChange).toBeDefined();
  });

  it('should trigger onChange function on key press while user typing', () => {
    const component = mount(Comp);
    component.find('input').simulate('change');
    expect(clickFnSearch).toHaveBeenCalled();
  });

  it('should trigger function that removes user search input', () => {
    const component = mount(Comp);
    component.find(Icon).first().simulate('click');
    expect(clickFnCleanQuery).toHaveBeenCalled();
  });

  it('should render search button', () => {
    const component = mount(Comp);
    const btn = component
      .find({
        'data-testid': 'search-button',
      })
      .first();
    expect(btn.length).toBe(1);
  });

  it('should check if button is enabled', () => {
    const component = mount(Comp);
    const btn = component
      .find({
        'data-testid': 'search-button',
      })
      .first();
    btn.simulate('click');
    expect(btn.prop('disabled')).toBeFalsy();
  });
});
