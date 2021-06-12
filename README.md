# Ducky to Arduino Converter
Simple RubberDucky Script to Arduino Script/Skecth Converter with Alt-codes support.
- Project is live. Goto: [ducky2arduino](https://elxor.github.io/ducky2arduino/)
- Duckyscript syntax: [docs](https://github.com/hak5darren/USB-Rubber-Ducky/wiki/Duckyscript)

This project based on [ducky2arduino_stable](https://gitlab.com/roothaxor/ducky2arduino_stable)
## How it works?
Just use default Ducky Script syntax, but if you want activate alt-codes support, please check on checkbox and use ALTCODE instead STRING
## Examples
### Usual Ducky Script:
```markdown
DELAY 1000
GUI r
DELAY 500
STRING notepad
DELAY 500
ENTER
DELAY 500
STRING Hello World!!!
ENTER
```
### Ducky Script with Alt-codes support:
```markdown
DELAY 1000
GUI r
DELAY 500
ALTCODE notepad
DELAY 500
ENTER
DELAY 500
ALTCODE Hello World!!!
ENTER
```
You can also use this converter normally, just uncheck on checkbox.
## Credit
&copy; Credit goes to [roothaxor](https://gitlab.com/roothaxor)
