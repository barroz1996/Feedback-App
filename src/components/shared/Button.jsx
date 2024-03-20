
import PropTypes from 'prop-types'

function Button({children,version, type, isDisabled}) {  // children connect to the text, version of the button, sumbit button or just regular one
  return (
    <button tpye = {type} disabled={isDisabled} className={`btn 
    btn-${version}`}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  version: 'primary',
  type : 'button', 
  isDisabled:false
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
}

export default Button
