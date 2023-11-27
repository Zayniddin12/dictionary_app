
console.log('salom');
// request data

const getData=async(word)=>{
    const KEY=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

    const requare=await fetch(KEY)
    const data=await requare.json()

    return data
}

getData('hello').then((data)=>console.log(data)).catch((err)=>console.log('some error'))