// ready document
$(document).ready(function () {
    // by tag Name
    // $('p').click(function () {
    //   $(this).hide();
    //});
    // By id Name
    //$('#jqueryid').click(function () {
    //  $(this).hide();
    //});
    // By class Name
    //  $('.jqueryclass').click(function () {
    //    $(this).hide();
    // });

    // other selectors
    //  $('*').click(function () {
    //    $(this).hide();
    //});

    // first selector
    // $('p:first').click(function () {
    //   console.log("first p tag clicked");

    //});

    // Event selector
    // Mouse events : click, dblclick, mouseenter, mouseleave
    // Keyboard events : keypress, keydown, keyup
    // Form events : submit, change, focus, blur
    // Document/Window events : load, resize, scroll, unload
    // window events load and resize scroll and unload

    //$('p').mouseenter(function () {
    //  console.log("mouse entered");
    //});
    // $('p').mouseleave(function () {
    //    console.log("mouse left");
    //});
    // $('#test').hide(1000);
    // $('#test').hide(1000, function () {
    //     alert("hide completed");
    // });
    // $('#test').show(1000, function () {
    //     alert("showd completed");
    // });

    // $('#btn').click(function () {
    //    $('#test').toggle(1000);
    // });
    // $('#btn').click(function () {
    //    $('#test').fadeToggle(1000);
    //});
    // $('#btn').click(function () {
    //     $('#test').slideUp(1000);
    // });

    // Animation
    // $('#btn').click(function () {
    // $('#test').animate({
    //     opacity: '0.5',
    //     height: '500px',
    //     width: '500px'
    // }, "fast");
    // using Queue
    // $('#test').animate({
    //     opacity: '0.5'
    // }, { duration: 1000, queue: false });
    // $('#test').animate({
    //     height: '500px'
    // }, { duration: 1000, queue: false });
    // $('#test').animate({
    //     width: '500px'
    // }, { duration: 1000, queue: false });

    // $('#btn').val('Start Animation');
    // $('#btn').html('Start Animation one');
    //  $('$btn').empty();
    // $('#btn').remove();

    // add css in text
    // $('#test').css({ 'background-color': 'red', 'font-size': '200%' });

    // Ajax
    $('#btn').click(function () {
        $.ajax({
            url: 'test.html',
            type: 'GET',
            success: function (data) {
                $('#test').html(data);
            }


        });
    });
});



