//const names = require('./4-names')
//const sayhi = require('./5-utils')
//const data = require('./6-alternative-flavour')
//require('./7-mind-grenade')

//sayhi('Tim')
//sayhi(names.john) 
//sayhi(names.karma)

//const os = require('os')

//info about current user

//const user = os.userInfo()
//console.log(user)

//method returns the system uptime in seconds

//console.log(`The system Uptime is  ${os.uptime()} seconds`)

/*const currentOS = {
      name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)
*/

// const path = require('path')

// console.log(path.sep)

// const filepath = path.join('/content','Subfolder','test.txt')
// console.log(filepath)

// const base = path.basename(filepath)
// console.log(base)

// const absolute = path.resolve(__dirname, 'content','Subfolder','Text.txt')
// console.log(absolute)

// const {readFile,writeFile} = require('fs')

// // const first = readFileSync('./content/first.txt','utf8')
// // const second = readFileSync('./content/second.txt','utf8')

// // console.log(first,second)

// // writeFileSync('./content/result-sync.txt', `Here is the result: ${first},  ${second}`,{flag:'a'})

// readFile('./content/first.txt','utf8',(err,result)=>{
//   if(err){
//     console.log(err)
//     return
//   }
//   const first = result
//   readFile('./content/second.txt','utf8',(err,result)=>{
//     if (err) {
//       console.log(err)
//       return
//     }
//     const second =result
//     writeFile('./content/result-async.txt',
//     `here is the result :${first}, ${second}`
//     ,(err,result)=>{
//       if(err){
//         console.log(err)
//         return
//       }
//       console.log(result)
//     })
//   })
// })


// const http = require('http')

// const server = http.createServer((req,res)=>{
// if(req.url === '/'){
//   res.end('Welcome to our home page')
// }
// if(req.url === '/about'){
//   res.end('here is our shoort history')
// }

// res.end(`
// <h1>Oops!</h1>
// <p>We can't seem to find the page you are looking for </p>
// <a href="/">back home </a>
// `)

// })

// server.listen(5000)


// const _ = require('lodash')
// const items = [1,[2,[3,[4]]]]
// const newItems  = _.flattenDeep(items)
// console.log(newItems)
 