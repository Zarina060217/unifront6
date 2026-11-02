$(document).ready(function() {
    console.log("Task 3 jQuery is ready!");

    $("#fade-in-btn").click(function() {
        $("#img1, #img2").fadeIn(1000);
    });

    $("#fade-out-btn").click(function() {
        $("#img1, #img2").fadeOut(1000);
    });

    $("#fade-toggle-btn").click(function() {
        $("#img1, #img2").fadeToggle(1000);
    });
});