import { unZipFromFile, unZipFromURL } from 'https://deno.land/x/flat@0.0.15/mod.ts'

// zip from a local file
// (zip file, destination path)
const filename = Deno.args[0]
const result = await unZipFromFile(filename, './')
const output = result ? 'File unzipped successfully' : 'Error unzipping'
console.log(output)
