---
layout: ../../layouts/GuideLayout.astro
title: AppLane User Guide
description: Learn how to add a proxy, choose Mac apps, create routing rules, verify connections, and manage profiles in AppLane.
heading: AppLane User Guide
eyebrow: Get started
lang: en
---

For AppLane 1.0.0 on macOS 14 or later.

## What does AppLane do?

AppLane lets you choose which Mac apps use your proxy while other apps keep using the normal system connection.

For example, you can route a browser through a proxy while your music player, office apps, and system updates continue to use their usual connection. You can also create more precise rules, such as using a proxy only when the browser connects to certain websites or ports.

AppLane does not provide or sell a proxy service. Before you begin, you need a working SOCKS or HTTP proxy. It can come from a proxy app running on your Mac or from a remote server that you are allowed to use.

## A few useful terms

- **Proxy:** A service that connects to a website or server on your behalf.
- **Route:** The path a connection will use: a proxy, proxy chain, system connection, or block action.
- **System connection:** The current macOS network path, without a proxy chosen by AppLane.
- **Routing:** Sending different connections through different routes based on your settings.
- **Rule:** A condition that tells AppLane which route a connection should use.
- **Proxy chain:** A route that passes through several proxies in order before reaching its destination.

## The main window

The sidebar has four sections:

| Section | What it is for |
| --- | --- |
| Applications | Choose Mac apps and give each one a quick route |
| Rules | Route connections by app, destination, and port |
| Proxies | Add, edit, and check proxy servers and chains |
| Connections | See the route and result of connections made by your apps |

At the top right, the profile menu lets you create, copy, switch, rename, and delete profiles. The **Enable Routing** button starts AppLane routing, and changes to **Stop Routing** while it is active.

The bottom of the window shows how many apps and active rules are in the current profile, along with the current routing state.

## First setup: four steps

### 1. Add a proxy

Open **Proxies**. You can enter a proxy yourself or ask AppLane to look for common local proxy ports.

If a proxy app is already running on your Mac:

1. Click **Detect Local Proxy**.
2. Enter a domain that AppLane can use for the check.
3. Click **Start Check**.
4. Find the correct result and click **Add**.

Detection only looks for an available local proxy. It does not change the settings of another proxy app.

If you know the proxy details, click **Add Proxy** and enter a name, protocol, server, port, and optional username and password.

AppLane supports SOCKS5, SOCKS4, SOCKS4A, HTTP CONNECT, and HTTPS CONNECT. Proxy passwords are stored in macOS Keychain and are not included in exported configuration files.

### 2. Add an app and choose its route

Open **Applications**, then:

1. Click **Add Application**.
2. Choose a Mac app.
3. Use the route menu on the right to choose your proxy.

You can also drag an app into the Applications view.

The route menu offers:

- **Use System Connection:** Keep using the current macOS network path.
- **Block Connection:** Refuse matching connections.
- **Proxy Server:** Use one proxy.
- **Proxy Chain:** Pass through several proxies in order.

This quick route is best when all connections from an app should use the same path. More specific rules can override it.

### 3. Enable routing

Click **Enable Routing**. The first time, macOS may ask whether AppLane can add a network configuration. Choose **Allow**.

AppLane does not start routing automatically when it launches. A new, empty profile selects no apps and intercepts no traffic.

Only new connections use the current settings. If an app already has an open connection, reopen the page, download, or network session that you want to check.

### 4. Confirm the app connection

Open **Connections**, then create a new connection in the selected app, such as opening a new webpage.

Check that the new record shows the expected app, destination, proxy or chain, and sent and received data.

A successful proxy check only proves that AppLane could connect through that proxy during the test. It does not prove that an app is using it. Use a new record in Connections to confirm actual app routing.

You can also open **User Guide** from the Help menu to view the four setup steps and their current status. The in-app guide shows status but never enables routing for you.

## Feature 1: Manage proxy servers

The Proxies view stores the proxy entries that you want AppLane to use. Each one shows its name, server address, port, and protocol.

You can add, edit, remove, and search proxies, or check whether a proxy can make a selected kind of connection.

### Three proxy checks

1. **Proxy Route Only:** Test whether a connection can be established through the proxy.
2. **HTTPS Website:** Test whether the proxy can securely reach a website and receive a response.
3. **UDP:** Test whether a SOCKS5 proxy can send and receive UDP data.

Results include the destination, completion time, duration, and any visible failure reason. Changing the proxy keeps an older result from being treated as proof for the new settings.

The HTTPS check reads response headers without downloading the page body or following redirects. The UDP check is available only for SOCKS5.

## Feature 2: Build a proxy chain

Choose **New Proxy Chain** from the add menu in Proxies when you want a connection to pass through several proxies.

Name the chain, add proxies in connection order, arrange them by dragging or using the row menu, and save it. A chain can contain up to eight hops. An HTTPS CONNECT proxy can currently appear only as the first hop.

A chain does not automatically make a connection faster or safer. If any hop is unavailable, the whole connection can fail.

## Feature 3: Set a quick route for an app

Applications is the simplest way to give an app a proxy, chain, system connection, or block action.

Open an app's details to see its name, icon, route, identifying information, and current TCP, UDP, and DNS compatibility.

Some Mac apps connect through their own background components. AppLane tries to recognize related components, but apps work differently. Always confirm the result in Connections.

## Feature 4: Create precise rules

Use Rules when a single route for the whole app is too broad. A rule can match selected apps, domains, IP addresses or ranges, and individual ports or port ranges, then choose the route to use.

For example, a rule can send a browser through a proxy only when it reaches `*.example.com` on port `443`.

All conditions in a rule must match. Leaving apps, destinations, or ports empty means that the rule does not restrict that part.

### Rule order matters

AppLane checks rules from top to bottom and uses the first match. Put specific rules above broad ones. You can drag rules to reorder them, move them from the context menu, or turn off a rule without deleting it.

If no rule matches, the connection uses the system route.

### Destination formats

- A full domain, such as `api.example.com`
- A wildcard domain, such as `*.example.com`
- An IP address
- A network range, such as `10.0.0.0/8`
- One port, such as `443`
- A port range, such as `8000-9000`
- Several values separated by commas

## Feature 5: Preview a rule without connecting

Click **Preview Rules** in the Rules toolbar. Choose an app, destination, port, TCP or UDP, and an optional destination IP.

AppLane shows the expected route, matched rule, and relevant limits. Preview does not look up DNS or access the network. It explains your rule logic but cannot prove that a proxy works or that routing is active.

## Feature 6: Read connection records

Connections shows recent records while routing is active. A record includes the source app, destination and port, TCP or UDP, chosen route, state, and sent and received data.

Select a record to see more details, including the matched rule, why the route was selected, the start time, and an error description when available.

States can include **Connecting**, **Handed to Proxy**, **Ended**, **Blocked**, and **Connection Failed**. Handed to Proxy means the connection reached the chosen proxy; sent and received data provide stronger confirmation of useful traffic.

AppLane keeps up to 200 recent records in memory. It does not send them to the developer, and they are not stored as a permanent history after the routing service ends.

## Feature 7: Save several profiles

Profiles help separate settings for work, browser routing, or temporary testing. From the current profile menu, you can create an empty profile, copy, switch, rename, or delete a profile.

AppLane stores up to 20 profiles and always keeps at least one. Switching affects only new connections. Existing connections continue with the profile they started with.

You can immediately undo a deleted profile from **Edit > Undo**. Undo history is not kept after you quit AppLane.

## Feature 8: Import, export, undo, and redo

Use **Settings > Configuration** to import or export the current profile.

An export contains selected app information, rules, proxy addresses, and chains. It does not include proxy usernames or passwords, Keychain credential references, local app paths, or file access permissions.

Import replaces the current profile. You may need to select apps again and re-enter proxy credentials afterward.

Press `Command-Z` to undo and `Shift-Command-Z` to redo. AppLane keeps up to 30 recent edits while it is running.

## Feature 9: Use the menu bar controls

The menu bar item lets you view routing status, open the main window, enable or stop routing, open Settings, or quit AppLane.

After routing stops, new app connections return to the current macOS system path.

## Feature 10: Network, privacy, and app information

In Settings, **Use System Settings for Local Networks** keeps local network addresses on the system path. Loopback addresses and connections to the proxy server itself always keep their original path to prevent a routing loop.

Settings also provides the current AppLane version, compatibility details, import and export controls, the privacy policy, and support.

## Current network compatibility

The details below are intended for users with more specific network requirements. For ordinary web access, start with the TCP section.

### TCP

AppLane can route TCP through SOCKS5, SOCKS4, SOCKS4A, HTTP CONNECT, HTTPS CONNECT as the first hop, and supported proxy chains.

A small number of apps or services use a special connection-closing pattern that can cause an incomplete response or an early disconnect. If one app repeatedly disconnects, send its name, your macOS version, and the visible error state to support.

### UDP

UDP currently requires one SOCKS5 proxy, including a one-hop SOCKS5 chain, and a fixed IP destination. UDP through an HTTP proxy, a multi-hop chain, or a changing destination is refused clearly.

### DNS

AppLane uses the macOS system DNS resolver. It does not provide complete remote DNS handling and cannot guarantee that domain lookups use the proxy.

### Continuous disconnection protection

AppLane is not a VPN and does not provide a persistent kill switch. If routing stops, quits, or encounters an error, an app can return to the system connection.

## Privacy and security

AppLane requires no account and contains no advertising, analytics, tracking, or telemetry. It does not operate a proxy service.

Configuration remains on your Mac, and proxy passwords are stored in macOS Keychain. Traffic is sent to the proxy operator and destination service you choose, so use only proxies that you understand and trust.

Never send proxy passwords, Keychain contents, or an unreviewed configuration file to someone else. When contacting support, you normally need only your Mac model, macOS version, AppLane version, proxy protocol, visible connection state, and exact error text.

## Common questions

### Why is Enable Routing unavailable?

AppLane may be starting or stopping routing, or it may not yet have macOS network configuration permission. Wait briefly and try again. If it remains unavailable, reopen the installed copy of AppLane and check whether macOS shows a permission request.

### Why did the proxy check pass while the app did not use it?

Confirm that the app was added, the expected route or matching rule is enabled, routing is active, the app opened a new connection, and Connections shows a new record for it.

### Why did an old connection stay the same after I edited a rule?

Rule edits and profile changes affect only new connections. Close the existing connection and connect again, or reopen the app if needed.

### Why is some traffic from an app missing?

The app may use a background component, system service, UDP, or another connection type outside the current support range. Search Connections by app and destination, then review the app's compatibility details.

### Does AppLane fall back to a direct connection when a proxy fails?

No. If a rule selects a proxy and proxy negotiation fails, AppLane closes that connection instead of silently switching to the system route. Only **Use System Connection** uses the normal system path.

### Does AppLane change another proxy app?

No. It can detect common local proxy ports and connect to the proxy you select, but it does not change another app's mode, server, ports, rules, or subscriptions.

### Where can I find the version, privacy policy, and open-source notice?

Open AppLane Settings and look in About.

## Get support

- [Support](/applane-site/en/support/)
- [Privacy Policy](/applane-site/en/privacy/)
- Email: [szlab.ai@outlook.com](mailto:szlab.ai@outlook.com)
