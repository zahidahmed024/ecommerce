const fs = require('fs');
const sharp = require('sharp');

const imageProcess = async (file, id) => {
    fs.access('./public/uploads', (err) => {
        if (err) {
            fs.mkdirSync('./public/uploads');
        }
    });

    const formatedName = file.originalname.split(' ').join('-');
    const fileName = `${id}-${formatedName}`;
    try {
        await sharp(file.buffer)
            .resize({ width: 615, height: 350 })
            .toFile(`./public/uploads/${fileName}`);
    } catch (error) {
        console.log('Error while processing image', error);
    }

    return fileName;
};

module.exports = imageProcess;