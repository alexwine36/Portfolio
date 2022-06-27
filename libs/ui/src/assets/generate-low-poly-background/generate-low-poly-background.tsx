import { styled, useTheme } from '@mui/material';
import { generateColorLightness } from '../../lib/utilities/functions/generate-gradient';

/* eslint-disable-next-line */
export interface GenerateLowPolyBackgroundProps {
  width?: number;
  height?: number;
}

const StyledGenerateLowPolyBackground = styled('svg')`
  // color: pink;
`;

export function GenerateLowPolyBackground(
  props: GenerateLowPolyBackgroundProps
) {
  const theme = useTheme();
  const { width = 900, height = 675 } = props;
  const max = Math.max(width, height);
  const main = theme.palette.primary.dark;
  const light2 = generateColorLightness(main, 70);
  const light1 = generateColorLightness(main, 60);
  const dark1 = generateColorLightness(main, 40);
  const dark2 = generateColorLightness(main, 30);
  const dark3 = generateColorLightness(main, 20);
  const dark4 = generateColorLightness(main, 10);
  const background = generateColorLightness(main, 5);
  return (
    <StyledGenerateLowPolyBackground
      id="visual"
      viewBox="0 0 900 675"
      width={max}
      height={max}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
      <g stroke-width="1" stroke-linejoin="bevel">
        <path
          d="M409 310.3L272 263.3L381 361.7Z"
          fill={dark1}
          stroke={dark1}
        ></path>
        <path
          d="M409 310.3L335 217.9L272 263.3Z"
          fill={light2}
          stroke={light2}
        ></path>
        <path
          d="M272 263.3L336 412.7L381 361.7Z"
          fill={background}
          stroke={background}
        ></path>
        <path
          d="M272 263.3L223 314.3L336 412.7Z"
          fill={main}
          stroke={main}
        ></path>
        <path
          d="M409 310.3L437 201.9L335 217.9Z"
          fill={main}
          stroke={main}
        ></path>
        <path
          d="M223 314.3L203 385.7L336 412.7Z"
          fill={background}
          stroke={background}
        ></path>
        <path
          d="M524 405.7L519 261.3L409 310.3Z"
          fill={light1}
          stroke={light1}
        ></path>
        <path
          d="M409 310.3L519 261.3L437 201.9Z"
          fill={dark3}
          stroke={dark3}
        ></path>
        <path
          d="M524 405.7L409 310.3L381 361.7Z"
          fill={main}
          stroke={main}
        ></path>
        <path
          d="M203 385.7L269 483.1L336 412.7Z"
          fill={dark1}
          stroke={dark1}
        ></path>
        <path
          d="M461 507.1L524 405.7L381 361.7Z"
          fill={dark2}
          stroke={dark2}
        ></path>
        <path
          d="M519 261.3L520 230.9L437 201.9Z"
          fill="#277297"
          stroke="#277297"
        ></path>
        <path
          d="M324 58.4L184 162.9L335 217.9Z"
          fill={background}
          stroke={background}
        ></path>
        <path
          d="M335 217.9L184 162.9L272 263.3Z"
          fill={dark3}
          stroke={dark3}
        ></path>
        <path
          d="M272 263.3L184 162.9L223 314.3Z"
          fill={dark2}
          stroke={dark2}
        ></path>
        <path
          d="M86 296.3L104 395.7L203 385.7Z"
          fill={background}
          stroke={background}
        ></path>
        <path
          d="M410 506.1L381 361.7L336 412.7Z"
          fill={dark4}
          stroke={dark4}
        ></path>
        <path
          d="M519 261.3L571 197.9L520 230.9Z"
          fill={dark3}
          stroke={dark3}
        ></path>
        <path
          d="M269 483.1L410 506.1L336 412.7Z"
          fill={light2}
          stroke={light2}
        ></path>
        <path
          d="M521 112.4L408 79.4L437 201.9Z"
          fill={dark1}
          stroke={dark1}
        ></path>
        <path
          d="M437 201.9L408 79.4L335 217.9Z"
          fill={dark1}
          stroke={dark1}
        ></path>
        <path
          d="M410 506.1L461 507.1L381 361.7Z"
          fill={dark3}
          stroke={dark3}
        ></path>
        <path
          d="M408 79.4L324 58.4L335 217.9Z"
          fill={background}
          stroke={background}
        ></path>
        <path
          d="M86 296.3L203 385.7L223 314.3Z"
          fill={dark4}
          stroke={dark4}
        ></path>
        <path
          d="M203 385.7L187 508.1L269 483.1Z"
          fill={main}
          stroke={main}
        ></path>
        <path
          d="M184 162.9L86 296.3L223 314.3Z"
          fill={dark3}
          stroke={dark3}
        ></path>
        <path
          d="M104 395.7L187 508.1L203 385.7Z"
          fill={light1}
          stroke={light1}
        ></path>
        <path
          d="M269 483.1L406 547.6L410 506.1Z"
          fill={dark1}
          stroke={dark1}
        ></path>
        <path
          d="M410 506.1L406 547.6L461 507.1Z"
          fill={dark1}
          stroke={dark1}
        ></path>
        <path
          d="M301 609.6L406 547.6L269 483.1Z"
          fill={dark3}
          stroke={dark3}
        ></path>
        <path
          d="M609 304.3L571 197.9L519 261.3Z"
          fill={light1}
          stroke={light1}
        ></path>
        <path
          d="M520 230.9L521 112.4L437 201.9Z"
          fill={light1}
          stroke={light1}
        ></path>
        <path
          d="M324 58.4L219 64.4L184 162.9Z"
          fill={dark1}
          stroke={dark1}
        ></path>
        <path
          d="M184 162.9L64 214.9L86 296.3Z"
          fill={dark1}
          stroke={dark1}
        ></path>
        <path
          d="M571 197.9L521 112.4L520 230.9Z"
          fill={light1}
          stroke={light1}
        ></path>
        <path
          d="M619 411.7L609 304.3L524 405.7Z"
          fill={dark4}
          stroke={dark4}
        ></path>
        <path
          d="M524 405.7L609 304.3L519 261.3Z"
          fill={dark4}
          stroke={dark4}
        ></path>
        <path
          d="M75 108.4L64 214.9L184 162.9Z"
          fill="#0c2435"
          stroke="#0c2435"
        ></path>
        <path
          d="M0 479.1L83 504.1L104 395.7Z"
          fill="#277297"
          stroke="#277297"
        ></path>
        <path d="M433 0L318 0L324 58.4Z" fill={dark2} stroke={dark2}></path>
        <path d="M324 58.4L318 0L219 64.4Z" fill={dark1} stroke={dark1}></path>
        <path d="M433 0L324 58.4L408 79.4Z" fill={dark2} stroke={dark2}></path>
        <path
          d="M634 463.1L524 405.7L461 507.1Z"
          fill="#0c2435"
          stroke="#0c2435"
        ></path>
        <path
          d="M634 463.1L619 411.7L524 405.7Z"
          fill={light2}
          stroke={light2}
        ></path>
        <path
          d="M187 508.1L301 609.6L269 483.1Z"
          fill={dark3}
          stroke={dark3}
        ></path>
        <path
          d="M83 504.1L171 573.6L187 508.1Z"
          fill={background}
          stroke={background}
        ></path>
        <path
          d="M187 508.1L171 573.6L301 609.6Z"
          fill={background}
          stroke={background}
        ></path>
        <path d="M509 0L433 0L408 79.4Z" fill={light2} stroke={light2}></path>
        <path d="M0 350.7L104 395.7L86 296.3Z" fill={main} stroke={main}></path>
        <path
          d="M104 395.7L83 504.1L187 508.1Z"
          fill="#0c2435"
          stroke="#0c2435"
        ></path>
        <path
          d="M219 64.4L75 108.4L184 162.9Z"
          fill="#277297"
          stroke="#277297"
        ></path>
        <path
          d="M132 0L75 108.4L219 64.4Z"
          fill="#0c2435"
          stroke="#0c2435"
        ></path>
        <path
          d="M619 411.7L663 280.3L609 304.3Z"
          fill="#277297"
          stroke="#277297"
        ></path>
        <path
          d="M609 304.3L663 280.3L571 197.9Z"
          fill={background}
          stroke={background}
        ></path>
        <path d="M615 77.4L509 0L521 112.4Z" fill={dark1} stroke={dark1}></path>
        <path
          d="M521 112.4L509 0L408 79.4Z"
          fill={light1}
          stroke={light1}
        ></path>
        <path d="M318 0L196 0L219 64.4Z" fill={light2} stroke={light2}></path>
        <path d="M0 191.9L0 299.3L64 214.9Z" fill={main} stroke={main}></path>
        <path
          d="M64 214.9L0 299.3L86 296.3Z"
          fill={background}
          stroke={background}
        ></path>
        <path
          d="M0 299.3L0 350.7L86 296.3Z"
          fill="#277297"
          stroke="#277297"
        ></path>
        <path
          d="M579 584.6L634 463.1L461 507.1Z"
          fill={dark4}
          stroke={dark4}
        ></path>
        <path
          d="M619 411.7L727 405.7L663 280.3Z"
          fill={light1}
          stroke={light1}
        ></path>
        <path
          d="M500 610.6L461 507.1L406 547.6Z"
          fill={light1}
          stroke={light1}
        ></path>
        <path
          d="M391 675L500 610.6L406 547.6Z"
          fill="#0c2435"
          stroke="#0c2435"
        ></path>
        <path
          d="M615 77.4L521 112.4L571 197.9Z"
          fill={dark2}
          stroke={dark2}
        ></path>
        <path
          d="M75 108.4L0 191.9L64 214.9Z"
          fill={dark2}
          stroke={dark2}
        ></path>
        <path
          d="M667 128.4L615 77.4L571 197.9Z"
          fill={background}
          stroke={background}
        ></path>
        <path d="M196 0L132 0L219 64.4Z" fill="#0c2435" stroke="#0c2435"></path>
        <path
          d="M75 108.4L0 79.4L0 191.9Z"
          fill="#0c2435"
          stroke="#0c2435"
        ></path>
        <path
          d="M83 504.1L94 580.6L171 573.6Z"
          fill={light1}
          stroke={light1}
        ></path>
        <path
          d="M236 675L270 675L301 609.6Z"
          fill={background}
          stroke={background}
        ></path>
        <path
          d="M0 562.6L94 580.6L83 504.1Z"
          fill={dark2}
          stroke={dark2}
        ></path>
        <path
          d="M500 610.6L579 584.6L461 507.1Z"
          fill={light2}
          stroke={light2}
        ></path>
        <path
          d="M719 195.9L667 128.4L571 197.9Z"
          fill={dark4}
          stroke={dark4}
        ></path>
        <path
          d="M270 675L391 675L301 609.6Z"
          fill={light2}
          stroke={light2}
        ></path>
        <path
          d="M301 609.6L391 675L406 547.6Z"
          fill={dark4}
          stroke={dark4}
        ></path>
        <path
          d="M500 610.6L622 675L579 584.6Z"
          fill={main}
          stroke={main}
        ></path>
        <path
          d="M236 675L301 609.6L171 573.6Z"
          fill={dark1}
          stroke={dark1}
        ></path>
        <path
          d="M0 350.7L0 479.1L104 395.7Z"
          fill={dark3}
          stroke={dark3}
        ></path>
        <path
          d="M82 675L236 675L171 573.6Z"
          fill={background}
          stroke={background}
        ></path>
        <path
          d="M789 314.3L719 195.9L663 280.3Z"
          fill={light2}
          stroke={light2}
        ></path>
        <path
          d="M663 280.3L719 195.9L571 197.9Z"
          fill={light1}
          stroke={light1}
        ></path>
        <path
          d="M391 675L482 675L500 610.6Z"
          fill={dark1}
          stroke={dark1}
        ></path>
        <path
          d="M0 0L0 79.4L75 108.4Z"
          fill={background}
          stroke={background}
        ></path>
        <path
          d="M634 463.1L727 405.7L619 411.7Z"
          fill={main}
          stroke={main}
        ></path>
        <path
          d="M683 512.1L727 405.7L634 463.1Z"
          fill={dark1}
          stroke={dark1}
        ></path>
        <path
          d="M677 553.6L634 463.1L579 584.6Z"
          fill={background}
          stroke={background}
        ></path>
        <path
          d="M677 553.6L683 512.1L634 463.1Z"
          fill={background}
          stroke={background}
        ></path>
        <path
          d="M690 0L615 77.4L667 128.4Z"
          fill="#0c2435"
          stroke="#0c2435"
        ></path>
        <path d="M690 0L622 0L615 77.4Z" fill="#0c2435" stroke="#0c2435"></path>
        <path
          d="M615 77.4L622 0L509 0Z"
          fill={background}
          stroke={background}
        ></path>
        <path
          d="M0 479.1L0 562.6L83 504.1Z"
          fill={light2}
          stroke={light2}
        ></path>
        <path
          d="M94 580.6L82 675L171 573.6Z"
          fill="#0c2435"
          stroke="#0c2435"
        ></path>
        <path
          d="M622 675L677 553.6L579 584.6Z"
          fill={background}
          stroke={background}
        ></path>
        <path
          d="M683 512.1L822 449.1L727 405.7Z"
          fill={light2}
          stroke={light2}
        ></path>
        <path d="M0 675L82 675L94 580.6Z" fill={light1} stroke={light1}></path>
        <path d="M132 0L0 0L75 108.4Z" fill={dark3} stroke={dark3}></path>
        <path
          d="M727 405.7L789 314.3L663 280.3Z"
          fill={dark4}
          stroke={dark4}
        ></path>
        <path
          d="M820 102.4L690 0L667 128.4Z"
          fill="#277297"
          stroke="#277297"
        ></path>
        <path
          d="M829 411.7L789 314.3L727 405.7Z"
          fill={light1}
          stroke={light1}
        ></path>
        <path
          d="M820 102.4L667 128.4L719 195.9Z"
          fill={background}
          stroke={background}
        ></path>
        <path
          d="M482 675L622 675L500 610.6Z"
          fill={background}
          stroke={background}
        ></path>
        <path
          d="M677 553.6L773 554.6L683 512.1Z"
          fill={background}
          stroke={background}
        ></path>
        <path d="M0 562.6L0 675L94 580.6Z" fill={dark1} stroke={dark1}></path>
        <path
          d="M712 675L773 554.6L677 553.6Z"
          fill={dark3}
          stroke={dark3}
        ></path>
        <path
          d="M822 449.1L829 411.7L727 405.7Z"
          fill={dark4}
          stroke={dark4}
        ></path>
        <path
          d="M789 314.3L839 224.9L719 195.9Z"
          fill={dark2}
          stroke={dark2}
        ></path>
        <path
          d="M773 554.6L822 449.1L683 512.1Z"
          fill={main}
          stroke={main}
        ></path>
        <path
          d="M900 270.3L839 224.9L789 314.3Z"
          fill="#0c2435"
          stroke="#0c2435"
        ></path>
        <path
          d="M839 224.9L820 102.4L719 195.9Z"
          fill={dark4}
          stroke={dark4}
        ></path>
        <path
          d="M622 675L712 675L677 553.6Z"
          fill={light1}
          stroke={light1}
        ></path>
        <path
          d="M820 102.4L798 0L690 0Z"
          fill={background}
          stroke={background}
        ></path>
        <path
          d="M900 378.7L900 270.3L789 314.3Z"
          fill={background}
          stroke={background}
        ></path>
        <path
          d="M839 224.9L900 183.9L820 102.4Z"
          fill="#277297"
          stroke="#277297"
        ></path>
        <path
          d="M820 102.4L900 63.4L798 0Z"
          fill="#0c2435"
          stroke="#0c2435"
        ></path>
        <path
          d="M900 378.7L789 314.3L829 411.7Z"
          fill={background}
          stroke={background}
        ></path>
        <path
          d="M822 449.1L900 378.7L829 411.7Z"
          fill={dark3}
          stroke={dark3}
        ></path>
        <path
          d="M900 506.1L900 378.7L822 449.1Z"
          fill={dark3}
          stroke={dark3}
        ></path>
        <path
          d="M900 506.1L822 449.1L773 554.6Z"
          fill={dark2}
          stroke={dark2}
        ></path>
        <path
          d="M900 270.3L900 183.9L839 224.9Z"
          fill={dark4}
          stroke={dark4}
        ></path>
        <path
          d="M712 675L802 675L773 554.6Z"
          fill={background}
          stroke={background}
        ></path>
        <path
          d="M900 540.6L900 506.1L773 554.6Z"
          fill="#277297"
          stroke="#277297"
        ></path>
        <path
          d="M802 675L900 540.6L773 554.6Z"
          fill="#277297"
          stroke="#277297"
        ></path>
        <path
          d="M900 183.9L900 63.4L820 102.4Z"
          fill="#277297"
          stroke="#277297"
        ></path>
        <path d="M900 63.4L900 0L798 0Z" fill={dark1} stroke={dark1}></path>
        <path
          d="M802 675L900 675L900 540.6Z"
          fill={light1}
          stroke={light1}
        ></path>
      </g>
    </StyledGenerateLowPolyBackground>
  );
}

export default GenerateLowPolyBackground;
