const linkButton = document.getElementsByTagName('a');
for (let item of linkButton) {
    link = item.getAttribute("href");
    if (!/^https?:/.test(link)) { link = 'https://' + link; }
    item.href = link;
}
