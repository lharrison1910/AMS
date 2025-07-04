import pgp from "pg-promise";

const cd = {
  host: "localhost",
  port: 5432,
  database: "AMS",
  user: "admin",
  password: "admin",
  allowExitOnIdle: true,
};
const db = pgp(cd);

export const getUser = async (username) => {
  const result = await db.oneOrNone(
    `SELECT * FROM users WHERE username="${username}"`
  );
  console.log(result.json());
};

export const createUser = async (userDetails) => {
  const result = await db.one(
    `INSERT INTO users (username, password, role, firstName, surname, rank) VALUES ('${userDetails.username}', '${userDetails.password}', '${userDetails.role}', '${userDetails.fName}', '${userDetails.Sname}', '${userDetails.rank}')`
  );
  console.log(result.json());
};

export const updateUser = async () => {
  const result = await db.one(
    `UPDATE users SET ${column} = '${newValue}' WHERE username = '${username}'`
  );

  console.log(result.json());
};
