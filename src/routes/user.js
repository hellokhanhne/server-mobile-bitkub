const router = require("express").Router();
const verifyBitkubUser = require('../services/user')
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server); 

router.post("/oauth", async (req, res) => {
  try {
    if (req?.body?.access_token) {
      const accessToken = req.body.access_token
      const userInfo = await verifyBitkubUser(accessToken)
      console.log(userInfo);

      // Join the room with the user's deviceId
      const socket = io.connect();
      socket.on('connect', () => {
        socket.join(12345); 
        io.to(userInfo.deviceId).emit('userInfo', userInfo); 
      });

      res.status(200).end()
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
    console.log(error);
  }
});

module.exports = router;