import React from 'react';
import { makeStyles, Theme, Typography, Link } from '@material-ui/core';
import {
  ResponseUserItems,
  EMPTY_DATA,
} from 'pages/githubViewer/GithubViewer.constants';
import Icon from 'Icons';
import { Icons } from 'Icons/Icon.constants';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => ({
  urlContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '20px',
  },
  spacer: {
    marginLeft: 5,
  },
  desc: {
    textAlign: 'center',
    marginTop: 10,
    display: 'inline-block',
  },
}));

const SLICE_STARTING_CHAR = 0;
const MAX_DESC_LENGTH = 100;

interface UserProfileDetailsProps {
  response: ResponseUserItems;
  isScreenMobile: boolean;
}

const UserProfile: React.FC<UserProfileDetailsProps> = React.memo(
  ({ response, isScreenMobile }) => {
    const classes = useStyles();
    const { t } = useTranslation();

    const sliceUserDescription = () =>
      response?.bio?.slice(SLICE_STARTING_CHAR, MAX_DESC_LENGTH);

    const shortUserDesc =
      response?.bio?.length <= MAX_DESC_LENGTH
        ? sliceUserDescription()
        : `${sliceUserDescription()}...`;

    const isProfileDataAvailable =
      response?.name || response?.location || response?.bio;

    return (
      <>
        {isProfileDataAvailable ? (
          <>
            {response.name && (
              <Typography variant={isScreenMobile ? 'h6' : 'h5'}>
                {response.name}
              </Typography>
            )}
            {response.location && <Typography>{response.location}</Typography>}
            {response.bio && (
              <Typography className={classes.desc}>{shortUserDesc}</Typography>
            )}
          </>
        ) : (
          <span>{EMPTY_DATA}</span>
        )}
        <Link
          href={response?.html_url}
          target={'_blank'}
          className={classes.urlContainer}
        >
          <Icon fontSize='small' name={Icons.openInNew} />
          <Typography className={classes.spacer}>
            {t('visitProfile')}
          </Typography>
        </Link>
      </>
    );
  }
);

export default UserProfile;
