var altcodeMap = {
    'A': '230 229',
    'B': '230 230',
    'C': '230 231',
    'D': '230 232',
    'E': '230 233',
    'F': '231 234',
    'G': '231 225',
    'H': '231 226',
    'I': '231 227',
    'J': '231 228',
    'K': '231 229',
    'L': '231 230',
    'M': '231 231',
    'N': '231 232',
    'O': '231 233',
    'P': '232 234',
    'Q': '232 225',
    'R': '232 226',
    'S': '232 227',
    'T': '232 228',
    'U': '232 229',
    'V': '232 230',
    'W': '232 231',
    'X': '232 232',
    'Y': '232 233',
    'Z': '233 234',
    'a': '233 231',
    'b': '233 232',
    'c': '233 233',
    'd': '225 234 234',
    'e': '225 234 225',
    'f': '225 234 226',
    'g': '225 234 227',
    'h': '225 234 228',
    'i': '225 234 229',
    'j': '225 234 230',
    'k': '225 234 231',
    'l': '225 234 232',
    'm': '225 234 233',
    'n': '225 225 234',
    'o': '225 225 225',
    'p': '225 225 226',
    'q': '225 225 227',
    'r': '225 225 228',
    's': '225 225 229',
    't': '225 225 230',
    'u': '225 225 231',
    'v': '225 225 232',
    'w': '225 225 233',
    'x': '225 226 234',
    'y': '225 226 225',
    'z': '225 226 226',
    ',': '228 228',
    '.': '228 230',
    '/': '228 231',
    '\\': '233 226',
    '<': '230 234',
    '>': '230 226',
    '?': '230 227',
    ';': '229 233',
    ':': '229 232',
    '"': '227 228',
    '[': '233 225',
    ']': '233 227',
    '{': '225 226 227',
    '}': '225 226 229',
    ' ': '227 226',
    '!': '227 227',
    '@': '230 228',
    '#': '227 229',
    '№': '226 229 226',
    '$': '227 230',
    '%': '227 231',
    '^': '233 228',
    '&': '227 232',
    '*': '228 226',
    '(': '228 234',
    ')': '228 225',
    '-': '228 229',
    '_': '233 229',
    '+': '228 227',
    '=': '230 225',
    "'": '227 233',
    '`': '233 230',
    '~': '225 226 230',
    '0': '228 232',
    '1': '228 233',
    '2': '229 234',
    '3': '229 225',
    '4': '229 226',
    '5': '229 227',
    '6': '229 228',
    '7': '229 229',
    '8': '229 230',
    '9': '229 231',
    'А': '225 226 232',
    'Б': '225 226 233',
    'В': '225 227 234',
    'Г': '225 227 225',
    'Д': '225 227 226',
    'Е': '225 227 227',
    'Ж': '225 227 228',
    'З': '225 227 229',
    'И': '225 227 230',
    'Й': '225 227 231',
    'К': '225 227 232',
    'Л': '225 227 233',
    'М': '225 228 234',
    'Н': '225 228 225',
    'О': '225 228 226',
    'П': '225 228 227',
    'Р': '225 228 228',
    'С': '225 228 229',
    'Т': '225 228 230',
    'У': '225 228 231',
    'Ф': '225 228 232',
    'Х': '225 228 233',
    'Ц': '225 229 234',
    'Ч': '225 229 225',
    'Ш': '225 229 226',
    'Щ': '225 229 227',
    'Ъ': '225 229 228',
    'Ы': '225 229 229',
    'Ь': '225 229 230',
    'Э': '225 229 231',
    'Ю': '225 229 232',
    'Я': '225 229 233',
    'а': '225 230 234',
    'б': '225 230 225',
    'в': '225 230 226',
    'г': '225 230 227',
    'д': '225 230 228',
    'е': '225 230 229',
    'ж': '225 230 230',
    'з': '225 230 231',
    'и': '225 230 232',
    'й': '225 230 233',
    'к': '225 231 234',
    'л': '225 231 225',
    'м': '225 231 226',
    'н': '225 231 227',
    'о': '225 231 228',
    'п': '225 231 229',
    'р': '226 226 228',
    'с': '226 226 229',
    'т': '226 226 230',
    'у': '226 226 231',
    'ф': '226 226 232',
    'х': '226 226 233',
    'ц': '226 227 234',
    'ч': '226 227 225',
    'ш': '226 227 226',
    'щ': '226 227 227',
    'ъ': '226 227 228',
    'ы': '226 227 229',
    'ь': '226 227 230',
    'э': '226 227 231',
    'ю': '226 227 232',
    'я': '226 227 233'
};

var commandMap = { // Key that can be typed
    ESCAPE:'KEY_LEFT_ESC',
    ESC:'KEY_LEFT_ESC',
    MENU:'229',
    APP:'229',
    END:'KEY_END',
    SPACE:'\' \'',
    TAB:'KEY_TAB',
    PRINTSCREEN:'206',
    ENTER:'KEY_RETURN',
    UPARROW:'KEY_UP_ARROW',
    DOWNARROW:'KEY_DOWN_ARROW',
    LEFTARROW:'KEY_LEFT_ARROW',
    RIGHTARROW:'KEY_RIGHT_ARROW',
    UP:'KEY_UP_ARROW',
    DOWN:'KEY_DOWN_ARROW',
    LEFT:'KEY_LEFT_ARROW',
    RIGHT:'KEY_RIGHT_ARROW',
    CAPSLOCK:'KEY_CAPS_LOCK',
    DELETE:'KEY_DELETE',
    DEL:'KEY_DELETE',
    F1:'KEY_F1',
    F2:'KEY_F2',
    F3:'KEY_F3',
    F4:'KEY_F4',
    F5:'KEY_F5',
    F6:'KEY_F6',
    F7:'KEY_F7',
    F8:'KEY_F8',
    F9:'KEY_F9',
    F10:'KEY_F10',
    F11:'KEY_F11',
    F12:'KEY_F12'
};
  
var comboMap = { // Key that can only be used in combos
    ALT:'KEY_LEFT_ALT',
    SHIFT:'KEY_LEFT_SHIFT',
    CTRL:'KEY_LEFT_CTRL',
    CONTROL:'KEY_LEFT_CTRL',
    GUI:'KEY_LEFT_GUI',
    WINDOWS:'KEY_LEFT_GUI',
    COMMAND:'KEY_LEFT_GUI'
};
  
var keyMap = { // Normal keys
    a:'97',
    b:'98',
    c:'99',
    d:'100',
    e:'101',
    f:'102',
    g:'103',
    h:'104',
    i:'105',
    j:'106',
    k:'107',
    l:'108',
    m:'109',
    n:'110',
    o:'111',
    p:'112',
    q:'113',
    r:'114',
    s:'115',
    t:'116',
    u:'117',
    v:'118',
    w:'119',
    x:'120',
    y:'121',
    z:'122'
};

class Dckuinojs {
    constructor() {
      this.keyMap = keyMap;
      this.commandMap = commandMap;
      this.comboMap = comboMap;
      this.altcodeMap = altcodeMap;
      this.parseWord;
      this.checked;
    }

    toAltcode() {
      if (this.checked && this.parseWord === "ALTCODE") {
        return 'void altRun2(int a,int b)\n'
        + '{\n'
        + '  Keyboard.press(KEY_LEFT_ALT);\n'
        + '  Keyboard.write(a);\n'
        + '  Keyboard.write(b);\n'
        + '  Keyboard.releaseAll();\n'
        + '}\n\n'
        +'void altRun3(int a,int b, int c)\n'
        + '{\n'
        + '  Keyboard.press(KEY_LEFT_ALT);\n'
        + '  Keyboard.write(a);\n'
        + '  Keyboard.write(b);\n'
        + '  Keyboard.write(c);\n'
        + '  Keyboard.releaseAll();\n'
        + '}\n\n';
      }
      else {
          return '';
      }
    }

    altSetup() {
      if(this.checked && this.parseWord === "ALTCODE") {
          return 'void setup()\n'
          + '{\n'
          + '  run();\n'
          + '  typeKey(219);\n'
          + '  run();\n'
          + '}\n\n';
      }
      else {
          return '';
      }
    }

    toRun(){
      if(this.checked && this.parseWord === "ALTCODE") {
          return 'void run()';
      }
      else {
          return 'void setup()';
      }
    }

    toArduino(inputCode, checked)
    {
      // Checkbox checked boolean
      this.checked = checked;
      // Reset this.parseWord
      this.parseWord = '';
      // Check if the parameter is empty or undefined
      if (inputCode === '' || inputCode === undefined)
      {
        console.error('Error: No ducky script was entered !');
        return false;
      }  // Parsing
  
      var parsedDucky = this._parse(inputCode);
      var altCodeDucky = this.toAltcode();
      var altSetupDucky = this.altSetup();
      var toRunDucky = this.toRun();

      if (parsedDucky === '' || parsedDucky === undefined)
      {
        return false;
      }  // Returning the total uploadable script
  
      return '#include <Keyboard.h> \n'
      + '\n' + altCodeDucky
      + '// Init function\n'
      + toRunDucky + '\n'
      + '{\n'
      + '  // Begining the stream\n'
      + '  Keyboard.begin();\n\n'
      + '  // Waiting 500ms for init\n'
      + '  delay(500);\n'
      + '\n' + parsedDucky
      + '}\n'
      + '\n' + altSetupDucky
      + 'void typeKey(int key)\n'
      + '{\n'
      + '  Keyboard.press(key);\n'
      + '  delay(50);\n'
      + '  Keyboard.release(key);\n'
      + '}\n\n'
      + '// Unused\n'
      + 'void loop() {}';
    }

  
    // The parsing function
     _parse(toParse)
    {
      // Init chronometer
      var timerStart = Date.now();
  
      var parsedScript = '';
  
      // Trim whitespaces
      toParse = toParse.replace(/^ +| +$/gm, "");
  
      // Cuting the input in lines
      var lineArray = toParse.split('\n');
  
      // Loop every line
      for (var i = 0; i < lineArray.length; i++)
      {
        // Line empty, skip
        if (lineArray[i] === '' || lineArray[i] === '\n')
        {
          console.log('Info: Skipped line ' + (i + 1) + ', because was empty.');
          continue;
        }
  
        // Var who indicates to release all at the line end
        var releaseAll = false;

  
        // Outputs, for REPLAY/REPEAT COMMANDS
        if (parsedOut !== undefined && parsedOut !== '')
        {
          var lastLines = parsedOut;
          var lastCount = ((lastLines.split('\n')).length + 1);
        }
        var parsedOut = '';
  
        // Command known
        var commandKnown = false;
  
        // Cutting every line in words
        var wordArray = lineArray[i].split(' ');
        var wordOne = wordArray[0];

        // Handle commands
        switch(wordOne){
          case "ALTCODE":
            if (this.checked) {
              this.parseWord = wordOne;
              var out = '';
              wordArray.shift();
  
              var textStringAlt = wordArray.join(' ');
              var wordArrayAlt = textStringAlt.split('');
  
              for (var j = 0; j < wordArrayAlt.length; j++) {
                for(var key in altcodeMap){
                  if(wordArrayAlt[j] == key){
                    out += altcodeMap[key] + ',';
                  }
                }
              }
              var arr2 = out.split(',');
              arr2.pop();
  
              var arr3 = [];
              for(var k = 0; k < arr2.length; k++){
                arr3 = arr2[k].split(' ');
      
                if(arr3.length == 3 && textStringAlt !== ''){
                  parsedOut += '  altRun3(' + arr3[0] + "," + arr3[1] + "," + arr3[2] + ');\n';
                  commandKnown = true;
                }
                else if(arr3.length == 2 && textStringAlt !== ''){
                  parsedOut += '  altRun2(' + arr3[0] + "," + arr3[1] + ');\n';
                  commandKnown = true;
                }
                else {
                  console.error('Error: at line: ' + (i + 1) + ', altSTRING needs a text');
                  return;
                }
              }
            }
            break;
          case "STRING":
            wordArray.shift();
  
            var textString = wordArray.join(' ');
  
            // Replace all '"' by '\"' and all '\' by '\\'
            textString = textString.split('\\').join('\\\\').split('"').join('\\"');
            if (textString !== '')
            {
              parsedOut += '  Keyboard.print("' + textString + '");\n';
              commandKnown = true;
            } else {
              console.error('Error: at line: ' + (i + 1) + ', STRING needs a text');
              return;
            }
            break;
          case "DELAY":
            wordArray.shift();
  
            if(wordArray[0] === undefined || wordArray[0] === '') {
              console.error('Error: at line: ' + (i + 1) + ', DELAY needs a time');
              return;
            }
  
            if (! isNaN(wordArray[0]))
            {
              parsedOut += '  delay(' + wordArray[0] + ');\n';
              commandKnown = true;
            } else {
              console.error('Error: at line: ' + (i + 1) + ', DELAY only acceptes numbers');
              return;
            }
            break;
          case "TYPE":
            wordArray.shift();
  
            if(wordArray[0] === undefined || wordArray[0] === '') {
              console.error('Error: at line: ' + (i + 1) + ', TYPE needs a key');
              return;
            }
  
            if (keyMap[wordArray[0]] !== undefined)
            {
              commandKnown = true;
              // Replace the DuckyScript key by the Arduino key name
              parsedOut += '  typeKey(' + keyMap[wordArray[0]] + ');\n';
            } else {
              console.error('Error: Unknown letter \'' + wordArray[0] +'\' at line: ' + (i + 1));
              return;
            }
            break;
          case "REM":
            wordArray.shift();
  
            // Placing the comment to arduino code
            if (wordArray[0] !== undefined && wordArray[0] !== '')
            {
              commandKnown = true;
              parsedOut += '  // ' + wordArray.join(' ');
            } else {
              console.error('Error: at line: ' + (i + 1) + ', REM needs a comment');
              return;
            }
            break;
          case "REPEAT":
          case "REPLAY":
            wordArray.shift();
  
            if (wordArray[0] === undefined || wordArray[0] === '') {
              console.error('Error: at line: ' + (i + 1) + ', REPEAT/REPLAY needs a loop count');
              return;
            }
  
            if (lastLines === undefined)
            {
              console.error('Error: at line: ' + (i + 1) + ', nothing to repeat, this is the first line.');
              return;
            }
  
            if (! isNaN(wordArray[0]))
            {
              // Remove the lines we just created
              var linesTmp = parsedScript.split('\n');
              linesTmp.splice(-lastCount, lastCount);
  
              if (linesTmp.join('\n') === '')
                parsedScript = linesTmp.join('\n');
              else {
                parsedScript = linesTmp.join('\n') + '\n';
              }
  
              // Add two spaces at Begining
              lastLines = lastLines.replace(/^  /gm,'    ');
  
              // Replace them
              parsedOut += '  for(int i = 0; i < ' + wordArray[0] + '; i++) {\n';
              parsedOut += lastLines;
              parsedOut += '  }\n';
  
              commandKnown = true;
            } else {
              console.error('Error: at line: ' + (i + 1) + ', REPEAT/REPLAY only acceptes numbers');
              return;
            }
            break;
          default:
            if (wordArray.length == 1)
            {
              if (comboMap[wordArray[0]] !== undefined)
              {
                commandKnown = true;
  
                parsedOut += '  typeKey(' + comboMap[wordArray[0]] + ');\n';
              }else if (commandMap[wordArray[0]] !== undefined) {
                commandKnown = true;
  
                parsedOut += '  typeKey(' + commandMap[wordArray[0]] + ');\n';
              }else {
                commandKnown = false;
                break;
              }
              wordArray.shift();
            }
            while (wordArray.length){
              if (comboMap[wordArray[0]] !== undefined)
              {
                commandKnown = true;
                releaseAll = true;
  
                parsedOut += '  Keyboard.press(' + comboMap[wordArray[0]] + ');\n';
              }else if (commandMap[wordArray[0]] !== undefined) {
                commandKnown = true;
                releaseAll = true;
  
                parsedOut += '  Keyboard.press(' + commandMap[wordArray[0]] + ');\n';
              }else if (keyMap[wordArray[0]] !== undefined) {
                commandKnown = true;
                releaseAll = true;
  
                parsedOut += '  Keyboard.press(' + keyMap[wordArray[0]] + ');\n';
              }else {
                commandKnown = false;
                break;
              }
              wordArray.shift();
            }
        }
  
        if (!commandKnown)
        {
          console.error('Error: Unknown command or key \'' + wordArray[0] + '\' at line: ' + (i + 1) + '.');
          return;
        }
  
        // If we need to release keys, we do
        if (releaseAll)
          parsedOut += '  Keyboard.releaseAll();\n';
  
        parsedScript += parsedOut; // Add what we parsed
        if (i != (lineArray.length - 1))
          parsedScript += '\n'; // Add new line if not the last line
      }
  
      var timerEnd = Date.now();
      var timePassed = new Date(timerEnd - timerStart);
  
      console.log('Done parsed ' + (lineArray.length) + ' lines in ' + timePassed.getMilliseconds() + 'ms');
      return parsedScript;
    }
  }