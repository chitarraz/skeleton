// @mui/icons-material
import HomeIcon from '@mui/icons-material/Home';
// core components/views for Admin layout
import HomePage from "../components/Home/Home";
// import Company from "components/AdminPortal/Company/Company";
// import Farm from "components/AdminPortal/Farm/Farm";
import User from "../components/User/User";
// core components/views for create/edit
// import AddEditCompany from "components/AdminPortal/Company/AddEditCompany";
// import AddEditFarm from "components/AdminPortal/Farm/AddEditFarm";
// import AddUser from "components/AdminPortal/User/AddUser";
// import EditUser from "components/AdminPortal/User/EditUser";

// other routes
export const companyRoutes = [
  {
    path: "/company/create",
    // component: AddEditCompany,
    permissionName: "Admin.Company",
    layout: "/admin",
  },
  {
    path: "/company/:id",
    // component: AddEditCompany,
    permissionName: "Admin.Company",
    layout: "/admin",
  },
];

export const farmRoutes = [
  {
    path: "/farm/create",
    // component: AddEditFarm,
    permissionName: "Admin.Farm",
    layout: "/admin",
  },
  {
    path: "/farm/:id",
    // component: AddEditFarm,
    permissionName: "Admin.Farm",
    layout: "/admin",
  },
];

export const userRoutes = [
  {
    path: "/user/create",
    // component: AddUser,
    permissionName: "Admin.User",
    layout: "/admin",
  },
  {
    path: "/user/batch",
    // component: BatchUser,
    permissionName: "Admin.User",
    layout: "/admin",
  },
  {
    path: "/user/:id",
    // component: EditUser,
    permissionName: "Admin.User",
    layout: "/admin",
  },
];

// submenu
export const farmSubRoutes = [
  {
    path: "/farm/overview",
    name: "Farm Overview",
    subheader: "Farm Overview",
    canCreate: true,
    // component: Alarm,
    layout: "/user",
  },
  {
    path: "/farm/details",
    name: "Farm Details",
    subheader: "Farm Details",
    canCreate: true,
    // component: Alarm,
    layout: "/user",
  },
];

// main menu
export const dashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    header: "Home",
    icon: HomeIcon,
    component: HomePage,
    layout: "/admin",
  },
  {
    path: "/company",
    name: "Company",
    permissionName: "Admin.Company",
    header: "Company Creation & Management",
    // canCreate: true,
    // searchPlaceholder: "Search within Company Module",
    icon: HomeIcon,
    // component: Company,
    layout: "/admin",
  },
  {
    path: "/farm",
    name: "Farm",
    permissionName: "Admin.Farm",
    header: "Farm Creation & Management",
    // canCreate: true,
    // searchPlaceholder: "Search within Farm Module",
    icon: HomeIcon,
    layout: "/admin",
    subMenu: farmSubRoutes
  },
  {
    path: "/user",
    name: "User",
    permissionName: "Admin.User",
    header: "User Creation & Management",
    // canCreate: true,
    // searchPlaceholder: "Search within User Module",
    icon: HomeIcon,
    component: User,
    layout: "/admin",
  },
];
