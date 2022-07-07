

export const resultado = (a,b,op)=>{
    switch(op){
        case 'x': return a*b;
        case '/': return a/b;
        case '+': return a+b;
        case '-': return a-b;
        default: return undefined;
    }
}