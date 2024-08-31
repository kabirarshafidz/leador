import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

export function RightNextButton(props) {
  return (
    <Svg
      width={87}
      height={54}
      viewBox="0 0 87 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect width={87} height={54} rx={12} fill="#01296B" />
      <Path
        d="M57.06 28.06a1.5 1.5 0 000-2.12l-9.545-9.547a1.5 1.5 0 10-2.122 2.122L53.88 27l-8.486 8.485a1.5 1.5 0 102.122 2.122l9.546-9.546zM32 28.5h24v-3H32v3z"
        fill="#FDC503"
      />
    </Svg>
  );
}

export function LeftNextButton(props) {
  return (
    <Svg
      width={87}
      height={54}
      viewBox="0 0 87 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect
        x={87}
        y={54}
        width={87}
        height={54}
        rx={12}
        transform="rotate(-180 87 54)"
        fill="#01296B"
      />
      <Path
        d="M29.94 25.94a1.5 1.5 0 000 2.12l9.545 9.547a1.5 1.5 0 102.122-2.122L33.12 27l8.486-8.485a1.5 1.5 0 10-2.122-2.122L29.94 25.94zM55 25.5H31v3h24v-3z"
        fill="#FDC503"
      />
    </Svg>
  );
}
