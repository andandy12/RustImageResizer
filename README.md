# Rust Image Resizer
Rust Image Resizer is a node.js script that uses the [sharp](https://www.npmjs.com/package/sharp) framework. It was created to easily resize images to fit on a large number of signs within [rust](https://en.wikipedia.org/wiki/Rust_(video_game)) the game.

## Installation
You must have [node.js](https://nodejs.org/en/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed to install and run the script.
To check if these programs are installed you can run `node-v` and `npm -v`, if either of these commands cause a error or print a non-valid version number you must install them.
After npm is working properly in order to install all dependencies, run `npm i` in the same directory as `package.json`.
#### install.bat
Alternatively you can just simply run the script `install.bat` to install all dependencies and required files. This will also ensure you have node and npm installed properly.
## Usage
To run the script you must run either of the below commands, the latter one displaying the proper usage syntax.

>node resize.js help
>
>node resize.js <*folder containing images*> <*image types*>

Where <*folder containing images*> is the folder containing images, if anything within the folder is not a image then the script will simply fail to resize it.

Where <*image types*> is part of one or more of the following types:<br>
*small_neon_sign, small_wooden_sign, medium_animated_neon_sign, medium_neon_sign, medium_wooden_sign, large_animated_neon_sign, large_neon_sign, large_wooden_sign, huge_wooden_sign, spinner, single_sign_post, double_sign_post, one_sided_town_sign_post, two_sided_hanging_sign, two_sided_ornate_hanging_sign, two_sided_town_sign_post*


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

#### License
[ISC](https://choosealicense.com/licenses/isc/)
