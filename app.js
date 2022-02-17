const list_item = document.querySelector("#list_item")



let sayeed = new Result();

fetch("https://my-json-server.typicode.com/DeveloperSayeed/API-Data/student_mark").then(data => data.json()).then((data) => {

 



    //  single student data

    let st_result = ""

    data.map((item, index) => {
        
        st_result += `
                        <tr>
                            <td>${index +1}</td>
                            <td>${item.name}</td>
                            <td>${item.class}</td>
                            <td>${item.age}</td>
                            <td>${item.gender}</td>
                            <td> ${sayeed.finalCgpa(item.ban, item.eng, item.math, item.eco, item.acc, item.rel, item.hist).rescgpa}</td>
                            <td> ${sayeed.finalCgpa(item.ban, item.eng, item.math, item.eco, item.acc, item.rel, item.hist).resgread}</td>
                        
                              <td><img style="height: 40px; width: 40px; object-fit: cover;"
                                src="${item.photo}"
                                alt=""></td>
                        <td>

                        <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#studentFinalResult" onclick="student_result(${item.id})" >view Mark Sheet</button>
                        </td>
                    </tr>
  
    `

    })

    list_item.innerHTML = st_result;

})


function student_result(id) {


    fetch("https://my-json-server.typicode.com/DeveloperSayeed/API-Data/student_mark/"+id).then(data => data.json()).then((data) => {

let student_data = document.querySelector(".student-modal")




    student_data.innerHTML  = `
                        <img class="shadow"src="${data.photo}"alt="">
                        <h2>${data.name}</h2>
                        <hr>
                        <table class="table table-bordered">
                            <thead class="text-center">
                                <tr>
                                    <th>Subject</th>
                                    <th>Mark</th>
                                    <th>GPA</th>
                                    <th>Grade</th>
                                    <th>CGPA</th>
                                    <th>Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Bangla</td>
                                    <td class ="text-center">${data.ban}</td>
                                    <td class ="text-center">${sayeed.result(data.ban).gpacal}</td>
                                    <td class ="text-center">${sayeed.result(data.ban).greadcal}</td>
                                    <td class ="text-center" rowspan="7"> ${sayeed.finalCgpa(data.ban, data.eng, data.math, data.eco, data.acc, data.rel, data.hist).rescgpa}</td>
                                    <td class ="text-center" rowspan="7"> ${sayeed.finalCgpa(data.ban, data.eng, data.math, data.eco, data.acc, data.rel, data.hist).resgread}</td>
                                    
                                    
                                </tr>
                                <tr>
                                    <td>English</td>
                                    <td class ="text-center">${data.eng}</td>
                                    <td class ="text-center">${sayeed.result(data.eng).gpacal}</td>
                                    <td class ="text-center">${sayeed.result(data.eng).greadcal}</td>
                                    
                                    
                                </tr>
                                <tr>
                                    <td>Math</td>
                                    <td class ="text-center">${data.math}</td>
                                    <td class ="text-center">${sayeed.result(data.math).gpacal}</td>
                                    <td class ="text-center">${sayeed.result(data.math).greadcal}</td>
                                    
                                    
                                </tr>
                                <tr>
                                    <td>Accounting</td>
                                    <td class ="text-center">${data.acc}</td>
                                    <td class ="text-center">${sayeed.result(data.acc).gpacal}</td>
                                    <td class ="text-center">${sayeed.result(data.acc).greadcal}</td>
                                   
                                    
                                </tr>
                                <tr>
                                <td>Economic</td>
                                <td class ="text-center">${data.eco}</td>
                                    <td class ="text-center">${sayeed.result(data.eco).gpacal}</td>
                                    <td class ="text-center">${sayeed.result(data.eco).greadcal}</td>
                                
                                
                            </tr>
                            <tr>
                            <td>Bangla</td>
                            <td class ="text-center">${data.hist}</td>
                                    <td class ="text-center">${sayeed.result(data.hist).gpacal}</td>
                                    <td class ="text-center">${sayeed.result(data.hist).greadcal}</td>
                            
                            
                        </tr>
                        <tr>
                        <td>Religion</td>
                        <td class ="text-center">${data.rel}</td>
                                    <td class ="text-center">${sayeed.result(data.rel).gpacal}</td>
                                    <td class ="text-center">${sayeed.result(data.rel).greadcal}</td>
                        

                        </tr>
                            </tbody>

                        </table>



`



    })
  
}
