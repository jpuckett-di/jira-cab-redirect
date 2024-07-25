// ==UserScript==
// @name        JIRA Redirect CAB links
// @namespace   Violentmonkey Scripts
// @match       https://carscommerce.atlassian.net/servicedesk/customer/portal/41/*
// @grant       none
// @version     1.0
// @author      -
// @description 7/19/2024, 2:08:47 PM
// ==/UserScript==
const find = '/servicedesk/customer/portal/41'
const replace = '/browse'
window.location.replace(window.location.href.replace(find, replace))
