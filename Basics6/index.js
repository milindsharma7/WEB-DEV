const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

const tasks = [];

function show(){
    tasks.forEach((value)=>{
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
    remove();
    tasks.push({
        title: title.value,
        description: description.value,
    });
    show();
});
