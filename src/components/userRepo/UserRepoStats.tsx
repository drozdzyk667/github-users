import React from 'react';
import cx from 'classnames';
import Icon from 'Icons';
import { Icons } from 'Icons/Icon.constants';
import { Tooltip, Box, makeStyles, Typography } from '@material-ui/core';
import { RepoItemProps } from './UserRepoItem';
import { LangColors } from 'theme/Colors';

const useStyles = makeStyles({
  rowContainer: {
    display: 'flex',
    padding: '0.5em',
    flexDirection: 'row',
  },
  statsContainer: {
    marginTop: '-12px',
    height: '45px',
    fontSize: '15px',
    backgroundColor: '#ebf9ff',
    borderBottomLeftRadius: '5px',
    padding: '0.8em 1em 0.5em 1em',
    borderBottomRightRadius: '5px',
  },
  dot: {
    width: '15px',
    height: '15px',
    marginRight: '5px',
    borderRadius: '50%',
  },
  dotContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  lang: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  small: {
    width: '100px',
  },
  right: {
    marginLeft: 'auto',
  },
});

const UserRepoStats: React.FC<RepoItemProps> = ({ color, repo }) => {
  const classes = useStyles();

  return (
    <Box className={cx(classes.statsContainer, classes.dotContainer)}>
      {Object.keys(LangColors).includes(repo.language) ? (
        <Tooltip title={repo.language} placement='top'>
          <Box className={cx(classes.dotContainer, classes.small)}>
            <Box
              className={classes.dot}
              style={{ backgroundColor: `${color}` }}
            />
            <Typography className={classes.lang}>{repo.language}</Typography>
          </Box>
        </Tooltip>
      ) : (
        <span>{'Ups...'}</span>
      )}
      <Box className={cx(classes.right, classes.dotContainer)}>
        <Box className={classes.rowContainer}>
          <Icon fontSize='small' name={Icons.starRate} />
          {repo.stargazers_count}
        </Box>
        <Box className={classes.rowContainer}>
          <Icon fontSize='small' name={Icons.person} />
          {repo.watchers_count}
        </Box>
        <Box className={classes.rowContainer}>
          <Icon fontSize='small' name={Icons.transform} />
          {repo.forks_count}
        </Box>
      </Box>
    </Box>
  );
};

export default UserRepoStats;
