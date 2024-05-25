/* eslint-disable no-unused-vars */ // TO REMOVE
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import clsx from "clsx";
import { NavLink, useLocation } from "react-router-dom";
import _ from "lodash";
// @mui/material components
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Popover from '@mui/material/Popover';
// @mui/icons-material
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// css
import styles from "../../assets/css/layout/sidebar.module.scss";
import logoImg from "../../assets/react.svg";

export default function Sidebar(props) {
  const dispatch = useDispatch();
  let location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openSubMenu, setOpenSubMenu] = React.useState(null);

  const sidebar = React.createRef();

  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return location.pathname === routeName || location.pathname.includes(routeName+"/");
  }

  const handleScroll = (e) => {
    setScrolled(e.target.scrollTop > 0);
    anchorEl && setAnchorEl(null);
    openSubMenu && setOpenSubMenu(null);
  };

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  const onMouseClick = (e, path) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
    setOpenSubMenu(path);
  }

  const resetStore = (path) => {
    if (location.pathname !== path) {
      dispatch({type: 'reset'});
    }
  }

  // React.useEffect(() => {
  //   window.addEventListener("resize", resizeFunction);
  //   // Specify how to clean up after this effect:
  //   return function cleanup() {
  //     window.removeEventListener("resize", resizeFunction);
  //   };
  // }, [sidebar]);

  // React.useEffect(() => {
  //   const checkUserData = () => {
  //     setUserDetail(JSON.parse(localStorage.getItem("userDetail")));
  //   }
  //   checkUserData();
  //   window.addEventListener("storage", checkUserData);
  //   return () => {
  //     window.removeEventListener("storage", checkUserData);
  //   };
  // }, []);

  const { routes } = props;

  var links = (
    <List className={styles.list}>
      {routes.map((prop, key) => {
        // if (prop.permissionName ? !checkPermission(prop.permissionName, "none") : true) {
          return (
            <React.Fragment key={key}>
              <NavLink
                to={prop.subMenu ? "/" : prop.layout + prop.path}
                className={styles.item}
                onClick={(e) => prop.subMenu ? onMouseClick(e, prop.path) : resetStore(prop.layout + prop.path)}
              >
                <ListItem className={styles.itemLink}>
                  <prop.icon className={styles.itemIcon} />
                  <ListItemText
                    primary={prop.name}
                    className={styles.itemText}
                    disableTypography={true}
                  />
                  {prop.subMenu &&
                    <KeyboardArrowRightIcon
                      className={styles.subMenuIcon}
                    />
                  }
                </ListItem>
              </NavLink>
            </React.Fragment>
          );
        // } else {
        //   return null
        // }
      })}
    </List>
  );

  var sublinks = (
    <React.Fragment>
      {routes.map((prop, key) => {
        // if (prop.permissionName ? !checkPermission(prop.permissionName, "none") : true) {
          if (prop.subMenu) {
            return (
              <Popover
                key={key}
                classes={{paper: styles.subItemPaper}}
                open={openSubMenu === prop.path}
                onClose={()=>{setAnchorEl(null); setOpenSubMenu(null);}}
                anchorEl={anchorEl}
              >
                { prop.subMenu.map((item, index) => {
                    // if((item.permissionName !== prop.permissionName) ? !checkPermission(item.permissionName, "none") : true) {
                      return (
                        <NavLink
                          key={index}
                          to={prop.layout + item.path}
                          className={styles.item}
                          onClick={() => resetStore(prop.layout + item.path)}
                        >
                          <ListItem className={`${styles.subItemLink} ${styles.itemLink}`}>
                            <ListItemText
                              primary={item.name}
                              className={`${styles.subItemText} ${styles.itemText}`}
                              disableTypography={true}
                            />
                          </ListItem>
                        </NavLink>
                      )
                    // }
                })}
              </Popover>
            );
          } return null;
        // } return null;
      })}
    </React.Fragment>
  );

  return (
    // Cannot use hidden as it creates to poppers
    // TODO: Mobile view cannot open drawer, to fix later if required
    // <React.Fragment>
    //   { window.innerWidth < 960
    //   ? <Drawer
    //       variant="permanent"
    //       anchor="right"
    //       open={props.open}
    //       classes={{
    //         paper: styles.drawerPaper,
    //       }}
    //       onClose={props.handleDrawerToggle}
    //       ModalProps={{
    //         keepMounted: true, // Better open performance on mobile.
    //       }}
    //     >
    //       {brand}
    //       <div className={styles.sidebarWrapper}>
    //         {/* <AdminNavbarLinks /> */}
    //         <div className={styles.sidebarWrapper} ref={sidebar}>{links}</div>
    //       </div>
    //     </Drawer>
    //   : <Drawer
    //       anchor="left"
    //       variant="permanent"
    //       open
    //       classes={{
    //         paper: styles.drawerPaper,
    //       }}
    //     >
    //       {brand}
    //       <div 
    //         ref={sidebar} 
    //         className={styles.sidebarWrapper} 
    //         onScroll={(e)=>handleScroll(e)}
    //       >
    //         {links}
    //       </div>
    //     </Drawer>
    //   }
    // </React.Fragment>
    <div>
      {/* <Drawer
        variant="temporary"
        anchor="left"
        open={props.open}
        classes={{
          paper: styles.drawerPaper,
        }}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {brand}
        <div className={styles.sidebarWrapper}>
          {links}
        </div>
      </Drawer> */}
      <Drawer
        anchor="left"
        variant="permanent"
        open
        classes={{
          paper: styles.drawerPaper,
        }}
      >
        <div className={styles.sidebarWrapper} ref={sidebar}>{links}</div>
      </Drawer>
      {sublinks}
    </div>
  );
}

Sidebar.propTypes = {
  handleDrawerToggle: PropTypes.func,
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool,
};