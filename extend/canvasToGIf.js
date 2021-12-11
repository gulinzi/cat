// const canvas = document.querySelector('.spine-view');
// const imgArr = [];
// let tempIndex = 0;
// const recorder = setInterval(() => {
//     if (tempIndex < 100) {
//         canvas.toBlob(blob => {
//             imgArr.push(window.URL.createObjectURL(blob))
//         })
//         tempIndex++
//     } else {
//         console.log('截取成功');
//         console.log(imgArr);
//         clearInterval(recorder)
//     }
// },100)


// const a = document.createElement("a");
// document.body.appendChild(a);
// a.style = "display: none";


// (async () => {
//     let i = 0
//     for (const url of imgArr) {
//         a.href = url;
//         a.download = `google-${i}.png`;
//         a.click();
//         i++;
//         await new Promise(r => setTimeout(r, 100));
//     }
// })();
// const canvas = document.querySelector('.spine-view');
// canvas.toBlob(blob=>{
//     const url=window.URL.createObjectURL(blob);
//     const a=document.createElement('a');
//     document.body.appendChild(a);
//     a.href=url;
//     a.download="canvas.png";
//     a.click()
// },'image/png')
const canvas = document.querySelector('.spine-view');

var gl = canvas.getContext("webgl", { preserveDrawingBuffer: true });
setTimeout(() => {
    const img = document.createElement('img')
    img.src = canvas.toDataURL('image/png');
    document.body.appendChild(img)
}, 1000)

