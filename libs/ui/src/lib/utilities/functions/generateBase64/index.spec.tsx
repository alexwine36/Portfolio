import { generateBase64 } from '.';

// global.TextDecoder = TextDecoder;
describe('Generate Base 64', () => {
  test('should work', () => {
    const res = generateBase64(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        // width="600"
        // height="600"
        viewBox="0 0 150 150"
      >
        <g stroke-width="1" stroke-linejoin="bevel">
          <path
            d="M409 310.3L272 263.3L381 361.7Z"
            fill={'white'}
            stroke={'yellow'}
          ></path>
        </g>
      </svg>
    );
    expect(res).toBeTruthy();
  });
});
