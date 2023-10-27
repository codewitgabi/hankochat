import jwt from "jsonwebtoken";
import jwksRsa from "jwks-rsa";
import { config } from "dotenv";


config();
const jwksHost = process.env.HANKO_API_URL;

const client = jwksRsa({
  jwksUri: `${jwksHost}/.well-known/jwks.json`
})

async function getKey(header, cb) {
  await client.getSigningKey(header.kid, function(err, key) {
    let sk = key?.publicKey || key?.rsaPublicKey;
    console.log(sk)
    cb(null, sk);
  })
}

export const verifyAuth = (authHeader, socket, next) => {
  const { token, user } = authHeader;

  jwt.verify(token.split(" ")[1], getKey, function(err, dec) {
    if (!err) {
      console.log("SOCKET", true)

      socket.id = user?.id;
      socket.username = user?.username;
      next();
    } else {
      console.log(err.message)
      next(err.message);
    }
  })
}
