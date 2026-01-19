import fs from "fs/promises";
import express from "express"
console.log("hi");

let code = "";
async function createReadFile() {
  code = await fs.readFile("./demo.js", "utf-8");
  // console.log(code);
}


await createReadFile();

function lexemme_generator(code){
    let main_code = code.split("\r");

let tokens = [];

main_code?.forEach((element) => {
  tokens = [...tokens, ...element.split(" ")];
});


let new_tokens = [];

const data = {
  lets: {},
  consts: {},
  vars: {},
  functions: {}
};

tokens.forEach((token) => {
  new_tokens = [...new_tokens, token.replaceAll("\n", "")];
});

// console.log(new_tokens);

// console.log(new_tokens);

// let check = ['function',   'check_number',   '(n)',
//   '{',          '',               'return',
//   'n',          '!=',             '0',
//   '?',          'n',              '<',
//   '',           '0',              '?',
//   '"negative"', ':',              '"positive"',
//   ':',          '"zero";',        '}',
//   '',           'check_number()']

// function functions_join (tokens , currIdx ) {
//     let run = true;
//     currIdx+=4;
//     let joins = '';
//     while(run) {
//         if(tokens.at(currIdx) != '}'){
//             joins += " " + tokens.at(currIdx)
//             currIdx++;
//         }
//         else{
//             run = false;
//         }
//     }
//     return [joins , currIdx];
// }

function functions_join(tokens, currIdx) {
  let i = currIdx;
  let body = "";
  let braceCount = 0;

  while (i < tokens.length) {
    if (tokens[i].includes("{")) braceCount++;
    if (tokens[i].includes("}")) braceCount--;

    if (braceCount > 0) body += " " + tokens[i];

    i++;
    if (braceCount === 0 && body !== "") break;
  }

  return [body.trim(), i];
}


// console.log(functions_join(check ,0))



new_tokens.forEach((token, idx) => {
  if (token === "let") {
    data["lets"] = {
      ...data["lets"],
      [new_tokens.at(idx + 1)]: new_tokens.at(idx + 3),
    };
  } else if (token === "var") {
    data["vars"] = {
      ...data["vars"],
      [new_tokens.at(idx + 1)]: new_tokens.at(idx + 3),
    };
  }
  else if (token === "const") {
    data["consts"] = {
      ...data["consts"],
      [new_tokens.at(idx + 1)]: new_tokens.at(idx + 3),
    };  }
    else if(token === "function" ) {

        let function_body = functions_join(new_tokens,idx)[0] ;

        // if(function_body.includes('function')){
        
        if(function_body.includes('function'))
        {data["functions"] = {   
           ...(data["functions"] ?? {}), [new_tokens.at(idx + 1) ]: { body :  lexemme_generator(function_body) , arguments: new_tokens.at(idx+2) }
        }}else{
            data["functions"] = {   
           ...(data["functions"] ?? {}), [new_tokens.at(idx + 1) ]: {body :  function_body, arguments: new_tokens.at(idx+2) }
           
        }
        }
    }      
    //   let   new_Variable = ;
    //   console.log(new_Variable);
  }
);

return data;
// console.log(data);
}

const app = express()

app.get('/' ,(req , res)=> res.send( lexemme_generator(code)))

app.listen(3000 , () => {
  console.log("server is listening to 3000");
  
})
// lexemme_generator(code)
