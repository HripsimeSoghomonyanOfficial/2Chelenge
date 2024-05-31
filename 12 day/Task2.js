function extractDomain(url) {
    const regex = /^(?:https?:\/\/)?(?:www\.)?([^\/\.:]+)\./i;
    const match = url.match(regex);
    
    if (match && match[1]) {
        return match[1];
    } else {
        return null;
    }
}

console.log(extractDomain("https://www.google.com/TUMOLABS"));
console.log(extractDomain("http://www.Etsy.com/shop/founddream")); 
console.log(extractDomain("https://www.cnet.com"));
