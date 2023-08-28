import propTypes from 'prop-types'
import { StyledLink, StyledSvg } from '../styles'

const DiscordIconLink = ({ href, target }) => {
  return (
    <StyledLink href={href} target={target}>
      <StyledSvg
        xmlns='http://www.w3.org/2000/svg'
        width='36'
        height='36'
        aria-label='Discord'
        viewBox='0 0 512 512'
      >
        <rect width='512' height='512' fill='#fff' rx='15%' />
        <path
          fill='#5865f2'
          d='M386 137c-24-11-49.5-19-76.3-23.7-.5 0-1 0-1.2.6-3.3 5.9-7 13.5-9.5 19.5-29-4.3-57.5-4.3-85.7 0-2.6-6.2-6.3-13.7-10-19.5-.3-.4-.7-.7-1.2-.6-23 4.6-52.4 13-76 23.7-.2 0-.4.2-.5.4-49 73-62 143-55 213 0 .3.2.7.5 1 32 23.6 63 38 93.6 47.3.5 0 1 0 1.3-.4 7.2-9.8 13.6-20.2 19.2-31.2.3-.6 0-1.4-.7-1.6-10-4-20-8.6-29.3-14-.7-.4-.8-1.5 0-2 2-1.5 4-3 5.8-4.5.3-.3.8-.3 1.2-.2 61.4 28 128 28 188 0 .4-.2.9-.1 1.2.1 1.9 1.6 3.8 3.1 5.8 4.6.7.5.6 1.6 0 2-9.3 5.5-19 10-29.3 14-.7.3-1 1-.6 1.7 5.6 11 12.1 21.3 19 31 .3.4.8.6 1.3.4 30.6-9.5 61.7-23.8 93.8-47.3.3-.2.5-.5.5-1 7.8-80.9-13.1-151-55.4-213 0-.2-.3-.4-.5-.4ZM194 308c-19 0-34-17-34-38s15-38 34-38 34 17 34 38-15 38-34 38zm125 0c-19 0-34-17-34-38s15-38 34-38 34 17 34 38-15 38-34 38z'
        />
      </StyledSvg>
    </StyledLink>
  )
}

DiscordIconLink.propTypes = {
  href: propTypes.string.isRequired,
  target: propTypes.string.isRequired
}

export default DiscordIconLink
