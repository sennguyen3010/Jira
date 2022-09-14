import { loadAnimation } from 'lottie-web';
import { defineLordIconElement } from 'lord-icon-element';

defineLordIconElement(loadAnimation);

export default function Lordicon({ children, src, trigger, style, ...rest }) {
  return (
    <lord-icon
      src={src}
      trigger={trigger}
      style={style}
      // colors={`primary:${colors?.primary},secondary:${colors?.secondary}`}
      {...rest}
    ></lord-icon>
  );
}
