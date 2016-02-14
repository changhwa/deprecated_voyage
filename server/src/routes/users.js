import express from 'express';
import model, { Test } from '../models';
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let test = Test.build({
    code: "1",
    test: "test"
  });
  test.save().then( () => {
    res.send({'key': 'respond with a resource'});
  }).catch( (e) => {
    res.send({'key': 'error'});
  });
});

export default router;