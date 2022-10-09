controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
let textSprite: TextSprite = null
blockSettings.writeNumber("A", blockSettings.readNumber("A") + 1)
forever(function () {
    if (!(blockSettings.exists("A"))) {
        blockSettings.writeNumber("A", 0)
    }
    textSprite = textsprite.create(convertToText(blockSettings.readNumber("A")), 0, 1)
    textSprite.setMaxFontHeight(44)
})
