// // Get the browser's cookies enabled status
// console.log("Cookies Enabled: " + navigator.cookieEnabled);

// // Get the browser's application name
// console.log("Browser Name: " + navigator.appName);

// // Get the browser's application code name
// console.log("Browser CodeName: " + navigator.appCodeName);

// // Get the browser's user-agent string
// console.log("User-Agent: " + navigator.userAgent);

// // Get the browser's platform (operating system)
// console.log("Platform: " + navigator.platform);

// // Get the browser's language
// console.log("Language: " + navigator.language);

// // Check if the browser is online
// console.log("Is Online: " + navigator.onLine);

//---------------------------- Start here -------------------------------------------

const userAgent = navigator.userAgent;
let browserName, browserVersion;

if (userAgent.match(/chrome|chromium|crios/i)) {
  browserName = "Chrome";
  browserVersion = userAgent.match(/chrome\/(\d+)/i)
    ? userAgent.match(/chrome\/(\d+)/i)[1]
    : "";
} else if (userAgent.match(/firefox|fxios/i)) {
  browserName = "Firefox";
  browserVersion = userAgent.match(/firefox\/(\d+)/i)
    ? userAgent.match(/firefox\/(\d+)/i)[1]
    : "";
} else if (userAgent.match(/safari/i)) {
  browserName = "Safari";
  browserVersion = userAgent.match(/version\/(\d+)/i)
    ? userAgent.match(/version\/(\d+)/i)[1]
    : "";
} else if (userAgent.match(/edg/i)) {
  browserName = "Edge";
  browserVersion = userAgent.match(/edg\/(\d+)/i)
    ? userAgent.match(/edg\/(\d+)/i)[1]
    : "";
} else if (userAgent.match(/opr|opera/i)) {
  browserName = "Opera";
  browserVersion = userAgent.match(/opr\/(\d+)/i)
    ? userAgent.match(/opr\/(\d+)/i)[1]
    : "";
} else if (userAgent.match(/trident/i)) {
  browserName = "Internet Explorer";
  browserVersion = userAgent.match(/rv:(\d+)/i)
    ? userAgent.match(/rv:(\d+)/i)[1]
    : "";
} else {
  browserName = "Unknown";
  browserVersion = "Unknown";
}

const element1 = document.getElementById(browserName);
element1.classList.add("active");
var browserNameElement = document.getElementById("browserName");
browserNameElement.textContent =
  "Your Browser is: " + browserName + ", And your Verions : " + browserVersion;

console.log(`Browser Name: ${browserName}`);
console.log(`Browser Version: ${browserVersion}`);
