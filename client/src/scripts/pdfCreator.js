import html2pdf from 'html2pdf.js'

export default {
    save: function(payload) {
        let element = document.querySelector(payload.target)

        let options = {
            margin: [55, 0, 0, 0],
            filename: payload.filename,
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { dpi: 300, letterRendering: true, scale: 3 },
            jsPDF: { unit: 'mm', orientation: 'portrait' }
        }

        html2pdf()
            .set(options)
            .from(element)
            .save()
    }
}
