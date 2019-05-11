const settings = {
  TES3_API_SERVER_PORT: process.env.TES3_API_SERVER_PORT
}

const checkSettings = () => Object.keys(settings).forEach((key) => {
  if (settings[key] === undefined) {
    console.error(`Cannot start with no '${key}' environment variable`)
    process.exit()
  }
})

const getSetting = (key) => {
  if (!settings.hasOwnProperty(key)) {
    console.error(`${key} not found in application settings`)
    return
  }
  return settings[key]
}

exports.get = getSetting
exports.check = checkSettings
