const express = require('express');
const app = express();
const corse = require('cors');
const router = require('./router');
const port = 3090;
app.use(express.json());
app.use(corse());
app.use(router);
app.listen(port, () => console.log(`Server listening on port ${port}`));


