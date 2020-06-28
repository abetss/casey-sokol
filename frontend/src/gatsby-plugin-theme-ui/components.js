/** @jsx jsx */
import { jsx } from 'theme-ui'


// function HeadingRenderer(props) {
//   if (props.level === 1) {
//     return <Heading as="h1">{props.children}</Heading>
//   }

//   if (props.level === 2) {
//     return <Heading as="h2">{props.children}</Heading>
//   }

//   if (props.level === 3) {
//     return <Heading as="h3">{props.children}</Heading>
//   }

//   if (props.level === 4) {
//     return <Heading as="h4">{props.children}</Heading>
//   }

//   if (props.level === 5) {
//     return <Heading as="h5">{props.children}</Heading>
//   }

//   if (props.level === 6) {
//     return <Heading as="h6">{props.children}</Heading>
//   }
//   return <Heading as="h3">{props.children}</Heading>
//   // const Heading = Markdown.renderers.Heading
//   // return <Heading {...props} />
// }

const heading = Tag => ({ id, ...props }) => !id
  ? <Tag {...props} />
  : (
    <Tag id={id} {...props}>
      <a
        href={'#' + id}
        sx={{
          color: 'inherit',
          textDecoration: 'none',
        }}>
        {props.children}
      </a>
    </Tag>
  )

export default {
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6'),
}
