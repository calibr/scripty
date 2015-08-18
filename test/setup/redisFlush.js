
before(function(done){
  this.redis.script('flush').then(function() {
    done()
  }).catch(done);
});
