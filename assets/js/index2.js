
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

