import { Readable } from "stream"
import * as fs from 'fs'

const writeToFile = fs.createWriteStream(`liczby/random-${Date.now().toString()}.txt`)
const readable = Readable.from(generate())

async function * generate(){
    for(var i = 0; i < 20; i++){
        yield Math.floor(Math.random() * 2137 - 420)
    }
}

readable.on("data", (chunk) => {
    writeToFile.write(chunk.toString() + '\n')
})