
//set time display for the page
var timeDisplayEl = $('.todaysDate');

setInterval(function displayTime() {
    var timeNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(timeNow);
 }, 1000);



$(document).ready(function () {
    
    var now = parseInt(moment().format('HH'));

    var $text9AM = $("#text9AM");
    var $text10AM = $("#text10AM");
    var $text11AM = $("#text11AM");
    var $text12AM = $("#text12AM");
    var $text1PM = $("#text1PM");
    var $text2PM = $("#text2PM");
    var $text3PM = $("#text3PM");
    var $text4PM = $("#text4PM");
    var $text5PM = $("#text5PM");


    $("textarea").each(function () {
        var name = parseInt($(this).attr("name"));
        if (name < now) {
            $(this).addClass("bg-gray");
        }


        if (name > now) {
            $(this).addClass("bg-green")
        }

        if (name === now) {
            $(this).addClass("bg-red")
        }

    })

    $("button").on("click", function () {

        //setting items in the local storage
        localStorage.setItem("9AM", ($text9AM.val()))
        localStorage.setItem("10AM", ($text10AM.val()))
        localStorage.setItem("11AM", ($text11AM.val()))
        localStorage.setItem("12PM", ($text12AM.val()))
        localStorage.setItem("2PM", ($text1PM.val()))
        localStorage.setItem("2PM", ($text2PM.val()))
        localStorage.setItem("3PM", ($text3PM.val()))
        localStorage.setItem("4PM", ($text4PM.val()))
        localStorage.setItem("5PM", ($text5PM.val()))

    })

    //getting the content stored and sending to the screen. When page is refreshed content will stay
    $("#text9AM").append(localStorage.getItem("9AM"));
    $("#text10AM").append(localStorage.getItem("10AM"));
    $("#text11AM").append(localStorage.getItem("11AM"));
    $("#text12AM").append(localStorage.getItem("12PM"));
    $("#text1PM").append(localStorage.getItem("1PM"));
    $("#text2PM").append(localStorage.getItem("2PM"));
    $("#text3PM").append(localStorage.getItem("3PM"));
    $("#text4PM").append(localStorage.getItem("4PM"));
    $("#text5PM").append(localStorage.getItem("5PM"));

});

