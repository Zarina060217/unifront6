$(document).ready(function() {
    console.log("Task 8 jQuery is ready!");

    let isAnimated = false;

    $("#animate-btn").click(function() {
        if (!isAnimated) {
            $(".skill-bar").each(function() {
                let targetWidth = $(this).attr("data-width");
                $(this).animate({ width: targetWidth }, 1000);
            });
            isAnimated = true;
        } else {
            $(".skill-bar").animate({ width: "0px" }, 1000);
            isAnimated = false;
        }
    });
});