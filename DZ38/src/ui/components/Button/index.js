/* eslint-disable */
import ButtonMUI from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
// Style
import LinkWrapper from './components';

function Button(props) {
  const {
    reactHref, children, color, type, sx, disabled, loading,
  } = props;

  if (loading) {
    return <LoadingButton variant="outlined" sx={{ color, ...sx }} loading>{children}</LoadingButton>;
  }
  return (
    <ButtonMUI disabled={disabled} variant="contained" sx={{ color, ...sx }} type={type}>
      {
        reactHref
          ? <LinkWrapper style={{ color }} to={reactHref}>{children}</LinkWrapper>
          : children
      }
    </ButtonMUI>
  );
}

Button.defaultProps = {
  color: '#fff',
  type: 'button',
};

export default Button;
