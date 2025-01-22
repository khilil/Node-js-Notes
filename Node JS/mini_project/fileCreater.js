import readline from 'readline'
import fs, { read } from 'fs'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const fileCreation = () => {
    rl.question('Enter Your File Name : ', (filename) => {
        rl.question("Enter Your Content for your file :  ", (content) => {
            // const filePath
             fs.writeFile(`${filename}`, content, (err) => {
                if (err) {
                    console.error("Error writing the file: ");
                }else{
                    console.log(`File ${filename} created successfuly...!`);
                }
                rl.close();
             })
        })
    })
}

fileCreation()