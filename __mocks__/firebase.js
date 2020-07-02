export default {
  initializeApp: () => {},
  firestore: () => ({
    collection: () => ({
      get: () => ({
        then: () => [
          {
            creationDate: 'April 13, 2020',
            difficulty: '0000',
            hash:
              '0000e0ea2b96d4c12f4421711117f981547e9dfb484f987e7491543dd324b1e2',
            id: '000000',
            isMined: true,
            nonce: 46169,
            previousHash: '------- genesis block hash -------',
            userData: 'Setting Genesis Block Data'
          },
          {
            creationDate: 'April 13, 2020',
            difficulty: '0000',
            hash:
              '0000e0a6d70478662d9f4733d4aa8bbf8d05263b3e2345010cb80a00fa4230c4',
            id: '000001',
            isMined: true,
            nonce: 115662,
            previousHash:
              '0000e0ea2b96d4c12f4421711117f981547e9dfb484f987e7491543dd324b1e2',
            userData: 'Adding block data 1'
          },
          {
            creationDate: 'April 13, 2020',
            difficulty: '0000',
            hash:
              '0000b918c809987d05244ac919538d065b00d17a2c8cd010b3f0c079d240818b',
            id: '000002',
            isMined: true,
            nonce: 118241,
            previousHash:
              '0000e0ea2b96d4c12f4421711117f981547e9dfb484f987e7491543dd324b1e2',
            userData: 'fdsdfsdfsdfsdfsdf'
          },
          {
            creationDate: 'April 13, 2020',
            difficulty: '0000',
            hash:
              '00009ff4e8452298ad3e83023636242b029a8dc0a8803cf1056acf0143f36ee3',
            id: '000003',
            isMined: true,
            nonce: 5045,
            previousHash:
              '0000e0ea2b96d4c12f4421711117f981547e9dfb484f987e7491543dd324b1e2',
            userData: 'Hello Mr Villuendas!'
          },
          {
            creationDate: 'April 13, 2020',
            difficulty: '0000',
            hash:
              '0000d6c97442c3963508128e0015e7b06c793e3d77111cd627d3850d6ca5e5ec',
            id: '000004',
            isMined: true,
            nonce: 91049,
            previousHash:
              '0000e0ea2b96d4c12f4421711117f981547e9dfb484f987e7491543dd324b1e2',
            userData: 'dsadasdasd'
          },
          {
            creationDate: '14 de abril de 2020',
            difficulty: '0000',
            hash:
              'e2f8437e43fdd5ec52e7fe5c85529f5ddcd11bcb5e3e370a5e2efdb24716065d',
            id: 6,
            isMined: true,
            nonce: 1,
            previousHash:
              '0000d6c97442c3963508128e0015e7b06c793e3d77111cd627d3850d6ca5e5ec',
            userData: 'hello panda!!'
          },
          {
            creationDate: '16 de abril de 2020',
            difficulty: '0000',
            hash:
              'e714c6919ef47a3712e92006cb09ca66c02d12015a658df5b4c39b37eaaadcb1',
            id: 7,
            isMined: true,
            nonce: 1,
            previousHash:
              'e2f8437e43fdd5ec52e7fe5c85529f5ddcd11bcb5e3e370a5e2efdb24716065d',
            userData: 'fsdfsdfsdfdfd'
          }
        ]
      })
    })
  })
}
