const encode = require('./caesarCipher');
const fs = require('fs');

program.parse(process.argv);


const atbash = () => {


}



/*if(Number(shift) && (action === 'encode' || action === 'decode')) {
  try {
    const fsRead = fs.createReadStream(__dirname + `/${input}`, 'utf8')
    const fsReadOutput = fs.createReadStream(__dirname + `/${output}`, 'utf8')
    const fsWrite = fs.createWriteStream(__dirname + `/${output}`)

    fsRead.on('data', (chunk) => {
      console.log(chunk)
      if(action === 'encode') {
        console.log(shift)
        console.log(encode(chunk, Number(shift)));
        fsWrite.write(encode(chunk, Number(shift)))
      }
      if(action === 'decode') {
        console.log(encode(chunk, 26 - Number(shift)) + "\n");
        fsWrite.write(encode(chunk, 26 - Number(shift)) + "\n")
      }
    })
  } catch (e) {
    console.log(e)
  }*/