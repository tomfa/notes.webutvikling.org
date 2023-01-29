---
title: "Mount FTP-server in debian using curlftpfs"
pubDate: 2014-03-03
heroImage: /images/thomas-jensen-qTEj-KMMq_Q-unsplash.jpg
tags: [guide, curlftpfs, debian, ftp]
---

#### Mounting remote ftp

The following will mount your remote FTP-location in _/mnt/my_ftp._ Note that FTP is not secure, and you should combine this with a secure session.

```bash
sudo curlftpfs -o allow_other \
  ftp-user:ftp-pass@server_ip /mnt/my_ftp/
```

#### Unmounting ftp

You'll probably have to sudo this, depending on who mounted it where.

```bash
fusermount -u /mnt/my_ftp_folder
```
