// **3.** No arquivo page3.html, no clique do botão programe toogle para cada card, com tempos diferentes para cada um.

$(function() {
        $(".btn-primary").click(function() {
            $(".card-one").toggle(5000)
            $(".card-two").toggle(3000)
            $(".card-three").toggle(1000)
        })

        function alteraHover() {

            $(".card-title").off("mouseenter").on("mouseenter",
                function() {
                    $(this).css('color', 'yellow');
                }
            )

            $(".card-title").off("mouseleave").on("mouseleave",
                function() {
                    $(this).css('color', 'red');
                }
            )

            alteraHover()
        }

        $(".btn-seg").click(function() {
            let content = $(".add-card").html()
            $(".add-card").append(content)

            alteraHover()

        })
    })
    // Na página 3, crie um segundo botão que insira mais um fileira de cards.