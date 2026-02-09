function downloadFile(url, callback) {
    setTimeout(() => {
        console.log(`Download complete: ${url}`);
        callback();
    }, 3000);
}
