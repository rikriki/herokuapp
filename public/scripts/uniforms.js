angular.module('starter.uniforms', [])

.factory('Uniforms', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  
  var uniforms = [
  {
                "itemName":"Shoes EK (M) Conker Brown Slip-on 06H",
                "red":"Due to replacement",
                "amber":"Out of Stock"
             },
             {
                "itemName":"Shoes Slip-on 06H",
                 "red":"Due to replacement" 
                
             },
             {
                "itemName":"Shoes EK (M) Conker Red Slip-on 06H 1",
                "red":"Due to replacement",
                "amber":"Out of Stock"
             },
             {

                "itemName":"Shoes EK (M) Conker Brown Slip-on 06H2",
                "red":"Due to replacement",
                "amber":"Out of Stock"
             },
             {
                "itemName":"Shoes Slip-on 06H3",
                 "red":"Due to replacement" 
                
             },
             {
                "itemName":"Shoes EK (M) Conker Red Slip-on 06H4",
                "red":"Due to replacement",
                "amber":"Out of Stock"
             },
             {
                "itemName":"Shoes EK (M) Conker Brown Slip-on 06H5",
                "red":"Due to replacement",
                "amber":"Out of Stock"
             },
             {
                "itemName":"Shoes Slip-on 06H7",
                 "red":"Due to replacement" 
                
             },
             {
                "itemName":"Shoes EK (M) Conker Red Slip-on 06H7",
                "red":"Due to replacement",
                "amber":"Out of Stock"
             },
             {
                "itemName":"Shoes EK (M) Conker Brown Slip-on 06H9",
                "red":"Due to replacement",
                "amber":"Out of Stock"
             },
             {
                "itemName":"Shoes Slip-on 06H8",
                 "red":"Due to replacement" 
                
             },
             {
                "itemName":"Shoes EK (M) Conker Red Slip-on 06H12",
                "red":"Due to replacement",
                "amber":"Out of Stock"
             },
             {
                "itemName":"Shoes EK (M) Conker Brown Slip-on 06H13",
                "red":"Due to replacement",
                "amber":"Out of Stock"
             },
             {
                "itemName":"Shoes Slip-on 06H14",
                 "red":"Due to replacement" 
                
             },
             {
                "itemName":"Shoes EK (M) Conker Red Slip-on 06H15",
                "red":"Due to replacement",
                "amber":"Out of Stock"
             }
  ];

  return {
    all: function() {
      return uniforms;
    },
    remove: function(chat) {
      uniforms.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < uniforms.length; i++) {
        if (uniforms[i].id === parseInt(chatId)) {
          return uniforms[i];
        }
      }
      return null;
    }
  };
})

 