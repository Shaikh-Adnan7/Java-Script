// Imediatly invoke function 
// it is used to getting avoid from the gloabal vaiable pollution 
// to use this function we need to wrap them in the parenthesis () and after that we need use the semicolone to terminate it ; 
// we can use both arrow and normal function as IIEf

function normal (){
    console.log(`normal funtion `)
}
normal();

// above is normal function 

(function IIFEfunction (){
    console.log(`This is an IIFE Function `)
})();

