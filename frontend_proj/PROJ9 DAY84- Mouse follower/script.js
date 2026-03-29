
const mouseFollower= document.querySelector('.mouse-follower')

let x=0, y=0;

addEventListener('mousemove', (e)=>{
    const {clientX, clientY}= e

    x=clientX;
    y=clientY;
})

function far(){
    mouseFollower.style.transform= `translate(${x}px, ${y}px)`
    requestAnimationFrame(far)
}
far()

//using transform-translate is more efficient than using clientX and clientY becz the x-y uses the whole page as its reference whereas tranform only uses the element on which it is applied.

// mouseFollower.style.transform= `translate(${clientX}px, ${clientY}px)`

//requestAnimationFrame() function works on the deeper level by synchronizing the animation with the browser's refresh rate and FPS(frames per sec), which is typically 60 frames per second. This means that the animation will run smoothly and efficiently, without causing unnecessary CPU usage or jankiness. and the function we pass in it runs first before the frame setup. By using requestAnimationFrame(), you can ensure that your animations are optimized for performance and provide a better user experience.