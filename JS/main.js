$(document).ready(function(){
    $('#aboutNavLink').addClass('active');
    $('.nav-link').click(change);
});

function change(){
    $('.nav-link').each(function(index, value) {
        $(value).removeClass('active');
    });
    $(this).addClass('active');
}