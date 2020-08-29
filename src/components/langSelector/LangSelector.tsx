import React from 'react';
import i18n from 'resource/translations';
import { Typography, Box, Menu, MenuItem, makeStyles } from '@material-ui/core';
import cx from 'classnames';
import Icon from 'Icons';
import { useTranslation } from 'react-i18next';
import { languages } from './LangSelector.constants';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 20px',
  },
  itemText: {
    fontWeight: 'bold',
    marginLeft: theme.spacing(1),
  },
  pointer: {
    cursor: 'pointer',
  },
  langContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
}));

const LangSelector: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | Element>(null);

  const handleOpenMenu = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = (name: string) => {
    const foundElement = languages.find((lang) => lang.name === name);
    if (foundElement) {
      handleChangeLanguage(name);
    }
    setAnchorEl(null);
  };

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Box className={classes.root}>
      <Box onClick={handleOpenMenu}>
        <Icon
          className={classes.pointer}
          fontSize='large'
          name={i18n.language}
        />
      </Box>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.name}
            className={classes.langContainer}
            onClick={() => handleCloseMenu(lang.name)}
          >
            <Icon name={lang.name} />
            <Typography className={cx(classes.pointer, classes.itemText)}>
              {t(lang.translation)}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
export default LangSelector;
