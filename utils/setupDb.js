const mysql = require("mysql2/promise");

async function setupDatabase(client) {
  const db = await mysql.createConnection({
    host: "DB_HOST",
    user: "DB_USER",
    password: "PASSWORD",
    database: "Duc",
  });

  db.on("ready", () => {
    console.log("Database is ready!");
  });

  // const IsDiscordLinked = async function (discordID) {
  //   const [rows] = await db.execute(
  //     "SELECT ID_WoW FROM `Link_WoW` WHERE ID_Discord=?;",
  //     [discordID]
  //   );
  //   if (rows.length > 0) {
  //     return rows;
  //   } else {
  //     return false;
  //   }
  // };

  //client.IsDiscordLinked = IsDiscordLinked;
}

module.exports = setupDatabase;
