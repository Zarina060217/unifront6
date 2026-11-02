$(document).ready(function() {
    console.log("Task 4 jQuery is ready!");

    $("#h1").click(function() {
        $("#p1").slideToggle(400);
    });

    $("#h2").click(function() {
        $("#p2").slideToggle(400);
    });

    $("#h3").click(function() {
        $("#p3").slideToggle(400);
    });
});