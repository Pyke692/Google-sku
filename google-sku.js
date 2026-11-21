/*
 * 修改 Google One 订阅 SKU 响应
 */
let url = $request.url;
if (url.indexOf("one.google.com/ai") !== -1) {
    let body = $response.body;
    if (body) {
        try {
            // 尝试解析 JSON，确认响应体格式是否正确
            let obj = JSON.parse(body);
            // 这里执行字符串替换，实际操作请根据真实响应结构调整
            let newBody = body.replace(/30tb\.ai\.pro\.m/g, "30tb.m")
                             .replace(/20tb\.m\.v2/g, "20tb.m");
            // 如果有必要，可以在这里直接修改 obj 中的 SKU 字段
            // 例如：obj.sku = "g1.20tb";
            // body = JSON.stringify(obj);
            
            $done({ body: newBody });
        } catch (e) {
            // 如果解析失败，直接返回原数据，避免影响请求
            console.log("JSON解析失败: " + e);
            $done({});
        }
    } else {
        $done({});
    }
} else {
    $done({});
}