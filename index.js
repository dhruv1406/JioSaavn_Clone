// Music Language list Section


const music = document.querySelector(".music");
const i = document.querySelector(".arrow");
const music_sec =document.querySelector(".dropdown");
const update = document.querySelector(".lang-update_btn");
const icons = document.querySelectorAll(".lang_icon");
const lang_change = document.querySelector(".lang");
const lang = [];
// const error = document.querySelector(".choose-lang");
const li = document.querySelectorAll(".lang-list");

// if(icons.parentElement.classList.contains("click_btn")){
//     lang_change.textContent = icons.parentElement.textContent;
// };


music.addEventListener("click" , myFunction);
function myFunction(event){
  if(music_sec.classList.contains("hide")){
  i.classList.add("rotate");
  music_sec.classList.remove("hide");
  // error.classList.remove("hide");
 }else{
   i.classList.remove("rotate");
     music_sec.classList.add("hide");

 }
}

icons.forEach(btn => {
    btn.addEventListener("click", select);
});

function select(event){

        if(event.target.parentElement.classList.contains("click_btn")){

               event.target.parentElement.classList.remove("click_btn");
               lang1 = event.target.parentElement.textContent;
               const index = lang.indexOf(lang1);

                 if (index > -1){
                    lang.splice(index,1);
                  }
               lang_change.textContent = lang;
         }

          else{
               // error.classList.add("hide");
               event.target.parentElement.classList.add("click_btn");
               lang1 = event.target.parentElement.textContent;
               lang.push(lang1);
               lang_change.textContent = lang;

    //   error.classList.add("hide");
         }
    }


update.addEventListener("click" , myFunction1);
function myFunction1(){
//   lang_change.innerText = lang;
  i.classList.remove("rotate");
  music_sec.classList.add("hide");
//   error.classList.add("hide");
}

function check_tick(){
    if (li.classlist.contains("click_btn")){
        alert(yes);
    }else{
        alert("no");
    }
}

//  icons.forEach(btn => {
//     //     if(btn.icons.parentElement.classList.contains("click_btn")){
//     //         alert("yes");
//     //     }
