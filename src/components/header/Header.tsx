import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography } from '@material-ui/core';
import { useWindowProperties } from 'helpers/useWidth';
import { MIN_SCREEN_WIDTH } from 'pages/githubViewer/GithubViewer.constants';
import LangSelector from 'components/langSelector';

const useStyles = makeStyles({
  root: {
    margin: 'auto auto',
    padding: '0.5em 1em 0.5em 2em',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    background:
      'radial-gradient(circle, rgba(148,187,233,0.7175245098039216) 36%, rgba(238,174,202,0) 100%)',
  },
});

const Header = () => {
  const classes = useStyles();
  const { width } = useWindowProperties();

  return (
    <Box className={classes.root}>
      <Typography variant={width < MIN_SCREEN_WIDTH ? 'h4' : 'h3'}>
        {'"Github Users"'}
      </Typography>
      <LangSelector />
    </Box>
  );
};

export default Header;
