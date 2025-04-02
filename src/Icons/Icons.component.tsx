import styled from 'styled-components';
import * as icons from './icons';

const IconList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  svg {
    color: ${(props: any) => props.theme.colors.primary};
  }
  font-family: ${(props) => props.theme.typography.fontFamily};
`;

const IconDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const defaultIconSize = { height: 36, width: 36 };

const listIcons = () => {
  let iconList: any[] = [];
  for (const icon in icons) {
    if (typeof icons[icon] === 'function') {
      const Component = icons[icon];
      iconList.push({
        name: icon,
        component: <Component {...defaultIconSize}></Component>,
      });
    }
  }
  return iconList.sort((a, b) => a.name.localeCompare(b.name));
};

export const Icons = () => {
  return (
    <IconList>
      {listIcons().map(({ name, component }) => (
        <IconDisplay>
          {component} {name}
        </IconDisplay>
      ))}
    </IconList>
  );
};
