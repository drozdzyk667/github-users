import React from 'react';
import cx from 'classnames';
import { UserProps } from './UserItem';
import useFetch from 'helpers/useFetch';
import { useWindowProperties } from 'helpers/useWidth';
import { Box, makeStyles, Theme } from '@material-ui/core';
import { MID_SCREEN_WIDTH } from 'pages/githubViewer/GithubViewer.constants';
import {
  GithubUserProfileData,
  SMALL_LOADER_SIZE,
} from 'pages/githubViewer/GithubViewer.constants';
import LoaderWithError from 'components/loader/LoaderWithError';
import UserProfileDetails from './UserProfileDetails';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    boxShadow: theme.shadows[5],
    margin: '20px 20px',
    padding: '10px 0',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      margin: '10px 5px',
    },
  },
  avatar: {
    borderRadius: 50,
    boxShadow: theme.shadows[5],
  },
  innerContainer: {
    flex: 1,
    display: 'flex',
    minWidth: '300px',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
  avatarSmallWidth: {
    width: '200px',
  },
  avatarBiggerWidth: {
    width: '300px',
  },
  desc: {
    textAlign: 'center',
    marginTop: 10,
  },
}));

const UserProfile: React.FC<UserProps> = React.memo(({ user }) => {
  const classes = useStyles();
  const { width } = useWindowProperties();

  const { response, error, isLoading } = useFetch(
    user.isExpanded,
    GithubUserProfileData(user.login)
  );

  const isScreenMobile = width < MID_SCREEN_WIDTH;

  return (
    <>
      {user.isExpanded && (
        <LoaderWithError
          error={error}
          isLoading={isLoading}
          loaderSize={SMALL_LOADER_SIZE}
        >
          <Box className={classes.root}>
            <Box className={classes.innerContainer}>
              <img
                className={cx(
                  classes.avatar,
                  isScreenMobile
                    ? classes.avatarSmallWidth
                    : classes.avatarBiggerWidth
                )}
                src={user.avatar_url}
                alt='user-avatar'
              />
            </Box>
            <UserProfileDetails
              isScreenMobile={isScreenMobile}
              response={response}
            />
          </Box>
        </LoaderWithError>
      )}
    </>
  );
});

export default UserProfile;