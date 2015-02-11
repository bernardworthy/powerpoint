app.showInitialPage = function () {

  // var gridSize = 50;


  $('body').mousedown(function(e) {

    var container = $('.container');
    var picture = $('.picture');
    var textBox = $('.text-box');
    // var target = e.target;
    //
    // console.log(target);

    drag(picture);
    drag(textBox);

    function drag(element) {

      element.mousedown(function(e) {
        // console.log($('.picture').index(this));

        var moveableItem = $(this);
        // console.log(moveableItem);
        var position = moveableItem.position();
        var offsetY = e.pageY - position.top;
        var offsetX = e.pageX - position.left;
        var elemWidth = picture.width();
        var elemHeight = picture.height();

        if ((e.pageX - moveableItem.offset().left) > elemWidth/10 && (e.pageX - moveableItem.offset().left) < (moveableItem.width() - elemWidth/10) && (e.pageY - moveableItem.offset().top) > elemHeight/10 && (e.pageY - moveableItem.offset().top) < (moveableItem.height() - elemHeight/10) ) {
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
          if (mousePosition.top > container.height() - moveableItem.height()) {
            mousePosition.top = container.height() - moveableItem.height();
          }
          if (mousePosition.left < 0) {
            mousePosition.left = 0;
          }
          if (mousePosition.left > container.width() - moveableItem.width()) {
            mousePosition.left = container.width() - moveableItem.width();
          }

          moveableItem.css(mousePosition);
        }

        function resizeItem(e) {
          console.log(offsetX);

          var mousePosition = {
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
    // }
    }

    // function edit(element) {
    //   element.dblclick(function(e) {
    //     var editableItem = $(this);
    //     var position = editableItem.position();
    //
    //     console.log(position.top);
    //   });
    // }


    // edit(picture);
    // drag(textBox);
    // edit(textBox);

  });

  function addPicture() {
    $('.add-picture').click(function(e) {
      var dataId = $('.picture').length;
      var newPicture = '<div class="picture" data-id="' + dataId + '"></div>';
      // console.log(dataId);

      $('.container').append(newPicture);
      // container.prepend(newPicture);
      // drag();
    });
  }

  function addText() {
    $('.add-text').click(function(e) {
      var dataId = $('.text-box').length;
      var newTextBox = '<div class="text-box" data-id="' + dataId + '">New Text Box</div>';
      // console.log(dataId);

      $('.container').append(newTextBox);
    });
  }

  addPicture();
  addText();
};
