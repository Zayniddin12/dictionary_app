// const { SourceMapGenerator } = require("source-map-js");



const body=document.querySelector('.body');
const oval=document.querySelector('.oval')
const dark_body=document.querySelector('.dark_body')
const san_serif=document.querySelector('.san_serif')
const serif=document.querySelector('.serif')
const monospace=document.querySelector('.monospace')
const modal__fonts=document.querySelector('.modal__fonts')
const moon=document.querySelector('.moon')
const backDark=document.querySelector('.back_dark')
const keyboard=document.querySelector('.keyboard')
// lightDarkMode
let getMode=JSON.parse(localStorage.getItem('dark_mode'))

console.log(getMode);

if (getMode==="DARK") {
    body.classList.add('bg-slate-950');
    body.classList.add('!text-white');
    oval.classList.add( '!translate-x-[140%]')
    backDark.classList.add('!bg-violet-600')
    moon.classList.add('!text-violet-600')
}else{
    body.classList.remove('!text-white');
    oval.classList.remove( '!translate-x-[140%]')
    backDark.classList.add('!bg-neutral-500')
    backDark.classList.remove('!bg-violet-600')
    moon.classList.remove('!text-violet-600')
    moon.classList.add('!text-[#757575]')
}

function darkModeNav() {
    body.classList.toggle('!text-white')
    body.classList.toggle('text-zinc-800')
    body.classList.toggle('bg-slate-950')
    oval.classList.toggle( '!translate-x-[140%]')
    modal__fonts.classList.toggle('bg-slate-900')
    modal__fonts.classList.toggle('bg-white')
    modal__fonts.classList.toggle('text-white')
    modal__fonts.classList.toggle('text-zinc-800')
    moon.classList.toggle('!text-[#757575]')
    moon.classList.toggle('!text-violet-600')
    backDark.classList.toggle('!bg-neutral-500')
    backDark.classList.toggle('!bg-violet-600')
    var theme;
    if (body.classList.contains('bg-slate-950')) {
        console.log('dark mode');
        theme='DARK';
    }else{
        console.log('light mode');
        theme='LIGHT';
    }

    // save localStorage
    
    localStorage.setItem('dark_mode', JSON.stringify(theme))
}

// fonts
function closeModal (){
    modal__fonts.classList.add('hidden')
}
const down=document.querySelector('.down')
down.addEventListener('click', ()=>{
    modal__fonts.classList.toggle('hidden')
})
// modal__fonts.addEventListener("focusout", ()=>{
//     modal__fonts.classList.add('hidden')
//  })

function Focus_Out(event) {
    modal__fonts.classList.add('hidden')
}
serif.addEventListener('click', ()=>{
    body.classList.remove('font-Inter')
    body.classList.remove('font-Inconsolata')
    body.classList.add('font-Inika')
    modal__fonts.classList.add('hidden')
})
monospace.addEventListener('click', ()=>{
    body.classList.remove('font-Inter')
    body.classList.add('font-Inconsolata')
    body.classList.remove('font-Inika')
    modal__fonts.classList.add('hidden')
})
san_serif.addEventListener('click', ()=>{
    body.classList.add('font-Inter')
    body.classList.remove('font-Inconsolata')
    body.classList.remove('font-Inika')
    modal__fonts.classList.add('hidden')
})



// datadan malumot olish
let overLay=document.querySelector('.over_lay ')

function loader(state) {
    if (state) {
        overLay.classList.remove('hidden')
    }else{
        overLay.classList.add('hidden') 
    }
}

const searchWords=document.querySelector('.search_words')
const details=document.querySelector('.main_details')  

let meaning 
const getWord= async (city)=>{
    const data =await getData(city)
    getMeanings()
   return meaning = data

}
console.log(meaning)
function getMeanings(){
   
}

let info = document.querySelector('.langInfo')
let infoInner
let definitions
let sound=document.querySelector('.sound')
let audio;


function upDateUI(data ) {

    

    let  sinonyms 
    console.log(data[0]);
    if(data !== null){
        for (let i = 0; i <data[0].meanings.length; i++) {
            console.log(data[0].meanings[i].partOfSpeech);
            infoInner = document.createElement('div')
            infoInner.classList.add('language')
            infoInner.innerHTML = `<div class="key_type flex justify-between items-center gap-[10px] mb-[22px]">
            <div class="Noun text-2xl font-bold">${data[0].meanings[i].partOfSpeech}</div>
            <div class="Rectangle1 w-full h-px bg-gray-200"></div>
        </div>
        <div class="meaning_section">
            <div class="meaning__title text-neutral-500 text-xl font-normal mb-[25px]">Meaning</div>
        </div>` 

            for (let e = 0; e <data[0].meanings[i].definitions.length; e++) {
                definitions=document.createElement('div')
                console.log(data[0].meanings[i].definitions[e].definition);
                definitions.classList.add('definitions')
                definitions.innerHTML=`
                <ul class="definitions list-image-[url(imgApp/list_type.svg)] ml-5">
                <li class="text-lg font-normal leading-normal mb-[13px]">${data[0].meanings[i].definitions[e].definition}</li>
                </ul>
                `
               
                infoInner.appendChild(definitions)

            }
          let synonimCont=document.createElement('div') 
          synonimCont.setAttribute('class', 'synonim_box block md:flex items-center gap-3 mt-5 mb-5')
        let syn_exapmles;

                sinonyms=document.createElement('div')
                sinonyms.classList.add('sinonims')
                sinonyms.innerHTML=`
                 <div class="syn_cont text-neutral-500 text-xl font-normal">Synonyms:</div>
                 ` 
                 synonimCont.appendChild(sinonyms) 
                 console.log(data[0].meanings[i].synonyms.length);
                for (let a = 0; a < data[0].meanings[i].synonyms.length; a++) {
                    syn_exapmles=document.createElement('span')
                    syn_exapmles.classList.add('syn_exapmles')
                    syn_exapmles.innerHTML=`
                    <div class="syn_keyboard text-purple-500 text-base sm:text-xl font-bold">${data[0].meanings[i].synonyms[a]}</div>
                 `
                 
                synonimCont.appendChild(syn_exapmles)     
                }
                
                    
          
              
            infoInner.appendChild(synonimCont)
            info.appendChild(infoInner)

            
            
        }
     
    }
    if (data[0].phonetic) {
        details.innerHTML=`<div class="keyboard_section my-[40px] flex justify-between items-center">
        <div class="key_font">
            <div class="keyboard text-3xl sm:text-6xl font-bold  mb-2">${data[0].word}</div>
        <div class="KiBD text-purple-500 text-2xl font-normal ">${data[0].phonetic}</div>
        </div>
        <div class="key_icon"><img onclick=playSound() class="sound w-[48px] h-[48px], sm:w-[75px] h-[75px] cursor-pointer" src="imgApp/play.svg" alt=""></div>
    </div>
    ` 
    } else {
        details.innerHTML=`<div class="keyboard_section my-[40px] flex justify-between items-center">
        <div class="key_font">
            <div class="keyboard text-3xl sm:text-6xl font-bold  mb-2">${data[0].word}</div>
        <div class="KiBD text-purple-500 text-2xl font-normal "></div>
        </div>
        <div class="key_icon"><img onclick=playSound() class="sound w-[48px] h-[48px], sm:w-[75px] h-[75px] cursor-pointer" src="imgApp/play.svg" alt=""></div>
    </div>
    ` 
    }
    for (let i = 0; i < data[0]?.phonetics.length; i++) {
        if (!(data[0]?.phonetics[i].audio=='')){
            audio=new Audio(data[0].phonetics[i].audio)  
        }
        
    }
 
    
}

function playSound() {
    audio.play()
}


// href="${data[0].phonetics[0].audio}"

///searching words





searchWords.addEventListener('submit', (e)=>{
    e.preventDefault()
    resetFunction()
    const wordName=searchWords.word.value.trim()
    const whoops=document.querySelector('.whoops')
    if (!(wordName=='')) {
        
        whoops.classList.add('hidden')
        console.log(wordName);
        searchWords.reset()
        console.log(wordName);
        reloadFunc()
         getWord(wordName).then((data)=>upDateUI(data)).catch((err)=>{noFoundFunc()}) 
    }else{
        searchWords.classList.remove('focus-within:border-purple-500')
        searchWords.classList.add('focus-within:border-red-500')
whoops.classList.remove('hidden')
resetFunction()
resetDeteails()
    }
 
})
function resetFunction(){
    info.innerHTML = ''
    
}
let footer=document.querySelector('.footer')
function resetDeteails() {
    details.innerHTML=''
    footer.classList.remove('border-t-[1px]')
    footer.innerHTML=''
}
let noFound=document.querySelector('.nofound_section')
function noFoundFunc() {
    details.innerHTML=''
    noFound.classList.remove('hidden')
    footer.classList.remove('border-t-[1px]')
    footer.innerHTML=''
    console.log('error');
}
function reloadFunc() {
    noFound.classList.add('hidden')
  
    console.log('then');
}
// 25