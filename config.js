const data=  {
     MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/store',
     JWT_SECRET: process.env.JWT_SECRET || 'somthingsecret',
}

module.exports= data