var DebugMode = true;       //set to true or false to see or hide the alert boxes.
//----------------------------------------------------------------------------------------------------------------------------
//ErrorHandler: Global Error Handler for all the javascript code
//called by:    all .js fx
//inputs:       error object
//outputs:      alert box if in debug mode -- else silenty fails
//updates:      2019-03-10 :: mm :: original file
//----------------------------------------------------------------------------------------------------------------------------
function ExceptionHandler(e, str_AdditionalMessage) {
    if (str_AdditionalMessage === undefined) { str_AdditionalMessage = "."; }
    if (DebugMode) {
        var ParseError = "fx " + e.constructor + "  generated an error \n" + e.name + " :: " + e.message + "\n Line: " + e.lineNumber + " FileName: " + e.fileName;
        ParseError = ParseError + "\n\n" + str_AdditionalMessage;
        alert(ParseError);
        throw (null);
    }
    else {
        throw ("An unanticipated error occured");
    }

}

function PageReloaded()
{
    try
    {
        new Chart(document.getElementById("chart_one"),
            {
                type: 'bar',
                data: {
                    labels: ["2018", "2019"],
                    datasets: [
                        {
                            label: "Amount (USD)",
                            backgroundColor: ["#3e95cd", "#3cba9f"],
                            data: [1153, 1180]
                        }
                    ]
                },
                options: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Americans who plan to go on vacation will spend on average, per person:'
                    },
                    scales: {
                        yAxes: [{
                            display: true,
                            ticks: {
                                suggestedMin: 0,
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });

        new Chart(document.getElementById("chart_two"),
            {
                type: 'horizontalBar',
                data: {
                    labels: ["71%", "33%", "19%", "18%", "13%", "7%", "2%", "5%"],
                    datasets: [
                        {
                            label: "Amount (USD)",
                            backgroundColor: ["#525252", "#525252", "#525252", "#525252", "#525252", "#525252", "#525252", "#525252" ],
                            data: [71,33,19,18,13,7,2,5]
                        }
                    ]
                },
                options: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'How are people paying for their vacation'
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            ticks: {
                                suggestedMin: 0,
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });


    }
    catch (e)
    {
        ExceptionHandler(e);
    }
}