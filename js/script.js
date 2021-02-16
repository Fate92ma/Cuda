// Skills

$(window).on('scroll', function () {
    $topOffset = $(this).scrollTop();

    if ($topOffset > 1650) {

        $('#circle1').circleProgress({
            value: 0.90,
            size: 200,
            animation: {
                duration: 2000
            },
            thickness: 12, // how thin // not important
            startAngle: 1, // not important
            emptyFill: "#ccc",
            fill: {
                color: "#30bae7"
            }
        });

        $('#circle2').circleProgress({
            value: 0.75,
            size: 200,
            animation: {
                duration: 2000
            },
            thickness: 12, // how thin // not important
            startAngle: 1, // not important
            emptyFill: "#ccc",
            fill: {
                color: "#d74680"
            }
        });

        $('#circle3').circleProgress({
            value: 0.70,
            size: 200,
            animation: {
                duration: 2000
            },
            thickness: 12, // how thin // not important
            startAngle: 1, // not important
            emptyFill: "#ccc",
            fill: {
                color: "#15c7a8"
            }
        });

        $('#circle4').circleProgress({
            value: 0.85,
            size: 200,
            animation: {
                duration: 2000
            },
            thickness: 12, // how thin // not important
            startAngle: 1, // not important
            emptyFill: "#ccc",
            fill: {
                color: "#eb7d4b"
            }
        });

    };
});

// Portfolio

$("li.col-lg").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active")

    if ($(this).data("class") === "all") {

        $(".shuffle .col-lg").css("opacity", 1).css("cursor", "default")

    } else {

        $(".shuffle .col-lg").css("opacity", ".08").css("cursor", "no-drop")

        $($(this).data("class")).css("opacity", 1).css("cursor", "default")

    }
});