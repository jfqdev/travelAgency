//serverUrl

const enviroment = "local";
let host;

if (enviroment === "local") {
  host = "localhost:3000";
} else {
  host = "vps-1879279-x.dattaweb.com";
}

module.exports = host;