


//makes the save button save the time and what is put into that timesslot into local storage
$(".saveBtn").on("click", function(){
    let input = $(this).siblings(".information").val()
    let time = $(this).parent().attr('id');
    localStorage.setItem(time,input);
});



//changes colors for each slot depending no the time
function changeColors(){

    //gets the current hour with moment js and then multiplies 100 to match the id in each timeblock
    let currentTime = (moment().hours())*100;
    console.log(currentTime);

    //create variable to look at each timeblock


    //go through each hour and see where it is in the day relative to the current hour
    $(".time-block").each(function(){
         //create variable to look at each timeblock
        let timeBlock = $(this).attr("id");

        

        if (currentTime > timeBlock){
             $(this).addClass("past");
             console.log(`${timeBlock} is earlier than now`)
        }
        else if (currentTime == timeBlock){
            $(this).addClass("present");
            console.log(`${timeBlock} is right now`)

        }
        else{
            $(this).addClass(future);
            console.log(`${timeBlock} is in the future`)
        }

        

    })
    console.log(currentTime);

};

changeColors();


//gives the current date and time from Moment.js
$(document).ready(function (event){
    let time = moment().format("MMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(time);

    let realTime = function(){
        document.getElementById('currentDay').innerHTML=moment().format("MMMM Do YYYY, h:mm:ss a");
    };
    setInterval(realTime, 1000);
});;
