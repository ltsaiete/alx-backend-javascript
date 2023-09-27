import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const data = await Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => ({
      photo,
      user,
    }))
    .catch(() => ({
      photo: null,
      user: null,
    }));
  return data;
}
