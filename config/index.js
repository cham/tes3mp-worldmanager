const settings = {
  TES3_API_SERVER_PORT: process.env.TES3_API_SERVER_PORT,
  WORLD_DIR: process.env.WORLD_DIR,
  CURRENT_WORLD_FILE: process.env.CURRENT_WORLD_FILE,
  SAVE_WORLD_SCRIPT: process.env.SAVE_WORLD_SCRIPT,
  RESTORE_WORLD_SCRIPT: process.env.RESTORE_WORLD_SCRIPT
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
