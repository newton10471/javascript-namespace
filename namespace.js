function namespace(ns) {
  var g = function(){return this}();
  ns = ns.split('.');
  for(var i=0, n=ns.length; i<n; ++i) {
    var x = ns[i];
    if (x in g === false) g[x]={};
    g = g[x];
  }
}

function namespace1(args) {
  args = args.split('.');
  this[args[0]] = {}; 
  this[args[0]][args[1]] = {};
  this[args[0]][args[1]][args[2]] = {};
  
  // that = this; 
  
  // current = args[0];
  // this[current] = {};
  
  
  // for(var i = 0; i<args.length; i++) {
  //   current = that[current];
  //   current[args[i]] = {};
  // };
  
};


test( "hello test", function() {
  ok( 1 == "1", "Passed!" );
});

test("call namespace function with 1 level", function() {
  namespace('app');
  ok(app.View = function(){}, "Passed!");
});

test("call namespace function with 2 levels", function() {
  namespace('app.models');
  ok(app.models.View = function(){}, "Passed!");
});

test("call namespace function with 3 levels", function() {
  namespace('app.models.test');
  ok(app.models.test.View = function(){}, "Passed!");
});

test("call namespace function with 3 levels", function() {
  namespace('app.models.test3');
  ok(app.models.test3.View = function(){}, "Passed!");
});

test("call namespace function with 3 levels", function() {
  namespace('app.controller.test3');
  namespace('app.models.test3');
  ok(app.models.test3.View = function(){}, "Passed!");
  ok(app.controller.test3.View = function(){}, "Passed!");
});


