chrome.runtime.onInstalled.addListener(function() {
  // ローカルストレージに辞書型で色を保存
  // 拡張をオンでセット
  chrome.storage.sync.set({option: 'on'}, function() {
    console.log('fixer setup complete!');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, setting);
});

function setting(){
  // addRules 1arg, conditions(pageurl)-actions
  chrome.declarativeContent.onPageChanged.addRules(
    [{
      // settting only execute TUT host
      conditions: [new chrome.declarativeContent.PageStateMatcher(
                  {pageUrl: {hostEquals: 'service.cloud.teu.ac.jp'}})
      ],
      // setting action(page_action or browser_action?)
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]
  );
}