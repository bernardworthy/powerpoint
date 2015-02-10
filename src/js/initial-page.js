app.showInitialPage = function () {

  var gridSize = 50;

  var container = $('.container');
  var box = $('.moveable-item');
  var containerTop = container.position().top;
  var containerLeft = container.position().left;
  var bottomBounds = Number(container.css('height').replace(/px/g , '')) - Number(box.css('height').replace(/px/g , ''));
  var rightBounds = Number(container.css('width').replace(/px/g , '')) - Number(box.css('width').replace(/px/g , ''));

  // $('body').mousemove(function(e) {
  //   // console.log(e.pageX);
  //
  //   if (e.pageY < containerTop || e.pageY > containerBottom || e.pageX < containerLeft || e.pageX > containerRight) {
  //     console.log('Out of Bounds');
  //   }
  // });

  $('.moveable-item').mousedown(function(e) {
    var moveableItem = $(this);
    var position = moveableItem.position();
    var offsetY = e.pageY - position.top;
    var offsetX = e.pageX - position.left;


    $('body').on('mousemove', moveItem);


    $('body').on('mouseup', stopItem);

    function moveItem(e) {
      // console.log('Moving');
      // console.log(moveableItem.css('top').replace(/px/g , ''));
      // if ((moveableItem.css('top').replace(/px/g , '') = 'auto') || (moveableItem.css('top').replace(/px/g , '') >= 0)) {
      // moveableItem.css({
      //   top: Math.floor((e.pageY - offsetY) / gridSize) * gridSize,
      //   left: Math.floor((e.pageX - offsetX) / gridSize) * gridSize
      // });
      var mousePosition = {
        top: e.pageY - offsetY,
        left: e.pageX - offsetX
      };

      if (mousePosition.top < 0) {
        mousePosition.top = 0;
      }
      if (mousePosition.top > container.css('height').replace(/px/g , '') - box.css('height').replace(/px/g , '')) {
        mousePosition.top = container.css('height').replace(/px/g , '') - box.css('height').replace(/px/g , '');
      }
      if (mousePosition.left < 0) {
        mousePosition.left = 0;
      }
      if (mousePosition.left > container.css('width').replace(/px/g , '') - box.css('width').replace(/px/g , '')) {
        mousePosition.left = container.css('width').replace(/px/g , '') - box.css('width').replace(/px/g , '');
      }

      moveableItem.css(mousePosition);
      // if (Number(moveableItem.css('top').replace(/px/g , '')) > Number(container.css('height').replace(/px/g , ''))) {
      //   moveableItem.css('top', String(bottomBounds) + 'px');
      // }
      // }
      // if (Number(moveableItem.css('left').replace(/px/g , '')) < 0) {
      //   moveableItem.css('left', '0px');
      // }
      // if (Number(moveableItem.css('left').replace(/px/g , '')) > Number(box.css('width').replace(/px/g , ''))) {
      //   moveableItem.css('left', String(rightBounds) + 'px');
      // }
      // if (Number(moveableItem.css('bottom').replace(/px/g , '')) + containerBottom < 0) {
      //   moveableItem.css('bottom', '0px');
      // }


      // console.log(e.pageY);
      // if (e.pageY < 115) {
      //   console.log(e.pageY);
      // }
    }

    // Unbind our body-level mouse events so we
    // don't run out of memory!
    function stopItem() {
      $('body').off('mousemove', moveItem);
      $('body').off('mouseup', stopItem);
    }

    // $('.moveable-item').mousemove(function(e) {
    //   if (moveableItem.css('top').replace(/px/g , '') < 0) {
    //     stopItem();
    //   };
    // });

  });

};
