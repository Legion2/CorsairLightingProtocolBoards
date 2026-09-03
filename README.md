# Corsair Lighting Protocol Boards
Arduino board definitions for use with the [Corsair Lighting Protocol](https://github.com/Legion2/CorsairLightingProtocol) library.
These board definitions have modified USB settings so they can be used to simulate Corsair devices. It is not required for boards using TinyUSB other than the ESP32 series (not yet implemented).

## Install CLP Boards in Arduino
All boards can simply be installed in Arduino IDE via the Boards Manager.
The package is self-contained since version 0.4.0: the pin definitions of the SparkFun, Adafruit and HoodLoader2 boards are bundled, so no other third party board package is needed.
Version 0.4.0 also works with Arduino IDE 2 and arduino-cli 0.19 or newer, which rejected the Pro Micro, HoodLoader2 and Adafruit entries of older versions with `'build.core' and 'build.variant' refer to different platforms`.

package index URL:
```
https://raw.githubusercontent.com/Legion2/CorsairLightingProtocolBoards/master/package_Legion2_CorsairLightingProtocolBoards_index.json
```

1. Open the **Preferences** of the Arduino IDE.

   ![File->Preferences](images/open-preferences.png)
1. Add the package index URL above in the **Additional Boards Manager URLs** field, and click OK.

   ![Additional Boards Manager URLs Pop-up](images/add-package-url.png)
1. Open the **Boards Manager** by opening the menu Tools->Board->Board Manager...

   ![Tools->Board->Board Manager...](images/open-boards-manager.png)
1. Search and install **Corsair Lighting Protocol Boards**

   ![install boards in Board Manager](images/install-boards.png)
1. Only if you want to flash the HoodLoader2 bootloader itself onto a 16u2 you still need the [Hoodloader2 Boards](https://github.com/NicoHood/HoodLoader2/wiki/Software-Installation#2-installing-board-definitions); compiling and uploading sketches works without them.

## How to use these boards in Arduino
The CLP Boards can now be used in Arduino IDE.
The following is only an example on how to use the boards, it's not required for the installation.

1. Select one of the boards under Corsair Lighting Protocol Boards in Tools->Board menu

   ![Tools->Board menu](images/select-board.png)
1. Select one of the devices from corsair under Tools->Device

   ![Tools->Device](images/select-device.png)
1. Select COM port under Tools->Port

   ![Tools->Port](images/select-port.png)
1. Compile/Upload as usual

## Supported Hardware Boards
| Hardware Board(s)              | Instructions                                                        |
|--------------------------------|---------------------------------------------------------------------|
| Arduino Leonardo, Arduino Micro| installed by default                                                |
| SparkFun Pro Micro 5V and 3.3V | installed by default (pin definitions bundled since 0.4.0)          |
| Adafruit 32u4 AVR Boards       | installed by default (pin definitions bundled since 0.4.0)          |
| HoodLoader2 16u2 (Uno/Mega)    | installed by default; the bootloader itself comes from HoodLoader2  |

## How to release a new version (development)

1. On GitHub manually trigger the Release Workflow for the platform and the new version.
1. Wait for the [Release GitHub Action](https://github.com/Legion2/CorsairLightingProtocolBoards/actions?query=workflow%3ARelease) to complete.
1. Add the new version to the package index file by running `./scripts/update-index.mjs 'metadatajson'` and provide the metadata json from the output of the Release GitHub Action.
   Commit and push these changes.

## License
This project is licensed under the Apache License Version 2.0.
