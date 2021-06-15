console.log("Notes-app");
//Grabbing the Elements
let i1=document.getElementById('textarea');
let i2=document.getElementById('addbutton');
let i3=document.getElementById("searchtxt");
let t=document.querySelector('.addednotes');

//Temporary Array
let notes_array=[];
let local_notes_arr=[];

//Function to delete a note
function deleteNote(index)
{
    local_notes_arr.splice(index,1);
    localStorage.setItem('Name',JSON.stringify(local_notes_arr));
    showNotes();
}

//Function to display a note
function showNotes()
{
    let html="";
    local_notes_arr=JSON.parse(localStorage.getItem('Name'));
    if(local_notes_arr.length==0)
    {
        t.innerHTML="<b>Notes not found!!</b>";
    }
   else
   {
    //onclick is the event for deleting a node
    local_notes_arr.forEach(function(element,index){
        html+=`<div class="card mx-3 my-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index+1}</h5>
          <p class="card-text">${element}</p>
          <button type="button" onclick= "deleteNote(this.id)" id="${index}" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`    
        });
        t.innerHTML=html;
        i1.value="";
   }
   
}

//Function to add a note
function addNotes( e,index)
{
    local_notes_arr=JSON.parse(localStorage.getItem('Name'));
    local_notes_arr.push(i1.value)
    localStorage.setItem('Name',JSON.stringify(local_notes_arr));
    showNotes();
}

//Function for searching a note
function searchNotes(e,index)
{
    showNotes();
    html="";
    console.log(i3.value);
    local_notes_arr.forEach(function(element,index)
    {
        console.log(element)
        let i=i3.value;
        if((element.toLowerCase()).includes(i3.value.toLowerCase()))
        {
            console.log("CLcke");
            html+=`<div class="card mx-3 my-3" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Note ${index+1}</h5>
              <p class="card-text">${element}</p>
              <button type="button" onclick= "deleteNote(this.id)" id="${index}" class="btn btn-primary">Delete Note</button>
            </div>
          </div>`    
        }
       
    })
    t.innerHTML=html;
}

//Event for searching and adding a node
showNotes();
i2.addEventListener("click",addNotes);
i3.addEventListener("input",searchNotes);
