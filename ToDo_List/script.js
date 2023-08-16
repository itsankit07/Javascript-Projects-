const title = document.getElementById("title");

const description = document.getElementById("Description");

const form = document.querySelector("form");

const container = document.getElementById("container")

const tasks = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];

showAlltasks();

function showAlltasks(){

    tasks.forEach((value,index) => {

        const div = document.createElement("div");
        div.setAttribute("class","task");

        const innerdiv = document.createElement("div");
        innerdiv.setAttribute("class","left");

        div.append(innerdiv);

        const p = document.createElement("p");
        p.innerText = value.title;
        
        innerdiv.append(p);

        const span = document.createElement("span");
        span.innerText = value.description;
        
        innerdiv.append(span);

        const btn = document.createElement("button");
        btn.setAttribute("class","deletebtn")
        btn.innerText = "-";

        btn.addEventListener("click",() =>{
            removeTasks();
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks));
            showAlltasks();

        })

        div.append(btn);

        container.append(div); 
    
    })
}

function removeTasks(){
    tasks.forEach(()=>{
     const div = document.querySelector(".task");
     div.remove();
    })
}

form.addEventListener("submit",(e) =>{
    e.preventDefault();
    removeTasks();
    tasks.push({
       title: title.value,
       description: description.value, 
    });
    console.log(tasks);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    showAlltasks();
})  