function check(text){
    let i, l=text.length,  char,  last, stack=[];

    for(i=0; i<l; i++){
        char=text[i];
        if(char=="{" || char=="("){
            stack.push(char);
            last=char;
        }else if(char == '}' || char == ")"){
            if(last){
                if((char == '}' && last == "{") || (char == ')' && last == '('))
                {
                    stack.pop();
                    last = stack.length > 0 ? stack[stack.length - 1] : undefined;
                }
            }else{
                return false;
            }
        }
    }
    return stack.length==0;
}

console.log(check("function test(){ alert(); }")); // true
console.log(check("function test)({ alert(); }")); //false
console.log(check("function test ({alert())")); //false