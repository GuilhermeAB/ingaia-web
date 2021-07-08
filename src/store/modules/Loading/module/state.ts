export type LoadingStateType = {
  isLoading: boolean,
};

const state = (): LoadingStateType => ({
  isLoading: false
});

export default state;
