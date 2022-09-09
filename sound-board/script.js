const sounds=['applause','boo','gasp','tada','victory','wrong']
sounds.forEach(sound=> {
    //adding class of btn to the created button element
    const btn=document.createElement('button')
    btn.classList.add('btn')
    //each button will have the strings from the sound array
    btn.innerText=sound
    btn.addEventListener('click',()=>{
        stopSongs()
        //listening for click on button with sound array value
        document.getElementById(sound).play()
    })
//grabbing buttons container and pass in the btn
document.getElementById('buttons').appendChild(btn)
})
function stopSongs(){
    sounds.forEach(sound=>{
        const song= document.getElementById(sound)
        song.pause()
        song.currentTime=0
    })
}