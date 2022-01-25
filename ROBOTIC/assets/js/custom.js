var url1 = "https://script.google.com/macros/s/AKfycbyO2P-2hDC4DDCcOBSa7GecXiu68dEGqJbnuVJRalgt2fTt0ygLzqzutz_qKznrIycp/exec?";

function Subscribe() {
  var x = document.getElementById("subscribeEmail").value;
  document.getElementById("subscribeEmail").value="";
  var url2 = url1 + "add_email=" + x ;//+ "&talk=ismail";
	fetch (url2)
	.then(y => y.text())
	.then(z => alert(z));
}