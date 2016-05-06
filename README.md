# Front end grunt kit

----
## What is this?
Front-end-grunt-kit is a starter kit that can help you get going with your front end environment quickly.

It will **watch** your LESS and scripts (+bower components) and compile and compress them. Also, it will refresh your browser when you apply a change.


## How do I get started? ##
Easy! follow these 3 steps.

### 1. Dependencies ###

First, This kit assuming you have the following:

* Nodejs 
* Bower
* Grunt

(If not, it's quite easy to install them. Just follow our fellow Google)

### 2. NodeJS Packages ###

Install the node packages that I've included in **packages.json**. For that, let's type:

    npm install

The packages I'm using are:

* [grunt](http://gruntjs.com/) - For running all our JS tasks
* [grunt-bower-concat](https://github.com/sapegin/grunt-bower-concat) - Bower components concatenator for Grunt
* [grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less) - Compile LESS files to CSS
* [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) - Minify files with UglifyJS
* [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) - Run tasks whenever watched files change

### 3. Bower Components###

    bower install

*I included jQuery and Bootstrap for this example*


## Now what? ##
Once you installed everything, open your terminal/console and type:
    
    grunt

All your LESS and JS files will be watched and complied when you change them. 

You can see all your compiled & compressed files under **/dist**.

**Note: Live reload is on!**