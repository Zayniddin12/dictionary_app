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
    san_serif.classList.remove('hidden')
    serif.classList.add('hidden')
    monospace.classList.remove('hidden')
    modal__fonts.classList.add('hidden')
})
monospace.addEventListener('click', ()=>{
    body.classList.remove('font-Inter')
    body.classList.add('font-Inconsolata')
    body.classList.remove('font-Inika')
    serif.classList.remove('hidden')
    monospace.classList.add('hidden')
    san_serif.classList.remove('hidden')
    modal__fonts.classList.add('hidden')
})
san_serif.addEventListener('click', ()=>{
    body.classList.add('font-Inter')
    body.classList.remove('font-Inconsolata')
    body.classList.remove('font-Inika')
    san_serif.classList.add('hidden')
    monospace.classList.remove('hidden')
    serif.classList.remove('hidden')
    modal__fonts.classList.add('hidden')
})



// datadan malumot olish



const searchWords=document.querySelector('.search_words')
const details=document.querySelector('.main_details')  



function upDateUI(data ) {
    console.log(data[0]);


 console.log(data[0].meanings);
    details.innerHTML=`<div class="keyboard_section my-[40px] flex justify-between items-center">
        <div class="key_font">
            <div class="keyboard text-3xl sm:text-6xl font-bold  mb-2">${data[0].word}</div>
        <div class="KiBD text-purple-500 text-2xl font-normal ">${data[0].phonetic}</div>
        </div>
        <div class="key_icon"><a href="${data[0].phonetics[0].audio}" class="no-underline"> ><img class="w-[48px] h-[48px], sm:w-[75px] h-[75px] cursor-pointer" src="imgApp/play.svg" alt=""></a></div>
    </div>



        <div class="key_type flex justify-between items-center gap-[10px] mb-[22px]">
        <div class="Noun text-2xl font-bold">daas</div>
        <div class="Rectangle1 w-full h-px bg-gray-200"></div>
    </div>
    <div class="meaning_section">
        <div class="meaning__title text-neutral-500 text-xl font-normal mb-[25px]">Meaning</div>
        <ul class="list-image-[url(imgApp/list_type.svg)] ml-5">

            <li class="text-lg font-normal leading-normal mb-[13px]">(etc.) A set of keys used to operate a typewriter, computer etc.</li>
            <li class="text-lg font-normal leading-normal mb-[13px]">A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</li>
            <li class="text-lg font-normal leading-normal mb-[13px]">A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</li>
        </ul>
        <div class="synonim_cont flex items-center gap-3 mt-16 mb-10">
            <div class="syn_cont text-neutral-500 text-xl font-normal">Synonyms</div>
            <div class="syn_keyboard text-purple-500 text-base sm:text-xl font-bold">electronic keyboard</div>
        </div>
    </div>
    



    <div class="verb_section flex justify-between items-center gap-[10px] mb-10">
        <div class="Verb text-2xl font-bold">verb</div>
        <div class="Rectangle1 w-full h-px bg-gray-200"></div>
    </div>
    <div class="verb_meaning_sec">
        <div class="meaning__title text-neutral-500 text-xl font-normal mb-[25px]">Meaning</div>
    </div>
    <ul class="list-image-[url(imgApp/list_type.svg)] ml-5">
        <li class="text-lg font-normal leading-normal mb-[13px]">(etc.) A set of keys used to operate a typewriter, computer etc.
            <div class="example  text-neutral-500 text-lg font-normal font-['Inter'] leading-normal">“Keyboarding is the part of this job I hate the most.”</div>
        </li>
    </ul>
    `
}


// aka tepadagi funksiyani icida bitta sectionni ajratip qoyganman wu iterate bop aylanishi kerak

const getWord= async (city)=>{
    const data =await getData(city)
   return data
}


///searching words





searchWords.addEventListener('submit', (e)=>{
    e.preventDefault()
    const wordName=searchWords.word.value.trim()
    searchWords.reset()
    console.log(wordName);
    getWord(wordName).then((data)=>upDateUI(data))
})



