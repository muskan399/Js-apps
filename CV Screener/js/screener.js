//We can use Ajax or Fetch API to get the data.
const resume=[
    {
        "name": "Jack",
        "college": "College name is RV College of Engineering",
        "work_exp": "Intern at HackLabs",
        "skills": "Skilled in Javascript, Nodejs, Reactjs",
        "Certification": "RHCE ceritifed",
        "image": "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        "name": "Tom",
        "college": "College name is IIT Bombay",
        "work_exp": "Intern at Hackkerank",
        "skills": "Skilled in Python, Django",
        "Certification": "RHCSA certified",
        "image": "https://randomuser.me/api/portraits/men/60.jpg"
    },
    {
        "name": "Minnie",
        "college": "College name is UPES",
        "work_exp": "Intern at Postman",
        "skills": "Skilled in C++, Datastructures, MERN stack",
        "Certification": "RHCE certified",
        "image": "https://randomuser.me/api/portraits/women/75.jpg"
    },
    {
        "name": "Sia",
        "college": "College name RV College of Engineering",
        "work_exp": "Intern at HackLabs",
        "skills": "Skilled in Javascript, Nodejs, Reactjs",
        "Certification": "RHCE, RHCSA certified",
        "image": "https://randomuser.me/api/portraits/women/60.jpg"
    }
];

//Event when next button is pressed.
let next=document.addEventListener("click",nextApplicant);

//Iterator function
function applicantIterator(resume)
{
    let index=0;
    return {
        next: function(){
                if (index < resume.length) {
                    return  { value: resume[index++], done: false };
                }
                else{
                    return {done: true}
                }
            }
        }
}

//Initializing the Iterator.
const candidate=applicantIterator(resume);

//So that when screen is opened for frst time, then resumes are present.
nextApplicant();

//Function for iterating and showing items.
function nextApplicant(event)
{
    //Using Iterator to iterate the list
    let c=candidate.next().value;
    if(c!=undefined)
    {
        let list=document.getElementById('list');
        let image=document.getElementById('image');
        console.log(list);
        list.innerHTML=`
       
        <li class="list-group-item ">${c.name}</li>
        <li class="list-group-item" >${c.skills}</li>
        <li class="list-group-item ">${c.work_exp}</li>
        <li class="list-group-item ">${c.college}</li>
        <li class="list-group-item" >${c.Certification}</li>
         `;
         image.src=`${c.image}`
    }
    else
    {
        //If No more applicants present then reload the page after showing the alert.
        alert("No more applicants");
        window.location.reload();
    }
}