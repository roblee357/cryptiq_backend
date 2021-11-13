const admin = require('firebase-admin');
const formatName = require('../../utilities/formatName');
const generateId = require('../../utilities/generateId');
const generateUsername = require('../../utilities/generateUsername');

const token = 'eqvUCUsHQhmunV9y1vRMy2:APA91bFTdgnRWohTTaHFQHBXKb_Rkum64Zbk5wrnsUhOysnBbOfE28U--nYtpmkqFjt1QIIPYFur-uoaSuIejjoJDuPL_duW6szQCXsq9kRg29ps6AQLxoUVOKxwRx7KjIePNQhYPzw3';
const fakeMessage = {
  id: generateId(),
  encryptedContent: 'askjdfhalsdjhfaklsjdhf',
  sentFrom: {
    id: generateId(),
    username: generateUsername()
  }
}

module.exports = async (req, res) => {
  await admin.messaging().sendToDevice(
    [token], // ['token_1', 'token_2', ...]
    {
      notification: {
        body: `You got a new message from ${formatName(fakeMessage.sentFrom)}`,
        title: 'Cryptiq Message'
      },
      data: {
        message: JSON.stringify(fakeMessage),
      },
    },
    {
      // Required for background/quit data-only messages on iOS
      contentAvailable: true,
      // Required for background/quit data-only messages on Android
      priority: 'high',
    },
  );

  res.json({ message: 'success!' });
}
