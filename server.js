// server.js
const express = require('express');
const os = require('os');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/mac-address', (req, res) => {
  const networkInterfaces = os.networkInterfaces();
  let macAddress;

  Object.keys(networkInterfaces).forEach((interfaceName) => {
    networkInterfaces[interfaceName].forEach((interfaceData) => {
      if (interfaceData.mac !== '00:00:00:00:00:00') {
        macAddress = interfaceData.mac;
      }
    });
  });

  res.send({ macAddress });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});