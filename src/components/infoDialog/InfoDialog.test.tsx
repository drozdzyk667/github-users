import React from 'react';
import { shallow, mount } from 'enzyme';
import InfoDialog from './index';
import { ERROR_MESSAGE } from 'pages/githubViewer/GithubViewer.constants';
import { DialogContentText, Button } from '@material-ui/core';

describe('InfoDialog', () => {
  it('should display correct warning message', () => {
    const component = shallow(<InfoDialog message={ERROR_MESSAGE} />);
    expect(component.find(DialogContentText).at(0).text()).toEqual(
      ERROR_MESSAGE
    );
  });
  it('should check the button text', () => {
    const mounted = mount(<InfoDialog message={ERROR_MESSAGE} />);

    expect(mounted.find(Button).props().children).toEqual('OK');
  });
});
