var page = new tabris.Page({
  title: "Inactivity",
  topLevel: true
});

var timer = new tabris.InactivityTimer({
  delay: 2000
}).on("timeout", function() {
  label.set("text", "inactive!");
});

var label = new tabris.TextView({
  centerX: 0, top: 16,
  text: ""
}).appendTo(page);

new tabris.Button({
  centerX: 0, top: "prev()",
  text: "Start"
}).on("select", function() {
  timer.start();
  label.set("text", "started");
}).appendTo(page);

new tabris.Button({
  centerX: 0, top: "prev()",
  text: "Cancel"
}).on("select", function() {
  timer.cancel();
  label.set("text", "cancelled");
}).appendTo(page);

page.open();
