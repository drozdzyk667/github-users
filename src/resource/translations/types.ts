import { Resource } from 'i18next';

type Fields =
  | 'english'
  | 'enterUsername'
  | 'fetchUsers'
  | 'forks_count'
  | 'polish'
  | 'search'
  | 'stargazers_count'
  | 'visitProfile'
  | 'visitRepo'
  | 'watchers_count'
  | 'welcome';

export interface Translation extends Resource {
  [key: string]: {
    translations: { [key in Fields]: string };
  };
}
