let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';


let totalcount = document.getElementById("Totalcount");
let interviewcount =  document.getElementById("Interviewcount");
let rejectedcount = document.getElementById("Rejectedcount")

const allfilterbtn = document.getElementById("all-filter-btn");
const interviewbtn = document.getElementById("interview-filter-btn");
const rejectedbtn = document.getElementById("rejected-filter-btn");


let allcardsection =document.getElementById("allcards");

const filterCards = document.getElementById("filterCards");

const mainContainer =document.querySelector("main")

function calculateCount(){
    totalcount.innerText = allcardsection.children.length;
    interviewcount.innerText = interviewList.length;
    rejectedcount.innerText= rejectedList.length;
}
function togglestyle(id){

    allfilterbtn.classList.add("bg-white", "text-black");
    interviewbtn.classList.add("bg-white", "text-black");
    rejectedbtn.classList.add("bg-white", "text-black");

    allfilterbtn.classList.remove("bg-blue-500", "text-white");
    interviewbtn.classList.remove("bg-blue-500", "text-white");
    rejectedbtn.classList.remove("bg-blue-500", "text-white");

    const selected = document.getElementById(id);

    currentStatus = id;

    selected.classList.remove("bg-white", "text-black");
    selected.classList.add("bg-blue-500", "text-white");

    if (id == 'all-filter-btn') {
        allcardsection.classList.remove('hidden');
        filterCards.classList.add('hidden');
    } else if (id == 'interview-filter-btn') {
        allcardsection.classList.add('hidden');
        filterCards.classList.remove('hidden');
        renderinterview();
    } else if (id == 'rejected-filter-btn') {
        allcardsection.classList.add('hidden');
        filterCards.classList.remove('hidden');
        renderrejected();
    }

}


// delegation 
mainContainer.addEventListener("click", function(event){

    const parentnode = event.target.parentNode.parentNode.parentNode

   


    if (event.target.classList.contains("interview-btn")) {
         
        const company = parentnode.querySelector(".company").innerText
        const jobtitle = parentnode.querySelector(".job-title").innerText
        const detail = parentnode.querySelector(".detail").innerText
        const notes = parentnode.querySelector(".notes").innerText
        const status = parentnode.querySelector(".statux").innerText

        parentnode.querySelector(".statux").innerText = "Applied"

        const cardInfo ={
            company,
            jobtitle,
            detail,
            notes,
            status
        }

        const cardExist = interviewList.find(item => item.company == cardInfo.company)

        if (!cardExist) {
            interviewList.push(cardInfo);
        }

        rejectedList = rejectedList.filter(item => item.company != cardInfo.company);

        console.log(interviewList);

        if (currentStatus == "rejected-filter-btn") {
            
            renderrejected();
        }

        calculateCount();

    }else if (event.target.classList.contains("rejected-btn")) {
         
        const company = parentnode.querySelector(".company").innerText
        const jobtitle = parentnode.querySelector(".job-title").innerText
        const detail = parentnode.querySelector(".detail").innerText
        const notes = parentnode.querySelector(".notes").innerText
        const status = parentnode.querySelector(".statux").innerText

        parentnode.querySelector(".statux").innerText = "Rejected"

        const cardInfo ={
            company,
            jobtitle,
            detail,
            notes,
            status
        }

        const cardExist = rejectedList.find(item => item.company == cardInfo.company)

        if (!cardExist) {
            rejectedList.push(cardInfo);
        }

        console.log(rejectedList);

        interviewList = interviewList.filter(item => item.company != cardInfo.company);

        if (currentStatus == "interview-filter-btn") {
            
            renderinterview();
        }
        
        calculateCount();
    }


})

function renderinterview(){

     filterCards.innerHTML = ""

     for (item of interviewList) {

        console.log(item)
        
        let div = document.createElement("div")
        div.className = "flex justify-between border p-8 bg-green-400"

        div.innerHTML = `
        
                 <!-- part-1 -->

                 <div>
                    <!-- one -->
                    <h1 class="company    text-2xl font-bold text-[#002C5C]">${item.company}</h1>
                    <p class="job-title    text-[18px] text-gray-600 font-bold">${item.jobtitle}</p>

                    <!-- two -->
                     <ul style="list-style: disc;" class="detail     flex gap-10 text-gray-600 px-5 py-8 ">
                     ${item.detail}
                     </ul>

                     <div class="statux     bg-base-300 text-center w-30 px-3 py-2 mb-3">
                        <h1>NOT APPLIED</h1>
                     </div>

                     <P class="text-gray-600 font-medium mb-5     notes">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</P>

                     <!-- three -->

                     <div class="flex gap-5   btns">
                        <button class="interview-btn   btn bg-transparent border-green-700 text-green-700 px-5">Interview</button>
                        <button class="rejected-btn    btn bg-transparent border-red-700 text-red-700 px-5">Rejected</button>
                     </div>

                 </div>

                <!-- part-2 -->
                 <div class="btn-delete">
                    <i class="fa-solid fa-trash"></i>
                 </div>          
        `
        filterCards.appendChild(div)
        
     }
}

function renderrejected(){

      filterCards.innerHTML = ""

      for (item of rejectedList) {

          console.log(item)
        
          let div = document.createElement("div")
          div.className = "flex justify-between border p-8 bg-red-100"

          div.innerHTML = `
        
                      <!-- part-1 -->

                      <div>
                          <!-- one -->
                          <h1 class="company    text-2xl font-bold text-[#002C5C]">${item.company}</h1>
                          <p class="job-title    text-[18px] text-gray-600 font-bold">${item.jobtitle}</p>

                                  <!-- two -->
                                     <ul style="list-style: disc;" class="detail     flex gap-10 text-gray-600 px-5 py-8">
                                         ${item.detail}
                                     </ul>

                                     <div class="statux     bg-red-200 text-red-700 text-center w-30 px-3 py-2 mb-3">
                                          <h1>REJECTED</h1>
                                     </div>

                                     <P class="text-gray-600 font-medium mb-5     notes">${item.notes}</P>

                            <!-- three -->

                            <div class="flex gap-5   btns">
                                <button class="interview-btn   btn bg-transparent border-green-700 text-green-700 px-5">Interview</button>
                                <button class="rejected-btn    btn bg-transparent border-red-700 text-red-700 px-5">Rejected</button>
                            </div>

                      </div>

                     <!-- part-2 -->
                      <div class="btn-delete">
                          <i class="fa-solid fa-trash"></i>
                      </div>          
          `
          filterCards.appendChild(div)
        
      }
}