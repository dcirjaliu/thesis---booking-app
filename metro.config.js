const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Adaugă extensia 'lottie' în lista de resurse acceptate
config.resolver.assetExts.push("lottie");

module.exports = config;
