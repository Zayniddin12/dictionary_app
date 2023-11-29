const getData=async(word)=>{
    const KEY = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
     loader(true)
     console.log('loading...');
    const require = await fetch(KEY)
    console.log(require);
    if (require.ok==true) {
        const data = await require.json()
        console.log('finished');
        loader(false)
        return data  
    }else if(require.ok==false){
        console.log('finished');
        loader(false)
        throw new Error(err)
     }
    
}

