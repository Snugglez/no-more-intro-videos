const fs = require("fs")
const path = require("path")
exports.ClientMod = function reee(d) {
let vidPath = path.join(d.clientInterface.info.path, '\\..\\S1Game\\CookedPC\\Art_Data\\Packages\\Video\\')
let files = fs.readdirSync(vidPath, {withFileTypes: true})
function unname(){
files = fs.readdirSync(vidPath, {withFileTypes: true})
files.forEach(file => {if(file.name.includes('_DISABLED')){fs.rename(path.join(vidPath, file.name), path.join(vidPath, file.name.split('_DISABLED')[0]), (e) => {if (e) {}})}})
}
files.forEach(file => {if(file.name.includes('intro_') && !file.name.includes('_DISABLED')){fs.rename(path.join(vidPath, file.name), path.join(vidPath, file.name + '_DISABLED'), (e) => {if (e) {}})}})
d.clientInterface.on('data', (e, data) => {if(e == 'get_sls'){unname()}
})
this.destructor = () => {unname()}
}
