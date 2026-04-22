async function test(){

const r = await fetch("http://localhost:3000/test");


const x = await r.text();  

alert(x);

}