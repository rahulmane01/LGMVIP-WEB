let submit = document.querySelector(".submit");

submit.addEventListener('click', ()=>{
     var output = document.querySelector(".output");
     console.log(output);


     const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        college: document.getElementById("college").value,
        roll: document.getElementById("roll").value,
        address: document.getElementById("address").value
     };

     console.log(data);

     let newlist = document.createElement('div');
     newlist.classList.add('addData');
     newlist.innerHTML=`
     <div class = "NameContainer">${data.name}</div>
     <div class = "EmailContainer">${data.email}</div>
     <div class = "CollegeContainer">${data.college}</div>
     <div class = "RollContainer">${data.roll}</div>
     <div class = "AdressContainer">${data.address}</div>
     `

     console.log(newlist);
     output.appendChild(newlist);
     let input = document.querySelectorAll('input');
     input.forEach(input => {
        input.value = '';
     });
})