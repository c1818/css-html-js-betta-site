// alert("alert check")
// needed AI assistance based on my poorly written js
// tutorials https://www.w3schools.com/jquery/default.asp

$(document).ready(function () {

    console.log("quiz");

    $("#quiz-form").on("submit", function (event) {

        var valid = true;

        $(".required-field").text("");

        $(".question-block").each(function () {

            var questionName = $(this).find("input[type='radio']").first().attr("name");
            var selectedOption = $("input[name='" + questionName + "']:checked");

            console.log("checking question:", questionName);
            console.log(selectedOption.length);

            if (selectedOption.length == 0) {
                valid = false;
                $(this).find(".required-field").text("Please select one of these options.");
                console.log("missing answer");
            }
            else {
                console.log("answered");
            }

        });

        if (valid == false) {
            event.preventDefault();
            console.log("not submitted");
        }
        else {
            console.log("submitted");
        }

    });

    $("input[type='radio']").on("change", function () {
        $(this).closest(".question-block").find(".required-field").text("");
        console.log("option selected");
    });

});








/*


make ur id #

$("#int-text").click(function(){
$("#int-text").css("opacity", "0")  OOR $("#int-text").hide()
})

var counter = 0; how many times you can click it

*/