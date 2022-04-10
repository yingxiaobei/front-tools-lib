const downloadFile = (binaryData, filename = 'download', type = 'application/pdf', fileSuffix = 'pdf') => {
    const blob = new Blob([binaryData], { type })
    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.download = `${filename}.${fileSuffix}`
    link.click()
}
module.exports = downloadFile
