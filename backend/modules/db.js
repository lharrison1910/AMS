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

const fetch = () => {};
