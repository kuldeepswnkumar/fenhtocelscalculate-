
const smbtn = document.getElementById("smbtn");

// id.addeventlisty("click", ()+>{

// })

smbtn.addEventListener('click', (e) =>{
    e.preventDefault();
    const numberTemp = document.getElementById('temp').value;
    console.log("numberTemp");
    const tempSelected = document.getElementById('temp_new');
    const valueTemp = temp_new.options[tempSelected.selectedIndex].value;  
    console.log(valueTemp);

    const celTofeh = (cel) => {
        let fehrenheit = Math.round((cel * 9/5) + 32);
        return fehrenheit;
    }
    const fehTocel = (feh) => {
        let celcius = Math.round((feh - 32) * 5/2);
        return celcius;
    }

    let result;
    if(valueTemp === "Cel"){
        result = celTofeh(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result} °Fahrenheit`;
    }else{
        result = fehTocel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result} °Celcius`;
    }

})


// const calculateTemp = (e) => {
//     e.preventDefault();
//          const numberTemp = document.getElementById('temp').value;
//      console.log("numberTemp");
//     const tempSelected = document.getElementById('temp_new');
//     const valueTemp = temp_new.options[tempSelected.selectedIndex].value;  
//     console.log(valueTemp);

//     // const celTofeh = (cel) => {
//     //     let fehrenheit = Math.round((cel * 9/5) + 32);
//     //     return fehrenheit;
//     // }
//     // const fehTocel = (feh) => {
//     //     let celcius = Math.round((feh * 9/5) + 32);
//     //     return celcius;
//     // }

//     // let result;
//     // if(valueTemp == cel){
//     //     result = celTofeh(numberTemp);
//     //     document.getElementById('resultContainer').innerHTML = `= ${result} fehrenheit`;
//     // }else{
//     //     result = fehTocel(numberTemp);
//     //     document.getElementById('resultContainer').innerHTML = `= ${result} celcius`;
//     // }

// } 
