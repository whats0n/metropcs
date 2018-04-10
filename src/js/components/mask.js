import Inputmask from 'inputmask';

$('[data-mask*="currency"]').each((i, input) => {
  new Inputmask({
    'alias': 'numeric', 
    'digits': 2, 
    'digitsOptional': false, 
    'prefix': '$ ', 
    'placeholder': '0',
    'clearMaskOnLostFocus': true
  }).mask(input);
});
