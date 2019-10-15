// **3.** No arquivo page3.html, no clique do botão programe toogle para cada card, com tempos diferentes para cada um.

$(function() {
    $(".btn-primary").click(function() {
        $(".card-one").toggle(5000)
        $(".card-two").toggle(3000)
        $(".card-three").toggle(1000)
    })

})