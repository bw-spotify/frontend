const express = require('express');
const cors = require('cors');
const songs = require('./50SongList');
const port = 3333;

const server = express();
server.use(express.json());
server.use(cors());

const token = 'eyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NjYwYmQifQ';

// const sendUserError = (msg, res) => {
//   res.status(422);
//   res.json({ Error: msg });
//   return;
// };

let allSongs = songs.songs();
// console.log(allSongs);
server.get('/songs', (req, res) => {
  res.json(allSongs);
});
let songId = 1;

server.post('/login', (req, res) => {
  console.log('request body', req.body)
  const { username, password } = req.body;
  if (username === 'spottyconnection' && password === 'spotify4ever') {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    });
  } else {
    res
      .status(403)
      .json({ error: 'Username or Password incorrect. Please see Readme' });
  }
});

// server.post('/smurfs', (req, res) => {
//   const { name, age, height } = req.body;
//   const newSmurf = { name, age, height, id: smurfId };
//   if (!name || !age || !height) {
//     return sendUserError(
//       'Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB.',
//       res
//     );
//   }
//   const findSmurfByName = smurf => {
//     return smurf.name === name;
//   };
//   if (smurfs.find(findSmurfByName)) {
//     return sendUserError(
//       `Ya gone did smurfed! ${name} already exists in the smurf DB.`,
//       res
//     );
//   }

//   smurfs.push(newSmurf);
//   smurfId++;
//   res.json(smurfs);
// });

// server.put('/smurfs/:id', (req, res) => {
//   const { id } = req.params;
//   const { name, age, height } = req.body;
//   const findSmurfById = smurf => {
//     return smurf.id == id;
//   };
//   const foundSmurf = smurfs.find(findSmurfById);
//   if (!foundSmurf) {
//     return sendUserError('No Smurf found by that ID', res);
//   } else {
//     if (name) foundSmurf.name = name;
//     if (age) foundSmurf.age = age;
//     if (height) foundSmurf.height = height;
//     res.json(smurfs);
//   }
// });

// server.delete('/smurfs/:id', (req, res) => {
//   const { id } = req.params;
//   const foundSmurf = smurfs.find(smurf => smurf.id == id);

//   if (foundSmurf) {
//     const SmurfRemoved = { ...foundSmurf };
//     smurfs = smurfs.filter(smurf => smurf.id != id);
//     res.status(200).json(smurfs);
//   } else {
//     sendUserError('No smurf by that ID exists in the smurf DB', res);
//   }
// });

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});