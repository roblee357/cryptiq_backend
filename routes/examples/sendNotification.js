const admin = require('firebase-admin');
const formatName = require('../../utilities/formatName');
const generateId = require('../../utilities/generateId');
const generateUsername = require('../../utilities/generateUsername');

const token = 'd9bUFQ_RQLC3LDfozfQ1uS:APA91bHFFKcSxyjqNSYGxop5Kr_dIRCTX7kGRpvVxbXYi81tR9vK92spidZB18vXCzag0IQfRMIhGIfd1MABf92kK7pZ1JiTMph9sqTjXgc5pBl7hwM6_5_nSPFAECpt2FsCnNUI6Ks4';
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
