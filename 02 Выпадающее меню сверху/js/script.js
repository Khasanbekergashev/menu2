$(".show").click(function (e) {
    e.preventDefault()
    $("section").stop().slideDown(460)
    $(this).css("display", "none")
    $(".hide").css("display", "block")

})
$(".hide").click(function (e) {
    e.preventDefault()
    $("section").stop().slideUp(460)
    $(this).css("display", "none")
    $(".show").css("display", "block")
    $("footer").slideUp(460)
    
})
$(".success").click(function (param) {
        param.preventDefault()
        $("footer").slideDown(460)
    })