// **4.** No arquivo page4.html, no clique do botão faça com que cada card apareça utilizando efeitos de slide. Um diferente efeito para cada card.

$(function() {

    $(".btn-primary").click(function() {
        $(".card-one").slideToggle(1000)
        $(".card-two").slideToggle(3000)
        $(".card-three").slideToggle(5000)
    })

})