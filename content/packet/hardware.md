---
title: Packet radio hardware projects
---

## TNCs

- [NinoTNC](https://tarpn.net/t/nino-tnc/nino-tnc.html)

  The N9600A is a USB interfaced 6-bit-rate USB KISS TNC, supporting...

  - 300 baud AFSK AX.25 (common SSB HF packet),
  - 1200 baud AFSK AX.25 (Bell 202),
  - 2400 baud APSK,
  - 4800 baud GFSK,
  - 9600 baud GFSK AX.25(G3RUH),

  ...as well as several forward error correction modes for HF and VHF.

  The TARPN NinoTNC is designed by Nino KK4HEJ for use in Amateur Radio packet
  data networks. The 2400 baud APSK modem supports many microphone-audio
  transceivers, and 4800 baud GFSK is great for use in data-radio/9600
  transceivers which don't quite cut it for 9600 baud. On top of that, it
  supports both AX.25 for compatability with legacy TNCs, and a new link-layer
  encoding scheme called IL2P which is a Forward Error Correction equipped
  protocol designed to be more efficient than AX.25.

  The N9600A TARPN NinoTNC provides a USB serial interface at 57600 baud.

- [ESP32TNC](https://github.com/amedes/ESP32TNC)

  ESP32TNC is a Terminal Node Controller (TNC) that is implemented for Espressif ESP32 processor.

- [Nucleo TNC](https://github.com/mobilinkd/NucleoTNC)

  The Nucleo TNC is a breadboard implementation of the Mobilinkd TNC3 using a
  STM32L432KC Nucleo32 board. This TNC faithfully implements the audio section
  and EEPROM storage of the TNC3. It omits the battery charging and Bluetooth
  components of the TNC3. It presents as a KISS TNC over a USB serial port.

## Audio interface boards

- [DigiPi Hat](https://elekitsorparts.com/product/new-digipi-hat-ham-radio-digi-modes-aprs-ft8-ft4-winlink-from-raspberry-pi-km6lyw-digipi-image/)

  This is the new digiPi HAT for ham radio digi modes from a raspberry Pi. The
  board is desgned to be topped on a Raspberry Pi 4 or 5, on which you could
  work ham radio digital modes remotely. The new digiPi HAT is compatible with
  KM6LYW’s digiPi image. 

- N7EBB [Radio interface board](https://n7ebb.org/)

- [DRA-Pi-Zero](https://www.masterscommunications.com/products/radio-adapter/dra/drapizero.html)


- [DigiRig](https://digirig.net/)

  Digirig is an open-source integrated digital modes interface for amateur radio.
