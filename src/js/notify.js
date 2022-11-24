import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const notifyFailure = () => {
  return Notify.failure('Oops, there is no country with that name', {
    timeout: 1000,
  });
};
export const notifyInfo = () => {
  return Notify.info(
    'Too many matches found. Please enter a more specific name.',
    { timeout: 1000 }
  );
};
