javascript:(function(d){
    console.clear();
    var copiedText = '-------------------------------------------------\n';
    
    let storeName = d.getElementById("cas4_ilecell").textContent;
    copiedText += '店舗名：' + storeName + '\n';
    
    let userName = d.getElementById("00N10000001k9KD_ileinner").textContent;
    copiedText += '連絡者：' + userName + '\n';
    
    let startDate = d.getElementById("00N10000001k8sp_ileinner").textContent;
    copiedText += '登録日：' + startDate + '\n';
    
    let endDate = d.getElementById("00N10000001lzW1_ileinner").textContent;
    
    let deviceName = d.getElementById("00N5F000006gjN2_ileinner").textContent;
    copiedText += '機器名：' + deviceName + '\n\n';
    
    let shortDescription = d.getElementById("00N10000001k8tE_ileinner").textContent;
    copiedText += '内　容\n' + shortDescription + '\n\n';
    
    let longDescription = d.getElementById("00N10000001k8t9_ileinner").textContent;
    copiedText += '状　況1\n' + longDescription + '\n\n';
    
    copiedText += '開始時刻　' + startDate + '\n終了時刻　' + endDate + '\n';
    
    var copyFrom = document.createElement("textarea");
    copyFrom.textContent = copiedText;
    var bodyElm = d.getElementsByTagName("body")[0];
    bodyElm.appendChild(copyFrom);
    copyFrom.select();
    d.execCommand('copy');
    bodyElm.removeChild(copyFrom);
    
    console.log(copiedText);
    alert(copiedText);
})(document);
