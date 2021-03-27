import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import SectionInfo from "@/views/SectionInfo";
import StateLeg from "@/views/StateLeg";
import FedLeg from "@/views/FedLeg";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/sectionInfo",
    name: "SectionInfo",
    component: SectionInfo
  },
  {
    path: "/stateLeg",
    name: "StateLeg",
    component: StateLeg
  },
  {
    path: "/fedLeg",
    name: "FedLeg",
    component: FedLeg
  },
  {
    path: "/services",
    name: "Services",
    component: About
  },
  {
    path: "/blog",
    name: "Blog",
    component: About
  },
  {
    path: "/contact",
    name: "Contact Us",
    component: About
  },
  {
    path: "/team",
    name: "Team",
    component: About
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
