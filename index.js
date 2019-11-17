$(".burger-button").click(()=>{
    $(".burger-menu").toggleClass("show");
    $("main").toggleClass("offset");
    $("footer").toggleClass("offset");
    $("body").toggleClass("overflow");
});
