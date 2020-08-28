export const HUGE_LOADER_SIZE = 100;
export const SMALL_LOADER_SIZE = 40;
export const MIN_SCREEN_WIDTH = 375;
export const MID_SCREEN_WIDTH = 650;
export const MAX_USERS_TO_FETCH = 3;

export const GithubReposUri = (URI: string) => URI;

export const GithubUserProfileData = (username: string) =>
  `https://api.github.com/users/${username}`;

export const GithubUsersUri = (username: string, maxUsers: number) =>
  `https://api.github.com/search/users?q=${username}&per_page=${maxUsers}`;

export const ERROR_MESSAGE =
  'We could not retrieve the data, please try again later.';

export const EMPTY_DATA = 'Probably there is no data :(';

export const NO_SEARCH_RESULTS = 'There are no search results for your input.';

export interface FetchedUserData {
  incomplete_results: boolean;
  total_count: number;
  items: ResponseUserItems[];
}

export interface ResponseUserItems {
  [x: string]: string | number | boolean;
  avatar_url: string;
  id: number;
  html_url: string;
  login: string;
  repos_url: string;
  location: string;
  bio: string;
  url: string;
}

export interface ExtendedResponseUserItems extends ResponseUserItems {
  isExpanded: boolean;
}
