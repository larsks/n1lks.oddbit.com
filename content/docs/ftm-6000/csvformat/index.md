# FTM-6000 CSV Format

This is a description of the file format expected by Yaesu's ADMS-13 software.

## Fields

| 1       | 2       | 3       | 4         | 5          | 6    | 7   | 8    | 9         | 10         | 11       | 12         | 13       | 14   | 15   | 16     | 17          | 18      | 19   |
| ------- | ------- | ------- | --------- | ---------- | ---- | --- | ---- | --------- | ---------- | -------- | ---------- | -------- | ---- | ---- | ------ | ----------- | ------- | ---- |
| channel | rx freq | tx freq | tx offset | offset dir | mode | tag | name | tone mode | ctcss freq | dcs code | user ctcss | tx power | scan | step | narrow | clock shift | comment | zero |

1. channel -- this is the channel number, from 1 to 999. There should be 999 lines in your csv file.
2. rx frequency in MHz, in the form `nnn.nnnn`
3. tx frequency in MHz, in the form `nnn.nnnn`
4. tx offset in KHz, in the form `n.nnnn`
5. offset direction; this can be:
    - `-RPT`
    - `+RPT`
    - `OFF` (for simplex)
6. mode:
    - `FM`
    - `AM`
7. tag -- when `ON`, display channel name; when `OFF`, display only rx frequency. This is actually a global setting (i.e., it must be the same for all channels). One of:
    - `ON`
    - `OFF`
8. name -- the channel name (max 6 characters)
9. tone mode -- set the tone squelch type. Can be one of:
    - `OFF`
    - `TONE` -- send a PL tone on transmit
    - `TONE SQL` -- send a PL tone on transmit and require a PL tone on receive
    - `DCS` -- use DCS
    - `REV TONE` -- open when tone is not received
    - `PR FREQ`
    - `PAGER`
10. ctcss frequency, in the form `nnn.n Hz`
11. dcs code, in the form `nnn`
12. user ctcss frequency, in the form `nnn Hz` or `nnnn Hz`
13. tx power, one of:
    - `HIGH`
    - `MID`
    - `LOW`
14. scan -- whether or not to include this channel when scanning. One of:
       - `YES`
       - `NO`
15. step in KHz, in the form `n.nKHz` or `nn.nKHz`
16. narrow, one of:
    - `ON`
    - `OFF`
17. clock shift, one of:
    - `ON`
    - `OFF`
18. comment
19. unknown, always `0` in exports

## Example file

```csv
1,145.23000,145.23000,0.60000,-RPT,FM,ON,BARC,TONE,88.5 Hz,,,MID,YES,5.0KHz,OFF,OFF,https://www.barc.org/,0
2,449.72500,449.72500,5.00000,-RPT,FM,ON,MIT,TONE,114.8 Hz,,,MID,YES,12.5KHz,OFF,OFF,https://w1mx.mit.edu/,0
3,146.04000,146.04000,0.60000,+RPT,FM,ON,WARA-V,TONE,136.5 Hz,,,MID,YES,5.0KHz,OFF,OFF,https://walthamara.org/,0
4,444.07500,444.07500,5.00000,+RPT,FM,ON,WARA-U,TONE,88.5 Hz,,,MID,YES,12.5KHz,OFF,OFF,https://walthamara.org/,0
5,,,,,,,,,,,,,,,,,,0
.
.
.
999,,,,,,,,,,,,,,,,,,0
```
