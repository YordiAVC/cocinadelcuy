
// const flagsElement =document.getElementById("flags");
// const textToChange = document.querySelectorAll("[data-section]");

// const changeLanguage = async (language)=>{
//     const requestJson = await fetch(`./json/${language}.json`);
//     const texts = await requestJson.json();
//     for(const textToChange of textToChange){
//         const section = textToChange.dataset.section;
//         const value = textToChange.dataset.value;
        
//         textToChange.innerHTML= texts[section][value];
//     }
// };

// flagsElement.addEventListener("click",(e)=>{
//     changeLanguage(e.target.parentElement.dataset.language);
// });