angular.module('starter.login', [])

.factory('Login', function($q) {
  // Might use a resource here that returns a JSON array

  return {
     loginUser:function(username,epin){
        var deferred = $q.defer();
        var promise = deferred.promise;

        if(username=="s706825" && epin=="7454"){
          deferred.resolve("Welcome" + username);
        }else{
          deferred.reject("Wrong credentials");
        }

        promise.success = function(fn){
            promise.then(fn);
            return promise;
        }
        promise.error = function(fn){
            promise.then(null,fn);
            return promise;
        }
        return promise;
     } 


  };
})
