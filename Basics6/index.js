const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

const tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
show();

function show(){
    tasks.forEach((value,index)=>{
        const div = document.createElement("div");
        div.setAttribute("class","task");

        const divTaskItem = document.createElement("div");
        divTaskItem.setAttribute("id","taskArea");
        divTaskItem.setAttribute("class","taskItem");

        const divTitle = document.createElement("div");
        const divDesc = document.createElement("div");
        divTitle.setAttribute("id","taskTitle");
        divDesc.setAttribute("id","taskDesc");
        divTitle.innerText = value.title;
        divDesc.innerText = value.description;

        divTaskItem.append(divTitle);
        divTaskItem.append(divDesc);

        const deleteArea = document.createElement("div");
        deleteArea.setAttribute("id","deleteArea");
        deleteArea.setAttribute("class","taskItem");

        const btn = document.createElement("button");
        btn.setAttribute("class","delete");
        btn.addEventListener("click",()=>{
            tasks.splice(index,1);
            remove();
            localStorage.setItem("tasks",JSON.stringify(tasks));
            show();
        });
        deleteArea.appendChild(btn);

        div.append(divTaskItem);
        div.append(deleteArea);

        container.append(div);
    });
}

function remove(){
    const rmv = document.querySelectorAll(".task");
    rmv.forEach((value)=>{
        value.remove(); 
    });
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    tasks.push({
        title: title.value,
        description: description.value,
    });
    localStorage.setItem("tasks",JSON.stringify(tasks));
    remove();
    show();
});
