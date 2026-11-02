$(document).ready(function() {
    console.log("Task 7 jQuery is ready!");

    $("#name-input").on("input", function() {
        let nameValue = $(this).val();
        $("#display-name").text(nameValue);
    });

    $("#email-input").on("input", function() {
        let emailValue = $(this).val();
        $("#display-email").text(emailValue);
    });
});