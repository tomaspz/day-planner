$(document).ready(function(){

    // The time format for displaying the date in the header is Friday, March 13, 2020 12:09 AM
    var today = moment().format('LLLL');            
    $("#currentDay").text(today);

    // The format for the current hour is HH, which means it is represented 09
    var currentHour = moment().format('HH');                       

    // Array to display hours in the first column
    var workingHoursDisplay = ["09 AM", "10 AM", "11 AM", "12 PM", "01 PM", "02 PM", "03 PM", "04 PM", "05 PM"];

    // Array to calculate the hours and add classes
    var workingHours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

    // Get the 3 rows for past, present and future
    var timeBlockPastRow = $('.before');
    var timeBlockPresentRow = $('.now');
    var timeBlockFutureRow = $('.after');

    // Loop through the working hours array.
    for (var i=0; i < workingHours.length; i++){
    
        var timeSlot = $("<div class='col-1 hour' data-row='time"+ workingHours[i] +"'>" + workingHoursDisplay[i] + "</div>");
        var textSlot = $("<textArea class='col-10 text-area description' data-row='text"+ workingHours[i] +"'></textArea>");
        var saveSlot = $("<button class='col-1 btn btn-primary saveBtn fas fa-save' data-row='save"+ workingHours[i] +"'></button>");
        // console.log(workingHours[i]);
        

        var isSameTime = moment(workingHours[i]).isSame(currentHour);
        // console.log(isSameTime);
        var isPreviousTime = moment(workingHours[i]).isBefore(currentHour);
        // console.log(isPreviousTime);

        console.log(workingHours[i]);
        console.log(currentHour);

        if(isSameTime){
            
            textSlot.addClass('present');
            timeBlockPresentRow.append(timeSlot, textSlot, saveSlot);

        } else if(isPreviousTime) {
            // console.log(workingHours[i]);
            // console.log(moment().format('H'));
            textSlot.addClass('past');
            timeBlockPastRow.append(timeSlot, textSlot, saveSlot);
        }
        else {
            textSlot.addClass('future');
            timeBlockFutureRow.append(timeSlot, textSlot, saveSlot);
        }
        // if(moment(workingHours[i]).isSame(currentHour)){ 
        //     textSlot.addClass("present");                                       
        //     timeBlockPresentRow.append(timeSlot);
        //     timeBlockPresentRow.append(textSlot);
        //     timeBlockPresentRow.append(saveSlot);
        //     console.log("Current hour = " + currentHour + " Working hours = " + workingHours[i] + " using isSame");
        
        // } else if (moment(workingHours[i]).isBefore(currentHour)){
        //     textSlot.addClass("past");
        //     timeBlockPastRow.append(timeSlot);
        //     timeBlockPastRow.append(textSlot);
        //     timeBlockPastRow.append(saveSlot);
        //     console.log("Current hour = " + currentHour + " Working hours = " + workingHours[i] + " using isBefore");
        // }
        // else {
        //     textSlot.addClass("future");
        //     timeBlockFutureRow.append(timeSlot);
        //     timeBlockFutureRow.append(textSlot);
        //     timeBlockFutureRow.append(saveSlot);
        //     console.log("Current hour = " + currentHour + " Working hours = " + workingHours[i] + " using else");
        //     // console.log("Current hour is " + currentHour);
        //     // console.log("Is the working hour " + workingHours[i] + " before the current hour " + currentHour + "? " + moment(workingHours[i]).isBefore(currentHour));
        // }

        // hourCol.append(timeSlot);
        // textAreaCol.append(textSlot);
        // saveButtonCol.append(saveSlot); 
    }



})