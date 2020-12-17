//serverUrl

const enviroment = "prod";
let host;

if (enviroment === "local") {
  host = "localhost:3001";
} else {
  host = "vps-1831098-x.dattaweb.com";
}

module.exports = host;
