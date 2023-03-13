ln -sf $(dirname -- "$(realpath -- $0;)";)/demo_marvel /etc/nginx/sites-enabled/demo_marvel
sudo systemctl restart nginx.service