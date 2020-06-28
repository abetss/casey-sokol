/** @jsx jsx */
import { jsx, Heading } from "theme-ui";

export const H1 = props => (<Heading as="h1" sx={{ variant: 'styles.h1' }} {...props}>{props.children}</Heading>)
export const H2 = props => (<Heading as="h2" sx={{ variant: 'styles.h2' }} {...props}>{props.children}</Heading>)
export const H3 = props => (<Heading as="h3" sx={{ variant: 'styles.h3' }} {...props}>{props.children}</Heading>)
export const H4 = props => (<Heading as="h4" sx={{ variant: 'styles.h4' }} {...props}>{props.children}</Heading>)
export const H5 = props => (<Heading as="h5" sx={{ variant: 'styles.h5' }} {...props}>{props.children}</Heading>)
export const H6 = props => (<Heading as="h6" sx={{ variant: 'styles.h6' }} {...props}>{props.children}</Heading>)