$(document).ready(function(){

    // The time format for displaying the date in the header is Friday, March 13, 2020 12:09 AM
    var today = moment().format('LLLL');            
    $("#currentDay").text(today);

    // The format for the current hour is HH, which means it is represented 09
    var currentHour = moment().format('HH');                       

    // Array just for displaying the hours in the first column of the webpage
    var workingHoursDisplay = ["09 AM", "10 AM", "11 AM", "12 PM", "01 PM", "02 PM", "03 PM", "04 PM", "05 PM"];

    // Array to calculate the hours and add classes
    var workingHours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

    // Get the 3 rows for past, present and future
    var timeBlockPastRow = $('.before');
    var timeBlockPresentRow = $('.now');
    var timeBlockFutureRow = $('.after');

    // Loop through the working hours array.
    for (var i=0; i < workingHours.length; i++){
        
        // Create slots for the time, the text area and the button
        var timeSlot = $("<div class='col-1 hour' data-row='"+ workingHours[i] +"'>" + workingHoursDisplay[i] + "</div>");
        var textSlot = $("<textArea class='col-10 text-area description' id='"+ workingHours[i] +"'></textArea>");
        var saveSlot = $("<button class='col-1 btn btn-primary saveBtn fas fa-save' data-row='"+ workingHours[i] +"'></button>");
        
        // Create booleans to compare the hours with the current hour
        var isSameTime = moment(workingHours[i]).isSame(currentHour);
        var isPreviousTime = moment(workingHours[i]).isBefore(currentHour);

        // Create conditionals to place the text area in the past, present or future
        // Also, append the time, text and buttons
        if(isSameTime){
            textSlot.addClass('present');
            timeBlockPresentRow.append(timeSlot, textSlot, saveSlot);

        } else if(isPreviousTime) {
            textSlot.addClass('past');
            timeBlockPastRow.append(timeSlot, textSlot, saveSlot);
        }
        else {
            textSlot.addClass('future');
            timeBlockFutureRow.append(timeSlot, textSlot, saveSlot);
        }
        
    } // end for loop

    // When the user clicks on a button, do something:
    $("button").on("click", function(){         

        // grab the data-row attribute value where the button was clicked
        var buttonSlotPressed = $(this).attr("data-row");  

        // grab the text area in the same slot
        var textArea = $("#" + buttonSlotPressed).val();
        console.log($("#" + buttonSlotPressed));
        console.log(textArea);

        // use the data-row attribute value to grab the text inside the text area
        // var id = buttonSlotPressed;
        // var textInSameSlot = $("textArea").attr('id"').val();

        // // store the data-row attribute and the text in the text area
        localStorage.setItem(buttonSlotPressed, textArea);

    }); // end of button on click function

})

// // Here we grab the text from the input box
// var movie = $("#movie-input").val();
// data-row="save09"
// var movie = $(this).attr("data-name");
// div
// document.querySelector("body > div > div.row.time-block.after > textarea:nth-child(2)")
// document.querySelector("body > div > div.row.time-block.after > textarea:nth-child(2)")