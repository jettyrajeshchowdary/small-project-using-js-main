let input=prompt("What would you like to do?");
const todos=['collect chicken eggs','take a nap'];
while(input !=='quit' && inpiu!=='q'){
    if(input=='list'){
        console.log('**********');
        for(let i=0;i<todos.length;i++){
            console.log(`${i}:${todos[i]}`);
        }
        console.log('**********');
    }else if(input=='new'){
        const newtodo=prompt("what is the new todo?");
        todos.push(newtodo);
        console.log(`${newtodo} added to the list!`);

    }else if(input=='delete'){
        const index=parseInt(prompt("enter an index to delete"));
        if(!Number.isNaN(index)){
        const deleted=todos.splice(index,1);
        console.log(`${deleted[0]}`)
        }else{
            console.log('Unkonown index');
        }
    }
    input=prompt('what would you like to do?');
}
console.log('quit yhe app!')