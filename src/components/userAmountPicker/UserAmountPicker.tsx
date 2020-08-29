import React from 'react';
import Icon from 'Icons';
import { Icons } from 'Icons/Icon.constants';
import {
  Button,
  Box,
  Menu,
  MenuItem,
  makeStyles,
  Typography,
  Divider,
} from '@material-ui/core';
import { MAX_USERS_TO_FETCH } from 'pages/githubViewer/GithubViewer.constants';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  root: {
    flex: 1,
    margin: '0.5em',
  },
  button: {
    padding: '8px 20px',
    width: '100%',
    marginRight: '1em',
    minWidth: '200px',
  },
  spacer: {
    margin: '0 5px',
  },
  menuItem: {
    width: '70px',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
});

const userPickerData = Array.from(Array(MAX_USERS_TO_FETCH), (_, i) => i + 1);

interface UserAmountPickerProps {
  handleChangeAmountUsersToFetch: (value: number) => void;
  maxUserToFetch: number;
}

const UserAmountPicker: React.FC<UserAmountPickerProps> = ({
  maxUserToFetch,
  handleChangeAmountUsersToFetch,
}) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | Element>(null);

  const handleOpenMenu = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = (maxUsers: number) => {
    const foundElement = userPickerData.find((item) => item === maxUsers);
    if (foundElement) {
      handleChangeAmountUsersToFetch(maxUsers);
    }
    setAnchorEl(null);
  };

  return (
    <Box className={classes.root}>
      <Button
        className={classes.button}
        onClick={handleOpenMenu}
        data-testid='user-amount-button'
        variant='contained'
        color='primary'
      >
        <span>{t('fetchUsers')}</span>
        <Icon className={classes.spacer} name={Icons.arrowRight} />
        <Typography>{maxUserToFetch}</Typography>
      </Button>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        {userPickerData.map((item) => (
          <Box key={item}>
            <MenuItem
              className={classes.menuItem}
              onClick={() => handleCloseMenu(item)}
            >
              {item}
            </MenuItem>
            <Divider />
          </Box>
        ))}
      </Menu>
    </Box>
  );
};

export default UserAmountPicker;
