export default function validateUrl(url) {
    let isValidUrl = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm.test(url);
    let isValidLocalHost = url.startsWith('http://localhost:') || url.startsWith('http://localhost:');

    return isValidUrl || isValidLocalHost;
 }