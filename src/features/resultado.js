

export const result = (string)=>{
    
    let regNegNeg=/--/;
    let inicialOp=/^[-+*/]\D|^\+|[-+*/.]$/
    let tratada=string.replace(regNegNeg,'+');

    tratada = tratada.replace(inicialOp,'');
    tratada = tratada.replace(/-/,'+-');
    tratada = tratada.replace(/(\*\+-)/,'*-');
    tratada = tratada.replace(/(\/\+-)/,'/-');

    let array=tratada.split(/\+/);
    let add=0;
    array.forEach((element)=>{

        add+=/[*/]/.test(element)? operacion(element): Number(element);

    })
    
    return add;
    
}

function operacion(substring){

    let array=substring.split(/\*/);
    let mul=1;
    let divide= (a)=>{
        
        let array=a.split(/\//);
        let div=array[0]
        array.forEach((element,index)=>{
            if(index!==0){
                div/=element;
            }
            
        })
        return div;
    }
    array.forEach((element)=>{
        mul*=/\//.test(element)? divide(element):element;
    })
    return mul;
}
