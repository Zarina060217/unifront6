$(document).ready(function() {
    console.log("Task 5 jQuery is ready!");

    $("#add-btn").click(function() {
        let skillText = $("#skill-input").val().trim();
        if (skillText !== "") {
            $("#skills-list").append("<li>" + skillText + "</li>");
            $("#skill-input").val("");
        }     
    });

    $("#prepend-btn").click(function() {
        let skillText = $("#skill-input").val().trim();
        if (skillText !== "") {
            $("#skills-list").prepend("<li>" + skillText + "</li>");
            $("#skill-input").val(""); 
        }
    });

    $("#remove-btn").click(function() {
        $("#skills-list li:last").remove();
    });
});