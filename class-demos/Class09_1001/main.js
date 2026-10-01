window.addEventListener('load', () => {
    document.body.addEventListener('click', (e) => {
        console.log(e)
        console.log('document.body was clicked')
        console.log(`${e.clientX}, ${e.clientY}`)
    })

    let textDiv = document.getElementById('text')

    document.addEventListener('keydown', (e) => {
        console.log('keypressed!');
        console.log(e.key);

        textDiv.textContent += e.key;

        if (e.key == ' ') {
            textDiv.textContent += '!'
        }
    })
 })
