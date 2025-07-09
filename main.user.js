// ==UserScript==
// @name        JIRA Redirect ServiceDesk links
// @namespace   Violentmonkey Scripts
// @match       https://carscommerce.atlassian.net/servicedesk/customer/portal/41/*
// @match       https://carscommerce.atlassian.net/servicedesk/customer/portal/61/*
// @match       https://carscommerce.atlassian.net/jira/servicedesk/projects/CAB/queues/issue/*
// @grant       none
// @version     1.0.2
// @author      Jeff Puckett
// @homepageURL https://github.com/jpuckett-di/jira-cab-redirect
// @downloadURL https://raw.githubusercontent.com/jpuckett-di/jira-cab-redirect/refs/heads/main/main.user.js
// ==/UserScript==
const find = [
  "/servicedesk/customer/portal/41",
  "/servicedesk/customer/portal/61",
  "/jira/servicedesk/projects/CAB/queues/issue",
];
const replace = "/browse";

let destination = window.location.href;

for (let index = 0; index < find.length; index++) {
  destination = destination.replace(find[index], replace);
}

window.location.replace(destination);
