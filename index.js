const div=document.getElementById("card");
const dropDown=document.getElementById("dropDown");
const jumbotron=document.getElementsByClassName("jumbotron")[0];

function func(text="all") {

    let ihtml="";
    let drop="";
    let dropArray=[];
    let url="https://kontests.net/api/v1/"+text;
    const info=fetch(url);
    
   return info.then(value=>{
        return value.json();
    }).then(value=>{
        // console.log(value);
        // let ihtml="";
        for (const key in value) {

            let site="";
            if(text==="all")
                site=value[key].site;
            else
                site=text;

            let img="https://i.ibb.co/DKzgKH9/image.png";
            if(site.replace(/[^A-Za-z]/g, '').toLowerCase()==="hackerrank")
                img="https://i.ibb.co/88f6hcV/image.png";
            else if(site.replace(/[^A-Za-z]/g, '').toLowerCase()==="hackerearth")
                img="https://i.ibb.co/vJfFg6F/image.png";
            else if(site.replace(/[^A-Za-z]/g, '').toLowerCase()==="codeforces")
                img="https://i.ibb.co/D1mfNGm/image.png";
            else if(site.replace(/[^A-Za-z]/g, '').toLowerCase()==="codechef")
                img="https://i.ibb.co/9YHNgdV/image.png";
            else if(site.replace(/[^A-Za-z]/g, '').toLowerCase()==="leetcode")
                img="https://i.ibb.co/cvkyQ7j/image.png";
            else if(site.replace(/[^A-Za-z]/g, '').toLowerCase()==="kickstart")
                img="https://i.ibb.co/jRhF8jR/image.png";
            else if(site.replace(/[^A-Za-z]/g, '').toLowerCase()==="hackerearth")
                img="https://i.ibb.co/vJfFg6F/image.png";
            else if(site.replace(/[^A-Za-z]/g, '').toLowerCase()==="atcoder")
                img="https://i.ibb.co/hykZh0d/image.png";
            else if(site.replace(/[^A-Za-z]/g, '').toLowerCase()==="codeforcesgym")
                img="https://i.ibb.co/CtLQhKq/image.png";
            else if(site.replace(/[^A-Za-z]/g, '').toLowerCase()==="topcoder")
                img="https://i.ibb.co/7NbStxd/image.png";
            else if(site.replace(/[^A-Za-z]/g, '').toLowerCase()==="csacademy")
                img="https://i.ibb.co/gJ7X9ZC/image.png";
            else if(site.replace(/[^A-Za-z]/g, '').toLowerCase()==="toph")
                img="https://i.ibb.co/BwH1dgj/image.png";
            ihtml+=`<div class="card m-2 p-2" style="width:  21rem;">
            <img src="${img}" class="card-img-top" alt="${site}" style="width:  100%;">
            <div class="card-body">
                <h5 class="card-title">${value[key].name}</h5>
                <p class="card-text">Website: ${site}</p>
                <p class="card-text">Status: ${value[key].status}</p>
                <p class="card-text">Duration: ${calculateDuration(value[key].start_time)}</p>
                <p class="card-text">Start Time: ${value[key].start_time}</p>
                <p class="card-text">End Time: ${value[key].end_time}</p>
                <a href="${value[key].url}" class="btn btn-primary">Go To Contest</a>
            </div>
            </div>
            `;    
            
            if (!dropArray.includes(site)) {
                dropArray.push(site);
                drop+=`<a class="dropdown-item" onclick="dropDownClick(this)">${site}</a>`
            }
        }

        div.innerHTML=ihtml;
        // console.log(ihtml);
        // receive(ihtml,0);
        return [ihtml,drop];
});
}

const dropDownClick=(event)=>{
    if(event.innerText==="HackerRank"){
        document.title="HackerRank-Coding Contest";
        func("hacker_rank");
        jumbotron.style.display="none";
    }
    else if(event.innerText==="HackerEarth"){
        document.title="HackerEarth-Coding Contest";
        func("hacker_earth");
        jumbotron.style.display="none";
    }
    else if(event.innerText==="CodeForces"){
        document.title="CodeForces-Coding Contest";
        func("codeforces");
        jumbotron.style.display="none";
    }
    else if(event.innerText==="CodeChef"){
        document.title="CodeChef-Coding Contest";
        func("code_chef");
        jumbotron.style.display="none";
    }
    else if(event.innerText==="AtCoder"){
        document.title="AtCoder-Coding Contest";
        func("at_coder");
        jumbotron.style.display="none";
    }
    else if(event.innerText==="LeetCode"){
        document.title="LeetCode-Coding Contest";
        func("leet_code");
        jumbotron.style.display="none";
    }
    else if(event.innerText==="Kick Start"){
        document.title="Kick Start-Coding Contest";
        func("kick_start");
        jumbotron.style.display="none";
    }
    else if(event.innerText==="CodeForces::Gym"){
        document.title="CodeForces::Gym-Coding Contest";
        func("codeforces_gym");
        jumbotron.style.display="none";
    }
    else if(event.innerText==="TopCoder"){
        document.title="TopCoder-Coding Contest";
        func("top_coder");
        jumbotron.style.display="none";
    }
    else if(event.innerText==="CS Academy"){
        document.title="CS Academy-Coding Contest";
        func("cs_academy");
        jumbotron.style.display="none";
    }
    else if(event.innerText==="Toph"){
        document.title="Toph-Coding Contest";
        func("toph");
        jumbotron.style.display="none";
    }
    else{
        document.title="All-Coding Contest";
        func("all");
        jumbotron.style.display="block";
    }
}



const calculateDuration=(start_time)=>{
        let d=new Date();
        let cosTime=new Date(start_time);
        console.log(cosTime-d);
        if(cosTime-d<=0){
            return 0;
        }
        let time= secondsToDhms(Math.round((cosTime-d)/1000));
        return time;
}

function secondsToDhms(seconds) {
    seconds = Number(seconds);
    let d = Math.floor(seconds / (3600*24));
    let h = Math.floor(seconds % (3600*24) / 3600);
    let m = Math.floor(seconds % 3600 / 60);
    let s = Math.floor(seconds % 60);
    
    let dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    let hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    let mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    let sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    console.log("in func");
    return dDisplay + hDisplay + mDisplay + sDisplay;
}
func().then(data=>{
    div.innerHTML=data[0];
    dropDown.innerHTML+=data[1];
})
