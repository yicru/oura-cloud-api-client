import * as t from 'io-ts';

export const PersonalInfoCodec = t.type({
  age: t.number,
  email: t.string,
  gender: t.string,
  weight: t.number,
});

export type PersonalInfo = t.TypeOf<typeof PersonalInfoCodec>;
