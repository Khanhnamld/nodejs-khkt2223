// const e = require("express")

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

if (openModalButtons){
    openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
    })
}
if (overlay){
    overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
    })
}

if (closeModalButtons){
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})
}

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("main");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById('default_open').click();

const modal_data = [3, 4, 1, 2, 3, 5, 6];
const modal_data2 = [52, 43, 60, 72, 81, 70, 90];
var lineCanvas = document.getElementById('lineChart');
var ctx = lineCanvas.getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Ngày 1', 'Ngày 2', 'Ngày 3', 'Ngày 4', 'Ngày 5', 'Ngày 6', 'Ngày 7'],
        datasets: [{
            label: 'Số bài tập hoàn thành',
            data: modal_data,
            backgroundColor: [
                'rgba(85,85,85, 1)'

            ],
            borderColor: 'rgb(41, 155, 99)',
            borderWidth: 1,
            yAxisID: 'y'
        },
        {
            label: 'Độ chính xác (%)',
            data: modal_data2,
            backgroundColor: [
                'rgba(241, 193, 218, 0.8)'

            ],
            borderColor: 'rgb(250, 2, 27)',
            borderWidth: 1,
            yAxisID: 'percentage'
        }
        ]
    },
    options: {
        // legend: {display: false},
        // responsive: true,
        
        scales: {
            y: 
                {
                    beginAtZero: true,
                    type: 'linear',
                    position: 'left',
                    steps: 1,
                    stepValue: 5,
                    max: 10
                },
            percentage: {
                beginAtZero: true,
                type: 'linear',
                position: 'right',
                grid: {
                    drawOnChartArea: false
                },
                ticks: {
                    callback: function(value, index, values){
                        return `${value}%`;
                    }
                },
                max: 100
            }
        }
    }
});

lineCanvas.onclick = function(e) {
    const points = myChart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, true);
    console.log(points[0].index);
    const modal = document.querySelector('#modal');
    const modal_title = document.querySelector('#modal-title');
    modal_title.innerHTML = modal_data[points[0].index];
    openModal(modal)
};

var ctx2 = document.getElementById('doughnut').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Bài tập toán', 'Bài tập phát âm', 'Bài tập đánh vần', 'Bài tập đọc'],

        datasets: [{
            label: 'Employees',
            data: [5, 10, 6, 12],
            backgroundColor: [
                'rgba(41, 155, 99, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(120, 46, 139,1)'

            ],
            borderColor: [
                'rgba(41, 155, 99, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(120, 46, 139,1)'

            ],
            borderWidth: 1
        }]

    },
    options: {
        responsive: true
    }
});

// Collapsible
var coll = document.getElementsByClassName("chat_flowup");
let time = getTime();
document.getElementById("chat-timestamp").append(time);
$("#chat-timestamp").append(time);
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        
        var content = document.getElementsByClassName("content")[0];
        console.log(content);
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

var coll2 = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll2.length; i++) {
    coll2[i].addEventListener("click", function () {
        this.classList.toggle("active");
        
        var content = document.getElementsByClassName("content")[0];
        console.log(content);
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
// function firstBotMessage() {
//     let firstMessage = "How's it going?"
//     document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

//     let time = getTime();

//     $("#chat-timestamp").append(time);
//     document.getElementById("userInput").scrollIntoView(false);
// }

// firstBotMessage();

// Retrieves the response
// function getHardResponse(userText) {
//     let botResponse = getBotResponse(userText);
//     let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
//     $("#chatbox").append(botHtml);

//     document.getElementById("chat-bar-bottom").scrollIntoView(true);
// }

function col_bar(){
    let col = document.getElementsByClassName("sidebar")[0].style.width;
    console.log(col);
    if (col == "240px"){
        document.getElementsByClassName("sidebar")[0].style.width = "60px";
        document.getElementsByClassName("main")[0].style.width = "calc(100% - 60px)";
    }
    else {
        document.getElementsByClassName("sidebar")[0].style.width = "240px";
        document.getElementsByClassName("main")[0].style.width = "calc(100% - 260px)";
    }

}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "I love Code Palace!";
    }
    socket.emit('join', userText);
    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    // setTimeout(() => {
    //     getHardResponse(userText);
    // }, 1000)

}


// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';
    socket.emit('join', sampleText);
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!")
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});

$("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})

if(window.location.pathname == "/"){
    $onclick = $(".table tbody td a.delete");
    $onclick.click(async function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `https://nodejs-khkt20222023.herokuapp.com/api/ds_benhnhan/${id}`,
            "method" : "DELETE"
        }

        let jsondata;    
        var url = `https://nodejs-khkt20222023.herokuapp.com/api/ds_benhnhan?id=${id}`;
        async function getData(url) {
            const response = await fetch(url);
          
            return response.json();
          }
          
        const data = await getData(url);
          
        console.log(data)
        console.log(id)
        // jsondata = JSON.stringify(jsondata)
        var request2 = {
            "url" : `https://nodejs-khkt20222023.herokuapp.com/api/ds_dieutri/`,
            "method" : "POST",
            "data" : data,
            "dataType": "json"
        }
        if(confirm("Bạn có muốn duyệt hồ sơ này không ?")){
            $.ajax(request).done(function(response){
                alert("Hồ sơ đã được duyệt thành công !");
                location.reload();
            })
            $.ajax(request2).done()
        }

    })
}

