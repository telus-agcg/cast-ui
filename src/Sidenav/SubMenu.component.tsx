import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SideNavItemIcon } from './SideNavItemIcon.component';
import Icon from 'react-icons-kit';

const SSubMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  transition: height 500ms ease-in-out;
`;
const SidebarLink = styled(Link)`
  float: left;
  text-decoration: none;
  list-style: none;
  height: auto;
  position: relative;
  margin: 0;
  display: inline-flex;
  align-items: center;
  padding-left: ${props => (props.level === 1 ? '3rem' : '0rem')};
  border-bottom: '0px';
  transition: ${props => props.theme.sidenav.navItem.transition};
  color: ${props =>
    props.theme.sidenav[`${props.activeItem ? 'active' : ''}navItem`].color};
  font-weight: ${props =>
    props.theme.sidenav[`${props.activeItem ? 'active' : ''}navItem`]
      .fontWeight};
  cursor: ${props =>
    props.disabled
      ? 'not-allowed'
      : props.theme.sidenav[`${props.activeSideNavItem ? 'active' : ''}navItem`]
          .cursor};
   opacity: ${props =>
    props.disabled
      ? '.6'
      : props.theme.sidenav[`${props.activeItem ? 'active' : ''}navItem`]
          .opacity};
:hover {
    background: ${props =>
      props.level === 1 ? props.theme.sidenav['activenavItem'].background : ''};
    border-radius: 7px;
    transition: all 0.3s;
  }
  &:before {
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: ${props =>
      props.theme.sidenav[`${props.activeItem ? 'active' : ''}navItem`]
        .leftBorderWidth};
  }
  .custom-icon-svg {
       path {
                 fill: ${props =>
    props.theme.sidenav[`${props.activeItem ? 'active' : ''}navItem`].color};;
       }
    }
`;

const SidebarLabel = styled.span`
  padding: ${props =>
    props.level === 1
      ? props.theme.sidenav.navLabel.padding
      : props.theme.sidenav.navIcon.padding};
  margin-left: 0px;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  color: ${props => props.theme.sidenav.label.color};
`;

const SubMenu = ({
  item,
  isOpen,
  setCurrentActiveSubNav,
  setSecondarySidebar,
  currentActiveItem,
  setCurrentActiveItem,
  hoverActiveItem,
  setHoverActiveItem,
  onSelect,
  ...props
}) => {
  const [subnav, setSubnav] = useState(false);

  // resetting all subnav to close state when navigation bar is collapsed
  useEffect(() => {
    if (!isOpen) setSubnav(false);
  }, [isOpen]);
  const showSubnav = () => setSubnav(!subnav);
  const newProps = {
    isOpen,
    activeItem: currentActiveItem.label === item.label ? true : false,
    disabled: item.disabled,
    ...props,
  };
  useEffect(() => {
    if (item.label !== currentActiveItem.label) setSubnav(false);
  }, [currentActiveItem]);
  useEffect(() => {
    if (item.label !== hoverActiveItem.label) setSubnav(false);
    else setSubnav(true);
  }, [hoverActiveItem]);

  const handleItemClick = (e) => {
    if (item.subNav && isOpen) showSubnav();
    else handleSubMenuClick(e,item);
  };
  const handleSubMenuClick = (e,selectedItem) => {
    
    if (!item.disabled) {
      setSecondarySidebar(false);
      setCurrentActiveSubNav([]);
      setCurrentActiveItem(item);
      
    }

    if (item.subNav && !isOpen && !item.disabled) {
      setSecondarySidebar(true);
      setCurrentActiveSubNav(item.subNav);
    }
    else
    {
      if(onSelect) {
      onSelect(e, selectedItem, item.subNav);
      }
  }
  };
  const handleItemHover = () => {
    if (item.subNav && isOpen) {
      setSubnav(true);
      setHoverActiveItem(item);
    }
  };
  const IconObj=item?.icon;
  const callSetTimer = () => {
    setTimeout(() => {
      handleItemHover();
    }, 400);
  };
  return (
    <SSubMenuItem>
      <SidebarLink
        to={item.path}
        onClick={handleItemClick}
        onMouseEnter={callSetTimer}
        // onMouseLeave={handleItemHoverOver}
        {...newProps}
      >
        <SideNavItemIcon isOpen={isOpen} item={item}>
          {/* keep one icon prop */}
          {item.reactIcon?
        <Icon icon={item.reactIcon} size={24} />
        :<IconObj className={`custom-icon-svg`} style={{width:'24px',height:'24px' }}/>}
       
        </SideNavItemIcon>
        <SidebarLabel {...newProps}>{item.label}</SidebarLabel>

        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {isOpen &&
        subnav &&
        item.subNav?.map((subMenuItem, index) => {
          return (
            <SidebarLink
              to={subMenuItem.path}
              key={index}
              level={1}
              style={{ paddingRight: '1rem' }}
              onClick={(e)=>handleSubMenuClick(e,subMenuItem)}
            >
              <SidebarLabel level={1} {...newProps}>
                {subMenuItem.label}
              </SidebarLabel>
            </SidebarLink>
          );
        })}
    </SSubMenuItem>
  );
};

export default SubMenu;
