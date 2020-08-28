import React from 'react';
import cx from 'classnames';
import Icon from 'Icons';
import { Repo } from './UserRepoList';
import { Icons } from 'Icons/Icon.constants';
import { Box, makeStyles, Typography, Link, Tooltip } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  root: { display: 'flex', flexDirection: 'column' },
  rowContainer: {
    display: 'flex',
    padding: '0.5em',
    flexDirection: 'row',
  },
  contentContainer: {
    marginTop: '10px',
    height: '160px',
  },
  infoContainer: {
    width: '85%',
  },
  dotContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  small: {
    width: '80px',
  },
  desc: {
    color: '#a6a6a6',
  },
  spacer: {
    marginLeft: 5,
  },
  repoName: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});

const UserRepoInfo: React.FC<{ repo: Repo }> = ({ repo }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const sliceLongDescription = () => `${repo.description.slice(0, 50)}...`;

  return (
    <Box className={cx(classes.contentContainer, classes.rowContainer)}>
      <Box className={classes.infoContainer}>
        <Box mx={1}>
          <Tooltip title={repo.name} placement='top'>
            <Typography className={classes.repoName} variant='h5'>
              {repo.name}
            </Typography>
          </Tooltip>
        </Box>
        <Typography
          color='primary'
          variant='subtitle2'
          className={classes.rowContainer}
        >
          <Link
            href={repo.svn_url}
            target={'_blank'}
            className={classes.dotContainer}
          >
            <Icon fontSize='small' name={Icons.openInNew} />
            <Typography className={classes.spacer}>{t('visitRepo')}</Typography>
          </Link>
        </Typography>
        {repo.description ? (
          <Typography variant='subtitle1'>
            <Box mx={1} className={classes.desc}>
              {sliceLongDescription()}
            </Box>
          </Typography>
        ) : null}
      </Box>
    </Box>
  );
};

export default UserRepoInfo;
