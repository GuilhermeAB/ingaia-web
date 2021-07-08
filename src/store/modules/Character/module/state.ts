/* eslint-disable camelcase */
export type LocationType = {
  id: string,
  name: string,
  type?: string,
  dimension?: string,
  residents?: CharacterType[],
  created?: string,
};

export type EpisodeType = {
  id: string,
  name: string,
  air_date?: string,
  episode?: string,
  characters?: CharacterType[],
  created?: string,
};

export type CharacterType = {
  id: string,
  name: string,
  status?: string,
  species?: string,
  type?: string,
  gender?: string,
  origin?: Location,
  location?: Location,
  image: string,
  episode?: EpisodeType[],
  created?: string,
};

export type InfoType = {
  count: number,
  pages: number,
  next: number,
  prev: number,
};

export type CharacterStateType = {
  list?: CharacterType[],
  info?: InfoType,
};

const state = (): CharacterStateType => ({
  list: undefined,
  info: undefined
});

export default state;
