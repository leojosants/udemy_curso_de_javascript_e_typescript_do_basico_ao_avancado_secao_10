const fs = require('fs').promises;

module.exports = (filePath, data, writeOrAdd) => {
    const flag = String(writeOrAdd);
    fs.writeFile(filePath, data, { flag: flag, encoding: 'utf8' });

    /**
     *  writeOrAdd 
     *  a    ->  add
     *  w    ->  overwrite
     */
};