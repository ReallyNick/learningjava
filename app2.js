// let count = 1;

// while (count <= 99) {
//     console.log (count)
// count = count +1;
// }


for (let i = 0; i <= 20; i++) {
    if( i % 3 === 0 && i % 5 === 0 ){
        console.log(`${i} -> Frontend Simplified`);
         }

    else if( i % 3 === 0){
        console.log(`${i} -> Frontend`);
    }

    else if( i % 5 === 0){
        console.log(`${i} -> Simplified`);
    }

    else {
        console.log(`${i} -> ${i}`);
    }
       
}
