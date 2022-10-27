let bodydata=document.querySelector(".tbody")
let row=''

async function getData(){
let fetched=await fetch("https://kontests.net/api/v1/all")
let data=await fetched.json();
let a=0
data.forEach(element => {
    row+=`
    <tr>
    <td>${++a}</td>
    <td class='event'>${element.name}</td>
    <td>${element.start_time.slice(0,10)} at ${element.start_time.slice(11,16)}</td>
    <td>${element.end_time.slice(0,10)} at ${element.end_time.slice(11,16)}</td>
    <td>${(element.duration/3600).toFixed(2)} Hours</td>
    <td><a href="${element.url}" target='_blank'><button class='btn btn-primary'>${element.site}</button></a></td>
    </tr>
    `
});
bodydata.innerHTML=row
}

getData();