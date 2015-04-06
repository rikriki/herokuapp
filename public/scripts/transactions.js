angular.module('starter.transactions', [])

.factory('transactions', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var transactions = [
                        {
                            "items":[
                                        {
                                            "name":"Shoes EK (M) Conker Brown Slip-on 06H",
                                            "quantity":"2"
                                        },
                                        {
                                            "name":"Shoes EK (M) 06H",
                                            "quantity":"1"
                                        }
                                    ],
                            "requestNumber":"EKUNI12013",
                            "status":"completed",
                            "collections":{
                                            "date":"Wed Feb 11 2015",
                                            "point":"Emirates Headquarters",
                                            "number":"0505061038",
                                             "remarks": "Your Remarks"
                                          }                     
                        },
                        {
                            "items":[
                                        {
                                            "name":"Shoes EK (M) Conker Brown Slip-on 06H",
                                            "quantity":"2"
                                        },
                                        {
                                            "name":"Shoes EK (M) 06H",
                                            "quantity":"1"
                                        }
                                    ],
                            "requestNumber":"EKUNI12014",
                            "status":"pending",
                            "collections":{
                                            "date":"Wed Feb 11 2015",
                                            "point":"Emirates Headquarters",
                                            "number":"0505061038",
                                             "remarks": "Your Remarks"
                                          }      
                        }
                      ];
 

  return {
    all: function() {
      return transactions;
    },
    remove: function(chat) {
      transactions.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < transactions.length; i++) {
        if (transactions[i].id === parseInt(chatId)) {
          return transactions[i];
        }
      }
      return null;
    }
  };
})

 