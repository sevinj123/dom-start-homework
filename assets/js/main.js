
// 2 dənə input verilir. 1cisinə ekranda çıxmasını istədiyimiz sözü yazırıq 2cisində isə yazının rəngini seçirik.
//  Düyməyə kliklənən zaman həmin rəngdə o yazı HTML-da görünsün

//bu usulla sadece etmeye calisdim ama davamini alindira bil edim

//  const text=document.querySelectors("text");
//  const color=document.querySelectors("color");

// function arr(){
//     if(text.value.trim())
//     console.log(text.value);
// }




//ve ya
//1cisinə ekranda çıxmasını istədiyimiz sözü yazırıq
//bir funksiya yaz inputun icindeki valuler ekrana versin

// const inp=document.querySelector("input");
//  addBtn();
//  function addBtn(){
//     console.log(inp.value);
// }


//yazdiqlarimi consola deyil de ekrana list formada vermek istesem???
// const inp=document.querySelector("input");
// const ul=document.getElementById("list")
// let stds=[];
//  addBtn();
//  function addBtn(){
//     stds.push(inp.value);
//     inp.value=" "
//     fIllList();
// }

function fullList(){
    console.log(stds.reduce((total,value)=>total+value+`<li>${value}<li>`,''));
}
//bu halda consola yazildi eger ekrana list kimi vermek istesem?

function fIllList(){
   ul.innerHTML=stds.reduce((total,value)=>total+value+`<li>${value}<li>`,'');
}
