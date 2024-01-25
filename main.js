function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/o3aCiWKWw/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

let dog = 0; 
let lion = 0; 
let cow = 0; 

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        
     
        const randomRed = Math.floor(Math.random() * 255) + 1;
        const randomGreen = Math.floor(Math.random() * 255) + 1;
        const randomBlue = Math.floor(Math.random() * 255) + 1;

       
        const soundName = document.getElementById('result_label');
        soundName.innerText = `Sound: ${results[0].label}`;
        soundName.style.color = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

        const accuracy = document.getElementById('result_confidence');
        accuracy.innerText = `Accuracy: ${Math.floor(results[0].confidence * 100)}%`;
        accuracy.style.color = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

        const imgTag = document.getElementById('Image1');

      
        if (results[0].label === 'barking') {
           
            imgTag.src = 'dog.png';
            
            dog += 1;
        } else if (results[0].label === 'roaring') {
           
            imgTag.src = 'lion.png';
            
            lion += 1;
        } else if (results[0].label === 'mooing') {
            
            imgTag.src = 'cow.png';
            
            cow += 1;
        } else {
            
            imgTag.src = 'ear.png';
        }
    }
}

