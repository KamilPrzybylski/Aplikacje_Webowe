import { Readable, Writable } from "stream"
import * as fs from 'fs'

const file = fs.createWriteStream(`liczby/random-${Date.now().toString()}.txt`, liczby)
var zmienna
async function * generate(){
    for(var i = 0; i < 20; i++){
        zmienna = Math.floor(Math.random() * (-420 - 2137) - 420)
        yield zmienna
    }
}

const readable = Readable.from(generate())
readable.on("data", (chunk) => {
    file.write(chunk.toString())
})