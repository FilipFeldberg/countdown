# Countdown to Chiara Coming Home

A simple, beautiful countdown web application that shows the time remaining until November 16th, 2025 at 16:40 Oslo time.

## Features

- **Real-time countdown** in days, hours, minutes, and seconds
- **Responsive design** that looks great on both mobile and desktop
- **Modern glassmorphism UI** with gradient backgrounds
- **Oslo timezone support** for accurate countdown

## Deployment

The application is deployed at: **https://chiara-comes-home.hercules-it.com** (with automatic HTTP → HTTPS redirect)

### Server Setup

The application is hosted on a VPS server with the following configuration:

- **Server**: Ubuntu with nginx
- **Domain**: chiara-comes-home.hercules-it.com
- **Web root**: `/var/www/countdown`

### Server Configuration

The server supports HTTPS with:

- **Let's Encrypt SSL certificate** with automatic renewal
- **Automatic HTTP → HTTPS redirect** for all traffic
- **Security headers** (X-Frame-Options, X-XSS-Protection, etc.)
- **Static asset caching** (1 year expiry)
- **Modern SSL configuration** managed by Certbot

#### Server Setup:
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Create basic nginx configuration for the domain
# (Configuration details not included in repository for security)

# Obtain SSL certificate (automatic nginx configuration)
sudo certbot --nginx -d your-domain.com --agree-tos --email your-email@domain.com --redirect
```

#### Certificate Renewal:
Certbot automatically sets up a cron job for certificate renewal. Test with:
```bash
sudo certbot renew --dry-run
```

## Local Development

Simply open `index.html` in any modern web browser to run the countdown locally.

## Files

- `index.html` - Main HTML structure
- `style.css` - Responsive CSS with glassmorphism design
- `script.js` - JavaScript countdown logic with Oslo timezone support

## Target Date

Currently set to: **November 16th, 2025 at 16:40 Oslo time**

To change the target date, modify the `targetTime` in `script.js`:
```javascript
const targetTime = new Date("2025-11-16T16:40:00+01:00");
```
