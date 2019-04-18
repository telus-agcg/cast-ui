import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Input } from '../Input';
// import { DatePickerContext } from './context';
import { Props as DatePickerProps } from './props';

export type Props = Partial<DatePickerProps>;

const SInput = styled(Input)`
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAADRUlEQVRoge2ZzWvUUBTFf3copZShSJEiXRTFUoqI4Af6J7gvFFyVioioCDoplImLkM0UKelGXFf3XbhXXBfdShFBBRciXYkMpUiZ6yIvM5mXTCbTqWmFnMV85J1733knNy8zN6Io/yMqxy3gsBgZNMBx/VPAvMIo0BTYCRre/oA5xhQuijKO8Af4FDS8X4PkkLyl4rh+FVhVeCxQVUDCoR8oHsLLoOEd9MkxgrKs4CNMSzSg/EZYBzaChreXR88gpXJLlRWBqnV8GuEZcK1fAoXrhjttDU2oUkdZyCsml/Ca648Dd4ExYB94K8oWyrbCATAJ3OuXR0LOpAgHwDawBbwD9gXGgfuO648emXCBCZSqCCj8BG4Ha94iQl2gaWi2i0loyFFooqwGDW+R0JBdc7xK8oweXrgqFQRUQeAAbYvdU2iZz/0vdDHzKS2Rdo4m4VmL9OTSlDpZzfWnBBaAcwoVU9dTIkludEhhtub66xJ+Jk5VBXO2ZlNSxHEG8B3X3yM05IvC642Gt9tXuFP3Z0R5gzAHINGmIx0BcbRFKjMIK4lBTExKrA0RTqM8iFZtwp84rn8zaHjf49zkaRGWI9G2iCzH286r5Xb00kd0m5wIZh5Ysqlp9XQ5NalxPG2u+LspiXhY+JLndmHzOou4alPz7+Nxx6UTN4TjFTNU6SInHU9F/lt+p8angKdO3f8G3MBsX7bjXQuyr1ihqvDIcf0PAucVpnrwjkB4x/EJoKbSnTea076AFXOBdzs5irCEqV3pImMFp8vJXyo9ajw+BxyuxttDvWs8gcPVeAqG2VUyHe+BrFLZBx4ifERT5lboKhdJKRdJ15swILZvxwy4hPCc8PfRQMJbKDvBmvc+g/PPYH4Ct3ToGj8GZG39J1p41s32RAsvHS8apeNFo3S8aJSOF43S8aJROl40SseLRul40SgdLxpZjmf9y68gXKnV/fFhBYjVTIraE3aDKc4T5QIZxqYJ/2zex4AX8b5JvL2W1ryP91YkInXCO/2TiBv7nug1xqFtTW0kVqTKKzXPZKzgY+lkSahlMxGT9pzTcf05Ve6IcJZoccM15y2FPeK6eS2FrwKbQcNLOJ77Ae1Jw4neVbLwF8LWG3ol4LqzAAAAAElFTkSuQmCC');
  background-repeat: no-repeat;
  background-size: ${(props: Props) =>
    props.theme.common[props.datePickerSize!].inputIconSize}
  background-position: 96% center;
`;

export class InputForDatePicker extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    // console.log('the props ', this.props);
    const { theme, ...props } = this.props;
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SInput id="datepicker" {...props} />
      </ThemeProvider>
    );
  }
}
