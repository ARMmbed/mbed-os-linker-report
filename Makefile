PREFIX:=arm-none-eabi-
EXAMPLE:=https://github.com/ARMmbed/mbed-os-example-uvisor-irq
TARGET:=target
TARGET_MBEDOS:=$(TARGET)/mbed-os
TARGET_UVISOR:=$(TARGET_MBEDOS)/features/FEATURE_UVISOR
TARGET_UVISOR_IMPORTER:=$(TARGET_UVISOR)/importer

GIT_CONFIG_MAIN:=$(TARGET)/.git/config
GIT_CONFIG_UVISOR:=$(TARGET_UVISOR_IMPORTER)/TARGET_IGNORE/.git/config
TOOL_NM:=$(PREFIX)nm -l -S -C -f sysv

all: update maps

maps:
	#
	# Compile Target
	#
	make -C $(TARGET_UVISOR_IMPORTER)
	cd $(TARGET) && mbed compile -m K64F -t GCC_ARM -c ; cd ..

	$(TOOL_NM) $(TARGET)/.build/K64F/GCC_ARM/$(TARGET).elf >main.map
	$(TOOL_NM) $(TARGET_UVISOR_IMPORTER)/TARGET_IGNORE/uvisor/platform/kinetis/release/configuration_kinetis_cortex_m4_0x1fff0000.elf > uvisor.map

$(GIT_CONFIG_UVISOR):
	make -C $(TARGET_UVISOR_IMPORTER) update

update: $(GIT_CONFIG_MAIN) $(GIT_CONFIG_UVISOR)
	git -C $(TARGET) pull
	make -C $(TARGET_UVISOR_IMPORTER) update

$(GIT_CONFIG_MAIN):
	mbed import $(EXAMPLE) $(TARGET)
	cat patches/*.patch | git -C $(TARGET_MBEDOS) am

clean-uvisor:
	make -C $(TARGET_UVISOR_IMPORTER) clean

clean: clean-uvisor


