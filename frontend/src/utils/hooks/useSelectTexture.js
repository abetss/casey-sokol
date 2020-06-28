import { useState, useCallback } from "react"
import { useColorMode } from "theme-ui"

export const useSelectTexture = contentType => {
  const defaultTexture = (typeof localStorage !== 'undefined' && localStorage.getItem('theme-texture')) || 'paper';
  const [texture, _setTexture] = useState(defaultTexture)

  const [colorMode, setColorMode] = useColorMode()

  const setTexture = useCallback(name => {
    _setTexture(name)
    localStorage.setItem("theme-texture", name)
    if (name === "crisp") {
      if (colorMode.includes("texture")) {
        const newColorMode = colorMode
          .split("-")
          .slice(0, -1)
          .join("-")
        setColorMode(newColorMode)
      }
    } else if (!colorMode.includes("texture")) {
      setColorMode(`${colorMode}-texture`)
    }

    location.reload()
  })

  const headerTexture = texture !== "crisp" ? "wallPaint" : "crisp"

  return [texture, setTexture, headerTexture]
}
