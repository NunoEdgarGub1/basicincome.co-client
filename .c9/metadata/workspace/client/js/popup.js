{"filter":false,"title":"popup.js","tooltip":"/client/js/popup.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":3}},"text":"/**"},{"action":"insertText","range":{"start":{"row":0,"column":3},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":102,"column":0}},"lines":[" * POPUP"," *"," * The popup service is used to provide modals, alerts, and confirmation screens"," */","","var module = angular.module('popup', []);","","module.factory('rpPopup', ['$compile',","                           function ($compile)","{","  var popupService = {};","","  // Get the popup","  popupService.getPopup = function(create)","  {","    if (!popupService.popupElement && create)","    {","      popupService.popupElement = $( '<div class=\"modal fade\"></div>' );","      popupService.popupElement.appendTo( 'BODY' );","    }","","    return popupService.popupElement;","  };","","  popupService.compileAndRunPopup = function (popup, scope, options) {","    $compile(popup)(scope);","    popup.modal(options);","  };","","  popupService.blank = function(content,scope) {","    var popup = popupService.getPopup(true);","","    var html = '<div class=\"modal-dialog\"><div class=\"modal-content\">';","    html += content;","    html += '</div></div>';","","    popup.html(html);","","    popupService.compileAndRunPopup(popup, scope);","  };","","  popupService.confirm = function(title, actionText, actionButtonText, actionFunction, actionButtonCss, cancelButtonText, cancelFunction, cancelButtonCss, scope, options) {","    actionText = (actionText) ? actionText : \"Are you sure?\";","    actionButtonText = (actionButtonText) ? actionButtonText : \"Ok\";","    actionButtonCss = (actionButtonCss) ? actionButtonCss : \"btn btn-info\";","    cancelButtonText = (cancelButtonText) ? cancelButtonText : \"Cancel\";","    cancelButtonCss = (cancelButtonCss) ? cancelButtonCss : \"\";","","    var popup = popupService.getPopup(true);","    var confirmHTML = '<div class=\"modal-dialog\"><div class=\"modal-content\">';","","    if (title) {","      confirmHTML += \"<div class=\\\"modal-header\\\"><h1>\"+title+\"</h1></div>\";","    }","","    confirmHTML += \"<div class=\\\"modal-body\\\"><p class=\\\"question\\\">\"+actionText+\"</p>\"","        +    \"<p class=\\\"actions\\\">\";","","    if (cancelFunction) {","      confirmHTML += \"<a class=\\\"\" + cancelButtonCss + \" btn-cancel\\\" ng-click=\\\"\"+cancelFunction+\"\\\">\"+cancelButtonText+\"</a>\";","    }","    else {","      confirmHTML += \"<a class=\\\"\" + cancelButtonCss + \" btn-cancel\\\">\"+cancelButtonText+\"</a>\";","    }","","    if (actionFunction) {","      confirmHTML += \"<button class=\\\"\" + actionButtonCss + \" btn-cancel\\\" ng-click=\\\"\"+actionFunction+\"\\\">\"+actionButtonText+\"</button>\";","    }","    else {","      confirmHTML += \"<button class=\\\"\" + actionButtonCss + \" btn-cancel\\\">\"+actionButtonText+\"</button>\";","    }","","    confirmHTML += \"</p></div></div></div>\";","","    popup.html(confirmHTML);","","    if (!actionFunction) {","      popup.find(\".btn-primary\").click(function () {","        popupService.close();","      });","    }","","    if (!cancelFunction) {","      popup.find(\".btn-cancel\").click(function () {","        popupService.close();","      });","    }","","    popupService.compileAndRunPopup(popup, scope, options);","  };","","  popupService.close = function()","  {","    var popup = popupService.getPopup();","    if (popup) {","      popup.modal('hide');","    }","  };","","  return popupService;","}]);"]}]}]]},"ace":{"folds":[],"scrolltop":985.7777996063232,"scrollleft":0,"selection":{"start":{"row":102,"column":0},"end":{"row":102,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":67,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1416452006691,"hash":"a01232f477c69e2563ac8f7f429fa3516343b076"}