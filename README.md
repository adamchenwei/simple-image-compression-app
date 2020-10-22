# Simple Image Compression App
## Intro
- Its used to convert images to a different compression ratio.
- Its best to use highest quality image to convert to lower ratio image as it will minize unintended image quality loss.
- Its only work for JPEG/JPG images at the moment, but I have an intention to add so more image formats are allowed. (Help from the community will also be appreciated)

## Who are its intended users?
It mostly meant for developers or tech savvy users to easily convert images to more compressed format easily in batch without using slow and limited online tools. However, this guide is written with minimal tech skills in mind to accomadate everyone. But if you felt something is missing. feel free to contribute by add a pull request.

## How to Use It?
### Basic Setup & Usage Guide
#### Pre-reqs
1. install nodejs https://nodejs.org/en/download/
2. install git https://git-scm.com/downloads
3. [OPTIONAL] (if you want to just type webpack to run this app) npm install webpack -g

#### Steps to start the app
1. clone the project into your desired folder
2. open command line interface (i.e. for Mac, its "Terminal" and for windows, its "Command Prompt")
3. navigate into this project root folder and type `npm install`
4. load all images need to convert into `./src` folder
5. in the same command line interface, type `npm run convert` or just `webpack` if you proceeded with pre-reqs #3
6. await conversion, then you should see all your converted image in `./dist` folder

## To Change Compression Ratio
In side `webpack.config.js` file, change compression ratio with property
```
options: {
  mozjpeg: {
    ...,
    quality: <change to your desired quality>
```

## Contribution
Feel free to start PR to add missing functionalities in the following title "Work In Progress (WIP) / Help Needed (HN) Functionalities", its pretty free style atm :D Enjoy!

## Work In Progress (WIP) / Help Needed (HN) Functionalities
1. (HN) Create UI so non-developers can use it as well
2. (HN) Allow customization of batch file name when converted
3. (HN) Make it into a React Native / Electron App
4. (HN) Make this app work also for png and other file format