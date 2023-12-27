#!/usr/bin/env node
const tmi = require('tmi.js');

 const client = new tmi.Client({
   options: { debug: true },
   connection: {
     secure: true,
     reconnect: true
   },
   identity: {
     username: `${process.argv[2]}`,
     password: process.env.TWITCH_OAUTH_TOKEN
   },
   channels: [`${process.argv[3]}`]
 });

 client.connect().catch(console.error);

 client.on('join', (channel, tags, message, self) => {
  client.say(`${process.argv[3]}`, `${process.argv[4]}`).catch(console.error);

  client.disconnect().catch(console.error);

  process. exit();
 });

