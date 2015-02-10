app.showInitialPage = function () {

  // var gridSize = 50;

  var container = $('.container');
  var picture = $('.picture');
  var textBox = $('.text-box');

  function drag(element) {

    element.mousedown(function(e) {
      var moveableItem = $(this);
      var position = moveableItem.position();
      var offsetY = e.pageY - position.top;
      var offsetX = e.pageX - position.left;

      if ((e.pageX - moveableItem.offset().left) > 10 && (e.pageX - moveableItem.offset().left) < (moveableItem.css('width').replace(/px/g , '') - 10) && (e.pageY - moveableItem.offset().top) > 10 && (e.pageY - moveableItem.offset().top) < (moveableItem.css('height').replace(/px/g , '') - 10) ) {
        $('body').on('mousemove', moveItem);
        $('body').on('mouseup', stopMove);
      } else {
        $('body').on('mousemove', resizeItem);
        $('body').on('mouseup', stopResize);
      }

      function moveItem(e) {

        var mousePosition = {
          top: e.pageY - offsetY,
          left: e.pageX - offsetX
        };

        if (mousePosition.top < 0) {
          mousePosition.top = 0;
        }
        if (mousePosition.top > container.css('height').replace(/px/g , '') - moveableItem.css('height').replace(/px/g , '')) {
          mousePosition.top = container.css('height').replace(/px/g , '') - moveableItem.css('height').replace(/px/g , '');
        }
        if (mousePosition.left < 0) {
          mousePosition.left = 0;
        }
        if (mousePosition.left > container.css('width').replace(/px/g , '') - moveableItem.css('width').replace(/px/g , '')) {
          mousePosition.left = container.css('width').replace(/px/g , '') - moveableItem.css('width').replace(/px/g , '');
        }

        moveableItem.css(mousePosition);
      }

      function resizeItem(e) {
        console.log(offsetX);

        var mousePosition = {
          // top: e.pageY - offsetY,
          // left: e.pageX - offsetX,
          height: e.pageY - moveableItem.offset().top,
          width: e.pageX - moveableItem.offset().left
        };

        moveableItem.css(mousePosition);
      }

      // Unbind our body-level mouse events so we
      // don't run out of memory!
      function stopMove() {
        $('body').off('mousemove', moveItem);
        $('body').off('mouseup', stopMove);
      }

      function stopResize() {
        $('body').off('mousemove', resizeItem);
        $('body').off('mouseup', stopResize);
      }

    });
  }

  function edit(element) {
    element.dblclick(function(e) {
      var editableItem = $(this);
      var position = editableItem.position();

      console.log(position.top);
    });
  }

  drag(picture);
  edit(picture);
  drag(textBox);
  edit(textBox);

};
