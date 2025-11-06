const fs =require('fs');
const products = {
  p1: "Toothbrush",
  p2: "Colgate",
  p3: "Comb",
  p4: "Hair Oil",

};

const jsonFile = JSON.stringify(products, null, 2);
// write the JSON content (use the variable jsonFile, not the string 'jsonFile')
fs.writeFile('products.json', jsonFile, (err) => {
  if(err){
    console.error("Error writing the data");
  }else{
    console.log("written successfully");
  }
})

