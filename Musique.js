const ASTRAL = require("ASTRAL.djs")

$play = bot.command({
name: "play",
code: `$playSong[The Nights;1m;yes;yes;:x: Could not play song!]`
})

volume = bot.command({
name: "volume",
code: `
$volume[50]
`
})

$playSpotify = bot.command({
name: "spotify",
code: `$playSpotify[$message;name;yes;:x: An error has occured]
`
})

$loop = bot.command({
    name: "loop-song",
    code: `
    Looping current song.
    $loopSong
    `
})

$stop = bot.command({
name:"stop",
code:`$stopSong`
})
