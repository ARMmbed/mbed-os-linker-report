# d3.js based ELF Linker Statistics
This repository is used to generate interactive linker statistics. Please have a look at our [example section](docs).


## Step-By-Step instructions
### Chrome Users
Please make sure to run chrome with the option `--allow-file-access-from-files` to enable local display of the statistics.
## Installing this tool
This step is only needed once.
```bash
git clone https://github.com/ARMmbed/mbed-os-linker-report
```
### Downloading your target
As debug information is currently not enabled for mbedOS release builds, we need to manually add that option to the tool source code. After merging the outstanding mbed-os pull request [#2733](https://github.com/ARMmbed/mbed-os/pull/2733), the patch can be avoided.
```bash
# Download project
mbed import mbed-os-example-blinky
# Change into the project directory
cd mbed-os-example-blinky
# Applying patch for ARM_GCC: Always enable debug information
git -C mbed-os am ../../mbed-os-linker-report/patches/0001-GCC-Always-enable-debug-information.patch
```

The elfsize script is implemented as a PHP shell script. You need to install PHP locally for running the script:
- Dowload [installer](http://windows.php.net/download/) for Microsoft Windows
- `brew install php` for OS X
- `apt-get install php` for Debian Linux
- `dnf install php` for Fedora Linux

For performing the analysis, you need to recompile your program:
```bash
# Recompile project for chosen platform
mbed compile -m K64F -t GCC_ARM -c
# Process Data: provide one or more elf files for analysis
php ../mbed-os-linker-report/elfsize.php ./.build/K64F/GCC_ARM/mbed-os-example-blinky.elf > ../mbed-os-linker-report/html/data-flare.json
# Display results in chrome
chrome --allow-file-access-from-files ../mbed-os-linker-report/html/index.html
```
The output is a JSON file in the `html` directory - by copying the `html` directory to a web server, the tool can run without the command line option mentioned for Chrome. 

### Example Output
![d3.js based ELF Linker Statistics](docs/example.png)
