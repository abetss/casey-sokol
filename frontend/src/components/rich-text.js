/** @jsx jsx */
import { jsx } from "theme-ui"

import Markdown from "markdown-to-jsx"
import { H1, H2, H3, H4, H5, H6 } from "./typography/h1"
import { BetterLink } from "./typography"

export const RichText = ({ children }) => {
  return (
    <Markdown
      options={{
        overrides: {
          h1: {
            component: H1,
          },
          h2: {
            component: H2,
          },
          h3: {
            component: H3,
          },
          h4: {
            component: H4,
          },
          h5: {
            component: H5,
          },
          h6: {
            component: H6,
          },
          a: {
              component: BetterLink
          }
        //   p: {
        //       component: Text,
        //       props: {
        //           as: 'p',
        //           my: 3,
        //           color: 'primary'
        //       }
        //   }
        },
      }}
    >
      {children}
    </Markdown>
  )
}
