# Corsair Lighting Protocol Boards
Arduino boards definition for use with the CorsairLightingProtocol library.

## How to use these boards in Arduino
All boards can simply be installed in Arduino IDE via the Boards Manager.

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
1. Select one of the boards under Corsair Lighting Protocol Boards in Tools->Board menu

   ![Tools->Board menu](images/select-board.png)
1. Select one of the devices from corsair under Tools->Device

   ![Tools->Device](images/select-device.png)
1. Select COM port under Tools->Port

   ![Tools->Port](images/select-port.png)
1. Compile/Upload as usual

## License
This project is licensed under the Apache License Version 2.0.
