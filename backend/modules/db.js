import pgp from "pg-promise";

const cn = {
  host: "localhost",
  port: 5432,
  database: "AMS",
  user: "admin",
  password: "admin",
  allowExitOnIdle: true,
};

const db = pgp(cn);

export const getUser = async (username) => {
  const result = await db.oneOrNone(
    `SELECT * FROM users WHERE username="${username}"`
  );
  console.log(result.json());
};

export const createUser = async (userDetails) => {
  const result = await db.none(
    `INSERT INTO users (username, password, role, firstName, surname, rank) VALUES ('${userDetails.username}', '${userDetails.password}', '${userDetails.role}', '${userDetails.fName}', '${userDetails.Sname}', '${userDetails.rank}')`
  );
  console.log(result.json());
};

export const updateUser = async () => {
  const result = await db.none(
    `UPDATE users SET ${column} = '${newValue}' WHERE username = '${username}'`
  );

  console.log(result.json());
};
