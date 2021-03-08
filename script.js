//display current date and time
var currentDate = moment().format("MMMM Do, YYYY");
$("#currentDay").html(currentDate);

$(document).ready(function () {
    //save button
    $(".saveBtn").on("click", function () {
        //
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        //save to local storage
        // console.log("TEXT AND TIME: ",text,time);
        localStorage.setItem(time,text);
    })

        function timeTrack() {
            var presentTime = moment().hour();
            console.log(presentTime) // getting an actual number
            //loop
            $(".time-block").each(function () {

                var timeBlock = parseInt($(this).attr("id").slice(0,-2));
                console.log(timeBlock) // 
            //to add appropriate css styles to past, present, and future times
                if (timeBlock === presentTime) {
                    $(this).removeClass("past");
                    $(this).removeClass("future");
                    $(this).addClass("present");
                }
                else if (timeBlock < presentTime) {
                    $(this).removeClass("future");
                    $(this).removeClass("present");
                    $(this).addClass("past");
                }
                else {
                    $(this).removeClass("past");
                    $(this).removeClass("present");
                    $(this).addClass("future");
                }
            })
        }
        //local storage
        $("#9am .description").val(localStorage.getItem("9am"));
        $("#10am .description").val(localStorage.getItem("10am"));
        $("#11am .description").val(localStorage.getItem("11am"));
        $("#12pm .description").val(localStorage.getItem("12pm"));
        $("#13pm .description").val(localStorage.getItem("13pm"));
        $("#14pm .description").val(localStorage.getItem("14pm"));
        $("#15pm .description").val(localStorage.getItem("15pm"));
        $("#16pm .description").val(localStorage.getItem("16pm"));
        $("#17pm .description").val(localStorage.getItem("17pm"));
        $("#18pm .description").val(localStorage.getItem("18pm"));
        timeTrack();
})