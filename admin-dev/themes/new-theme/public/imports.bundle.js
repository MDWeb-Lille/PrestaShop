!function(e){function t(o){if(i[o])return i[o].exports;var n=i[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,o){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=319)}({250:function(e,t,i){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=i(318),l=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),r=window.$,a=function(){function e(){var t=this;o(this,e),new n.a,r(".js-from-files-history-btn").on("click",function(){return t.showFilesHistoryHandler()}),r(".js-close-files-history-block-btn").on("click",function(){return t.closeFilesHistoryHandler()}),r("#fileHistoryTable").on("click",".js-use-file-btn",function(e){return t.useFileFromFilesHistory(e)}),r(".js-change-import-file-btn").on("click",function(){return t.changeImportFileHandler()}),r(".js-import-file").on("change",function(){return t.uploadFile()}),this.toggleSelectedFile(),this.handleSubmit()}return l(e,[{key:"handleSubmit",value:function(){r(".js-import-form").on("submit",function(){var e=r(this);if("1"===e.find('input[name="truncate"]:checked').val())return confirm(e.data("delete-confirm-message")+" "+r.trim(r("#entity > option:selected").text().toLowerCase())+"?")})}},{key:"toggleSelectedFile",value:function(){var e=r("#csv").val();e.length>0&&(this.showImportFileAlert(e),this.hideFileUploadBlock())}},{key:"changeImportFileHandler",value:function(){this.hideImportFileAlert(),this.showFileUploadBlock()}},{key:"showFilesHistoryHandler",value:function(){this.showFilesHistory(),this.hideFileUploadBlock()}},{key:"closeFilesHistoryHandler",value:function(){this.closeFilesHistory(),this.showFileUploadBlock()}},{key:"showFilesHistory",value:function(){r(".js-files-history-block").removeClass("d-none")}},{key:"closeFilesHistory",value:function(){r(".js-files-history-block").addClass("d-none")}},{key:"useFileFromFilesHistory",value:function(e){var t=r(e.target).closest(".btn-group").data("file");r(".js-import-file-input").val(t),this.showImportFileAlert(t),this.closeFilesHistory()}},{key:"showImportFileAlert",value:function(e){r(".js-import-file-alert").removeClass("d-none"),r(".js-import-file").text(e)}},{key:"hideImportFileAlert",value:function(){r(".js-import-file-alert").addClass("d-none")}},{key:"hideFileUploadBlock",value:function(){r(".js-file-upload-form-group").addClass("d-none")}},{key:"showFileUploadBlock",value:function(){r(".js-file-upload-form-group").removeClass("d-none")}},{key:"enableFilesHistoryBtn",value:function(){r(".js-from-files-history-btn").removeAttr("disabled")}},{key:"showImportFileError",value:function(e,t,i){var o=r(".js-import-file-error"),n=e+" ("+this.humanizeSize(t)+")";o.find(".js-file-data").html(n),o.find(".js-error-message").html(i),o.removeClass("d-none")}},{key:"hideImportFileError",value:function(){r(".js-import-file-error").addClass("d-none")}},{key:"humanizeSize",value:function(e){return"number"!=typeof e?"":e>=1e9?(e/1e9).toFixed(2)+" GB":e>=1e6?(e/1e6).toFixed(2)+" MB":(e/1e3).toFixed(2)+" KB"}},{key:"uploadFile",value:function(){var e=this;this.hideImportFileError();var t=r("#file"),i=t.prop("files")[0];if(t.data("max-file-upload-size")<i.size)return void this.showImportFileError(i.name,i.size,"File is too large");var o=new FormData;o.append("file",i),r.ajax({type:"POST",url:r(".js-import-form").data("file-upload-url"),data:o,cache:!1,contentType:!1,processData:!1}).then(function(t){if(t.error)return void e.showImportFileError(i.name,i.size,t.error);var o=t.file.name;r(".js-import-file-input").val(o),e.showImportFileAlert(o),e.hideFileUploadBlock(),e.addFileToHistoryTable(o),e.enableFilesHistoryBtn()})}},{key:"addFileToHistoryTable",value:function(e){var t=r("#fileHistoryTable"),i=t.data("delete-file-url"),o=i+"&filename="+encodeURIComponent(e),n=t.data("download-file-url"),l=n+"&filename="+encodeURIComponent(e),a=t.find("tr:first").clone();a.removeClass("d-none"),a.find("td:first").text(e),a.find(".btn-group").attr("data-file",e),a.find(".js-delete-file-btn").attr("href",o),a.find(".js-download-file-btn").attr("href",l),t.find("tbody").append(a);var s=t.find("tr").length-1;r(".js-files-history-number").text(s)}}]),e}();t.a=a},318:function(e,t,i){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),l=window.$,r=function(){function e(){var t=this;o(this,e),l(".js-entity-select").on("change",function(){return t.toggleForm()}),this.toggleForm()}return n(e,[{key:"toggleForm",value:function(){var e=l("#entity").find("option:selected"),t=parseInt(e.val()),i=e.text().toLowerCase();this.toggleEntityAlert(t),this.toggleFields(t,i),this.loadAvailableFields(t)}},{key:"toggleEntityAlert",value:function(e){var t=l(".js-entity-alert");[0,1].includes(e)?t.show():t.hide()}},{key:"toggleFields",value:function(e,t){var i=l(".js-truncate-form-group"),o=l(".js-match-ref-form-group"),n=l(".js-regenerate-form-group"),r=l(".js-force-ids-form-group"),a=l(".js-entity-name");8===e?i.hide():i.show(),[1,2].includes(e)?o.show():o.hide(),[0,1,5,6,8].includes(e)?n.show():n.hide(),[0,1,3,4,5,6,8,7].includes(e)?r.show():r.hide(),a.html(t)}},{key:"loadAvailableFields",value:function(e){var t=this,i=l(".js-available-fields");l.ajax({url:i.data("url"),data:{entity:e},dataType:"json"}).then(function(e){t._removeAvailableFields(i);for(var o=0;o<e.length;o++)t._appendAvailableField(i,e[o].label+(e[o].required?"*":""),e[o].description);i.find('[data-toggle="popover"]').popover()})}},{key:"_removeAvailableFields",value:function(e){e.find('[data-toggle="popover"]').popover("hide"),e.empty()}},{key:"_appendHelpBox",value:function(e,t){var i=l(".js-available-field-popover-template").clone();i.attr("data-content",t),i.removeClass("js-available-field-popover-template d-none"),e.append(i)}},{key:"_appendAvailableField",value:function(e,t,i){var o=l(".js-available-field-template").clone();o.text(t),i&&this._appendHelpBox(o,i),o.removeClass("js-available-field-template d-none"),o.appendTo(e)}}]),e}();t.a=r},319:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(250);(0,window.$)(function(){new o.a})}});