"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3954],{3954:(_,m,u)=>{u.r(m),u.d(m,{Camera:()=>h,CameraWeb:()=>p});var s=u(5861),d=u(7423),l=u(76);class p extends d.Uw{getPhoto(e){var t=this;return(0,s.Z)(function*(){return new Promise(function(){var a=(0,s.Z)(function*(i,r){if(e.webUseInput||e.source===l.oK.Photos)t.fileInputExperience(e,i);else if(e.source===l.oK.Prompt){let n=document.querySelector("pwa-action-sheet");n||(n=document.createElement("pwa-action-sheet"),document.body.appendChild(n)),n.header=e.promptLabelHeader||"Photo",n.cancelable=!1,n.options=[{title:e.promptLabelPhoto||"From Photos"},{title:e.promptLabelPicture||"Take Picture"}],n.addEventListener("onSelection",function(){var c=(0,s.Z)(function*(o){0===o.detail?t.fileInputExperience(e,i):t.cameraExperience(e,i,r)});return function(o){return c.apply(this,arguments)}}())}else t.cameraExperience(e,i,r)});return function(i,r){return a.apply(this,arguments)}}())})()}pickImages(e){var t=this;return(0,s.Z)(function*(){return new Promise(function(){var a=(0,s.Z)(function*(i){t.multipleFileInputExperience(i)});return function(i){return a.apply(this,arguments)}}())})()}cameraExperience(e,t,a){var i=this;return(0,s.Z)(function*(){if(customElements.get("pwa-camera-modal")){const r=document.createElement("pwa-camera-modal");r.facingMode=e.direction===l.GW.Front?"user":"environment",document.body.appendChild(r);try{yield r.componentOnReady(),r.addEventListener("onPhoto",function(){var n=(0,s.Z)(function*(c){const o=c.detail;null===o?a(new d.xz("User cancelled photos app")):o instanceof Error?a(o):t(yield i._getCameraPhoto(o,e)),r.dismiss(),document.body.removeChild(r)});return function(c){return n.apply(this,arguments)}}()),r.present()}catch{i.fileInputExperience(e,t)}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements."),i.fileInputExperience(e,t)})()}fileInputExperience(e,t){let a=document.querySelector("#_capacitor-camera-input");const i=()=>{var r;null===(r=a.parentNode)||void 0===r||r.removeChild(a)};a||(a=document.createElement("input"),a.id="_capacitor-camera-input",a.type="file",a.hidden=!0,document.body.appendChild(a),a.addEventListener("change",r=>{const n=a.files[0];let c="jpeg";if("image/png"===n.type?c="png":"image/gif"===n.type&&(c="gif"),"dataUrl"===e.resultType||"base64"===e.resultType){const o=new FileReader;o.addEventListener("load",()=>{if("dataUrl"===e.resultType)t({dataUrl:o.result,format:c});else if("base64"===e.resultType){const f=o.result.split(",")[1];t({base64String:f,format:c})}i()}),o.readAsDataURL(n)}else t({webPath:URL.createObjectURL(n),format:c}),i()})),a.accept="image/*",a.capture=!0,e.source===l.oK.Photos||e.source===l.oK.Prompt?a.removeAttribute("capture"):e.direction===l.GW.Front?a.capture="user":e.direction===l.GW.Rear&&(a.capture="environment"),a.click()}multipleFileInputExperience(e){let t=document.querySelector("#_capacitor-camera-input-multiple");t||(t=document.createElement("input"),t.id="_capacitor-camera-input-multiple",t.type="file",t.hidden=!0,t.multiple=!0,document.body.appendChild(t),t.addEventListener("change",i=>{const r=[];for(let n=0;n<t.files.length;n++){const c=t.files[n];let o="jpeg";"image/png"===c.type?o="png":"image/gif"===c.type&&(o="gif"),r.push({webPath:URL.createObjectURL(c),format:o})}e({photos:r}),(()=>{var i;null===(i=t.parentNode)||void 0===i||i.removeChild(t)})()})),t.accept="image/*",t.click()}_getCameraPhoto(e,t){return new Promise((a,i)=>{const r=new FileReader,n=e.type.split("/")[1];"uri"===t.resultType?a({webPath:URL.createObjectURL(e),format:n,saved:!1}):(r.readAsDataURL(e),r.onloadend=()=>{const c=r.result;a("dataUrl"===t.resultType?{dataUrl:c,format:n,saved:!1}:{base64String:c.split(",")[1],format:n,saved:!1})},r.onerror=c=>{i(c)})})}checkPermissions(){var e=this;return(0,s.Z)(function*(){if(typeof navigator>"u"||!navigator.permissions)throw e.unavailable("Permissions API not available in this browser");try{return{camera:(yield window.navigator.permissions.query({name:"camera"})).state,photos:"granted"}}catch{throw e.unavailable("Camera permissions are not available in this browser")}})()}requestPermissions(){var e=this;return(0,s.Z)(function*(){throw e.unimplemented("Not implemented on web.")})()}}const h=new p}}]);