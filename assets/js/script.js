$(document).ready(function(){

    var today = moment().format("MMM Do YY");
    $("#currentDay").text(today);

    var currentHour = moment().format('hh A');    
    console.log(currentHour);

    var workingHours = ["09 AM", "10 AM", "11 AM", "12 PM", "01 PM", "02 PM", "03 PM", "04 PM", "05 PM"];

    // var hourCol = $('.hour');            // selects the div of the matching class
    // var textAreaCol = $('.text-area');
    // var saveButtonCol = $('.saveBtn');

    var timeBlockPastRow = $('.before');
    var timeBlockPresentRow = $('.now');
    var timeBlockFutureRow = $('.later');

    for (var i=0; i < workingHours.length; i++){
    
        var timeSlot = $("<div class='col-1 hour " + workingHours[i] + "'>" + workingHours[i] + "</div>");
        var textSlot = $("<textArea class='col-10 text-area " + workingHours[i] + "'></textArea>");
        var saveSlot = $("<button class='col-1 btn btn-primary saveBtn " + workingHours[i] + " fas fa-save'></button>");
        
        if(moment(workingHours[i]).isSame(currentHour)){
            timeBlockPresentRow.append(timeSlot);
            timeBlockPresentRow.append(textSlot);
            timeBlockPresentRow.append(saveSlot);
        
        } else if (moment(workingHours[i]).isBefore(currentHour)){
            timeBlockPastRow.append(timeSlot);
            timeBlockPastRow.append(textSlot);
            timeBlockPastRow.append(saveSlot);
        }
        else {
            timeBlockFutureRow.append(timeSlot);
            timeBlockFutureRow.append(textSlot);
            timeBlockFutureRow.append(saveSlot);
        }

        // hourCol.append(timeSlot);
        // textAreaCol.append(textSlot);
        // saveButtonCol.append(saveSlot); 
    }

    function createSlot(i) {
        
    }



})