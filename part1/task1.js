$(document).ready(function() {
    console.log("jQuery is ready");

    $("#update-btn").click(function() {
        $("#name").text("Имя: Зарина Абибулла (Updated)");

        $("h1").css("color", "#0066cc");    
        $("#name").css("font-weight", "bold"); 
        $(".themes").css("font-style", "italic"); 
    });

    $("#theme-btn").click(function() {
        $("body").toggleClass("dark-mode");
    });
});