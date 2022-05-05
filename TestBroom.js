const continueNumber = (n) => {
  let items = [];
  
  let count = 0;
  while (items.length <= n) {
    
    if (items.length == 0){
      items.push(count);
    }
    else {
      if(items[count] == undefined){
        items.push(items[count - 1] + count);
        continue;
      }
      items.push(items[count - 1] + items[count]);
    }
    count++;
  }
  return items;
}

let n = 7;
console.log(continueNumber(n))