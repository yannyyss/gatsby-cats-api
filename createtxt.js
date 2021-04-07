const fs = require('fs')
const rl = require('readline')
const pathResolve = require("path").resolve

// Create the directory if it doesn't exists
const newFilesPath = pathResolve(process.cwd(), "src/new-files")

const exists = fs.existsSync(newFilesPath)
if (!exists) {
    fs.mkdirSync(newFilesPath)
}

// Create a new interface for questioning some user
const interface = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Variables and functions for the new File
let name
let data
let path = "src/new-files"

const checkAnswer = (res) => {
    console.log('The user entered: ', res)
}

const createNewFile = () => {
    if (name && data) {
        let file = path+'/'+name+'.txt'
        fs.writeFileSync(file,data)
    }
}

// Ask the user File's Name
const question1 = () => {
    return new Promise((resolve, reject) => {
        interface.question('Escribe el nombre del archivo que quieres crear: ', (answer) => {
            name = answer
            checkAnswer(name)
            resolve()
        })
    })
}
  
// Ask the user File's Content
const question2 = () => {
    return new Promise((resolve, reject) => {
        interface.question('Escribe el contenido del archivo: ', (answer) => {
            data = answer
            checkAnswer(data)
            resolve()
        })
    })
}


// Call the questions
const getInfoForNewFile = async () => {
    await question1()
    await question2()
    // These two lines together allow the program to terminate. Without
    // them, it would run forever.
    interface.close()
    //   process.stdin.destroy()
}

getInfoForNewFile().then(() => createNewFile())
