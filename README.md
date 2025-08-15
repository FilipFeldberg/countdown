# Countdown to Chiara Coming Home

A simple, beautiful countdown web application that shows the time remaining until November 16th, 2025 at 16:40 Oslo time.

## Features

- **Real-time countdown** in days, hours, minutes, and seconds
- **Responsive design** that looks great on both mobile and desktop
- **Modern glassmorphism UI** with gradient backgrounds
- **Oslo timezone support** for accurate countdown

## Deployment

The application is deployed at: **http://chiara-comes-home.hercules-it.com** or **https://chiara-comes-home.hercules-it.com**

### Server Setup

The application is hosted on a VPS server with the following configuration:

- **Server**: Ubuntu with nginx
- **Domain**: chiara-comes-home.hercules-it.com
- **Web root**: `/var/www/countdown`

### Nginx Configuration

The nginx configuration is included in this repository (`nginx.conf`) and supports both HTTP and HTTPS with:

- Self-signed SSL certificate for HTTPS support
- Security headers (X-Frame-Options, X-XSS-Protection, etc.)
- Static asset caching (1 year expiry)
- HTTP/2 support

To deploy nginx configuration:
```bash
sudo cp nginx.conf /etc/nginx/sites-available/countdown
sudo ln -s /etc/nginx/sites-available/countdown /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## Local Development

Simply open `index.html` in any modern web browser to run the countdown locally.

## Files

- `index.html` - Main HTML structure
- `style.css` - Responsive CSS with glassmorphism design
- `script.js` - JavaScript countdown logic with Oslo timezone support
- `nginx.conf` - Production nginx configuration

## Target Date

Currently set to: **November 16th, 2025 at 16:40 Oslo time**

To change the target date, modify the `targetTime` in `script.js`:
```javascript
const targetTime = new Date("2025-11-16T16:40:00+01:00");
```
