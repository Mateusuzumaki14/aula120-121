function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier('MobileNet',modelLoaded)
}
function modelLoaded(){
  console.log('m0d3lo carr3gad0')
}
function draw(){
  image(video,0,0,300,300)
  classifier.classify(video,gotResult)
}
var prevResult=''
function gotResult(error,results){
  if (error){
    console.error(error)
  }
  if ((results[0].confidence>0.5)&&(prevResult!=results[0].label)) {
    prevResult=results[0].label
    var synth=window.speechSynthesis
    speakdata='objeto detectado e:'+results[0].label
    var uttherThis=new SpeechSynthesisUtterance(speakdata)
    synth.speak(uttherThis)
    document.getElementById('objDetect').innerHTML=results[0].label
    document.getElementById('PrecisaoObj').innerHTML=results[0].confidence.toFixed(3)
  
  }
}


