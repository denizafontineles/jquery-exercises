$(function() {
    $("#eventType").change(function() {
        let selected = $("#eventType :selected").val();

        if (selected == "Teatro") {
            $("#bloco-concepcao").hide();

        } else if (selected == "Cinema") {
            $("#bloco-concepcao").hide();

        } else if (selected == "Debate Literário") {
            $("#bloco-concepcao").hide();

        } else if (selected == "Dança") {
            $("#bloco-texto").hide();

        } else if (selected == "Artes visuais e exposições") {
            $("#bloco-concepcao").hide();
        }

    });
})