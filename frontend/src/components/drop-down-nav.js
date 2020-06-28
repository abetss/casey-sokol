/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import React, { useCallback } from "react"
import { navigate } from "gatsby"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { usePopupState, bindTrigger, bindMenu } from "material-ui-popup-state/hooks"

export const DropDownNav = ({ title, baseUrl, menuId, subMenus }) => {
  const navigateTo = useCallback((base, slug) => {
    navigate(`/${base}/${slug}`)
  }, [])

  const popupState = usePopupState({ variant: "popover", popupId: menuId })

  return (
    <React.Fragment>
      <span sx={{ variant: "links.nav", cursor: "pointer" }} {...bindTrigger(popupState)}>
        <Flex>
          {title}
          <svg
            sx={{
              fill: "currentColor",
              width: "1em",
              height: "1em",
              display: "inline-block",
              fontSize: "1.5rem",
              transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              flexShrink: "0",
              userSelect: "none",
            }}
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
          </svg>
        </Flex>
      </span>
      <div>
        <Menu {...bindMenu(popupState)} elevation={1}>
          {subMenus.map(subMenu => (
            <MenuItem
              key={`${menuId}-${subMenu.Slug}`}
              onClick={e => {
                navigateTo(baseUrl, subMenu.Slug)
              }}
            >
              {subMenu.Title}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </React.Fragment>
  )
}
