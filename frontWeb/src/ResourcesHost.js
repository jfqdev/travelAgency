//serverUrl

const enviroment = "local";
let host;

if (enviroment === "local") {
  host = "localhost:3000";
} else {
  host = "vps-1831098-x.dattaweb.com";
}

module.exports = host;
