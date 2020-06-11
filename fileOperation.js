const fs = require('fs')

function recursiveDelWholeFiles(p) {
    fs.readdir(p, (e,d)=>{
        if(e) throw e
        d.map(i=>{
            let curPath = p+'/'+i
            fs.stat(curPath, (e,data)=>{
                if(e) throw e
                if(data.isDirectory()) {
                    fs.readdir(curPath, (e, curDir)=>{
                        if(curDir.length<1) {
                            fs.rmdir(curPath, e=>{
                                if(e) throw e
                            })
                        } else {
                            recursiveDelWholeFiles(curPath)
                            if(curDir.length<1) {
                                fs.rmdir(curPath, e=>{
                                    if(e) throw e
                                })
                            }
                        }
                    })
                } else {
                    fs.unlink(curPath, e=>{
                        if(e) throw e
                    })
                }
            })
        })    
    })
}
recursiveDelWholeFiles('temp')

// fs.readdir('temp', (e,d)=>{
//     if(e) throw e
//     console.log(d);
// })

// fs.mkdir('temp/tempdeep', e=>{
//     if(e) {
//         if(e.code == 'EEXIST') {
//             console.log('file already exists')
//         } else {
//             console.log(e)
//         }
//     } 
// })

// fs.rmdir('temp', e=>{
//     if(e) throw e
// })

// fs.copyFile('temp/temp2.txt', 'temp/tempdeep/temp1.txt', e=>{
//     if(e) throw e
// })

// fs.rename('temp.txt', 'temp/temp.txt', e=>{
//     if(e) throw e
// })

// fs.unlink('text.txt', e=>{
//     if(e) throw e
// })

// fs.appendFile('temp.txt', ' forever', e=>{
//     if(e) throw e
// })

// fs.readFile('temp.txt', 'utf-8', (e,d)=>{
//     if(e) throw e
//     fs.writeFile('temp.txt', d, e=>{
//         if(e) throw e
//     })
// })

// fs.writeFile('temp.txt', 'love', e=>{
//     if(e) throw e
// }); 

// fs.readFile('temp.txt', 'utf-8', (e,d)=>{
//     if(e) throw e
//     console.log(d)
// });

