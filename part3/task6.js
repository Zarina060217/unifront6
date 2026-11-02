$(document).ready(function() {
    console.log("Task 6 jQuery is ready!");

    $("#change-link-btn").click(function() {
        $("#social-link").attr("href", "https://linkedin.com");
        $("#social-link").text("My LinkedIn Profile"); 
    });
});