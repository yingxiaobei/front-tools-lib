function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.onload = e => {
            resolve(e.target.result)
        }
        fileReader.readAsDataURL(blob)
        fileReader.onerror = () => {
            reject(new Error('blobToBase64 error'))
        }
    })
}
module.exports = blobToBase64
