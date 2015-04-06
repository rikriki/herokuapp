angular.module('starter.controllers', [])


.controller('ContentController', function($scope, $ionicSideMenuDelegate,$log,$ionicModal,$ionicSlideBoxDelegate) {


    $ionicModal.fromTemplateUrl('templates/datemodal.html', 
        function(modal) {
            $scope.datemodal = modal;
        },
        {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope, 
        // The animation we want to use for the modal entrance
        animation: 'slide-in-up'
        }
    );
    $scope.opendateModal = function() {
      $scope.datemodal.show();
    };
    $scope.closedateModal = function(modal) {
      $scope.datemodal.hide();
      $scope.datepicker = modal;
    };



    $scope.cart = [];
    $scope.nextSlide = function() {
      $ionicSlideBoxDelegate.next();
    }
    $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };
    $scope.toggleRight = function(uniform) {
      $ionicSideMenuDelegate.toggleRight();
      $scope.uniform = uniform;
      $scope.dropdownSelect = 2;
    };
    $scope.toggleClose = function() {
        $ionicSideMenuDelegate.toggleRight();
    }
    $scope.addToCart= function(name,quantity){
      $log.log(quantity);
      if(!itemIsDuplicate(name,quantity)){
         var item ={
        'name':name,
        'quantity':quantity
        }
        $scope.cart.push(item)
      }
      $scope.toggleClose();
    }

  function itemIsDuplicate(name,quantity){
    for(var i=0;i<$scope.cart.length;i++){
      if($scope.cart[i].name==name){
        $scope.cart[i].quantity = parseInt($scope.cart[i].quantity) + parseInt(quantity);
        return true;
      }
    }
  }
  $scope.editCart = function(name,newValue){
    var cart = $scope.cart
    for (var i = 0; i < cart.length; i++) {
      if(cart[i].name==name){
        cart[i].quantity=newValue;
      }
    }
  }

  $ionicModal.fromTemplateUrl('templates/review-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    if($scope.cart.length>0){
      $scope.modal.show();
    }
    
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
    $ionicSlideBoxDelegate.slide(0);
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
  
})

.controller('loginCtrl', function($scope,Uniforms,$state,$ionicHistory,$ionicPopup,Login) {
  $scope.data={};
  $ionicHistory.nextViewOptions({
    disableBack: true
  });
  $scope.login = function(){
     
     Login.loginUser($scope.data.username,$scope.data.epin)
      .success(function(data){
        $state.go('tab.dash');
      }).error(function(data){
        var alertPopup = $ionicPopup.alert({
          title:'Login Failed!',
          template:'Please check your credentials!'
        })
      })

  };
})

.controller('DashCtrl', function($scope,Uniforms) {
  $scope.uniforms = Uniforms.all();
})

.controller('SocCtrl', function($scope,Stations) {
    $scope.stations = Stations.all();
  })
.controller('SocDetailCtrl', function($scope,Stations,$stateParams,$sce,$location) {
    $scope.onSwipeLeft = function(id){
      console.log("Swipe! " + '#/tab/soc/'+ checkPage(id,'left'))
      $location.path('/tab/soc/'+ checkPage(id,'left'))
    }
    $scope.onSwipeRight = function(id){
      console.log("Swipe! " +  checkPage(id,'Right'))
      $location.path('/tab/soc/'+ checkPage(id,'Right'))
    }
    function checkPage(id,direction){
      if(direction=="left"){        
        return (id==14)? id=14: id + 1;  
      }else{
        return (id==1)? id=1: id - 1;  
      }
    }
    $scope.station = Stations.get($stateParams.socId);
    $scope.loadHtml = function(){return  $sce.trustAsHtml($scope.station.content);}
    var docElem = window.document.documentElement,
      scrollVal,
      isRevealed,
      noscroll,
      isAnimating,
      animating=false,
      container = document.getElementById( 'container' ),
      trigger = container.querySelector( 'button.trigger' );

    function scrollY() {
      return window.pageYOffset || docElem.scrollTop;
    }

    function scrollPage() {
      scrollVal = scrollY();

      if( noscroll && !ie ) {
        if( scrollVal < 0 ) return false;
        // keep it that way
        window.scrollTo( 0, 0 );
      }

      if( classie.has( container, 'notrans' ) ) {
        classie.remove( container, 'notrans' );
        return false;
      }

      if( isAnimating ) {
        return false;
      }

      if( scrollVal <= 0 && isRevealed ) {
        toggle(0);
      }
      else if( scrollVal > 0 && !isRevealed ){
        toggle(1);
      }
    }

    function toggle( reveal ) {
      isAnimating = true;

      if( reveal ) {
        classie.add( container, 'modify' );
      }
      else {
        noscroll = true;
        classie.remove( container, 'modify' );
      }

      // simulating the end of the transition:
      setTimeout( function() {
        isRevealed = !isRevealed;
        isAnimating = false;
        if( reveal ) {
          noscroll = false;
        }
      }, 600 );
    }

    // refreshing the page...
    var pageScroll = scrollY();
    noscroll = pageScroll === 0;

    if( pageScroll ) {
      isRevealed = true;
      classie.add( container, 'notrans' );
      classie.add( container, 'modify' );
    }
    trigger.addEventListener( 'click', function() { toggle( 'reveal' ); } );

    $scope.animate = function() {
      if(animating==false){
        animating = true;
        toggle( 'reveal' );
        console.log("animating")
      }
    }

   


  })

.controller('HistoryCtrl', function($scope, transactions,$location) {
  $scope.transactions = transactions.all();
})
.controller('ChatSettingsCtrl',function($scope,$stateParams,Chats){
    $scope.chat = Chats.get($stateParams.chatId);
    $scope.isChecked=true;
  })
.controller('ChatDetailCtrl', function($timeout,$ionicSideMenuDelegate, $scope, $stateParams, Chats,$ionicActionSheet) {
  $scope.chat = Chats.get($stateParams.chatId);
    // Show the action sheet
    $scope.choice = 'A';
    $scope.show = function(){
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: '<b>Share</b> This' },
          { text: 'Move' }
        ],
        destructiveText: 'Delete',
        titleText: 'Modify your album',
        cancelText: 'Cancel',
        cancel: function() {
          // add cancel code..
          console.log("riki cancel");
        },
        buttonClicked: function(index) {
          console.log("riki" + index);
          return true;
        },
        destructiveButtonClicked:function(){
          return true;
        }
      });
    }
    $ionicSideMenuDelegate.toggleLeft();
    $scope.doRefresh=function(){
      $scope.chat = Chats.get(3);
      $scope.$broadcast('scroll.refreshComplete');
    }
    $scope.onSwipeRight = function(){
      console.log("swipe")
    }
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
