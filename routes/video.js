const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());
const thetaStreamRouter = express.Router();

//post live stream
thetaStreamRouter.post('/theta-live-stream', async (req, res) => {
  try {
    const response = await axios({
      method: 'POST',
      url: 'https://api.thetavideoapi.com/stream',
      headers: {
        'x-tva-sa-id': 'srvacc_6p76e1hzy3nwpxbjpbrh76rbu',
        'x-tva-sa-secret': 'rvkhnfnvrnwr044262znqbutsbd8kivj',
        'Content-Type': 'application/json'
      },
      data: {
        name: 'demo',
        resolutions: ['160p', '240p', '360p', '720p', 'source'],
        source_resolution: '720p',
        fps: 60
      }
    });
    res.status(200).send(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error creating Theta live stream');
  }
});

//retrive live stream
thetaStreamRouter.get('/get-live-stream', async (req, res) => {
    try {
        //hard coded id for testing purposes(get this from postman)
        const service_account_id = 'stream_ga385p3mpfw0aumyiyj2cpuzi'
        const response = await axios({
            method: 'GET',
            url: `https://api.thetavideoapi.com/stream/${service_account_id}`,
            headers: {
                'x-tva-sa-id': 'srvacc_6p76e1hzy3nwpxbjpbrh76rbu',
                'x-tva-sa-secret': 'rvkhnfnvrnwr044262znqbutsbd8kivj'
            }
        });
        res.status(200).send(response.data);
    } catch (error) {
        res.status(500).send('Error retrieving Theta live stream')
    }
});

module.exports = thetaStreamRouter;
