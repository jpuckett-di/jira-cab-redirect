// ==UserScript==
// @name        JIRA Redirect CAB links
// @namespace   Violentmonkey Scripts
// @match       https://carscommerce.atlassian.net/servicedesk/customer/portal/41/*
// @match       https://carscommerce.atlassian.net/jira/servicedesk/projects/CAB/queues/issue/*
// @grant       none
// @version     1.0
// @author      -
// @description 7/19/2024, 2:08:47 PM
// ==/UserScript==
const find = [
    '/servicedesk/customer/portal/41',
    '/jira/servicedesk/projects/CAB/queues/issue',
]
const replace = '/browse'

let destination = window.location.href

for (let index = 0; index < find.length; index++) {
    destination = destination.replace(find[index], replace)
}

window.location.replace(destination)
