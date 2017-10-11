# d3.js based ELF Linker Statistics
This repository is used to generate interactive linker statistics. Please have a look at our [interactive example](https://armmbed.github.io/mbed-os-linker-report/).

## Step-By-Step instructions

### Installation
Install `arm-none-eabi-gcc` and add to your path. This will install `arm-none-eabi-nm`. The analysis tool require the executable `arm-none-eabi-nm` to be present in your environemntal PATH.

Then clone the tool to a local directory
```bash
git clone https://github.com/ARMmbed/mbed-os-linker-report
```

### Running the Analysis
For performing the analysis, you need to recompile your program. You need to enable debugging info in your elf file by passing the `-g` option to `gcc`. The default mbed-os compile profile does not do this, hence you need to use the modified profile inside the `compiler_profiles` folder.
```bash
# For develop profile
mbed compile -m K64F -t GCC_ARM -c --profile=../mbed-os-linker-report/compiler_profiles/develop.json
# For release profile
mbed compile -m K64F -t GCC_ARM -c --profile=../mbed-os-linker-report/compiler_profiles/release.json
# For debug profile
mbed compile -m K64F -t GCC_ARM -c --profile=debug
```

Note: if you have a custom compiler profile, you will need to add the `"-g"` flag in the `"common"` section.

Now run the ELF linker statistics tool:
```bash
# Process Data: provide one or more elf files for analysis
python ../mbed-os-linker-report/elfsize.py -i BUILD/K64F/GCC_ARM/mbed-os-example-blinky.elf -b
```
This will open up a browser page automatically with the visualisation.

## Advanced example for uVisor statistics
For uVisor the statistics of two ELF files need to be combined into a single JSON file. This is how it works:
```bash
# Download latest version of a uVisor enabled app
mbed import mbed-os-example-uvisor
# Change into that directory
cd mbed-os-example-uvisor
# Recompile uVisor - the command below needs to run twice due to a Makefile bug
make -C mbed-os/features/FEATURE_UVISOR/importer
# Recompile mbed-os app
# For develop profile
mbed compile -m K64F -t GCC_ARM -c --profile=../mbed-os-linker-report/compiler_profiles/develop.json
# Combine both elf outputs into a singe JSON file
python ../mbed-os-linker-report/elfsize.py -i mbed-os/features/FEATURE_UVISOR/importer/TARGET_IGNORE/uvisor/platform/kinetis/release/configuration_kinetis_cortex_m4_0x1fff0000.elf BUILD/K64F/GCC_ARM/mbed-os-example-uvisor.elf -b
```

## Example Output
Below you can find an example screenshot of our tool. Please have a look at our [interactive example](https://armmbed.github.io/mbed-os-linker-report/), too.
![d3.js based ELF Linker Statistics](docs/example.png)
