import dtHttp from 'dthttp';

const fcomb = new dtHttp(`https://api.fcomb.io/v1/`);
fcomb.setHeader(`Content-Type`, `application/json`);

export default { fcomb };
