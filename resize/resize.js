const args = process.argv.slice(2);
const sharp = require('sharp');
const fs = require('fs');
const signs = { // if width and height is 1 then we did not record the size of the sign
    sizes: {
        small_neon_sign:               {width:1,height:1},
        small_wooden_sign:             {width:128,height:64},
        medium_animated_neon_sign:     {width:1,height:1},
        medium_neon_sign:              {width:1,height:1},
        medium_wooden_sign:            {width:256,height:128},
        large_animated_neon_sign:      {width:1,height:1},
        large_neon_sign:               {width:1,height:1},
        large_wooden_sign:             {width:256,height:128},
        huge_wooden_sign:              {width:512,height:128},
        spinner:                       {width:512,height:512},
        single_sign_post:              {width:1,height:1},
        double_sign_post:              {width:1,height:1},
        one_sided_town_sign_post:      {width:1,height:1},
        two_sided_hanging_sign:        {width:1,height:1},
        two_sided_ornate_hanging_sign: {width:1,height:1},
        two_sided_town_sign_post:      {width:1,height:1},
    },
}

if(args.toString().toLowerCase().includes('help') || args=="" || args.length == 0){ // check for arguments or help
	console.log("Help Argument Parsed...\nSyntax:\n\tnode resize.js <folder> <sign type>\n\tWhere <folder> is a folder containing images.\n\tWhere <sign type> is one or more of the following types:");
	Object.keys(signs.sizes).forEach(element => {
		console.log("\t\t"+element);
	})
	console.log("Example:\n\tnode resize.js ImgFolder spinner small_ne");
	process.exit();
}

var path_;
for(path__ of args){
    if(fs.existsSync(path__)){
        path_ = path__ +"\\";
        args.splice(args.indexOf(path__),1);
    }
}
console.log("Attempting to resize all images to size types containing arguments \x1b[32m%s\x1b[0m",args);
if(!path_){
	path_ = ".\\in\\";
	console.log("No folder specified in arguments");
	if(!fs.existsSync(path_)){
    	fs.mkdirSync(path_);
    	console.log("Created the folder to place images in.");
    	process.exit();
    }
}
console.log('\x1b[32m%s\x1b[0m',"Using folder: "+path_)
filein = fs.readdirSync(path_);

Object.keys(filein).forEach(async element => {
    filein[element] = path_+filein[element];
});

//console.log(filein);
if(filein.length == 0){
	console.log('\x1b[31m%s\x1b[0m',"No files are contained in the folder... exiting");
	process.exit();
}

filein.forEach(file => {
    if(fs.existsSync(file)){
        Object.keys(signs.sizes).forEach(element => {
            args.forEach(async arg=>{
                if(element.includes(arg)){
                    try{
                        let filename = file.split('\\');
                        filename = filename[filename.length-1];
                        let infilename = filename;
                        let filesplit = filename.split('.');
                        filesplit.pop();
                        filename = filesplit.join('.')+ "-" + element + ".png";
                        console.log("Found: "+'\x1b[36m%s\x1b[0m',file, "to be letterboxed to fit on \x1b[36m"+element+"\x1b[0m");
                        await sharp(file).resize({...signs.sizes[element], fit: 'contain', background: {r:0,g:0,b:0,alpha:0}}).toFile(filename);
                        console.log('Image: \x1b[36m'+infilename+"\x1b[0m resized to "+signs.sizes[element].width+"x"+signs.sizes[element].height+" and named \x1b[36m"+filename+"\x1b[0m");
                    }catch(e){
                        console.log('\x1b[31m%s\x1b[0m',e);
                    }
                }
            });
        });
    }else{console.log("THE FILE "+ file+" DOES NOT EXIST!");}
});