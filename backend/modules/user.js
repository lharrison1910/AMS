import bcrypt from "bcryptjs";

export const hashPW = async (unhashed) => {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(unhashed, salt);

  return hashed;
};

export const comparePW = async (PW, unhashed) => {
  return bcrypt.compare(unhashed, PW);
};
