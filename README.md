# d3.js based ELF Linker Statistics

## Step-By-Step instructions
### Chrome Users
Please make sure to run chrome with the option `--allow-file-access-from-files` to enable local display of the statistics.
## Installing this tool
This step is only needed once.
```bash
git clone https://github.com/ARMmbed/mbed-os-linker-report
```
### Downloading your target
```bash
# Download project
mbed import mbed-os-example-blinky
# Change into the project directory
cd mbed-os-example-blinky
# Applying patch for ARM_GCC: Always enable debug information
git -C mbed-os am ../../mbed-os-linker-report/patches/0001-GCC-Always-enable-debug-information.patch
# Recompile project for chosen platform
mbed compile -m K64F -t GCC_ARM -c
# Process Data
php ../mbed-os-linker-report/elfsize.php ./.build/K64F/GCC_ARM/mbed-os-example-blinky.elf > ../mbed-os-linker-report/html/data-flare.json
# Display results in chrome
chrome --allow-file-access-from-files ../mbed-os-linker-report/html/index.html
```
