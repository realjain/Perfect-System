import ReactGA from "react-ga4";

ReactGA.initialize("G-N1EEFL6HBE");
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});