// ==UserScript==
// @name        JIRA Redirect ServiceDesk links
// @namespace   Violentmonkey Scripts
// @match       https://carscommerce.atlassian.net/servicedesk/customer/portal/41/*
// @match       https://carscommerce.atlassian.net/servicedesk/customer/portal/61/*
// @match       https://carscommerce.atlassian.net/jira/servicedesk/projects/CAB/queues/issue/*
// @grant       none
// @version     1.0.1
// @author      Jeff Puckett
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
