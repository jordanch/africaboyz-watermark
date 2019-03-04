# Setup for windows

1. Install Node.js for Windows: https://nodejs.org/dist/v10.15.1/node-v10.15.1-x86.msi
2. Install Graphics Magik for Windows: ftp://ftp.graphicsmagick.org/pub/GraphicsMagick/windows/GraphicsMagick-1.3.31-Q8-win64-dll.exe
3. Install Bash for Windows: https://github.com/git-for-windows/git/releases/download/v2.20.1.windows.1/Git-2.20.1-64-bit.exe
4. Download a .zip of the source code: https://github.com/jordanch/africaboyz-watermark
5. Unzip the source code to a folder called 'watermark' on your Desktop.

# Before running the program

_Important_

Please make a backup of all original images before running this program. Please don't save the backups in the same folder as this program as this program could error and corrupt the original images. Please save the original images in a different folder to the program to avoid potential corrupted images.

# How to run the program and watermark images

1. Copy and paste your Africaboyz Online stock images to the `images/africaboyzonline_original_images` folder.

Make sure you have a copy of these original images elsewhere on the machine as this program could corrupt files.

2. Open Git Bash.

Git Bash is a terminal. It gives you the ability to type in commands to take certain actions on your machine.

Before running this program, your terminal must be working in the `watermark` folder. To see what folder your terminal is in, use the `pwd` command (print working directory). Use the `cd <folder name>` command (change directory) to change the terminal's current folder. Example: `cd Desktop`. Use `..` to go back a folder. When you open Git Bash, your terminal may start off in your Windows Home folder. To access help for any command type `man <command>`. Example `man cd`. When you change folder using the terminal, the terminal's text output will change letting you know you have changed folder.

3. Using your Git Bash terminal, change directory using the `cd` command to the newly created `watermark` folder.
4. Type `npm install` then press enter
5. Type `npm start` then press enter

The program will create new images that have been manipulated to include the Africaboyz Online watermark. These images will get saved to the `images/watermarked` folder.
