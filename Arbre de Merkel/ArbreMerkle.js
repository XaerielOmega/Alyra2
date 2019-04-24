function hash(hash){
    return crypto.createHash('sha256').update(hash).digest('hex')
}


const program = require('commander')
const crypto = require('crypto')

let inputData = []
let tree = []
let treeBuff = []

program.version("1.0.0").arguments('<data...> ').action(function (data) {console.log("Data :", data)
    inputData = data
})
program.parse(process.argv)
//let hash = crypto.createHash('sha256').update(inputData[0]).digest('hex')
//let hash2 = crypto.createHash('sha256').update(inputData[1]).digest('hex')
//console.log("Data :", hash , hash2)
//console.log("Data :", crypto.createHash('sha256').update(hash + hash2).digest('hex'))


tree = inputData.slice();
//for(i=0; i<inputData.length;i++){
 //   tree[i] = hash(inputData[i]);
//}
console.log("tree :", tree);

if(tree.length % 2 == 0){
    for(i=0; i<tree.length; i++){
        treeBuff.push(tree[i]);
        if(treeBuff.length == 2){
            tree.push(treeBuff[0] + treeBuff[1]);
            //tree.push(hash(treeBuff[0] + treeBuff[1]));
            treeBuff = [];
        }
    }
}

console.log("tree :", tree);
