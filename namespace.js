function namespace(args) {
  args = args.split('.');
  // this[args[0]] = {}; 
  // this[args[0]][args[1]] = {};
  // this[args[0]][args[1]][args[2]] = {};
  
  that = this; 
  
  current = args[0];
  this[current] = {};
  
  
  for(var i = 0; i<args.length; i++) {
    current = that[current];
    current[args[i]] = {};
  };
  

  
};


test( "hello test", function() {
  ok( 1 == "1", "Passed!" );
});

test("call namespace function", function() {
  namespace('app');
  ok(app.View = function(){}, "Passed!");
});

test("call namespace function", function() {
  namespace('app.models');
  ok(app.models.View = function(){}, "Passed!");
});

test("call namespace function", function() {
  namespace('app.models.test');
  ok(app.models.test.View = function(){}, "Passed!");
});
