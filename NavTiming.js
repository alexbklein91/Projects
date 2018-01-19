



var xmlHttp = new XMLHttpRequest();

xmlHttp.open('POST', "https://endpoint2.collection.us2.sumologic.com/receiver/v1/http/ZaVnC4dhaV3LvoBxc3_4GzVAbQHUzDRMsAq3xfIqxLgbW5hI8i7XnfpokfFxYZX9AFbvdSLC1BeFPgyh4ITmb7vis_JKPo4i4Z1qOdvVwrryCa7lE9wtuw==", true);

function sendData() {
  var  perfData = window.performance.timing;
  var  pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
  var  renderTime = perfData.domComplete - perfData.domLoading;
  var domInteractive = perfData.domInteractive - perfData.domLoading;
  var responseTime = perfData.responseEnd - perfData.requestStart;

  xmlHttp.send(
    //"perfData.domComplete: " + perfData.domComplete +
//" perfData.domLoading: " + perfData.domLoading +
" renderTime: " + renderTime + "ms"+
//" perfData.loadEventEnd " +  perfData.loadEventEnd +
//" perfData.navigationStart: " + perfData.navigationStart +
" pageLoadTime: " + pageLoadTime + "ms" +
" domInteractive: " + domInteractive + "ms" +
" responseTime: " + responseTime + "ms" +

" test103 "); }


setTimeout(sendData, 1000);
